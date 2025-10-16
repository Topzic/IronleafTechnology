import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperHamilton = () => {
  const cityData = {
    city: "Hamilton",
    region: "Golden Horseshoe",
    county: "Hamilton",
    ga4Prefix: "hamilton",
    businessUrl: "https://ironleaftechnology.com/web-developer-hamilton",
    areaServed: [
      { name: "Hamilton", type: "City" },
      { name: "Burlington", type: "City" },
      { name: "Oakville", type: "City" },
      { name: "Milton", type: "City" },
      { name: "Golden Horseshoe", type: "AdministrativeArea" },
      { name: "Halton Region", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Hamilton | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Hamilton, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-hamilton"
        keywords="web developer Hamilton, web development Hamilton, web design Hamilton, website developer Hamilton, SEO Hamilton, small business websites Hamilton, local web developer Hamilton, website development Golden Horseshoe, SEO services Hamilton, web design Hamilton Ontario, local SEO Hamilton, Hamilton web development company, Ontario web developer, Canadian web development Hamilton"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-hamilton',
          title: 'Web Developer Hamilton | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Hamilton. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-hamilton.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Hamilton',
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

export default WebDeveloperHamilton;