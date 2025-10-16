import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faClock,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Results-Driven Development",
      description: "Every website I build is optimized for conversions, not just aesthetics. My clients see an average 40% increase in qualified leads.",
      stat: "40% avg lead increase",
      icon: faRocket,
    },
    {
      title: "Fast Implementation",
      description: "From concept to launch in 2-4 weeks. No long timelines or endless revisions. Get your business online quickly and start generating revenue.",
      stat: "2-4 week delivery",
      icon: faClock,
    },
    {
      title: "Ongoing Support Included",
      description: "Website maintenance, security updates, and technical support included. I don't disappear after launch - I'm here for the long term.",
      stat: "24/7 support",
      icon: faHeadset,
    },
  ];

  return (
    <section className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 animate-slide-up">
            Why Choose Ironleaf Technology?
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            More than just a web developer - I'm your business growth partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center animate-slide-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="text-secondary text-6xl mb-6 transition-transform duration-300 hover:scale-110">
                <FontAwesomeIcon icon={benefit.icon} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {benefit.stat}
              </div>
              <h3 className="text-xl font-semibold text-dark mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
