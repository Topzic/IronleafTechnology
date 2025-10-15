import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PortfolioHighlights = () => {
  const highlights = [
    {
      title: "United Property Experts Website",
      description: "Professional real estate website with property listings and lead generation.",
      image: "/projects/united-property-experts.png",
    },
    {
      title: "NatureGo Mobile App",
      description: "Cross-platform app for nature discovery with 5,800+ species database.",
      image: "/projects/naturego.png",
    },
    {
      title: "Cottage Country Marine POS",
      description: "E-commerce and inventory system for marine retail operations.",
      image: "/projects/marine.png",
    },
  ];

  return (
    <section className="py-20 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-slide-up">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-light to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col min-h-[400px] animate-slide-up ${
                index === 1 ? 'md:scale-105 md:z-10 md:shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-dark mb-3">{project.title}</h3>
                <p className="text-gray leading-relaxed mb-6 flex-grow">{project.description}</p>
                <Link
                  to="/portfolio"
                  className="bg-secondary hover:bg-primary text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-md text-center"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;