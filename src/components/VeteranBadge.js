import React from 'react';
import './VeteranBadge.css';

const VeteranBadge = () => {
  return (
    <section className="veteran-badge">
      <div className="container">
        <div className="badge-content">
          <h2>Veteran-Owned Business</h2>
          <p>Proudly serving Peterborough and surrounding areas with integrity and expertise.</p>
          <div className="local-highlight">
            <h3>Local Service Area</h3>
            <p>Peterborough, Ontario and surrounding communities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeteranBadge;