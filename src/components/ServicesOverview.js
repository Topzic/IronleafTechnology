import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Custom websites and applications built with modern technologies.',
      icon: <i className="fas fa-code"></i>,
      link: '/pricing'
    },
    {
      title: 'Microsoft 365 Optimization',
      description: 'Streamline your business processes with Power Platform tools.',
      icon: <i className="fas fa-chart-line"></i>,
      link: '/pricing'
    },
    {
      title: 'Custom Software Solutions',
      description: 'Tailored solutions for your unique business needs.',
      icon: <i className="fas fa-cogs"></i>,
      link: '/pricing'
    },
    {
      title: 'Website Optimization & Audit',
      description: 'Comprehensive website audits, SEO improvements, and performance optimization.',
      icon: <i className="fas fa-search"></i>,
      link: '/pricing'
    },
    {
      title: 'Hourly Development Services',
      description: 'Flexible hourly development and consulting for ongoing projects and maintenance.',
      icon: <i className="fas fa-clock"></i>,
      link: '/pricing'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Online stores and marketplace platforms with secure payment integration.',
      icon: <i className="fas fa-shopping-cart"></i>,
      link: '/pricing'
    },
    // {
    //   title: 'Geospatial & Field Tech',
    //   description: 'Location-based solutions for outdoor and field operations.',
    //   icon: '🗺️',
    //   link: '/pricing'
    // }
  ];

  return (
    <section className="services-overview">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">View Pricing</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;