import React, { useState, useEffect } from "react";
import { NextSeo } from 'next-seo';
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faCheckCircle,
  faStar,
  faShieldAlt,
  faRocket,
  faUsers,
  faAward,
  faCalendarAlt,
  faQuoteLeft,
  faArrowRight,
  faGlobe,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [supabase, setSupabase] = useState(null);

  useEffect(() => {
    import("../utils/supabase").then(({ supabase }) => {
      setSupabase(supabase);
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    goals: "",
    message: "",
  });
  const [formStarted, setFormStarted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
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
    if (!supabase) {
      alert("Service unavailable. Please try again later.");
      return;
    }
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
        alert("Thank you! Your message has been sent. I'll get back to you within 24 hours.");
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
          projectType: "",
          budget: "",
          timeline: "",
          goals: "",
          message: "",
        });
        setFormStarted(false);
        setFormSubmitted(false);
        setCurrentStep(1);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Local Restaurant Owner",
      text: "Ian transformed our outdated website into a modern platform that increased our online orders by 300%. His attention to detail and understanding of local business needs is unmatched.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      company: "Manufacturing Company",
      text: "The custom inventory system Ian built saved us 20 hours per week and eliminated costly errors. His veteran discipline and technical expertise delivered exactly what we needed.",
      rating: 5,
    },
    {
      name: "Dr. Emily Rodriguez",
      company: "Healthcare Practice",
      text: "Our new patient portal has streamlined operations and improved patient satisfaction. Ian's HIPAA-compliant solution exceeded our expectations in both functionality and security.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "2-4", label: "Week Delivery" },
    { number: "24/7", label: "Support Available" },
  ];

  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "Most projects begin within 1-2 weeks of contract signing. For urgent needs, I can often start immediately with my rapid deployment process.",
    },
    {
      question: "Do you work with clients outside Peterborough?",
      answer: "Absolutely! While I'm based in Peterborough, I serve clients across Canada and internationally. All work is done remotely with regular video calls and updates.",
    },
    {
      question: "What's your typical project timeline?",
      answer: "Website projects: 2-4 weeks. Mobile apps: 6-8 weeks. Custom software: 8-12 weeks. Complex enterprise solutions: 3-6 months. I provide detailed timelines during consultation.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! All projects include 3 months of free support. I also offer ongoing maintenance packages starting at $150/month for websites and $300/month for applications.",
    },
    {
      question: "What's your payment structure?",
      answer: "I offer flexible payment terms: 50% upfront, 50% upon completion for small projects. Larger projects use milestone-based payments. No hidden fees or surprise charges.",
    },
    {
      question: "Can you work with my existing website/design?",
      answer: "Definitely! I can redesign, migrate, or enhance existing websites. I'll assess your current setup and provide recommendations for improvement.",
    },
  ];

  return (
    <div className="contact-page">
      <NextSeo
        title="Contact Ironleaf Technology - Web Development Services"
        description="Get in touch with Ironleaf Technology for professional web development services. Schedule a free consultation for your website, mobile app, or digital project."
        canonical="https://ironleaftechnology.com/contact"
        keywords="contact Ironleaf Technology, web development, free consultation, website development quote, mobile app development inquiry, custom software contact, project inquiry, web design consultation"
        openGraph={{
          url: 'https://ironleaftechnology.com/contact',
          title: 'Contact Ironleaf Technology - Web Development Services',
          description: 'Schedule a free consultation for web development, mobile apps, and digital solutions. Veteran-owned business with 10+ years experience.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-contact.jpg',
              width: 1200,
              height: 630,
              alt: 'Contact Ironleaf Technology - Web Development Services',
            },
          ],
          siteName: 'Ironleaf Technology',
        }}
        twitter={{
          handle: '@ironleafprod',
          site: '@ironleafprod',
          cardType: 'summary_large_image',
        }}
      />

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
              "name": "Contact",
              "item": "https://ironleaftechnology.com/contact"
            }
          ]
        })
      }} />
      <section className="contact-hero">
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

        <div className="hero-content">
          {/* <div className="hero-badge">
            <FontAwesomeIcon icon={faShieldAlt} />
            <span>Veteran-Owned & Operated</span>
          </div> */}

          <h1>Ready to Transform Your Business?</h1>
          <p className="hero-subtitle">
            Get a <strong>free 30-minute consultation</strong> and discover how I can help you grow with professional web development, mobile apps, and digital solutions.
          </p>

          {/* <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div> */}

          <div className="hero-ctas">
            <button
              className="primary-cta"
              onClick={() => document.getElementById('consultation-booking').scrollIntoView({ behavior: 'smooth' })}
            >
              <FontAwesomeIcon icon={faCalendarAlt} />
              Book Free Consultation
            </button>
            <button
              className="secondary-cta"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Custom Quote
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="trust-indicators">
            <div className="trust-item">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>No Obligation</span>
            </div>
            <div className="trust-item">
              <FontAwesomeIcon icon={faClock} />
              <span>Response Within 12 Hours</span>
            </div>
            <div className="trust-item">
              <FontAwesomeIcon icon={faHandshake} />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact-form-section">
        <div className="container">
          <div className="form-header">
            <h2>Get Your Custom Project Quote</h2>
            <p>Tell me about your project and I'll provide a detailed proposal within 24 hours.</p>

            <div className="form-progress">
              <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
                <span className="step-number">1</span>
                <span className="step-label">Contact Info</span>
              </div>
              <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
                <span className="step-number">2</span>
                <span className="step-label">Project Details</span>
              </div>
              <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
                <span className="step-number">3</span>
                <span className="step-label">Requirements</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {currentStep === 1 && (
              <div className="form-step">
                <h3>Contact Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="(705) 123-4567"
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
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <button type="button" className="next-btn" onClick={handleNextStep}>
                  Next Step
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-step">
                <h3>Project Details</h3>
                <div className="form-group">
                  <label htmlFor="projectType">What type of project are you interested in? *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="website">New Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="web-app">Web Application</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="consultation">Consultation Only</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Preferred Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                <div className="form-navigation">
                  <button type="button" className="prev-btn" onClick={handlePrevStep}>
                    Previous
                  </button>
                  <button type="button" className="next-btn" onClick={handleNextStep}>
                    Next Step
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="form-step">
                <h3>Project Requirements</h3>
                <div className="form-group">
                  <label htmlFor="goals">Project Goals & Objectives *</label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows="4"
                    required
                    placeholder="Describe your project goals, target audience, key features, and what success looks like for you..."
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any other requirements, questions, or specific concerns you'd like to address..."
                  ></textarea>
                </div>
                <div className="form-navigation">
                  <button type="button" className="prev-btn" onClick={handlePrevStep}>
                    Previous
                  </button>
                  <button type="submit" className="submit-btn">
                    Get My Custom Quote
                    <FontAwesomeIcon icon={faRocket} />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <section id="consultation-booking" className="consultation-section">
        <div className="container">
          <div className="consultation-content">
            <div className="consultation-info">
              <h2>Free 30-Minute Consultation</h2>
              <p>
                Let's discuss your project and explore how I can help you achieve your business goals.
                This is a no-obligation conversation where I'll:
              </p>
              <ul className="consultation-benefits">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Assess your current situation</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Discuss your goals and challenges</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Provide initial recommendations</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Answer your questions</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Create a custom action plan</li>
              </ul>
              <div className="consultation-urgency">
                <div className="urgency-badge">
                  <FontAwesomeIcon icon={faClock} />
                  <span>Limited spots available this week</span>
                </div>
              </div>
            </div>
            <div className="calendly-container">
              <div className="calendly-embed">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/ian_cunningham/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "600px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary>
                  <span className="faq-question">{faq.question}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="faq-arrow" />
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods">
        <div className="container">
          <h2>Multiple Ways to Connect</h2>
          <div className="contact-methods-grid">
            <div className="contact-method">
              <div className="method-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3>Phone Call</h3>
              <p>Direct conversation for immediate questions</p>
              <a href="tel:+17057682636" className="method-link">
                (705) 768-2636
              </a>
            </div>
            <div className="contact-method">
              <div className="method-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>Email</h3>
              <p>Detailed project discussions and documentation</p>
              <a href="mailto:support@ironleaftechnology.com" className="method-link">
                support@ironleaftechnology.com
              </a>
            </div>
            <div className="contact-method">
              <div className="method-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <h3>Schedule Consultation</h3>
              <p>Free 30-minute discovery call</p>
              <button
                className="method-link"
                onClick={() => document.getElementById('consultation-booking').scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
              </button>
            </div>
            {/* <div className="contact-method">
              <div className="method-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3>Live Chat</h3>
              <p>Quick questions and instant responses</p>
              <span className="method-link coming-soon">Coming Soon</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="final-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Don't let outdated technology hold your business back. Contact us today and take the first step toward digital transformation.</p>
          <div className="final-cta-buttons">
            <button
              className="primary-cta"
              onClick={() => document.getElementById('consultation-booking').scrollIntoView({ behavior: 'smooth' })}
            >
              <FontAwesomeIcon icon={faCalendarAlt} />
              Book Free Consultation
            </button>
            <button
              className="secondary-cta"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Custom Quote
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="final-trust">
            <div className="trust-item">
              <FontAwesomeIcon icon={faShieldAlt} />
              <span>Veteran-Owned Business</span>
            </div>
            <div className="trust-item">
              <FontAwesomeIcon icon={faAward} />
              <span>10+ Years Experience</span>
            </div>
            <div className="trust-item">
              <FontAwesomeIcon icon={faUsers} />
              <span>50+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section> */}


    </div>
  );
};
