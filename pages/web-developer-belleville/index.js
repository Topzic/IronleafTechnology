import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperBelleville = () => {
  const cityData = {
    city: "Belleville",
    region: "Quinte Region",
    county: "Hastings County",
    ga4Prefix: "belleville",
    businessUrl: "https://ironleaftechnology.com/web-developer-belleville",
    areaServed: [
      { name: "Belleville", type: "City" },
      { name: "Quinte West", type: "City" },
      { name: "Prince Edward County", type: "AdministrativeArea" },
      { name: "Hastings County", type: "AdministrativeArea" },
      { name: "Quinte Region", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Belleville | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Belleville, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-belleville"
        keywords="web developer Belleville, web development Belleville, web design Belleville, website developer Belleville, SEO Belleville, small business websites Belleville, local web developer Belleville, website development Quinte Region, SEO services Belleville, web design Belleville Ontario, local SEO Belleville, Belleville web development company, Ontario web developer, Canadian web development Belleville"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-belleville',
          title: 'Web Developer Belleville | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Belleville. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-belleville.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Belleville',
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
      <LocalSEOPage {...cityData} />
    </>
  );
};

export default WebDeveloperBelleville;