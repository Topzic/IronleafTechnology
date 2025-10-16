import React from "react";

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
    <section className="pt-20 pb-40 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-slide-up">
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-secondary text-6xl absolute top-4 left-4 opacity-10">&quot;</div>
              <p className="text-dark italic leading-relaxed mb-6 pl-8">{testimonial.text}</p>
              <span className="text-secondary font-semibold text-lg block text-right">— {testimonial.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;