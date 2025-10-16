import React, { useState } from "react";
import { NextSeo } from 'next-seo';
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglass,
  faCogs,
  faFileAlt,
  faCrown,
  faChartLine,
  faGlobe,
  faShieldAlt,
  faStar,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

export default function Pricing() {
  const router = useRouter();
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
      icon: faHourglass,
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
      icon: faCogs,
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
      icon: faFileAlt,
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
      icon: faCrown,
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
      icon: faChartLine,
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
      icon: faGlobe,
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
    ReactGA.event("pricing_book_call", {
      page_path: window.location.hash || "/",
    });
    router.push("/contact");
  };

  return (
    <div className="pricing-page">
      <NextSeo
        title="Pricing - Web Development Services by Ironleaf Technology"
        description="Transparent pricing for web development, mobile apps, and digital solutions. Hourly rates, one-time projects, and monthly maintenance packages available."
        canonical="https://ironleaftechnology.com/pricing"
        keywords="web development pricing, website development costs, mobile app development pricing, custom software pricing, hourly development rates, one-time web projects, monthly maintenance packages"
        openGraph={{
          url: 'https://ironleaftechnology.com/pricing',
          title: 'Pricing - Web Development Services by Ironleaf Technology',
          description: 'Transparent pricing for professional web development services. Hourly rates, project packages, and ongoing maintenance.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-pricing.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Development Pricing',
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
              "name": "Pricing",
              "item": "https://ironleaftechnology.com/pricing"
            }
          ]
        })
      }} />
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
              <FontAwesomeIcon icon={faShieldAlt} />
            </span>
            <span>Veteran-Owned & Operated</span>
          </div>
          <div className="highlight">
            <span className="icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>Committed to Your Success</span>
          </div>
          <div className="highlight">
            <span className="icon">
              <FontAwesomeIcon icon={faBullseye} />
            </span>
            <span>Local Peterborough Service</span>
          </div>
        </div>
      </section>

      <section className="service-explanation">
          <p>
            One-time setup fees cover complete implementation, testing,
            training, and initial support. Monthly care plans provide ongoing
            maintenance, updates, and support services.
          </p>
      </section>

      <section className="pricing-cards">
        <h2>Web Development Packages (2 revisions included)</h2>
        <div className="web-packages">
          {filteredPackages
            .filter((pkg) => pkg.category === "web")
            .map((pkg, index) => (
              <div
                key={index}
                className={`pricing-card ${pkg.popular ? "popular" : ""} mono-${(index % 5) + 1}`}
              >
                {pkg.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="card-top">
                  <FontAwesomeIcon icon={pkg.icon} className="card-icon" />
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

                  <button className="cta-button" style={{ boxShadow: "0 4px 15px rgba(74, 124, 89, 0.3)" }} onClick={handleBookCall}>
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
                className={`pricing-card ${pkg.popular ? "popular" : ""} mono-${(index % 5) + 1}`}
              >
                {pkg.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="card-top">
                  <FontAwesomeIcon icon={pkg.icon} className="card-icon" />
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

                  <button className="cta-button" style={{ boxShadow: "0 4px 15px rgba(74, 124, 89, 0.3)" }} onClick={handleBookCall}>
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
          <a href="/faq" className="discounts-banner-link">
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
            onClick={() => (window.location.href = "/services")}
          >
            View Additional Services
          </button>
          <button
            className="secondary-cta"
            onClick={() => (window.location.href = "/faq")}
          >
            View FAQ
          </button>
        </div>
        <p className="terms-link">
          By proceeding, you agree to our{" "}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          .
        </p>
      </section>
    </div>
  );
};


