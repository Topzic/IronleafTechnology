import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga4";
import "./Contact.css";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    goals: "",
    constraints: "",
    message: "",
  });
  const [formStarted, setFormStarted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({
      ...formData,
      phone: formatted,
    });
  };

  const showHint = (hintText) => {
    alert(hintText);
  };

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (formStarted && !formSubmitted) {
        ReactGA.event("contact_form_abandon", {
          page_path: window.location.hash || "/",
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formStarted, formSubmitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: formData,
        }
      );
      if (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again.");
      } else {
        console.log("Form submitted successfully:", data);
        alert("Thank you! Your message has been sent.");
        setFormSubmitted(true);
        ReactGA.event("contact_form_submit", {
          page_path: window.location.hash || "/",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          goals: "",
          constraints: "",
          message: "",
        });
        setFormStarted(false);
        setFormSubmitted(false);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - Ironleaf Technology | Get in Touch</title>
        <meta
          name="description"
          content="Contact Ironleaf Technology for IT solutions in Peterborough, Ontario. Reach out for web development, mobile app development, IT infrastructure support, and custom software services."
        />
        <meta
          name="keywords"
          content="contact Ironleaf Technology, IT support Peterborough, web development contact Ontario, mobile app development inquiry, IT infrastructure help, custom software inquiry, get quote Peterborough, IT services contact Ontario, web design consultation, server management contact, cloud storage setup, network configuration inquiry, data analytics contact, software development quote, website development Peterborough, IT support phone number, email Ironleaf Technology, business address Peterborough, Ontario IT company contact, veteran-owned IT contact, free consultation Peterborough, IT assessment Ontario, technology consultation Kawartha Lakes, web development meeting, mobile app project inquiry, custom software project inquiry, IT support request Peterborough"
        />
      </Helmet>
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
              <label htmlFor="name">
                Name *{" "}
                <span
                  className="hint-icon"
                  title="Please enter your full name as it appears on official documents"
                  onClick={() =>
                    showHint(
                      "Please enter your full name as it appears on official documents"
                    )
                  }
                >
                  ?
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => {
                  if (!formStarted) {
                    ReactGA.event("contact_form_start", {
                      page_path: window.location.hash || "/",
                    });
                    setFormStarted(true);
                  }
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email *{" "}
                <span
                  className="hint-icon"
                  title="Please provide a valid email address where we can reach you for project updates and communications"
                  onClick={() =>
                    showHint(
                      "Please provide a valid email address where we can reach you for project updates and communications"
                    )
                  }
                >
                  ?
                </span>
              </label>
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
              <label htmlFor="phone">
                Phone{" "}
                <span
                  className="hint-icon"
                  title="Please enter your phone number - it will automatically format as you type (e.g., (705) 123-4567)"
                  onClick={() =>
                    showHint(
                      "Please enter your phone number - it will automatically format as you type (e.g., (705) 123-4567)"
                    )
                  }
                >
                  ?
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">
                Company/Organization{" "}
                <span
                  className="hint-icon"
                  title="Please enter your company or organization name, or 'Individual' if this is a personal project"
                  onClick={() =>
                    showHint(
                      "Please enter your company or organization name, or 'Individual' if this is a personal project"
                    )
                  }
                >
                  ?
                </span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="goals">
                Project Goals{" "}
                <span
                  className="hint-icon"
                  title="Please describe your project objectives, target audience, key features, and any specific requirements"
                  onClick={() =>
                    showHint(
                      "Please describe your project objectives, target audience, key features, and any specific requirements"
                    )
                  }
                >
                  ?
                </span>
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="constraints">
                Timeline/Budget Constraints{" "}
                <span
                  className="hint-icon"
                  title="Please share your preferred timeline for completion and any budget considerations or limitations"
                  onClick={() =>
                    showHint(
                      "Please share your preferred timeline for completion and any budget considerations or limitations"
                    )
                  }
                >
                  ?
                </span>
              </label>
              <textarea
                id="constraints"
                name="constraints"
                value={formData.constraints}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Additional Message{" "}
                <span
                  className="hint-icon"
                  title="Any other details, questions, or specific requirements you'd like to share about your project"
                  onClick={() =>
                    showHint(
                      "Any other details, questions, or specific requirements you'd like to share about your project"
                    )
                  }
                >
                  ?
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <h3>Contact Information</h3>
            <p>
              <strong>Ian Cunningham</strong>
            </p>
            <p>(705) 768-2636</p>
            <p>support@ironleaftechnology.com</p>
            <p>https://iancunningham.dev/</p>
          </div>

          <div className="booking-calendar">
            <h3>Book a Discovery Call</h3>
            <p>
              Schedule a free 30-minute consultation to discuss your project.
            </p>
            <div className="calendly-embed">
              {/* Calendly inline widget begin */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ian_cunningham/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "600px" }}
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
