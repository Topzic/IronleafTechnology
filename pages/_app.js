import "../styles/globals.css";
import "../components/CallToAction.css";
import "../components/Footer.css";
import "../components/HeroSection.css";
import "../components/LoadingSpinner.css";
import "../components/Navbar.css";
import "../components/PortfolioHighlights.css";
import "../components/ServicesOverview.css";
import "../components/Testimonials.css";
import "../components/VeteranBadge.css";
import "../components/About.css";
import "../components/Blog.css";
import "../components/Contact.css";
import "../components/FAQ.css";
import "../components/Portfolio.css";
import "../components/Pricing.css";
import "../components/Services.css";
import "../components/Support.css";
import "../components/Terms.css";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { DefaultSeo } from 'next-seo';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  const defaultSeo = {
    title: 'Ironleaf Technology - Professional Web Development Services',
    description: 'Veteran-owned web development, SEO optimization, and custom website design. Next.js, React, and automation solutions for businesses.',
    canonical: 'https://ironleaftechnology.com',
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      url: 'https://ironleaftechnology.com',
      siteName: 'Ironleaf Technology',
      title: 'Ironleaf Technology - Web Development & SEO Services',
      description: 'Professional web development services. Custom websites, SEO optimization, and business automation solutions.',
      images: [
        {
          url: 'https://ironleaftechnology.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Ironleaf Technology - Web Development Services',
        },
      ],
    },
    twitter: {
      handle: '@ironleafprod',
      site: '@ironleafprod',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'web developer, website development, SEO services, IT Services, software developer, custom website design'
      },
      {
        name: 'author',
        content: 'Ironleaf Technology'
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'googlebot',
        content: 'index, follow'
      }
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      }
    ]
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      ReactGA.initialize("G-FQ9Z6HNXE1");
      ReactGA.initialize("AW-17649096539");
    }
  }, []);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ironleaf Technology",
    "url": "https://ironleaftechnology.com",
    "logo": "https://ironleaftechnology.com/logo.webp",
    "description": "Veteran-owned web development and digital solutions company specializing in Next.js, React, and custom web applications for businesses.",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "Ian Cunningham",
        "jobTitle": "Founder & Lead Developer"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "855 Clonsilla Ave",
      "addressLocality": "Peterborough",
      "addressRegion": "ON",
      "postalCode": "K9J 5Y2",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-705-768-2636",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/ironleaf-technology"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & UI/UX",
            "description": "Create stunning, user-friendly websites that engage visitors and drive conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Professional, responsive websites using Next.js, React, and modern technologies."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Digital Marketing",
            "description": "Improve online visibility and drive targeted traffic to websites."
          }
        }
      ]
    }
  };

  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <div className="App">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
