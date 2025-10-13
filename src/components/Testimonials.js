import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      company: 'United Property Experts',
      text: 'Ian completely transformed our online presence with a professional real estate website. The property listings, agent profiles, and contact systems work flawlessly. We\'ve seen a 40% increase in qualified leads since launch. His attention to detail and local SEO expertise made all the difference.'
    },
    {
      company: 'Cottage Country Marine',
      text: 'Ian\'s POS system and inventory management solution streamlined our entire retail operation. The barcode integration, automated checkout, and real-time inventory tracking have reduced errors by 60%. What impressed me most was how he understood our specific needs in the marine retail space.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Client Success Stories</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <span>{testimonial.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;