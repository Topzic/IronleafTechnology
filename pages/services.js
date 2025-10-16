import React from "react";
import { NextSeo } from 'next-seo';
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faCode,
  faRobot,
  faShoppingCart,
  faChartLine,
  faBullseye,
  faWrench,
  faServer,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const router = useRouter();
  const coreServices = [
    {
      title: "Web Design & UI/UX",
      description:
        "Create stunning, user-friendly websites that engage visitors and drive conversions. Our design process focuses on intuitive interfaces and exceptional user experiences.",
      icon: faPalette,
  link: "/contact",
    },
    {
      title: "Web Development",
      description:
        "Create professional, responsive websites that look great on all devices and provide an excellent user experience. From mobile-friendly designs to custom features, we build sites that engage your customers, improve accessibility, and drive business results.",
      icon: faCode,
  link: "/contact",
    },
    {
      title: "AI-Powered Solutions",
      description:
        "Leverage artificial intelligence to create smarter, more interactive websites. Enhance user engagement with AI-driven features and automation.",
      icon: faRobot,
  link: "/contact",
    },
    {
      title: "Mobile App Development",
      description:
        "Develop custom mobile apps for iOS and Android that provide seamless user experiences, increase customer engagement, and extend your business reach on mobile devices.",
      icon: faMobileAlt,
  link: "/contact",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Launch and optimize online stores with secure payment processing, inventory management, and seamless shopping experiences.",
      icon: faShoppingCart,
  link: "/contact",
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Improve your online visibility and drive targeted traffic to your website. Comprehensive SEO strategies and digital marketing solutions.",
      icon: faChartLine,
  link: "/contact",
    },
    {
      title: "Consulting & Strategy",
      description:
        "Strategic guidance to help your business succeed online. From project planning to technology recommendations, we provide expert advice.",
      icon: faBullseye,
  link: "/contact",
    },
    {
      title: "IT Support & Infrastructure",
      description:
        "Ensure your business technology works seamlessly with professional IT support and infrastructure services. We provide reliable server management, secure cloud storage, network configuration, and ongoing troubleshooting to keep your operations running smoothly and protect your data.",
      icon: faServer,
  link: "/contact",
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing website maintenance, security monitoring, and technical support to keep your site running smoothly and securely.",
      icon: faWrench,
  link: "/contact",
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
    router.push("/contact");
  };

  const handleScheduleConsultation = () => {
    ReactGA.event("services_schedule_consultation", {
      page_path: window.location.hash || "/",
    });
    router.push("/contact");
  };

  // Service schemas for structured data
  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Design & UI/UX",
      "description": "Create stunning, user-friendly websites that engage visitors and drive conversions. Our design process focuses on intuitive interfaces and exceptional user experiences.",
      "provider": {
        "@type": "Organization",
        "name": "Ironleaf Technology"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "serviceType": "Web Design",
      "url": "https://ironleaftechnology.com/services"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development",
      "description": "Create professional, responsive websites that look great on all devices and provide an excellent user experience. From mobile-friendly designs to custom features, we build sites that engage your customers, improve accessibility, and drive business results.",
      "provider": {
        "@type": "Organization",
        "name": "Ironleaf Technology"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "serviceType": "Web Development",
      "url": "https://ironleaftechnology.com/services"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI-Powered Solutions",
      "description": "Leverage artificial intelligence to create smarter, more interactive websites. Enhance user engagement with AI-driven features and automation.",
      "provider": {
        "@type": "Organization",
        "name": "Ironleaf Technology"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "serviceType": "AI Development",
      "url": "https://ironleaftechnology.com/services"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development",
      "description": "Develop custom mobile apps for iOS and Android that provide seamless user experiences, increase customer engagement, and extend your business reach on mobile devices.",
      "provider": {
        "@type": "Organization",
        "name": "Ironleaf Technology"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "serviceType": "Mobile Development",
      "url": "https://ironleaftechnology.com/services"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "E-Commerce Solutions",
      "description": "Launch and optimize online stores with secure payment processing, inventory management, and seamless shopping experiences.",
      "provider": {
        "@type": "Organization",
        "name": "Ironleaf Technology"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "serviceType": "E-Commerce",
      "url": "https://ironleaftechnology.com/services"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO & Digital Marketing",
      "description": "Improve your online visibility and drive targeted traffic to your website. Comprehensive SEO strategies and digital marketing solutions.",
      "provider": {
        "@type": "Organization",
        "name": "Ironleaf Technology"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "serviceType": "Digital Marketing",
      "url": "https://ironleaftechnology.com/services"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IT Support & Infrastructure",
      "description": "Ensure your business technology works seamlessly with professional IT support and infrastructure services. We provide reliable server management, secure cloud storage, network configuration, and ongoing troubleshooting.",
      "provider": {
        "@type": "Organization",
        "name": "Ironleaf Technology"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "serviceType": "IT Support",
      "url": "https://ironleaftechnology.com/services"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Maintenance & Support",
      "description": "Ongoing website maintenance, security monitoring, and technical support to keep your site running smoothly and securely.",
      "provider": {
        "@type": "Organization",
        "name": "Ironleaf Technology"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "serviceType": "Website Maintenance",
      "url": "https://ironleaftechnology.com/services"
    }
  ];

  // Breadcrumb schema for services page
  const breadcrumbSchema = {
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
        "name": "Services",
        "item": "https://ironleaftechnology.com/services"
      }
    ]
  };

  return (
    <div className="services-page">
      <NextSeo
        title="Web Development & Digital Services - Ironleaf Technology"
        description="Professional web development, design, and digital solutions. Next.js, React, AI-powered websites, mobile apps, e-commerce, and IT infrastructure support for businesses."
        canonical="https://ironleaftechnology.com/services"
        keywords="web development, website design, Next.js developer, React development, AI-powered websites, mobile app development, e-commerce solutions, IT support, custom web applications, SEO services"
        openGraph={{
          url: 'https://ironleaftechnology.com/services',
          title: 'Web Development & Digital Services - Ironleaf Technology',
          description: 'Complete digital solutions including web development, design, AI-powered websites, mobile apps, and IT infrastructure support.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-services.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Development Services',
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

      {/* Structured Data */}
      {serviceSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
          development, IT infrastructure, and digital services to help your business thrive in the
          digital world.
        </p>
      </section>

      {/* Core Services - Main Value Proposition */}
      <section className="core-services-section">
        <div className="core-services-container">
          <div className="services-intro">
            <h2>Our Services</h2>
            <p>
              We offer a complete range of digital and IT services to bring your vision
              to life. From website design and development to AI-powered
              solutions, IT infrastructure setup, and ongoing support, we're here to support your project
              every step of the way.
            </p>
          </div>

          <div className="services-grid">
            {coreServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: "white" }}>
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
          <a href="/faq" className="discounts-banner-link">
            View Special Discounts →
          </a>
        </div>
      </section> */}

      {/* Custom Solutions - For Unique Needs */}
      {/* <section className="custom-solution-section">
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
      </section> */}

      {/* Final Call to Action */}
      <section className="cta-section">
        <h2>Need a Custom Solution??</h2>
        <p>
          Can't find the perfect match among our packages? Many projects require
          unique approaches, and I'm here to craft the ideal solution just for
          you. Let's discuss your specific needs and build something tailored to
          your business goals.
        </p>
        <div className="cta-buttons">
          <button className="primary-cta" onClick={handleBookCall}>
            Schedule a Free Consultation
          </button>
          <button
            className="secondary-cta"
            onClick={() => (window.location.href = "/pricing")}
          >
            View Pricing
          </button>
        </div>
        {/* <p className="terms-link">
          By proceeding, you agree to our{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          .
        </p> */}
      </section>
    </div>
  );
};


