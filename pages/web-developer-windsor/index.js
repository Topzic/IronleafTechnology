import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperWindsor = () => {
  const cityData = {
    city: "Windsor",
    region: "Southwestern Ontario",
    county: "Windsor",
    ga4Prefix: "windsor",
    businessUrl: "https://ironleaftechnology.com/web-developer-windsor",
    areaServed: [
      { name: "Windsor", type: "City" },
      { name: "Chatham", type: "City" },
      { name: "Sarnia", type: "City" },
      { name: "Leamington", type: "City" },
      { name: "Southwestern Ontario", type: "AdministrativeArea" },
      { name: "Essex County", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Windsor | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Windsor, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-windsor"
        keywords="web developer Windsor, web development Windsor, web design Windsor, website developer Windsor, SEO Windsor, small business websites Windsor, local web developer Windsor, website development Southwestern Ontario, SEO services Windsor, web design Windsor Ontario, local SEO Windsor, Windsor web development company, Ontario web developer, Canadian web development Windsor"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-windsor',
          title: 'Web Developer Windsor | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Windsor. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-windsor.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Windsor',
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

export default WebDeveloperWindsor;