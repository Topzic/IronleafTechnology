import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperToronto = () => {
  const cityData = {
    city: "Toronto",
    region: "Greater Toronto Area",
    county: "Toronto",
    ga4Prefix: "toronto",
    businessUrl: "https://ironleaftechnology.com/web-developer-toronto",
    areaServed: [
      { name: "Toronto", type: "City" },
      { name: "Scarborough", type: "City" },
      { name: "North York", type: "City" },
      { name: "Etobicoke", type: "City" },
      { name: "Mississauga", type: "City" },
      { name: "Brampton", type: "City" },
      { name: "Markham", type: "City" },
      { name: "Vaughan", type: "City" },
      { name: "Greater Toronto Area", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Toronto | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Toronto, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-toronto"
        keywords="web developer Toronto, web development Toronto, web design Toronto, website developer Toronto, SEO Toronto, small business websites Toronto, local web developer Toronto, website development Greater Toronto Area, SEO services Toronto, web design Toronto Ontario, local SEO Toronto, Toronto web development company, Ontario web developer, Canadian web development Toronto"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-toronto',
          title: 'Web Developer Toronto | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Toronto. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-toronto.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Toronto',
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

export default WebDeveloperToronto;