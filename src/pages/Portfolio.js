import React from "react";
import "./Portfolio.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Portfolio = () => {
  const projects = [
    {
      title: "United Property Experts Website",
      description:
        "Professional real estate website featuring property listings, agent profiles, and comprehensive contact systems for a leading property management company.",
      technologies: [
        "WordPress",
        "Plugins",
        "SEO Optimization",
        "Google Analytics",
      ],
      outcomes:
        "Responsive design, fast performance, mobile-optimized, enhanced lead generation",
      image: "/projects/united-property-experts.png",
      quote:
        '"Outstanding website that perfectly represents our brand and drives business." - United Property Experts Team',
    },

    {
      title: "NatureGo Mobile App",
      description:
        "A cross-platform mobile app for discovering and sharing nature points of interest. Features include species identification, geospatial markers, and gamification.",
      technologies: ["React Native", "Supabase", "PostGIS", "Google Maps API"],
      outcomes:
        "5,800+ species database, real-time updates, secure authentication",
      image: "/projects/naturego.png",
      quote: '"Transformed how we connect with nature." - User Testimonial',
    },

    {
      title: "Cottage Country Marine POS System",
      description:
        "Full-stack e-commerce and inventory management system for marine retail.",
      technologies: ["React", "Node.js", "Supabase", "Barcode Integration"],
      outcomes:
        "Automated checkout, real-time inventory, customer order management",
      image: "/projects/marine.png",
      quote: '"Revolutionized our operations." - Business Owner',
    },
    {
      title: "Restaurant Website Template",
      description:
        "A modern, full-featured restaurant website template built with React, featuring an admin panel, reservation system, analytics dashboard, and email newsletter functionality. This template provides everything needed to launch a professional restaurant website quickly.",
      technologies: [
        "React 19",
        "Express.js",
        "Supabase",
        "Nodemailer",
        "i18next",
      ],
      outcomes:
        "Responsive design, multi-language support, admin panel, reservation calendar, analytics dashboard, email newsletter, PWA ready, SEO optimized",
      image: "/projects/gourmet-haven.png",
      quote:
        '"Perfect for launching professional restaurant websites quickly." - Restaurant Owner',
    },

    {
      title: "Ontario Parks Information Management",
      description:
        "Custom SharePoint sites and Power BI dashboards for provincial park operations.",
      technologies: ["SharePoint Online", "Power BI", "Power Automate"],
      outcomes:
        "Streamlined operations, improved data accuracy by 20,000 records",
      image: "/projects/ontario-parks-logo.png",
      quote:
        '"Enhanced our reporting reliability significantly." - Ontario Parks Team',
    },
  ];

  return (
    <div className="portfolio-page">
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
        <h1>Our Portfolio</h1>
        <p>Showcasing successful projects and client outcomes</p>
      </section>

      <section className="portfolio-content">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <LazyLoadImage
              src={project.image}
              alt={project.title}
              effect="blur"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                <h3>Technologies Used:</h3>
                <ul>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="outcomes">
                <h3>Key Outcomes:</h3>
                <p>{project.outcomes}</p>
              </div>
              <blockquote>{project.quote}</blockquote>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
