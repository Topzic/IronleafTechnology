import React from "react";
import { NextSeo } from 'next-seo';
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import PortfolioHighlights from "../components/PortfolioHighlights";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Ironleaf Technology - Web Development & SEO Services"
        description="Professional web development, SEO optimization, and custom website design. Next.js, React, and automation solutions for small businesses."
        canonical="https://ironleaftechnology.com"
        keywords="web developer, website development, SEO services, Next.js developer, React developer, custom website design, small business website"
        openGraph={{
          url: 'https://ironleaftechnology.com',
          title: 'Ironleaf Technology - Professional Web Development Services',
          description: 'Expert web development, SEO, and automation solutions. Veteran-owned, results-driven development services.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-home.jpg',
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
        additionalMetaTags={[
          {
            name: 'author',
            content: 'Ironleaf Technology'
          }
        ]}
      />
      <HeroSection />
      <ServicesOverview />
      <PortfolioHighlights />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
};
