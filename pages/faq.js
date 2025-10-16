import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ReactGA from "react-ga4";

const FAQ = () => {
  const router = useRouter();
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

  const handleBookCall = () => {
    ReactGA.event("faq_book_call", { page_path: window.location.hash || "/" });
    router.push("/contact");
  };

  return (
    <div className="faq-page">
      <Head>
        <title>FAQ - Ironleaf Technology | Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to common questions about Ironleaf Technology's services, pricing, support, and processes."
        />
        <meta
          name="keywords"
          content="FAQ Ironleaf Technology, frequently asked questions IT, web development questions, mobile app development FAQ, IT infrastructure help, custom software FAQ, IT support questions Peterborough, pricing questions Ontario, service details Ironleaf, how much does web development cost, server management questions, cloud storage FAQ, network configuration questions, data analytics questions, software development process, website maintenance FAQ, IT consultation questions, veteran-owned business FAQ, Peterborough IT services questions, Ontario web design FAQ, mobile app development questions, custom software development questions, IT support packages explained, web development timeline, technology consultation FAQ, business IT solutions questions"
        />
      </Head>

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
              "name": "FAQ",
              "item": "https://ironleaftechnology.com/faq"
            }
          ]
        })
      }} />

      <section className="faq-hero">
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
        <h1>Frequently Asked Questions</h1>
        <p>
          Get answers to common questions about my services, pricing, and
          support.
        </p>
      </section>

      <section className="faqs-section">
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
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
                Proud to serve Peterborough businesses and clients across
                Canada. Special introductory pricing for local companies, with
                remote services available nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Still Have Questions?</h2>
        <p>Can't find the answer you're looking for? I'm here to help.</p>
        <div className="cta-buttons">
          <button className="primary-cta" onClick={handleBookCall}>
            Contact Me
          </button>
          <button
            className="secondary-cta"
            onClick={() => (window.location.href = "/pricing")}
          >
            View Pricing
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
