import React from "react";
import { Helmet } from "react-helmet-async";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faCode,
  faRobot,
  faStar,
  faShoppingCart,
  faChartLine,
  faBullseye,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const navigate = useNavigate();
  const coreServices = [
    {
      title: "Web Design & UI/UX",
      description:
        "Create stunning, user-friendly websites that engage visitors and drive conversions. Our design process focuses on intuitive interfaces and exceptional user experiences.",
      icon: faPalette,
      link: "#/contact",
    },
    {
      title: "Web Development",
      description:
        "Build robust, scalable websites using modern technologies. From responsive designs to custom functionality, we bring your vision to life with clean, efficient code.",
      icon: faCode,
      link: "#/contact",
    },
    {
      title: "AI-Powered Solutions",
      description:
        "Leverage artificial intelligence to create smarter, more interactive websites. Enhance user engagement with AI-driven features and automation.",
      icon: faRobot,
      link: "#/contact",
    },
    {
      title: "Branding & Logo Design",
      description:
        "Develop a strong brand identity that resonates with your audience. Professional logo design and branding services to help your business stand out.",
      icon: faStar,
      link: "#/contact",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Launch and optimize online stores with secure payment processing, inventory management, and seamless shopping experiences.",
      icon: faShoppingCart,
      link: "#/contact",
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Improve your online visibility and drive targeted traffic to your website. Comprehensive SEO strategies and digital marketing solutions.",
      icon: faChartLine,
      link: "#/contact",
    },
    {
      title: "Consulting & Strategy",
      description:
        "Strategic guidance to help your business succeed online. From project planning to technology recommendations, we provide expert advice.",
      icon: faBullseye,
      link: "#/contact",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing website maintenance, security monitoring, and technical support to keep your site running smoothly and securely.",
      icon: faWrench,
      link: "#/contact",
    },
  ];

  const addOns = [
    {
      name: "Care Plans",
      description: "Ongoing support and maintenance",
      options: [
        {
          name: "Basic Care",
          price: "$150/month",
          features: ["Monthly updates", "Security monitoring", "Basic support"],
        },
        {
          name: "Premium Care",
          price: "$300/month",
          features: [
            "Everything in Basic",
            "Priority support",
            "Performance optimization",
            "Content updates",
          ],
        },
      ],
    },
    {
      name: "Support Retainers",
      description: "Direct priority access to the owner",
      options: [
        {
          name: "5 Hours/Month",
          price: "$375/month",
          features: [
            "Priority response",
            "Dedicated support channel",
            "Quarterly reviews",
          ],
        },
        {
          name: "10 Hours/Month",
          price: "$700/month",
          features: [
            "Everything in 5 Hours",
            "Emergency support",
            "Monthly strategy calls",
          ],
        },
      ],
    },
  ];

  const handleBookCall = () => {
    ReactGA.event("services_book_call", {
      page_path: window.location.hash || "/",
    });
    navigate("/contact");
  };

  const handleScheduleConsultation = () => {
    ReactGA.event("services_schedule_consultation", {
      page_path: window.location.hash || "/",
    });
    navigate("/contact");
  };

  return (
    <div className="services-page">
      <Helmet>
        <title>
          Services - Ironleaf Technology | Web Design, Development & IT
          Solutions
        </title>
        <meta
          name="description"
          content="Comprehensive web design, development, and IT services from Ironleaf Technology. From AI-powered websites to branding and ongoing support, we deliver exceptional digital solutions."
        />
        <meta
          name="keywords"
          content="web design Peterborough, web development Ontario, UI/UX design services, AI-powered websites, branding agency Peterborough, logo design Ontario, SEO optimization Kawartha Lakes, e-commerce development, IT support services, website maintenance Peterborough, responsive web design, custom website development, mobile app development, digital marketing Ontario, content management systems, website hosting Peterborough, domain registration Ontario, SSL certificates, website security, performance optimization, user experience design, graphic design services, brand identity Peterborough, social media integration, email marketing setup, website analytics, conversion optimization, custom web applications, API development, database design, cloud hosting solutions, website migration services"
        />
      </Helmet>

      <section className="services-hero">
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
        <h1>Complete Digital Solutions</h1>
        <p>
          From concept to launch, we provide comprehensive web design,
          development, and IT services to help your business thrive in the
          digital world.
        </p>
      </section>

      {/* Core Services - Main Value Proposition */}
      <section className="core-services-section">
        <div className="core-services-container">
          <div className="services-intro">
            <h2>Our Services</h2>
            <p>
              We offer a complete range of digital services to bring your vision
              to life. From website design and development to AI-powered
              solutions and ongoing support, we're here to support your project
              every step of the way.
            </p>
          </div>

          <div className="services-grid">
            {coreServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={service.link} className="service-link">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons - Additional Services */}
      <section className="add-ons-section">
        <h2>Additional Services & Support</h2>
        <p>
          Enhance your solution with ongoing support and additional features.
          These add-on services provide flexible, à la carte support options for
          businesses that need ongoing maintenance and priority assistance.
        </p>

        <div className="add-ons-grid">
          {addOns.map((addOn, index) => (
            <div key={index} className="add-on-card">
              <h3>{addOn.name}</h3>
              <p>{addOn.description}</p>

              <div className="add-on-options">
                {addOn.options.map((option, optIndex) => (
                  <div key={optIndex} className="option">
                    <div className="option-header">
                      <h4>{option.name}</h4>
                      <span className="option-price">{option.price}</span>
                    </div>
                    <ul>
                      {option.features.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Discounts - Promotional Element */}
      {/* <section className="special-discounts-banner">
        <div className="discounts-banner-container">
          <h3>Special Discounts Available</h3>
          <p>
            Check out our special pricing for veterans, nonprofits, and local
            businesses.
          </p>
          <a href="#/faq" className="discounts-banner-link">
            View Special Discounts →
          </a>
        </div>
      </section> */}

      {/* Custom Solutions - For Unique Needs */}
      <section className="custom-solution-section">
        <h2>Need a Custom Solution?</h2>
        <p>
          Can't find the perfect match among our packages? Many projects require
          unique approaches, and I'm here to craft the ideal solution just for
          you. Let's discuss your specific needs and build something tailored to
          your business goals.
        </p>
        <button className="primary-cta" onClick={handleScheduleConsultation}>
          Schedule a Free Consultation
        </button>
        <p className="no-commitment">No obligation required.</p>
      </section>

      {/* Final Call to Action */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Let's discuss your project and find the perfect solution for your
          business.
        </p>
        <div className="cta-buttons">
          <button className="primary-cta" onClick={handleBookCall}>
            Book a Discovery Call
          </button>
          <button
            className="secondary-cta"
            onClick={() => (window.location.href = "#/pricing")}
          >
            View Pricing
          </button>
        </div>
        <p className="terms-link">
          By proceeding, you agree to our{" "}
          <a href="#/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Services;
