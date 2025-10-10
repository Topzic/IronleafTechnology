import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('one-time');

  const packages = [
    {
      name: 'One-Page Website',
      description: 'Simple, effective single-page website for businesses needing a strong online presence',
      price: billingCycle === 'one-time' ? 1500 : 100,
      originalPrice: billingCycle === 'one-time' ? null : 125,
      features: [
        'Responsive design for all devices',
        'Single-page layout with sections',
        'Contact form integration',
        'Basic SEO setup',
        '1 year hosting & support'
      ],
      popular: false,
      category: 'web'
    },
    {
      name: 'Web Development Starter',
      description: 'Perfect for small businesses launching their first professional website',
      price: billingCycle === 'one-time' ? 2500 : 150,
      originalPrice: billingCycle === 'one-time' ? null : 200,
      features: [
        'Responsive design for all devices',
        'Up to 5 pages',
        'Contact form integration',
        'Basic SEO setup',
        '1 year hosting & support'
      ],
      popular: true,
      category: 'web'
    },
    {
      name: 'Web Development Growth',
      description: 'Advanced solutions for growing businesses with complex needs',
      price: billingCycle === 'one-time' ? 7500 : 400,
      originalPrice: billingCycle === 'one-time' ? null : 500,
      features: [
        'Everything in Starter, plus:',
        'E-commerce integration',
        'CMS for content management',
        'Advanced SEO & analytics',
        'Custom functionality',
        '2 years hosting & priority support'
      ],
      popular: false,
      category: 'web'
    },
    {
      name: 'Web Development Enterprise',
      description: 'Full-scale solutions for established businesses and organizations',
      price: billingCycle === 'one-time' ? 15000 : 750,
      originalPrice: billingCycle === 'one-time' ? null : 1000,
      features: [
        'Everything in Growth, plus:',
        'Multi-vendor marketplace',
        'Advanced integrations',
        'Performance optimization',
        'White-label solutions',
        '3 years hosting & dedicated support'
      ],
      popular: false,
      category: 'web'
    },
    {
      name: 'Microsoft 365 Optimization',
      description: 'Streamline your business processes with Power Platform tools',
      price: billingCycle === 'one-time' ? 3000 : 200,
      originalPrice: billingCycle === 'one-time' ? null : 250,
      features: [
        'Complete M365 audit & setup',
        'Custom Power Apps development',
        'Workflow automation',
        'Data integration solutions',
        'Training & documentation'
      ],
      popular: false,
      category: 'optimization'
    },
    {
      name: 'Security Camera Bronze',
      description: 'Essential surveillance for small businesses and homes',
      price: billingCycle === 'one-time' ? 2000 : 100,
      originalPrice: billingCycle === 'one-time' ? null : 125,
      features: [
        '4 high-definition cameras',
        'Cloud storage (30 days)',
        'Mobile app access',
        'Motion detection alerts',
        'Professional installation'
      ],
      popular: false,
      category: 'security'
    },
    {
      name: 'Security Camera Silver',
      description: 'Advanced security with AI features and extended monitoring',
      price: billingCycle === 'one-time' ? 4500 : 225,
      originalPrice: billingCycle === 'one-time' ? null : 300,
      features: [
        'Everything in Bronze, plus:',
        '8 cameras with AI detection',
        '90-day cloud storage',
        'Advanced analytics',
        '24/7 monitoring option',
        'Smart home integration'
      ],
      popular: false,
      category: 'security'
    },
    {
      name: 'Power BI Analytics Starter',
      description: 'Transform your data into actionable business insights',
      price: billingCycle === 'one-time' ? 3000 : 200,
      originalPrice: billingCycle === 'one-time' ? null : 250,
      features: [
        'Data source integration',
        'Custom dashboard design',
        'Basic reporting templates',
        'Training session included',
        '3 months support'
      ],
      popular: false,
      category: 'analytics'
    }
  ];

  const addOns = [
    {
      name: 'Care Plans',
      description: 'Ongoing support and maintenance',
      options: [
        { name: 'Basic Care', price: '$150/month', features: ['Monthly updates', 'Security monitoring', 'Basic support'] },
        { name: 'Premium Care', price: '$300/month', features: ['Everything in Basic', 'Priority support', 'Performance optimization', 'Content updates'] }
      ]
    },
    {
      name: 'Support Retainers',
      description: 'Priority access to our team',
      options: [
        { name: '5 Hours/Month', price: '$375/month', features: ['Priority response', 'Dedicated support channel', 'Quarterly reviews'] },
        { name: '10 Hours/Month', price: '$700/month', features: ['Everything in 5 Hours', 'Emergency support', 'Monthly strategy calls'] }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the one-time setup fee?',
      answer: 'Our one-time fees cover complete implementation, testing, training, and initial support. This includes all development work, integrations, and getting your solution fully operational.'
    },
    {
      question: 'Can I upgrade or modify my package later?',
      answer: 'Absolutely! We offer flexible upgrade paths. Contact us to discuss adding features or scaling your solution as your business grows.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment terms for larger projects. Monthly care plans and retainers can also help spread costs over time.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including technical assistance, training, updates, and optimization. Care plans include proactive monitoring and maintenance.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! Our pricing is transparent. We clearly outline all costs upfront, including any optional add-ons or ongoing support.'
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    if (billingCycle === 'one-time') return true;
    return pkg.category !== 'web' || pkg.name.includes('Starter') || pkg.name.includes('Growth');
  });

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <div className="pricing-page">
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
        <p>Comprehensive technology solutions with transparent pricing for your business needs.</p>

        <div className="billing-toggle">
          <button
            onClick={() => setBillingCycle('one-time')}
            className={billingCycle === 'one-time' ? 'active' : ''}
          >
            One-Time Setup
          </button>
          <button
            onClick={() => setBillingCycle('monthly')}
            className={billingCycle === 'monthly' ? 'active' : ''}
          >
            Monthly Care Plans
          </button>
        </div>

        <div className="pricing-highlights">
          <div className="highlight">
            <span className="icon">🛡️</span>
            <span>Veteran-Owned & Operated</span>
          </div>
          <div className="highlight">
            <span className="icon">⭐</span>
            <span>Committed to Your Success</span>
          </div>
          <div className="highlight">
            <span className="icon">🎯</span>
            <span>Local Peterborough Service</span>
          </div>
        </div>
      </section>

      <section className="pricing-cards">
        {filteredPackages.map((pkg, index) => (
          <div key={index} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
            {pkg.popular && <span className="popular-badge">Most Popular</span>}
            <div className="card-header">
              <h3>{pkg.name}</h3>
              <p className="description">{pkg.description}</p>
            </div>

            <div className="pricing-section">
              <div className="price">
                ${pkg.price.toLocaleString()}
                <span className="period">/{billingCycle === 'one-time' ? 'project' : 'month'}</span>
              </div>
              {pkg.originalPrice && (
                <div className="original-price">
                  Originally ${pkg.originalPrice}/month
                </div>
              )}
            </div>

            <ul className="features-list">
              {pkg.features.map((feature, i) => (
                <li key={i}>
                  <span className="checkmark">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="cta-button" onClick={handleBookCall}>Get Started</button>
          </div>
        ))}
      </section>

      <section className="add-ons-section">
        <h2>Add-On Services & Support</h2>
        <p>Enhance your solution with ongoing support and additional features</p>

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
              <p>Thank you for your service. We offer special pricing for veterans, military families, and first responders.</p>
            </div>
            <div className="discount-card">
              <div className="discount-badge">25% OFF</div>
              <h3>Nonprofits & Charities</h3>
              <p>Supporting our community. Special rates for registered nonprofit organizations and charitable causes.</p>
            </div>
            <div className="discount-card">
              <div className="discount-badge">15% OFF</div>
              <h3>Local Businesses</h3>
              <p>Proud to serve Peterborough businesses. Special introductory pricing for local companies.</p>
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
        <p>Let's discuss your project and find the perfect solution for your business.</p>
        <div className="cta-buttons">
          <button className="primary-cta" onClick={handleBookCall}>Book a Discovery Call</button>
          <button className="secondary-cta">View Our Portfolio</button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;