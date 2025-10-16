import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperLondon = () => {
  const cityData = {
    city: "London",
    region: "Southwestern Ontario",
    county: "London",
    ga4Prefix: "london",
    businessUrl: "https://ironleaftechnology.com/web-developer-london",
    areaServed: [
      { name: "London", type: "City" },
      { name: "St. Thomas", type: "City" },
      { name: "Woodstock", type: "City" },
      { name: "Kitchener", type: "City" },
      { name: "Southwestern Ontario", type: "AdministrativeArea" },
      { name: "Middlesex County", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer London | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in London, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-london"
        keywords="web developer London, web development London, web design London, website developer London, SEO London, small business websites London, local web developer London, website development Southwestern Ontario, SEO services London, web design London Ontario, local SEO London, London web development company, Ontario web developer, Canadian web development London"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-london',
          title: 'Web Developer London | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in London. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-london.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer London',
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

export default WebDeveloperLondon;