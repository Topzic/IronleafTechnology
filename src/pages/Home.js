import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import PortfolioHighlights from "../components/PortfolioHighlights";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Ironleaf Technology - Veteran-Owned IT Solutions in Peterborough
        </title>
        <meta
          name="description"
          content="Ironleaf Technology offers veteran-owned IT solutions in Peterborough, Ontario. Full-stack web development, Microsoft 365 optimization, Power BI analytics, and custom software for businesses."
        />
        <meta
          name="keywords"
          content="IT support Peterborough, web development, Microsoft 365, Power BI, custom software, veteran-owned business, Peterborough IT services, Ontario IT company, web design Peterborough, Microsoft 365 consulting, Power BI consulting, cloud services Ontario, data analytics, custom software development, veteran-owned IT, cheap website development, peterborough web development, peterborough it support, veteran-driven IT solutions, custom websites Kawartha Lakes, software development Lindsay, digital systems Cobourg, analytics integration Oshawa, automation Whitby, SEO optimization Ajax, attract clients Toronto, streamline workflows, scale with confidence"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ironleaf Technology",
            description:
              "Veteran-owned IT solutions including web development, Microsoft 365 optimization, Power BI analytics, and custom software.",
            url: "https://ironleaftechnology.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Peterborough",
              addressRegion: "ON",
              addressCountry: "CA",
            },
            founder: {
              "@type": "Person",
              name: "Ian Cunningham",
            },
          })}
        </script>
      </Helmet>
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <PortfolioHighlights />
      <CallToAction />
    </div>
  );
};

export default Home;
