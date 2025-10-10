import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Blog.css';

const BlogPost = () => {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      title: '10 Tech Tips for Small Businesses in Peterborough',
      excerpt: 'Essential technology strategies to boost productivity and security.',
      date: 'October 10, 2025',
      readTime: '5 min read',
      fullContent: `
        <h3>Introduction</h3>
        <p>In today's digital age, small businesses in Peterborough need to leverage technology to stay competitive. Here are 10 essential tech tips tailored for local entrepreneurs.</p>

        <h3>1. Implement Cloud Storage Solutions</h3>
        <p>Move your data to the cloud with services like Microsoft OneDrive or Google Drive. This ensures your files are accessible from anywhere and automatically backed up.</p>

        <h3>2. Use Accounting Software</h3>
        <p>Switch from manual bookkeeping to automated systems like QuickBooks or Xero. These tools save time and reduce errors in financial management.</p>

        <h3>3. Invest in Cybersecurity</h3>
        <p>Protect your business with antivirus software, firewalls, and regular security updates. Consider multi-factor authentication for all accounts.</p>

        <h3>4. Embrace Social Media Marketing</h3>
        <p>Create profiles on platforms like Facebook, Instagram, and LinkedIn. Use free tools like Canva for creating engaging content.</p>

        <h3>5. Utilize Point-of-Sale Systems</h3>
        <p>Upgrade to modern POS systems that integrate inventory management, customer data, and payment processing.</p>

        <h3>6. Adopt Project Management Tools</h3>
        <p>Use tools like Trello, Asana, or Microsoft Teams to organize tasks, collaborate with team members, and track project progress.</p>

        <h3>7. Implement Email Marketing</h3>
        <p>Build customer relationships with professional email campaigns using tools like Mailchimp or Constant Contact.</p>

        <h3>8. Go Mobile-Friendly</h3>
        <p>Ensure your website is responsive and works perfectly on mobile devices. Most customers now browse on smartphones.</p>

        <h3>9. Use Analytics Tools</h3>
        <p>Track your website traffic and customer behavior with Google Analytics to make data-driven decisions.</p>

        <h3>10. Stay Updated with Training</h3>
        <p>Invest in ongoing tech training for yourself and your staff. Local resources like Peterborough tech workshops can be invaluable.</p>

        <h3>Conclusion</h3>
        <p>By implementing these tech tips, Peterborough small businesses can improve efficiency, security, and customer engagement. Start small and gradually adopt these technologies for long-term success.</p>
      `
    },
    {
      id: 2,
      title: 'Automating Workflows with Microsoft Power Platform',
      excerpt: 'How to streamline operations using Power Apps and Power Automate.',
      date: 'October 5, 2025',
      readTime: '7 min read',
      fullContent: `
        <h3>The Power of Automation</h3>
        <p>Microsoft Power Platform offers powerful tools to automate business processes without extensive coding knowledge. Let's explore how Power Apps and Power Automate can transform your operations.</p>

        <h3>Understanding Power Apps</h3>
        <p>Power Apps allows you to create custom business applications quickly. Whether you need a simple form or a complex workflow app, Power Apps provides a drag-and-drop interface to build solutions tailored to your needs.</p>

        <h3>Leveraging Power Automate</h3>
        <p>Power Automate enables you to create automated workflows between your favorite apps and services. Connect Microsoft 365, Dynamics 365, and hundreds of other services to automate repetitive tasks.</p>

        <h3>Real-World Applications</h3>
        <ul>
          <li><strong>Expense Approval Process:</strong> Create a Power App for expense submissions and use Power Automate to route approvals automatically.</li>
          <li><strong>Customer Onboarding:</strong> Automate the process of setting up new customer accounts across multiple systems.</li>
          <li><strong>Inventory Management:</strong> Set up alerts when stock levels are low and automatically reorder items.</li>
        </ul>

        <h3>Getting Started</h3>
        <p>Begin with simple workflows and gradually expand. Microsoft provides extensive documentation and community resources to help you learn.</p>

        <h3>Integration with Existing Systems</h3>
        <p>Power Platform integrates seamlessly with your existing Microsoft investments, making it easy to extend current tools rather than replace them.</p>

        <h3>Best Practices</h3>
        <p>Start with processes that are repetitive and time-consuming. Involve stakeholders early in the design process and test thoroughly before deployment.</p>

        <h3>Measuring Success</h3>
        <p>Track metrics like time saved, error reduction, and user satisfaction to demonstrate the value of your automation initiatives.</p>

        <h3>Conclusion</h3>
        <p>Microsoft Power Platform empowers businesses to become more efficient and agile. By automating workflows, you can focus on strategic activities that drive growth.</p>
      `
    },
    {
      id: 3,
      title: 'Security Best Practices for Remote Teams',
      excerpt: 'Protecting your business data in the modern work environment.',
      date: 'September 28, 2025',
      readTime: '6 min read',
      fullContent: `
        <h3>The Remote Work Security Challenge</h3>
        <p>With the rise of remote work, businesses face new security challenges. Protecting sensitive data while enabling productivity is crucial for modern organizations.</p>

        <h3>Secure Network Access</h3>
        <p>Implement Virtual Private Networks (VPNs) for all remote connections. This encrypts data transmission and protects against eavesdropping on public Wi-Fi networks.</p>

        <h3>Multi-Factor Authentication (MFA)</h3>
        <p>Enable MFA on all accounts and systems. This adds an extra layer of security beyond passwords, making unauthorized access much more difficult.</p>

        <h3>Device Management Policies</h3>
        <p>Establish clear policies for personal and company devices. Use Mobile Device Management (MDM) solutions to enforce security standards and remotely wipe devices if lost or stolen.</p>

        <h3>Data Encryption</h3>
        <p>Ensure all sensitive data is encrypted both at rest and in transit. Use tools like BitLocker for disk encryption and HTTPS for web communications.</p>

        <h3>Regular Security Training</h3>
        <p>Conduct ongoing security awareness training for all team members. Teach them to recognize phishing attempts and follow safe computing practices.</p>

        <h3>Access Control Principles</h3>
        <p>Implement the principle of least privilege. Users should only have access to the data and systems necessary for their job functions.</p>

        <h3>Incident Response Planning</h3>
        <p>Develop and regularly test incident response plans. Know what to do in case of a security breach and have communication protocols in place.</p>

        <h3>Backup and Recovery</h3>
        <p>Maintain regular backups of critical data and test restoration procedures. Use the 3-2-1 rule: 3 copies, 2 different media types, 1 offsite.</p>

        <h3>Monitoring and Logging</h3>
        <p>Implement security monitoring tools to detect unusual activity. Regular log reviews can help identify potential threats early.</p>

        <h3>Third-Party Risk Management</h3>
        <p>Assess the security practices of vendors and partners. Ensure they meet your security standards before sharing data.</p>

        <h3>Conclusion</h3>
        <p>Remote work security requires a comprehensive approach combining technology, policies, and user education. By implementing these best practices, you can protect your business while embracing flexible work arrangements.</p>
      `
    },
    {
      id: 4,
      title: 'Local Tech Trends: Peterborough 2025',
      excerpt: 'What\'s happening in our community\'s technology landscape.',
      date: 'September 20, 2025',
      readTime: '4 min read',
      fullContent: `
        <h3>Peterborough's Tech Evolution</h3>
        <p>Peterborough is experiencing significant growth in its technology sector. From startups to established businesses, our community is embracing digital transformation.</p>

        <h3>Growing Startup Ecosystem</h3>
        <p>The Peterborough tech startup scene is thriving. With support from local incubators and accelerators, entrepreneurs are launching innovative solutions in AI, fintech, and health tech.</p>

        <h3>Digital Transformation Initiatives</h3>
        <p>Local businesses are increasingly adopting cloud technologies, automation tools, and data analytics. This shift is improving efficiency and competitiveness.</p>

        <h3>Educational Partnerships</h3>
        <p>Collaboration between local universities, colleges, and tech companies is creating a skilled workforce. Programs in software development and cybersecurity are preparing the next generation of tech professionals.</p>

        <h3>Smart City Projects</h3>
        <p>Peterborough is implementing smart city technologies for traffic management, environmental monitoring, and public services. IoT sensors and data analytics are enhancing community living.</p>

        <h3>Remote Work Infrastructure</h3>
        <p>Improved internet infrastructure and co-working spaces are supporting the growing remote work trend. High-speed fiber networks are connecting rural and urban areas.</p>

        <h3>Sustainability Focus</h3>
        <p>Tech companies in Peterborough are developing solutions for environmental challenges, including renewable energy management and sustainable agriculture technologies.</p>

        <h3>Community Tech Events</h3>
        <p>Regular meetups, hackathons, and conferences are fostering collaboration and knowledge sharing among tech enthusiasts and professionals.</p>

        <h3>Economic Impact</h3>
        <p>The tech sector is becoming a significant contributor to Peterborough's economy, creating high-paying jobs and attracting investment.</p>

        <h3>Conclusion</h3>
        <p>Peterborough's technology landscape is dynamic and promising. By staying informed about these trends, businesses and individuals can position themselves for success in our evolving digital economy.</p>
      `
    }
  ];

  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="blog-page">
        <section className="hero-section">
          <h1>Article Not Found</h1>
          <p>The requested article could not be found.</p>
          <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        </section>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <section className="blog-post-hero">
        <div className="blog-post-container">
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        </div>
      </section>

      <section className="blog-content">
        <div className="blog-post-container">
          <div 
            className="full-article-content"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />
        </div>
      </section>
    </div>
  );
};

export default BlogPost;