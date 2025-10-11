import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'Local Business Owner',
      text: 'Ironleaf Technology transformed our operations with their custom software. Highly recommend!'
    },
    {
      name: 'Jane Smith',
      company: 'Public Sector',
      text: 'Their Power BI dashboards have given us incredible insights. Professional and reliable.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;