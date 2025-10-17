import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUsers,
  faCogs,
  faUserFriends,
  faChartBar,
  faRobot,
  faLink,
  faShieldAlt,
  faRocket,
  faBullseye,
  faChartLine,
  faCheck,
  faStar,
  faArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LeadAgent = () => {
  // Check if Lead Agent feature is enabled
  if (process.env.NEXT_PUBLIC_LEAD_AGENT_ENABLED !== "true") {
    return (
      <div
        style={{
          fontFamily:
            'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ lineHeight: "48px" }}>
          <style
            dangerouslySetInnerHTML={{
              __html: `body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}`,
            }}
          />
          <h1
            className="next-error-h1"
            style={{
              display: "inline-block",
              margin: "0 20px 0 0",
              paddingRight: "23px",
              fontSize: "24px",
              fontWeight: "500",
              verticalAlign: "top",
            }}
          >
            404
          </h1>
          <div style={{ display: "inline-block" }}>
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "28px",
              }}
            >
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>
          Lead Agent - AI-Powered Lead Management | Ironleaf Technology
        </title>
        <meta
          name="description"
          content="Transform your lead generation with our AI-powered Lead Agent. Embeddable forms, automated replies, and comprehensive dashboard for seamless customer engagement."
        />
        <meta
          name="keywords"
          content="lead generation, AI automation, customer forms, email replies, CRM"
        />
        <style jsx>{`
          .hero-gradient {
            background: linear-gradient(
              135deg,
              #2d5016 0%,
              #4a7c59 50%,
              #6b8e5a 100%
            );
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          .pricing-card {
            background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.8);
          }
          .feature-icon {
            background: linear-gradient(135deg, #2d5016, #4a7c59);
            box-shadow: 0 8px 20px rgba(45, 80, 22, 0.3);
          }
          .floating-animation {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </Head>
      <Navbar />
      <main className="bg-light mt-[40px]">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/projects/background.webp')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="mb-8">
              {/* <span className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🚀 Revolutionary AI-Powered Lead Management
              </span> */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Turn Leads Into
                <span className="block text-green-300">Revenue</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
                Capture unlimited leads with beautiful forms, then let AI handle
                personalized responses that convert prospects into
                customers—24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Start Free Trial
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
              <button className="glass-card text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-80 transition-all duration-300 border-2 border-white border-opacity-30">
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-sm opacity-80">Unlimited Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">AI Responses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-80">Response Rate</div>
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full floating-animation"></div>
          <div
            className="absolute bottom-20 right-10 w-24 h-24 bg-green-500 bg-opacity-20 rounded-full floating-animation"
            style={{ animationDelay: "2s" }}
          ></div>
        </section>

        {/* Product Structure Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Three Flexible Plans for Every Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start free, upgrade as you grow. All plans include metered
                overages for extra usage.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Lead Form Product */}
              <div className="pricing-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-2xl font-bold">
                  FREE TIER
                </div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 feature-icon rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-3xl text-white"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Lead Forms
                  </h3>
                  <div className="text-5xl font-bold text-primary mb-2">$0</div>
                  <div className="text-gray-600 mb-6">per month</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>50 leads per month</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>10 AI replies per month</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Beautiful, mobile-responsive forms</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Real-time lead dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Email notifications</span>
                  </li>
                </ul>

                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all duration-300">
                  Get Started Free
                </button>
              </div>

              {/* Pro Product */}
              <div className="pricing-card rounded-2xl p-8 relative overflow-hidden border-2 border-primary">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-2xl font-bold">
                  PRO PLAN
                </div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 feature-icon rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon
                      icon={faRobot}
                      className="text-3xl text-white"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Pro</h3>
                  <div className="text-5xl font-bold text-primary mb-2">
                    $59
                  </div>
                  <div className="text-gray-600 mb-6">per month</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>1,000 leads per month</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>300 AI replies per month</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>AI-powered auto-responses</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Personalized follow-ups</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Lead scoring & routing</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>200+ integrations</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>A/B testing for forms</span>
                  </li>
                </ul>

                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all duration-300">
                  Start Pro Plan
                </button>
              </div>

              {/* Agency Product */}
              <div className="pricing-card rounded-2xl p-8 relative overflow-hidden border-2 border-primary">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-2xl font-bold">
                  AGENCY PLAN
                </div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 feature-icon rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="text-3xl text-white"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Agency
                  </h3>
                  <div className="text-5xl font-bold text-primary mb-2">
                    $249
                  </div>
                  <div className="text-gray-600 mb-6">per month</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>10,000 leads per month</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>2,000 AI replies per month</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>White-label domain</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Multi-user seats</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 mr-3"
                    />
                    <span>Priority support & API access</span>
                  </li>
                </ul>

                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all duration-300">
                  Start Agency Plan
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                All plans include metered overages: $0.03 per extra AI reply
                beyond your limit.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
                <span>✓ No setup fees</span>
                <span>✓ Cancel anytime</span>
                <span>✓ 30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-4 bg-light-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Lead to Customer in Minutes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our intelligent system captures, qualifies, and converts leads
                automatically
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Capture
                </h3>
                <p className="text-gray-600">
                  Beautiful forms capture leads from your website, landing
                  pages, or social media
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Qualify
                </h3>
                <p className="text-gray-600">
                  AI instantly analyzes and scores leads based on intent,
                  budget, and timeline
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Convert
                </h3>
                <p className="text-gray-600">
                  Personalized AI responses nurture leads through your sales
                  funnel to close
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for scale, security, and seamless integration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 feature-icon rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className="text-2xl text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bank-Level Security
                </h3>
                <p className="text-gray-600 text-sm">
                  SOC 2 compliant with end-to-end encryption and GDPR compliance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 feature-icon rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-2xl text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  200+ Integrations
                </h3>
                <p className="text-gray-600 text-sm">
                  Connect with Salesforce, HubSpot, Zapier, Slack, and more
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 feature-icon rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon
                    icon={faChartBar}
                    className="text-2xl text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Real-time insights, conversion tracking, and ROI reporting
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 feature-icon rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-2xl text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Team Collaboration
                </h3>
                <p className="text-gray-600 text-sm">
                  Multi-user access, role permissions, and shared dashboards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof & Innovation */}
        <section className="py-24 px-4 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading the AI Revolution in Lead Management
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
              We're not just another form builder. We're pioneering the future
              of customer acquisition with cutting-edge AI that understands and
              converts.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card rounded-2xl p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-green-400 mr-1"
                    />
                  ))}
                </div>
                <p className="text-gray-800 font-medium mb-4">
                  "The AI responses are indistinguishable from our best sales
                  reps"
                </p>
                <div className="text-sm text-gray-600">
                  Sarah Chen, VP Sales at TechFlow
                </div>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <div className="text-4xl font-bold text-primary mb-4">3x</div>
                <p className="text-gray-800 mb-4">
                  Average increase in qualified leads
                </p>
                <div className="text-sm text-gray-600">
                  Based on customer data
                </div>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <div className="text-4xl font-bold text-primary mb-4">24/7</div>
                <p className="text-gray-800 mb-4">
                  AI never sleeps, capturing leads around the clock
                </p>
                <div className="text-sm text-gray-600">
                  Always-on lead generation
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Lead Agent?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold mb-2">🚀 Scale Without Limits</h4>
                  <p className="text-sm opacity-90">
                    Handle thousands of leads without hiring more staff
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">🎯 Higher Conversion Rates</h4>
                  <p className="text-sm opacity-90">
                    AI responses convert 3x better than generic replies
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">⚡ Instant Responses</h4>
                  <p className="text-sm opacity-90">
                    Never miss a hot lead with 24/7 availability
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">💰 Proven ROI</h4>
                  <p className="text-sm opacity-90">
                    Customers see 300%+ ROI within 90 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-black py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Lead Generation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the AI revolution. Start free, upgrade when you're ready to
              convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Start Free Trial
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-80 transition-all duration-300 border-2 border-white border-opacity-30">
                Schedule Demo Call
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto text-sm opacity-80">
              <div className="flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                No credit card required
              </div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LeadAgent;
