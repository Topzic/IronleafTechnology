import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faSearch,
  faBullseye,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga4";
import PortfolioHighlights from "./PortfolioHighlights";

const LocalSEOPage = ({
  city,
  region,
  county,
  ga4Prefix,
  businessUrl,
  areaServed
}) => {
  const business = {
    name: "Ironleaf Technology",
    url: businessUrl,
    phone: "+1-705-768-2636",
    email: "support@ironleaftechnology.com",
    address: {
      streetAddress: "855 Clonsilla Ave",
      addressLocality: "Peterborough",
      addressRegion: "ON",
      postalCode: "K9J 5Y2",
      addressCountry: "CA",
    },
  };

  const offers = [
    {
      title: "Fast, mobile-friendly websites",
      description: "Optimized for speed and seamless mobile experience across all devices.",
      icon: faRocket,
    },
    {
      title: "Local SEO and Google Business Profile optimization",
      description: `Dominate local search results and enhance your online presence in ${city}.`,
      icon: faSearch,
    },
    {
      title: "Content strategy and conversion-focused design",
      description: "Engage visitors and turn them into customers with strategic content and design.",
      icon: faBullseye,
    },
    {
      title: "Affordable care plans and priority support",
      description: "Ongoing maintenance and dedicated support for peace of mind and reliability.",
      icon: faShieldAlt,
    },
  ];

  const faq = [
    {
      q: `How much does a website cost in ${city}?`,
      a: "Starter single-page sites typically start around $500-$1,500. Full small-business sites start around $1,500-$2,500. I also offer hourly development at $75/hr and monthly care plans.",
    },
    {
      q: "Do you provide ongoing maintenance?",
      a: "Yes. I offer monthly care plans for updates, security, backups, and small content changes so your site stays fast and secure.",
    },
    {
      q: "Can you help with SEO for local searches?",
      a: `Absolutely. I implement technical SEO, structured data, page-speed improvements, and content targeting ${city} and the surrounding areas.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    address: { "@type": "PostalAddress", ...business.address },
    areaServed: areaServed.map(area => {
      if (typeof area === 'string') {
        return { "@type": "City", name: area };
      }
      return {
        "@type": area.type || "City",
        name: area.name
      };
    }),
    sameAs: [
      // Add profiles as they exist
    ],
  };

  // GA4 Event Handlers
  const handleLearnMore = (serviceTitle) => {
    ReactGA.event(`${ga4Prefix}_learn_more`, {
      page_path: window.location.pathname,
      service_title: serviceTitle,
    });
  };

  const handleContactPhone = () => {
    ReactGA.event(`${ga4Prefix}_contact_phone`, {
      page_path: window.location.pathname,
    });
  };

  const handleContactForm = () => {
    ReactGA.event(`${ga4Prefix}_contact_form`, {
      page_path: window.location.pathname,
    });
  };

  const handleGetStarted = () => {
    ReactGA.event(`${ga4Prefix}_get_started`, {
      page_path: window.location.pathname,
    });
  };

  return (
    <div>
      <style>
        {`
          .animated-circles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
          }
          .circle {
            position: absolute;
            border-radius: 50%;
            animation: bounce1 10s ease-in-out infinite;
          }
          .circle1 { width: 80px; height: 80px; background: rgba(74, 124, 89, 0.15); top: 10%; left: 5%; }
          .circle2 { width: 60px; height: 60px; background: rgba(45, 80, 22, 0.2); top: 30%; right: 10%; animation: bounce2 12s ease-in-out infinite; }
          .circle3 { width: 40px; height: 40px; background: rgba(107, 142, 90, 0.18); bottom: 20%; left: 15%; animation: bounce3 8s ease-in-out infinite; }
          .circle4 { width: 50px; height: 50px; background: rgba(58, 100, 48, 0.12); top: 50%; right: 20%; animation: bounce4 14s ease-in-out infinite; }
          .circle5 { width: 88px; height: 88px; background: rgba(90, 130, 70, 0.16); bottom: 10%; left: 50%; animation: bounce5 9s ease-in-out infinite; }
          .circle6 { width: 55px; height: 55px; background: rgba(74, 124, 89, 0.14); top: 15%; left: 20%; }
          .circle7 { width: 65px; height: 65px; background: rgba(45, 80, 22, 0.18); top: 35%; right: 5%; }
          .circle8 { width: 45px; height: 45px; background: rgba(107, 142, 90, 0.16); bottom: 25%; left: 25%; animation: bounce3 8s ease-in-out infinite; }
          .circle9 { width: 85px; height: 85px; background: rgba(58, 100, 48, 0.13); top: 55%; right: 25%; animation: bounce4 14s ease-in-out infinite; }
          .circle10 { width: 95px; height: 95px; background: rgba(90, 130, 70, 0.17); bottom: 5%; left: 60%; animation: bounce5 9s ease-in-out infinite; }
          .circle11 { width: 58px; height: 58px; background: rgba(74, 124, 89, 0.15); top: 5%; left: 70%; }
          .circle12 { width: 72px; height: 72px; background: rgba(45, 80, 22, 0.19); top: 45%; left: 10%; animation: bounce2 12s ease-in-out infinite; }
          @keyframes bounce1 { 0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); } 25% { transform: translateY(-40px) translateX(30px) rotate(90deg); } 50% { transform: translateY(-20px) translateX(-20px) rotate(180deg); } 75% { transform: translateY(-60px) translateX(10px) rotate(270deg); } }
          @keyframes bounce2 { 0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); } 20% { transform: translateY(-50px) translateX(-25px) rotate(72deg); } 40% { transform: translateY(-30px) translateX(35px) rotate(144deg); } 60% { transform: translateY(-10px) translateX(-15px) rotate(216deg); } 80% { transform: translateY(-45px) translateX(20px) rotate(288deg); } }
          @keyframes bounce3 { 0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); } 33% { transform: translateY(-35px) translateX(25px) rotate(120deg); } 66% { transform: translateY(-15px) translateX(-30px) rotate(240deg); } }
          @keyframes bounce4 { 0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); } 25% { transform: translateY(-40px) translateX(30px) rotate(90deg); } 50% { transform: translateY(-20px) translateX(-20px) rotate(180deg); } 75% { transform: translateY(-60px) translateX(10px) rotate(270deg); } }
          @keyframes bounce5 { 0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); } 20% { transform: translateY(-50px) translateX(-25px) rotate(72deg); } 40% { transform: translateY(-30px) translateX(35px) rotate(144deg); } 60% { transform: translateY(-10px) translateX(-15px) rotate(216deg); } 80% { transform: translateY(-45px) translateX(20px) rotate(288deg); } }
        `}
      </style>
      <style>
        {`
          .cta-button {
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            color: white;
            border: none;
            padding: 1.5rem 3rem;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(255, 107, 107, 0.4);
          }
        `}
      </style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 animate-fade-in relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-20 animate-slide-up">
            Web Developer in {city}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I'm a local, veteran-owned web developer providing web
            design, development, and ongoing support for businesses in
            {city}{region ? ` and ${region}` : ''}. I focus on performance, accessibility,
            and search visibility to help you get found by local customers.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-slide-up">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {offers.map((offer, index) => {
              const cardGradients = [
                'bg-gradient-to-br from-white to-gray-50',
                'bg-gradient-to-br from-white to-green-50',
                'bg-gradient-to-br from-white to-blue-50',
                'bg-gradient-to-br from-white to-orange-50'
              ];
              return (
                <div
                  key={index}
                  className={`${cardGradients[index]} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center text-center animate-slide-up border border-gray-100`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-secondary text-5xl mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <FontAwesomeIcon icon={offer.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-3">{offer.title}</h3>
                  <p className="text-gray leading-relaxed mb-6 flex-grow">{offer.description}</p>
                  <Link
                    href="/services"
                    className="bg-secondary hover:bg-primary text-white font-medium py-2 px-6 rounded-md transition-all duration-300 hover:shadow-md hover:scale-105 mt-auto"
                    onClick={() => handleLearnMore(offer.title)}
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray mb-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Ready to grow your business online? <a href="tel:+17057682636" className="text-secondary hover:text-primary font-semibold" onClick={handleContactPhone}>(705) 768-2636</a> or <a href="/contact" className="text-secondary hover:text-primary font-semibold" onClick={handleContactForm}>contact me today</a> for a free consultation and custom quote.
            </p>
            <button className="cta-button animate-slide-up" style={{ animationDelay: '0.6s' }} onClick={handleGetStarted}>
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      {/* <section className="py-20 bg-light animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-slide-up">
            Recent Projects
          </h2>
          <p className="text-lg text-center text-gray mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I build sites for trades, restaurants, professional services,
            nonprofits, and more. Ask about a demo tailored to your business.
          </p>
        </div>
      </section> */}

      <PortfolioHighlights />

      {/* FAQ Section */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-slide-up">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faq.map((f, i) => (
              <details key={i} className="bg-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <summary className="text-xl font-semibold text-primary cursor-pointer hover:text-secondary transition-colors">
                  {f.q}
                </summary>
                <p className="mt-4 text-gray leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalSEOPage;