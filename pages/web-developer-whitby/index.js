import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperWhitby = () => {
  const cityData = {
    city: "Whitby",
    region: "Durham Region",
    county: "Durham Region",
    ga4Prefix: "whitby",
    businessUrl: "https://ironleaftechnology.com/web-developer-whitby",
    areaServed: [
      { name: "Whitby", type: "City" },
      { name: "Oshawa", type: "City" },
      { name: "Ajax", type: "City" },
      { name: "Pickering", type: "City" },
      { name: "Durham Region", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Whitby | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Whitby, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-whitby"
        keywords="web developer Whitby, web development Whitby, web design Whitby, website developer Whitby, SEO Whitby, small business websites Whitby, local web developer Whitby, website development Durham Region, SEO services Whitby, web design Whitby Ontario, local SEO Whitby, Whitby web development company, Ontario web developer, Canadian web development Whitby"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-whitby',
          title: 'Web Developer Whitby | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Whitby. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-whitby.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Whitby',
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

export default WebDeveloperWhitby;