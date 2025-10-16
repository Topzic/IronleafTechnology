import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: '10 Tech Tips for Small Businesses in Peterborough',
      excerpt: 'Essential technology strategies to boost productivity and security.',
      date: 'October 10, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Automating Workflows with Low-Code Platforms',
      excerpt: 'How to streamline operations using automation tools and custom apps.',
      date: 'October 5, 2025',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Security Best Practices for Remote Teams',
      excerpt: 'Protecting your business data in the modern work environment.',
      date: 'September 28, 2025',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Local Tech Trends: Peterborough 2025',
      excerpt: 'What\'s happening in our community\'s technology landscape.',
      date: 'September 20, 2025',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Why PageSpeed Scores Matter: Making Your Website Lightning Fast',
      excerpt: 'Learn how good PageSpeed scores can improve user experience, SEO, and business success.',
      date: 'October 12, 2025',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Why Professional Website Development Beats DIY: Save Time, Avoid Headaches, and Grow Your Business',
      excerpt: 'Discover why hiring a professional developer like me can save you countless hours and deliver results that DIY website builders simply can\'t match.',
      date: 'October 15, 2025',
      readTime: '8 min read'
    }
  ];

  // Sort articles by date (most recent first)
  const sortedArticles = articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Descending order (newest first)
  });

  return (
    <div className="blog-page">
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
        <h1>Insights & Blog</h1>
        <p>Expert advice on technology, automation, and local business trends</p>
      </section>

      <section className="blog-content">
        <div className="articles-grid">
          {sortedArticles.map((article) => (
            <article key={article.id} className="article-card">
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <Link href={`/blog/${article.id}`} className="read-more">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: {} };
};

