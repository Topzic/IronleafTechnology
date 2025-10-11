import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    goals: '',
    constraints: '',
    message: ''
  });

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
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
        <h1>Contact Us</h1>
        <p>Let's discuss how we can help your business grow</p>
      </section>

      <section className="contact-content">
        <div className="contact-form">
          <h2>Lead Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company/Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="goals">Project Goals</label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="constraints">Timeline/Budget Constraints</label>
              <textarea
                id="constraints"
                name="constraints"
                value={formData.constraints}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="message">Additional Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <h3>Contact Information</h3>
            <p><strong>Ian Cunningham</strong></p>
            <p>957 Webber Ave, Peterborough, ON</p>
            <p>(705) 768-2636</p>
            <p>Ian_Cunningham@live.com</p>
            <p>https://iancunningham.dev/</p>
          </div>

          <div className="booking-calendar">
            <h3>Book a Discovery Call</h3>
            <p>Schedule a free 30-minute consultation to discuss your project.</p>
            <div className="calendly-embed">
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/ian_cunningham/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '600px' }}
              ></div>
              {/* Calendly inline widget end */}
            </div>
          </div>

          <div className="map-embed">
            <h3>Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.123456789012!2d-78.319!3d44.309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDQuMzA5LC03OC4zMTk!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ironleaf Technology Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;