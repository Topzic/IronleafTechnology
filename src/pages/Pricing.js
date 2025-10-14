import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Pricing.css";

const Pricing = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("one-time");

  const packages = [
    {
      name: "Hourly Development Services",
      description:
        "Flexible hourly development and consulting services for custom projects, maintenance, and ongoing support.",
      price: billingCycle === "one-time" ? 75 : 0,
      originalPrice: billingCycle === "one-time" ? null : 100,
      features: [
        "Custom development work",
        "Technical consulting",
        "Website maintenance",
        "Priority support",
        "Flexible scheduling",
        "Billed at $75 per hour",
      ],
      popular: false,
      category: "optimization",
      icon: "fa-solid fa-hourglass",
    },
    {
      name: "Website Optimization Tune-Up",
      description:
        billingCycle === "one-time"
          ? "Comprehensive website audit and optimization to boost performance, security, and SEO"
          : "Ongoing website optimization and maintenance services",
      price: billingCycle === "one-time" ? 500 : 50,
      originalPrice: billingCycle === "one-time" ? null : 75,
      features: [
        "Full SEO audit and recommendations",
        "Security vulnerability assessment",
        "Performance optimization",
        "Mobile responsiveness check",
        "Content and usability review",
        "Actionable improvement report",
      ],
      popular: false,
      category: "optimization",
      icon: "fas fa-cogs",
    },
    {
      name: "Standard",
      description:
        billingCycle === "one-time"
          ? "Simple, effective single-page website for businesses needing a strong online presence"
          : "Ongoing maintenance and support for single-page websites",
      price: billingCycle === "one-time" ? "500-1500" : 100,
      originalPrice: billingCycle === "one-time" ? null : 125,
      features: [
        "Responsive design for all devices",
        "Single-page layout with sections",
        "Contact form integration",
        "Basic SEO setup",
        "1 year hosting & support",
      ],
      popular: false,
      category: "web",
      icon: "fas fa-file-alt",
    },
    {
      name: "Premium",
      description:
        billingCycle === "one-time"
          ? "Perfect for small businesses launching their first professional website"
          : "Ongoing maintenance and support for starter websites",
      price: billingCycle === "one-time" ? "1500-2500" : 150,
      originalPrice: billingCycle === "one-time" ? null : 200,
      features: [
        "Responsive design for all devices",
        "Up to 5 pages",
        "Contact form integration",
        "Basic SEO setup",
        "1 year hosting & support",
      ],
      popular: true,
      category: "web",
      icon: "fas fa-crown",
    },
    {
      name: "Advanced",
      description:
        billingCycle === "one-time"
          ? "Advanced solutions for growing businesses with complex needs"
          : "Ongoing maintenance and support for advanced websites",
      price: billingCycle === "one-time" ? "5000-7500" : 400,
      originalPrice: billingCycle === "one-time" ? null : 500,
      features: [
        "Everything in Premium, plus:",
        "E-commerce integration",
        "CMS for content management",
        "Advanced SEO & analytics",
        "Custom functionality",
        "2 years hosting & priority support",
      ],
      popular: false,
      category: "web",
      icon: "fas fa-chart-line",
    },
    {
      name: "Enterprise",
      description:
        billingCycle === "one-time"
          ? "Full-scale solutions for established businesses and organizations"
          : "Ongoing maintenance and support for enterprise websites",
      price: billingCycle === "one-time" ? "8000-15000" : 750,
      originalPrice: billingCycle === "one-time" ? null : 1000,
      features: [
        "Everything in Advanced, plus:",
        "Multi-vendor marketplace",
        "Advanced integrations",
        "Performance optimization",
        "White-label solutions",
        "3 years hosting & dedicated support",
      ],
      popular: false,
      category: "web",
      icon: "fa-solid fa-globe",
    },
    {
      name: "Microsoft 365 Optimization",
      description:
        billingCycle === "one-time"
          ? "Streamline your business processes with Power Platform tools"
          : "Ongoing Microsoft 365 optimization and support services",
      price: billingCycle === "one-time" ? 3000 : 200,
      originalPrice: billingCycle === "one-time" ? null : 250,
      features: [
        "Complete M365 audit & setup",
        "Custom Power Apps development",
        "Workflow automation",
        "Data integration solutions",
        "Training & documentation",
      ],
      popular: false,
      category: "optimization",
      icon: "fa-solid fa-gauge-simple-high",
    },
    // {
    //   name: 'Security Camera Bronze',
    //   description: 'Essential surveillance for small businesses and homes',
    // {
    //   name: 'Security Camera Bronze',
    //   description: 'Essential surveillance for small businesses and homes',
    //   price: billingCycle === 'one-time' ? 2000 : 100,
    //   originalPrice: billingCycle === 'one-time' ? null : 125,
    //   features: [
    //     '4 high-definition cameras',
    //     'Cloud storage (30 days)',
    //     'Mobile app access',
    //     'Motion detection alerts',
    //     'Professional installation'
    //   ],
    //   popular: false,
    //   category: 'security'
    // },
    // {
    //   name: 'Security Camera Silver',
    //   description: 'Advanced security with AI features and extended monitoring',
    //   price: billingCycle === 'one-time' ? 4500 : 225,
    //   originalPrice: billingCycle === 'one-time' ? null : 300,
    //   features: [
    //     'Everything in Bronze, plus:',
    //     '8 cameras with AI detection',
    //     '90-day cloud storage',
    //     'Advanced analytics',
    //     '24/7 monitoring option',
    //     'Smart home integration'
    //   ],
    //   popular: false,
    //   category: 'security'
    // },
    // {
    //   name: 'Power BI Analytics Starter',
    //   description: 'Transform your data into actionable business insights',
    //   price: billingCycle === 'one-time' ? 3000 : 200,
    //   originalPrice: billingCycle === 'one-time' ? null : 250,
    //   features: [
    //     'Data source integration',
    //     'Custom dashboard design',
    //     'Basic reporting templates',
    //     'Training session included',
    //     '3 months support'
    //   ],
    //   popular: false,
    //   category: 'analytics'
    // }
  ];

  const filteredPackages = packages.filter((pkg) => {
    if (billingCycle === "one-time") return true;
    return pkg.name !== "Hourly Development Services";
  });

  const handleBookCall = () => {
    // eslint-disable-next-line no-undef
    gtag("event", "click", {
      event_category: "engagement",
      event_label: "book_call_pricing",
    });
    navigate("/contact");
  };

  return (
    <div className="pricing-page">
      <Helmet>
        <title>Pricing - Ironleaf Technology | IT Services Packages</title>
        <meta
          name="description"
          content="Explore Ironleaf Technology's pricing for IT services including web development, Microsoft 365, Power BI, and custom software solutions in Peterborough, Ontario."
        />
        <meta
          name="keywords"
          content="IT pricing Peterborough, web development costs Ontario, Microsoft 365 pricing, Power BI analytics pricing, custom software pricing, website development quotes, IT service rates Peterborough, affordable web design Ontario, Microsoft 365 setup costs, Power Platform development pricing, data analytics pricing, custom software development costs, website maintenance pricing, IT support packages, monthly IT services pricing, one-time setup fees, web development packages, Microsoft 365 migration costs, Power BI consulting rates, software development pricing, IT budget planning, cost-effective web development, peterborough web design pricing, ontario it service costs, veteran-owned pricing, transparent IT pricing, web development quotes Peterborough, affordable IT services Ontario"
        />
      </Helmet>
      <section className="pricing-hero">
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
        <h1>Services & Pricing</h1>
        <p>
          Comprehensive technology solutions with transparent pricing for your
          business needs. All prices are starting points—contact us for a custom
          quote tailored to your project.
        </p>

        <div className="billing-toggle">
          <button
            onClick={() => setBillingCycle("one-time")}
            className={billingCycle === "one-time" ? "active" : ""}
          >
            One-Time Setup
          </button>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={billingCycle === "monthly" ? "active" : ""}
          >
            Monthly Care Plans
          </button>
        </div>

        <div className="pricing-highlights">
          <div className="highlight">
            <span className="icon">
              <i className="fas fa-shield-alt"></i>
            </span>
            <span>Veteran-Owned & Operated</span>
          </div>
          <div className="highlight">
            <span className="icon">
              <i className="fas fa-star"></i>
            </span>
            <span>Committed to Your Success</span>
          </div>
          <div className="highlight">
            <span className="icon">
              <i className="fas fa-bullseye"></i>
            </span>
            <span>Local Peterborough Service</span>
          </div>
        </div>
      </section>

      <section className="service-explanation">
        <div className="container">
          <p>
            One-time setup fees cover complete implementation, testing,
            training, and initial support. Monthly care plans provide ongoing
            maintenance, updates, and support services.
          </p>
        </div>
      </section>

      <section className="pricing-cards">
        <h2>Web Development Packages (2 revisions included)</h2>
        <div className="web-packages">
          {filteredPackages
            .filter((pkg) => pkg.category === "web")
            .map((pkg, index) => (
              <div
                key={index}
                className={`pricing-card ${pkg.popular ? "popular" : ""} ${
                  pkg.name === "Enterprise"
                    ? "enterprise"
                    : `color-${index % 3}`
                }`}
              >
                {pkg.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="card-top">
                  {/* <i className={`${pkg.icon} card-icon`}></i> */}
                  <h3 className="plan-name">{pkg.name}</h3>
                  <div className="price-block">
                    <span className="currency">$</span>
                    {typeof pkg.price === "number"
                      ? pkg.price.toLocaleString()
                      : pkg.price}
                    <span className="period">
                      {pkg.name === "Hourly Development Services"
                        ? "/hour"
                        : billingCycle === "one-time"
                        ? ""
                        : "/month"}
                    </span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="original-price">
                      Originally ${pkg.originalPrice}/month
                    </div>
                  )}
                  <p className="card-description">{pkg.description}</p>
                </div>

                <div className="card-bottom">
                  <ul className="features-list">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <span className="checkmark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="cta-button" onClick={handleBookCall}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="pricing-cards">
        <h2>Optimization Services</h2>
        <div className="optimization-packages">
          {filteredPackages
            .filter((pkg) => pkg.category === "optimization")
            .map((pkg, index) => (
              <div
                key={index}
                className={`pricing-card ${pkg.popular ? "popular" : ""} ${
                  pkg.name === "Enterprise" ? "color-3" : `color-${index % 3}`
                }`}
              >
                {pkg.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="card-top">
                  {/* <i className={`${pkg.icon} card-icon`}></i> */}
                  <h3 className="plan-name">{pkg.name}</h3>
                  <div className="price-block">
                    <span className="currency">$</span>
                    {typeof pkg.price === "number"
                      ? pkg.price.toLocaleString()
                      : pkg.price}
                    <span className="period">
                      {pkg.name === "Hourly Development Services"
                        ? "/hour"
                        : billingCycle === "one-time"
                        ? ""
                        : "/month"}
                    </span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="original-price">
                      Originally ${pkg.originalPrice}/month
                    </div>
                  )}
                  <p className="card-description">{pkg.description}</p>
                </div>

                <div className="card-bottom">
                  <ul className="features-list">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <span className="checkmark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="cta-button" onClick={handleBookCall}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="special-discounts-banner">
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
      </section>

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
            onClick={() => (window.location.href = "#/services")}
          >
            View Additional Services
          </button>
          <button
            className="secondary-cta"
            onClick={() => (window.location.href = "#/faq")}
          >
            View FAQ
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

export default Pricing;
