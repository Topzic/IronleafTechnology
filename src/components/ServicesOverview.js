import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Custom websites and applications built with modern technologies.',
      icon: '🌐',
      link: '/pricing'
    },
    {
      title: 'Microsoft 365 Optimization',
      description: 'Streamline your business processes with Power Platform tools.',
      icon: '⚡',
      link: '/pricing'
    },
    {
      title: 'Security Camera Solutions',
      description: 'Professional installation and monitoring for peace of mind.',
      icon: '📹',
      link: '/pricing'
    },
    {
      title: 'Power BI Analytics',
      description: 'Transform your data into actionable insights.',
      icon: '📊',
      link: '/pricing'
    },
    {
      title: 'Custom Software & DevOps',
      description: 'Tailored solutions for your unique business needs.',
      icon: '🔧',
      link: '/pricing'
    },
    {
      title: 'Geospatial & Field Tech',
      description: 'Location-based solutions for outdoor and field operations.',
      icon: '🗺️',
      link: '/pricing'
    }
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