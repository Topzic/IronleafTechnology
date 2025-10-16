import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperPeterborough = () => {
  const cityData = {
    city: "Peterborough",
    region: "Kawartha Lakes",
    county: "Peterborough County",
    ga4Prefix: "peterborough",
    businessUrl: "https://ironleaftechnology.com/web-developer-peterborough",
    areaServed: [
      { name: "Peterborough", type: "City" },
      { name: "Kawartha Lakes", type: "City" },
      { name: "Lindsay", type: "City" },
      { name: "Cobourg", type: "City" },
      { name: "Port Hope", type: "City" },
      { name: "Peterborough County", type: "AdministrativeArea" },
      { name: "Northumberland County", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Peterborough | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Peterborough, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-peterborough"
        keywords="web developer Peterborough, web development Peterborough, web design Peterborough, website developer Peterborough, SEO Peterborough, small business websites Peterborough, local web developer Peterborough, website development Kawartha Lakes, SEO services Peterborough, web design Lindsay Ontario, local SEO Peterborough, Peterborough web development company, Ontario web developer, Canadian web development Peterborough"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-peterborough',
          title: 'Web Developer Peterborough | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Peterborough. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-peterborough.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Peterborough',
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

export default WebDeveloperPeterborough;
