import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperKawarthalakes = () => {
  const cityData = {
    city: "Kawartha Lakes",
    region: "Peterborough County",
    county: "Kawartha Lakes",
    ga4Prefix: "kawarthalakes",
    businessUrl: "https://ironleaftechnology.com/web-developer-kawarthalakes",
    areaServed: [
      { name: "Kawartha Lakes", type: "City" },
      { name: "Lindsay", type: "City" },
      { name: "Fenelon Falls", type: "City" },
      { name: "Bobcaygeon", type: "City" },
      { name: "Peterborough County", type: "AdministrativeArea" },
      { name: "Victoria County", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Kawartha Lakes | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Kawartha Lakes, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-kawarthalakes"
        keywords="web developer Kawartha Lakes, web development Kawartha Lakes, web design Kawartha Lakes, website developer Kawartha Lakes, SEO Kawartha Lakes, small business websites Kawartha Lakes, local web developer Kawartha Lakes, website development Lindsay Ontario, SEO services Kawartha Lakes, web design Lindsay, local SEO Kawartha Lakes, Kawartha Lakes web development company, Ontario web developer, Canadian web development Kawartha Lakes"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-kawarthalakes',
          title: 'Web Developer Kawartha Lakes | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Kawartha Lakes. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-kawarthalakes.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Kawartha Lakes',
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

export default WebDeveloperKawarthalakes;