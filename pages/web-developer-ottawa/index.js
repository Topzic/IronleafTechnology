import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperOttawa = () => {
  const cityData = {
    city: "Ottawa",
    region: "Eastern Ontario",
    county: "Ottawa",
    ga4Prefix: "ottawa",
    businessUrl: "https://ironleaftechnology.com/web-developer-ottawa",
    areaServed: [
      { name: "Ottawa", type: "City" },
      { name: "Gatineau", type: "City" },
      { name: "Kanata", type: "City" },
      { name: "Orleans", type: "City" },
      { name: "Eastern Ontario", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Ottawa | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Ottawa, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-ottawa"
        keywords="web developer Ottawa, web development Ottawa, web design Ottawa, website developer Ottawa, SEO Ottawa, small business websites Ottawa, local web developer Ottawa, website development Eastern Ontario, SEO services Ottawa, web design Ottawa Ontario, local SEO Ottawa, Ottawa web development company, Ontario web developer, Canadian web development Ottawa"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-ottawa',
          title: 'Web Developer Ottawa | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Ottawa. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-ottawa.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Ottawa',
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

export default WebDeveloperOttawa;