import React from "react";
import { NextSeo } from 'next-seo';
import LocalSEOPage from "../../components/LocalSEOPage";

const WebDeveloperScarborough = () => {
  const cityData = {
    city: "Scarborough",
    region: "Toronto",
    county: "Toronto",
    ga4Prefix: "scarborough",
    businessUrl: "https://ironleaftechnology.com/web-developer-scarborough",
    areaServed: [
      { name: "Scarborough", type: "City" },
      { name: "Toronto", type: "City" },
      { name: "North York", type: "City" },
      { name: "Etobicoke", type: "City" },
      { name: "Mississauga", type: "City" },
      { name: "Greater Toronto Area", type: "AdministrativeArea" },
      { name: "Ontario", type: "AdministrativeArea" }
    ]
  };

  return (
    <>
      <NextSeo
        title="Web Developer Scarborough | Ironleaf Technology - Local SEO & Web Design"
        description="Looking for a web developer in Scarborough, Ontario? Ironleaf Technology builds fast, SEO-friendly websites with ongoing support. Local and veteran-owned business."
        canonical="https://ironleaftechnology.com/web-developer-scarborough"
        keywords="web developer Scarborough, web development Scarborough, web design Scarborough, website developer Scarborough, SEO Scarborough, small business websites Scarborough, local web developer Scarborough, website development Toronto, SEO services Scarborough, web design Scarborough Ontario, local SEO Scarborough, Scarborough web development company, Ontario web developer, Canadian web development Scarborough"
        openGraph={{
          url: 'https://ironleaftechnology.com/web-developer-scarborough',
          title: 'Web Developer Scarborough | Ironleaf Technology - Local SEO & Web Design',
          description: 'Professional web development services in Scarborough. Custom websites, SEO optimization, and local business solutions.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-scarborough.jpg',
              width: 1200,
              height: 630,
              alt: 'Ironleaf Technology - Web Developer Scarborough',
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

export default WebDeveloperScarborough;