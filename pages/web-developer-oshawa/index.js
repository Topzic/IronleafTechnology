import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperOshawa = () => {
  const cityData = {
    city: "Oshawa",
    region: "Durham Region",
    county: "Durham Region",
    ga4Prefix: "oshawa",
    businessUrl: "https://ironleaftechnology.com/web-developer-oshawa",
    areaServed: [
      { name: "Oshawa", type: "City" },
      { name: "Whitby", type: "City" },
      { name: "Ajax", type: "City" },
      { name: "Pickering", type: "City" },
      { name: "Durham Region", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Oshawa | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Oshawa, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-oshawa"
        keywords="web developer Oshawa, web development Oshawa, web design Oshawa, website developer Oshawa, SEO Oshawa, small business websites Oshawa, local web developer Oshawa, website development Durham Region, SEO services Oshawa, web design Oshawa Ontario, local SEO Oshawa, Oshawa web development company, Ontario web developer, Canadian web development Oshawa"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-oshawa',
          title: 'Web Developer Oshawa | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Oshawa. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-oshawa.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Oshawa',
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

export default WebDeveloperOshawa;