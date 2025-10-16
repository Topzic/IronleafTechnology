import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperAjax = () => {
  const cityData = {
    city: "Ajax",
    region: "Durham Region",
    county: "Durham Region",
    ga4Prefix: "ajax",
    businessUrl: "https://ironleaftechnology.com/web-developer-ajax",
    areaServed: [
      { name: "Ajax", type: "City" },
      { name: "Pickering", type: "City" },
      { name: "Whitby", type: "City" },
      { name: "Oshawa", type: "City" },
      { name: "Durham Region", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Ajax | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Ajax, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-ajax"
        keywords="web developer Ajax, web development Ajax, web design Ajax, website developer Ajax, SEO Ajax, small business websites Ajax, local web developer Ajax, website development Durham Region, SEO services Ajax, web design Ajax Ontario, local SEO Ajax, Ajax web development company, Ontario web developer, Canadian web development Ajax"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-ajax',
          title: 'Web Developer Ajax | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Ajax. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-ajax.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Ajax',
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

export default WebDeveloperAjax;