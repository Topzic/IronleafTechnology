import React from "react";
import { NextSeo } from 'next-seo';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faClock,
  faLock,
  faHandsHelping,
  faLeaf,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="about-page">
      <NextSeo
        title="About Ian Cunningham - Veteran-Owned Web Developer"
        description="Meet Ian Cunningham, veteran-owned web developer. Canadian Armed Forces veteran with 10+ years experience in software engineering, IT support, and business technology solutions."
        canonical="https://ironleaftechnology.com/about"
        keywords="Ian Cunningham biography, veteran web developer, Canadian Armed Forces veteran, software engineer, veteran-owned business, military veteran entrepreneur, IT professional, veteran web development, about Ironleaf Technology"
        openGraph={{
          url: 'https://ironleaftechnology.com/about',
          title: 'About Ian Cunningham - Veteran Web Developer',
          description: 'Learn about Ian Cunningham, Canadian Armed Forces veteran and founder of Ironleaf Technology. Veteran-owned web development and IT services.',
          images: [
            {
              url: 'https://ironleaftechnology.com/og-about.jpg',
              width: 1200,
              height: 630,
              alt: 'Ian Cunningham - Veteran Web Developer',
            },
          ],
          siteName: 'Ironleaf Technology',
        }}
        twitter={{
          handle: '@ironleafprod',
          site: '@ironleafprod',
          cardType: 'summary_large_image',
        }}
      />

      {/* Breadcrumb Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ironleaftechnology.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": "https://ironleaftechnology.com/about"
            }
          ]
        })
      }} />
      <section className="hero-section">
        <div className="animated-circles">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5"></span>
          <span className="circle circle6"></span>
          <span className="circle circle7"></span>
          <span className="circle circle8"></span>
          <span className="circle circle9"></span>
          <span className="circle circle10"></span>
          <span className="circle circle11"></span>
          <span className="circle circle12"></span>
        </div>
        <h1>About Me</h1>
        <p>
          Driven by integrity, reliability, security, service, sustainability,
          and clear communication.
        </p>
      </section>

      <section className="founder-bio">
        <div className="bio-content">
          <LazyLoadImage
            src="/projects/profile.jpg"
            alt="Ian Cunningham"
            // effect="blur"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="bio-text">
            <h3>Ian Cunningham</h3>
            <p>Veteran, Software Engineer, Entrepreneur</p>
            <p>I am an Canadian Armed Forces veteran and software engineering professional with over a decade of experience in technology and military service. As a former infantry specialist, I honed skills in discipline, teamwork, and mission-critical operations during platoon leadership and joint-force exercises. My Honors Advanced Diploma in Software Engineering Technology, combined with hands-on roles in IT support and project management at Ontario Parks, drives my commitment to sustainable, reliable tech solutions. A passionate outdoor enthusiast who loves hiking and running in Peterborough's natural surroundings, I am dedicated to empowering local businesses and organizations with technology that fosters growth, efficiency, and community impact. I am committed to helping fellow Canadians achieve their business goals with information technology—learn more about <a href="/services">my services</a>.</p>
            <p>Outside of work, I enjoy hiking, trail running, and exploring the beautiful natural landscapes around Peterborough. I am passionate about sustainability and environmental conservation, which aligns with my professional values of integrity and service.</p>
          </div>
        </div>
      </section>

      <section className="mission-values">
        <h2>My Mission, Vision & Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FontAwesomeIcon icon={faShieldAlt} className="value-icon" />
            <h3>Integrity</h3>
            <p>Honest, ethical practices in all my dealings.</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faClock} className="value-icon" />
            <h3>Reliability</h3>
            <p>Dependable solutions you can count on.</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faLock} className="value-icon" />
            <h3>Security</h3>
            <p>Protecting your data and systems with the highest standards.</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faHandsHelping} className="value-icon" />
            <h3>Service</h3>
            <p>Exceptional customer service and support.</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faLeaf} className="value-icon" />
            <h3>Sustainability</h3>
            <p>Environmentally conscious practices and solutions.</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faComments} className="value-icon" />
            <h3>Clear Communication</h3>
            <p>Transparent, straightforward interactions.</p>
          </div>
        </div>
      </section>

      <section className="community-commitment">
        <h2>My Community & Environmental Commitment</h2>
        <p>
          At Ironleaf Technology, I'm committed to giving back to my community and safeguarding our environment. As a Peterborough resident and outdoor enthusiast, I actively support local conservation efforts, provide discounted services to veterans and nonprofits, and implement eco-friendly practices in my operations, such as using energy-efficient tools and promoting digital solutions that reduce paper waste.
        </p>
      </section>
    </div>
  );
};
