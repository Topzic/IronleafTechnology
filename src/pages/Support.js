import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-page">
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
        <h1>Client Support Portal</h1>
        <p>Access documentation, submit tickets, and check system status</p>
      </section>

      <section className="support-content">
        <div className="support-grid">
          <div className="support-card">
            <h2>Client Login</h2>
            <p>Access your personalized support dashboard</p>
            <button className="login-btn">Login</button>
          </div>

          <div className="support-card">
            <h2>Documentation</h2>
            <p>SOPs, guides, and best practices</p>
            <button className="docs-btn">View Docs</button>
          </div>

          <div className="support-card">
            <h2>Helpdesk</h2>
            <p>Submit support tickets and track issues</p>
            <button className="ticket-btn">Submit Ticket</button>
          </div>

          <div className="support-card">
            <h2>System Status</h2>
            <p>Real-time uptime monitoring</p>
            <div className="status-indicator">
              <span className="status-dot operational"></span>
              All Systems Operational
            </div>
            <button className="status-link">View Status Page</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;