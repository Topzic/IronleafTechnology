// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

console.log("Contact form submission handler")

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders })
  }

  try {
    const formData = await req.json()

    // Format the email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
    .header h2 { margin: 0; color: #2c3e50; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #34495e; }
    .field-value { margin-left: 10px; }
  </style>
</head>
<body>
  <div class="header">
    <h2>New Lead Form Submission</h2>
    <p>A new contact form has been submitted. Here are the details:</p>
  </div>
  
  <div class="field">
    <span class="field-label">Name:</span>
    <span class="field-value">${formData.name}</span>
  </div>
  
  <div class="field">
    <span class="field-label">Email:</span>
    <span class="field-value">${formData.email}</span>
  </div>
  
  <div class="field">
    <span class="field-label">Phone:</span>
    <span class="field-value">${formData.phone || 'Not provided'}</span>
  </div>
  
  <div class="field">
    <span class="field-label">Company:</span>
    <span class="field-value">${formData.company || 'Not provided'}</span>
  </div>
  
  <div class="field">
    <span class="field-label">Project Type:</span>
    <span class="field-value">${formData.projectType || 'Not provided'}</span>
  </div>
  
  <div class="field">
    <span class="field-label">Budget:</span>
    <span class="field-value">${formData.budget || 'Not provided'}</span>
  </div>
  
  <div class="field">
    <span class="field-label">Timeline:</span>
    <span class="field-value">${formData.timeline || 'Not provided'}</span>
  </div>
  
  <div class="field">
    <span class="field-label">Goals:</span>
    <span class="field-value">${formData.goals || 'Not provided'}</span>
  </div>
  
  <div class="field">
    <span class="field-label">Message:</span>
    <span class="field-value">${formData.message || 'Not provided'}</span>
  </div>
</body>
</html>
    `.trim()

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not set')
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@ironleaftechnology.com', // Replace with your verified domain
        to: 'support@ironleaftechnology.com',
        subject: 'New Lead Form Submission',
        html: emailContent,
      }),
    })

    if (!resendResponse.ok) {
      throw new Error(`Resend API error: ${resendResponse.statusText}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { headers: { "Content-Type": "application/json", ...corsHeaders } },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email' }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    )
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-contact-email' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
