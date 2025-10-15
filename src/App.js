import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import GATracker from "./components/GATracker";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Services = React.lazy(() => import("./pages/Services"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const Terms = React.lazy(() => import("./pages/Terms"));
// import Support from './pages/Support';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <GATracker />
        <div className="App">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/terms" element={<Terms />} />
              {/* <Route path="/support" element={<Support />} /> */}
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
