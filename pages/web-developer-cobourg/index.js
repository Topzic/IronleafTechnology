import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperCobourg = () => {
  const cityData = {
    city: "Cobourg",
    region: "Northumberland County",
    county: "Northumberland County",
    ga4Prefix: "cobourg",
    businessUrl: "https://ironleaftechnology.com/web-developer-cobourg",
    areaServed: [
      { name: "Cobourg", type: "City" },
      { name: "Port Hope", type: "City" },
      { name: "Northumberland County", type: "AdministrativeArea" },
      { name: "Peterborough County", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Cobourg | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Cobourg, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-cobourg"
        keywords="web developer Cobourg, web development Cobourg, web design Cobourg, website developer Cobourg, SEO Cobourg, small business websites Cobourg, local web developer Cobourg, website development Northumberland County, SEO services Cobourg, web design Cobourg Ontario, local SEO Cobourg, Cobourg web development company, Ontario web developer, Canadian web development Cobourg"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-cobourg',
          title: 'Web Developer Cobourg | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Cobourg. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-cobourg.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Cobourg',
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

export default WebDeveloperCobourg;