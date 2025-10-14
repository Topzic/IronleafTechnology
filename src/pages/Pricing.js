import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Pricing.css";

const Pricing = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("one-time");

  // Theme configuration
  const isHalloweenTheme = false; // Set to true for Halloween theme

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
      icon: "fas fa-clock",
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
      name: "One-Page Website",
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
      name: "Web Development Starter",
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
      icon: "fas fa-rocket",
    },
    {
      name: "Web Development Growth",
      description:
        billingCycle === "one-time"
          ? "Advanced solutions for growing businesses with complex needs"
          : "Ongoing maintenance and support for advanced websites",
      price: billingCycle === "one-time" ? "5000-7500" : 400,
      originalPrice: billingCycle === "one-time" ? null : 500,
      features: [
        "Everything in Starter, plus:",
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
      name: "Web Development Enterprise",
      description:
        billingCycle === "one-time"
          ? "Full-scale solutions for established businesses and organizations"
          : "Ongoing maintenance and support for enterprise websites",
      price: billingCycle === "one-time" ? "8000-15000" : 750,
      originalPrice: billingCycle === "one-time" ? null : 1000,
      features: [
        "Everything in Growth, plus:",
        "Multi-vendor marketplace",
        "Advanced integrations",
        "Performance optimization",
        "White-label solutions",
        "3 years hosting & dedicated support",
      ],
      popular: false,
      category: "web",
      icon: "fas fa-building",
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
      icon: "fas fa-windows",
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

  const faqs = [
    {
      question: "What's included in the one-time setup fee?",
      answer:
        "My one-time fees cover complete implementation, testing, training, and initial support. This includes all development work, integrations, and getting your solution fully operational.",
    },
    {
      question: "Can I upgrade or modify my package later?",
      answer:
        "Absolutely! I offer flexible upgrade paths. Contact us to discuss adding features or scaling your solution as your business grows.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, I offer flexible payment terms for larger projects. Monthly care plans and retainers can also help spread costs over time.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "I provide comprehensive support including technical assistance, training, updates, and optimization. Care plans include proactive monitoring and maintenance.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees! My pricing is transparent. I clearly outline all costs upfront, including any optional add-ons or ongoing support!",
    },
    {
      question:
        "What's the difference between One-Time Setup and Monthly Care Plans?",
      answer:
        "One-Time Setup is a single payment for the initial website development or optimization. Monthly Care Plans provide ongoing support, updates, and maintenance with recurring payments.",
    },
    {
      question: "Can I switch from one-time to monthly later?",
      answer:
        "Yes, you can upgrade to a monthly care plan at any time. Contact me to discuss options.",
    },
    {
      question: "Are monthly plans the same as add-on care plans?",
      answer:
        "Monthly plans include integrated care and support. Add-on care plans are optional extras for additional services beyond the main package.",
    },
  ];

  const filteredPackages = packages.filter((pkg) => {
    if (billingCycle === "one-time") return true;
    return (
      (pkg.category !== "web" ||
        pkg.name.includes("Starter") ||
        pkg.name.includes("Growth")) &&
      pkg.name !== "Hourly Development Services"
    );
  });

  const handleBookCall = () => {
    // eslint-disable-next-line no-undef
    gtag("event", "click", {
      event_category: "engagement",
      event_label: "book_call_pricing",
    });
    navigate("/contact");
  };

  const handleCustomQuote = () => {
    // eslint-disable-next-line no-undef
    gtag("event", "click", {
      event_category: "engagement",
      event_label: "custom_quote_pricing",
    });
    navigate("/contact");
  };

  useEffect(() => {
    const allCirclesContainers = document.querySelectorAll(".card-circles");
    const cleanupFunctions = [];

    allCirclesContainers.forEach((container) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const circles = Array.from(container.querySelectorAll(".card-circle"));

      // Store circle data
      const circleData = circles.map((circle) => ({
        element: circle,
        x: (parseFloat(circle.style.left) / 100) * rect.width,
        y: (parseFloat(circle.style.top) / 100) * rect.height,
        vx: (Math.random() > 0.5 ? 1 : -1) * 3,
        vy: (Math.random() > 0.5 ? 1 : -1) * 3,
        radius: circle.offsetWidth / 2,
      }));

      // Mouse interaction
      let mouseX = null;
      let mouseY = null;
      const handleMouseMove = (e) => {
        const containerRect = container.getBoundingClientRect();
        mouseX = e.clientX - containerRect.left;
        mouseY = e.clientY - containerRect.top;
      };
      const handleMouseLeave = () => {
        mouseX = null;
        mouseY = null;
      };
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      let animationId;
      const animate = () => {
        // Update circle positions and handle wall collisions
        circleData.forEach((circle) => {
          circle.x += circle.vx;
          circle.y += circle.vy;

          // Wall collisions
          if (
            circle.x <= circle.radius ||
            circle.x >= rect.width - circle.radius
          ) {
            circle.vx = -circle.vx;
            circle.x = Math.max(
              circle.radius,
              Math.min(rect.width - circle.radius, circle.x)
            );
          }
          if (
            circle.y <= circle.radius ||
            circle.y >= rect.height - circle.radius
          ) {
            circle.vy = -circle.vy;
            circle.y = Math.max(
              circle.radius,
              Math.min(rect.height - circle.radius, circle.y)
            );
          }
        });

        // Circle-to-circle collisions
        for (let i = 0; i < circleData.length; i++) {
          for (let j = i + 1; j < circleData.length; j++) {
            const c1 = circleData[i];
            const c2 = circleData[j];
            const dx = c2.x - c1.x;
            const dy = c2.y - c1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = c1.radius + c2.radius;

            if (distance < minDistance) {
              // Collision detected - simple elastic collision
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);

              // Rotate velocities
              const v1x = c1.vx * cos + c1.vy * sin;
              const v1y = c1.vy * cos - c1.vx * sin;
              const v2x = c2.vx * cos + c2.vy * sin;
              const v2y = c2.vy * cos - c2.vx * sin;

              // Swap the x velocities (elastic collision)
              const temp = v1x;
              c1.vx = v2x * cos - v1y * sin;
              c1.vy = v1y * cos + v2x * sin;
              c2.vx = temp * cos - v2y * sin;
              c2.vy = v2y * cos + temp * sin;

              // Separate overlapping circles
              const overlap = minDistance - distance;
              const separationX = (dx / distance) * overlap * 0.5;
              const separationY = (dy / distance) * overlap * 0.5;
              c1.x -= separationX;
              c1.y -= separationY;
              c2.x += separationX;
              c2.y += separationY;
            }
          }
        }

        // Mouse interaction
        if (mouseX !== null && mouseY !== null) {
          circleData.forEach((circle) => {
            const dx = mouseX - circle.x;
            const dy = mouseY - circle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 50; // Interaction radius

            if (distance < maxDistance) {
              const force = (maxDistance - distance) / maxDistance;
              const angle = Math.atan2(dy, dx);
              circle.vx -= Math.cos(angle) * force * 0.5;
              circle.vy -= Math.sin(angle) * force * 0.5;
            }
          });
        }

        // Apply friction to prevent infinite acceleration
        circleData.forEach((circle) => {
          circle.vx *= 0.999;
          circle.vy *= 0.999;
        });

        // Update DOM positions
        circleData.forEach((circle) => {
          circle.element.style.left = `${(circle.x / rect.width) * 100}%`;
          circle.element.style.top = `${(circle.y / rect.height) * 100}%`;
        });

        animationId = requestAnimationFrame(animate);
      };
      animate();

      // Store cleanup function
      cleanupFunctions.push(() => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      });
    });

    // Return cleanup function
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [billingCycle]);

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
          content="IT pricing, web development costs, Microsoft 365 pricing, Power BI analytics pricing, custom software pricing"
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
          <span className="circle circle13"></span>
          <span className="circle circle14"></span>
          <span className="circle circle15"></span>
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
                  pkg.name === "Web Development Enterprise"
                    ? "color-3"
                    : `color-${index % 3}`
                }`}
              >
                {pkg.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="card-top">
                  <div className="card-circles">
                    {Array.from(
                      { length: 3 + Math.floor(Math.random() * 3) },
                      (_, i) => {
                        if (isHalloweenTheme) {
                          const emojis = ["👻", "🦇", "🎃", "🦃"];
                          const randomEmoji =
                            emojis[Math.floor(Math.random() * emojis.length)];
                          return (
                            <span
                              key={i}
                              className="card-circle"
                              style={{
                                top: `${20 + Math.random() * 40}%`,
                                left: `${20 + Math.random() * 40}%`,
                                width: `${30 + Math.random() * 30}px`,
                                height: `${30 + Math.random() * 30}px`,
                                fontSize: `${30 + Math.random() * 30}px`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "transparent",
                              }}
                            >
                              {randomEmoji}
                            </span>
                          );
                        } else {
                          return (
                            <span
                              key={i}
                              className="card-circle"
                              style={{
                                top: `${20 + Math.random() * 40}%`,
                                left: `${20 + Math.random() * 40}%`,
                                width: `${30 + Math.random() * 30}px`,
                                height: `${30 + Math.random() * 30}px`,
                                borderRadius: "50%",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                              }}
                            ></span>
                          );
                        }
                      }
                    )}
                  </div>
                  <i className={`${pkg.icon} card-icon`}></i>
                  <h3 className="plan-name">{pkg.name}</h3>
                  <div className="price-block">
                    <span className="currency">$</span>
                    {typeof pkg.price === "number"
                      ? pkg.price.toLocaleString()
                      : pkg.price}
                    <span className="period">
                      /
                      {pkg.name === "Hourly Development Services"
                        ? "hour"
                        : billingCycle === "one-time"
                        ? "project"
                        : "month"}
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
                  pkg.name === "Web Development Enterprise"
                    ? "color-3"
                    : `color-${index % 3}`
                }`}
              >
                {pkg.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="card-top">
                  <div className="card-circles">
                    {Array.from(
                      { length: 3 + Math.floor(Math.random() * 3) },
                      (_, i) => {
                        if (isHalloweenTheme) {
                          const emojis = ["👻", "🦇", "🎃"];
                          const randomEmoji =
                            emojis[Math.floor(Math.random() * emojis.length)];
                          return (
                            <span
                              key={i}
                              className="card-circle"
                              style={{
                                top: `${20 + Math.random() * 40}%`,
                                left: `${20 + Math.random() * 40}%`,
                                width: `${30 + Math.random() * 30}px`,
                                height: `${30 + Math.random() * 30}px`,
                                fontSize: `${30 + Math.random() * 30}px`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "transparent",
                              }}
                            >
                              {randomEmoji}
                            </span>
                          );
                        } else {
                          return (
                            <span
                              key={i}
                              className="card-circle"
                              style={{
                                top: `${20 + Math.random() * 40}%`,
                                left: `${20 + Math.random() * 40}%`,
                                width: `${30 + Math.random() * 30}px`,
                                height: `${30 + Math.random() * 30}px`,
                                borderRadius: "50%",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                              }}
                            ></span>
                          );
                        }
                      }
                    )}
                  </div>
                  <i className={`${pkg.icon} card-icon`}></i>
                  <h3 className="plan-name">{pkg.name}</h3>
                  <div className="price-block">
                    <span className="currency">$</span>
                    {typeof pkg.price === "number"
                      ? pkg.price.toLocaleString()
                      : pkg.price}
                    <span className="period">
                      /
                      {pkg.name === "Hourly Development Services"
                        ? "hour"
                        : billingCycle === "one-time"
                        ? "project"
                        : "month"}
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

      <section className="add-ons-section">
        <h2>Add-On Services & Support</h2>
        <p>
          Enhance your solution with ongoing support and additional features.
          These add-on services are separate from our monthly care plans and
          provide flexible, à la carte support options for businesses that
          prefer customized, pay-as-you-go assistance rather than comprehensive
          monthly packages.
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

      <section className="discounts-section">
        <div className="discounts-container">
          <h2>Special Discounts</h2>
          <div className="discount-cards">
            <div className="discount-card">
              <div className="discount-badge">20% OFF</div>
              <h3>Veterans & First Responders</h3>
              <p>
                Thank you for your service. I offer special pricing for
                veterans, military families, and first responders.
              </p>
            </div>
            <div className="discount-card">
              <div className="discount-badge">25% OFF</div>
              <h3>Nonprofits & Charities</h3>
              <p>
                Supporting our community. Special rates for registered nonprofit
                organizations and charitable causes.
              </p>
            </div>
            <div className="discount-card">
              <div className="discount-badge">15% OFF</div>
              <h3>Local Businesses</h3>
              <p>
                Proud to serve Peterborough businesses. Special introductory
                pricing for local companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
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
          <button className="secondary-cta" onClick={handleCustomQuote}>
            Get a Custom Quote
          </button>
          <button className="secondary-cta">View Our Portfolio</button>
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

export default Pricing;
