import React from 'react';

export default function Terms() {
  return (
    <div className="terms-page">
      {/* Breadcrumb Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ironleaftechnology.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Terms of Service",
              "item": "https://ironleaftechnology.com/terms"
            }
          ]
        })
      }} />

      <section className="hero-section">
        <div className="animated-circles">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5"></span>
          <span className="circle circle6"></span>
          <span className="circle circle7"></span>
          <span className="circle circle8"></span>
          <span className="circle circle9"></span>
          <span className="circle circle10"></span>
          <span className="circle circle11"></span>
          <span className="circle circle12"></span>
        </div>
        <h1>Terms of Service</h1>
        <p>Important information about our services and agreements.</p>
      </section>

      <section className="terms-content">
        <div className="container">
          <h2>1. Introduction</h2>
          <p>Welcome to Ironleaf Technology. These Terms of Service ("Terms") govern your use of our website development, optimization, and consulting services. By engaging our services, you agree to these Terms.</p>

          <h2>2. Services</h2>
          <p>We provide web development, mobile app development, IT infrastructure support, website audits, and ongoing support services. One-time setup fees cover complete implementation, testing, training, and initial support. Monthly care plans provide ongoing maintenance, updates, and support services.</p>

          <h2>3. Pricing and Billing</h2>
          <p>Prices are as quoted on our website and are subject to change. One-time payments are due upon project completion. Monthly subscriptions are billed in advance and auto-renew unless canceled. All fees are non-refundable once services are delivered.</p>

          <h2>4. Payment Terms</h2>
          <p>Payment is due within 30 days of invoice. Late payments may incur fees. We accept major credit cards, bank transfers, and approved payment methods.</p>

          <h2>5. Project Timeline and Delivery</h2>
          <p>Project timelines are estimates. Delays due to client feedback or third-party issues may extend timelines. We will communicate any changes promptly.</p>

          <h2>6. Client Responsibilities</h2>
          <p>Clients must provide timely feedback, access to necessary systems, and required content. Delays in client response may affect project timelines.</p>

          <h2>7. Intellectual Property</h2>
          <p>Upon full payment, clients receive ownership of custom-developed content. We retain rights to our proprietary tools, templates, and methodologies. Third-party components remain subject to their licenses.</p>

          <h2>8. Confidentiality</h2>
          <p>Both parties agree to maintain confidentiality of proprietary information shared during the engagement.</p>

          <h2>9. Warranties and Disclaimers</h2>
          <p>We warrant that services will be performed professionally. However, we disclaim warranties for third-party services, uninterrupted operation, or specific results. Services are provided "as is."</p>

          <h2>10. Limitation of Liability</h2>
          <p>Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages, including lost profits or data loss.</p>

          <h2>11. Termination</h2>
          <p>Either party may terminate services with 30 days' notice. Upon termination, client remains responsible for fees for work completed. We may terminate immediately for breach of terms.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms are governed by the laws of Ontario, Canada. Any disputes will be resolved in Ontario courts.</p>

          <h2>13. Privacy Policy</h2>
          <p>We collect personal information only as necessary for service delivery. We do not sell or share data without consent, except as required by law.</p>

          <h2>14. Amendments</h2>
          <p>We may update these Terms at any time. Continued use of services constitutes acceptance of changes.</p>

          <h2>15. Contact Information</h2>
          <p>For questions about these Terms, contact me at support@ironleaftechnology.com or (705) 768-2636.</p>

          <p><strong>Last updated: October 12, 2025</strong></p>
        </div>
      </section>
    </div>
  );
};

