import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga4";
import {
  faCode,
  faCogs,
  faClock,
  faShoppingCart,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const ServicesOverview = () => {
  const handleViewPrices = (serviceTitle) => {
    ReactGA.event("home_view_prices", {
      page_path: window.location.hash || "/",
      service_title: serviceTitle,
    });
  };

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Custom websites from simple landing pages to advanced online stores, designed to be responsive, accessible, and mobile-friendly. We create secure, user-focused sites that perform well and engage your audience.",
      icon: faCode,
      link: "/pricing",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Online stores and marketplace platforms with secure payment integration, inventory management, and advanced e-commerce features.",
      icon: faShoppingCart,
      link: "/pricing",
    },
    {
      title: "IT Support & Infrastructure",
      description:
        "Reliable IT infrastructure and support services to keep your business systems running smoothly, securely, and efficiently. From server management to network setup and ongoing technical assistance.",
      icon: faServer,
      link: "/pricing",
    },
    {
      title: "Hourly Development Services",
      description:
        "Flexible hourly development and consulting for ongoing projects, maintenance, custom work, and technical support at $75/hour.",
      icon: faClock,
      link: "/pricing",
    },
  ];

  return (
    <section className="py-20 bg-light animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-slide-up">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First row: 3 services */}
          {services.slice(0, 3).map((service, index) => {
            const cardGradients = [
              'bg-gradient-to-br from-white to-gray-50',
              'bg-gradient-to-br from-white to-green-50',
              'bg-gradient-to-br from-white to-blue-50'
            ];
            return (
              <div
                key={index}
                className={`${cardGradients[index]} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center text-center animate-slide-up border border-gray-100`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-secondary text-5xl mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                <p className="text-gray leading-relaxed mb-6 flex-grow">{service.description}</p>
                <Link
                  to={service.link}
                  className="bg-secondary hover:bg-primary text-white font-medium py-2 rounded-md px-6 transition-all duration-300 hover:shadow-md hover:scale-105 mt-auto"
                  onClick={() => handleViewPrices(service.title)}
                >
                  View Pricing
                </Link>
              </div>
            );
          })}
          {/* Second row: Hourly and View All */}
          <div className="lg:col-span-1">
            <div
              className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center text-center animate-slide-up border border-gray-100"
              style={{ animationDelay: `0.3s` }}
            >
              <div className="text-secondary text-5xl mb-4 transition-transform duration-300 hover:scale-110 hover:-rotate-3">
                <FontAwesomeIcon icon={services[3].icon} />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">{services[3].title}</h3>
              <p className="text-gray leading-relaxed mb-6 flex-grow">{services[3].description}</p>
              <Link
                to={services[3].link}
                className="bg-secondary hover:bg-primary text-white font-medium py-2 px-6 rounded-md transition-all duration-300 hover:shadow-md hover:scale-105 mt-auto"
                onClick={() => handleViewPrices(services[3].title)}
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Link
              to="/services"
              className="block bg-cover bg-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[300px] relative overflow-hidden group"
              style={{
                backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1668916513831-0ed0f170737a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1288)',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">View All Services</h3>
                  <p className="text-lg">Explore our complete range of solutions</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
