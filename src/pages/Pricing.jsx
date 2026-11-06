import React, { useState, useRef, useLayoutEffect } from "react";
import "../styles/Pricing.css";

// Sub-component for Customization Banner
// Shared Monthly / Annually Toggle — saare 4 cards me sync rehta hai
const BillingToggle = ({ billingType, setBillingType }) => (
  <div className="billing-toggle">
    <button
      className={`toggle-btn ${billingType === "monthly" ? "active" : ""}`}
      onClick={() => setBillingType("monthly")}
    >
      Pay monthly
      <small>Commit monthly</small>
    </button>
    <button
      className={`toggle-btn ${billingType === "annually" ? "active" : ""}`}
      onClick={() => setBillingType("annually")}
    >
      Pay Annually
      <small style={{ color: "#147f4b" }}>BEST VALUE</small>
    </button>
  </div>
);

// Pricing data — monthly vs annually ke prices ek jagah define
const PLAN_PRICES = {
  starter: {
    monthly: "$20",
    annually: "$7",
    unit: "/mon/seat",
    monthlyStrike: "$20/mon/seat",
  },
  professional: {
    monthly: "$890",
    annually: "$800",
    unit: "/mon",
    monthlyStrike: "$890/mon",
  },
  enterprise: {
    monthly: "$3,600",
    annually: "$3,240",
    unit: "/mon",
    monthlyStrike: "$3,600/mon",
  },
};

const CustomizationBanner = () => {
  return (
    <div className="customization-banner">
      <div className="banner-content">
        <h2>Need help with customization?</h2>
        <p>
          Find the right partner to implement, customize, and tailor Pulse to
          your team.
        </p>
      </div>
      <button className="btn-browse-partners">BROWSE PARTNERS</button>
    </div>
  );
};

// Sub-component for FAQ Accordion Section with Wave Grid Animation
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is Pulse really open-source?",
      a: "Yes! Pulse is fully open-source under the AGPLv3 license. You can self-host it, inspect the source code, and monndify it freely to fit your business requirements."
    },
    {
      q: "How long does it take to get started?",
      a: "You can create a workspace in cloud in less than 2 minutes, or spin up a local instance using Docker in under 5 minutes."
    },
    {
      q: "Can I migrate from Salesforce or HubSpot?",
      a: "Absolutely. We provide one-click import tools and CSV mappers to seamlessly bring your contacts, deals, and custom objects over."
    },
    {
      q: "Do I need a developer to customize Pulse?",
      a: "No, you can add custom fields, views, and objects directly from the UI without writing any code."
    },
    {
      q: "Can developers extend Pulse with code?",
      a: "Yes, developers can build custom plugins, integrate REST/GraphQL APIs, and customize backend triggers easily."
    },
    {
      q: "Does Twenty work with Claude, ChatGPT, and Cursor?",
      a: "Yes! Twenty integrates with AI mondels for auto-enrichment, automated workflows, and code assistance."
    },
    {
      q: "What does Pulse cost?",
      a: "Our core features are completely free for self-hosters. We also offer affordable managed cloud plans starting at $9/user/monnth."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <div className="faq-section">
      {/* Background Animated Wave Grid mimicking video */}
      <div className="faq-bg-animation">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="bg-pill"></div>
        ))}
      </div>

      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <span className="badge-dot"></span>
            <span>Any Questions?</span>
          </div>
          <h2 className="faq-title">
            Stop fighting custom.<br />
            Start building, with Pulse
          </h2>
          <div className="faq-actions">
            <button className="btn-faq-start">GET STARTED</button>
            <button className="btn-faq-talk">TALK TO US</button>
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button
                className={`faq-question ${openIndex === idx ? "active" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <span className="faq-question-text">{faq.q}</span>
                <span className="faq-icon-box">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              <div className={`faq-answer ${openIndex === idx ? "open" : ""}`}>
                <div className="faq-answer-inner">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  // Single Global Billing State for all cards
  const [billingType, setBillingType] = useState("monthly");
  // Toggle for showing/hiding extra comparison features
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  // Keep the See more / See less button at the same viewport position
  // when comparison-table rows are added or removed.
  const comparisonRef = useRef(null);
  const comparisonFooterRef = useRef(null);
  const footerViewportTopRef = useRef(null);

  // Runs after React updates the table, before the browser paints the layout.
  useLayoutEffect(() => {
    const previousTop = footerViewportTopRef.current;
    const footer = comparisonFooterRef.current;

    if (previousTop !== null && footer) {
      const newTop = footer.getBoundingClientRect().top;
      window.scrollBy(0, newTop - previousTop);
      footerViewportTopRef.current = null;
    }
  }, [showMoreFeatures]);

  // Page refresh hone par top pe le jayein
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="pricing-page">
      {/* SECTION 1: Marketing Hub Header */}
      <div className="pricing-header">
        <div className="pricing-title-badge">
          <h1>Marketing Hub</h1>
        </div>
        <p className="pricing-subtitle">
          Generate leads and automate marketing that drives growth
          <a href="#calculate" className="calc-link">
            Calculate your price
          </a>
        </p>
      </div>

      {/* SECTION 1: 4-Column Pricing Cards Grid */}
      <div className="pricing-cards-container">
        {/* CARD 1: FREE */}
        <div className="pricing-card">
          <div className="card-top-header">
            <h3 className="plan-name">Free</h3>
            

            <div className="price-box">
              <span className="price-main">$0</span>
              <span className="price-unit">/mon</span>
              <p className="sub-note">
                Free for up to 2 users. No credit card required.
              </p>
            </div>

            <BillingToggle
              billingType={billingType}
              setBillingType={setBillingType}
            />
          </div>

          <div className="card-actions-wrapper">
            <button className="btn-orange-fill">Get started free</button>
            <div className="btn-outline-spacer"></div>
          </div>

          <div className="features-section">
            <p className="features-header-text">Includes:</p>
            <ul className="free-icons-list">
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l-.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l-.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                Free Marketing tools
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Free Sales tools
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Free Service tools
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                Free Content tools
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                Free Data tools
              </li>
              <li>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                Free Revenue tools
              </li>
            </ul>
          </div>
        </div>

        {/* CARD 2: STARTER */}
        <div className="pricing-card">
          <div className="card-top-header">
            <h3 className="plan-name">Starter</h3>
           

            <div className="price-box">
              <span className="starts-at">Starts at</span>
              <span className="price-main">
                {billingType === "monthly"
                  ? PLAN_PRICES.starter.monthly
                  : PLAN_PRICES.starter.annually}
              </span>
              <span className="price-unit">{PLAN_PRICES.starter.unit}</span>
              <div className="original-price">
                {billingType === "monthly" ? "" : PLAN_PRICES.starter.monthlyStrike}
              </div>
            </div>

            <BillingToggle
              billingType={billingType}
              setBillingType={setBillingType}
            />
          </div>

          <div className="card-actions-wrapper">
            <button className="btn-orange-fill">Buy now</button>
            <button className="btn-orange-outline">Talk to Sales ↗</button>
          </div>

          <div className="features-section">
            <div className="credits-info">500 HubSpot Credits ⓘ</div>
            <div className="contacts-highlight">1,000 marketing contacts</div>

            <p className="features-header-text">
              Free tools with increased limits, plus remonve HubSpot branding
              from:
            </p>
            <ul className="checkmark-list">
              <li>Email marketing</li>
              <li>Live chat</li>
            </ul>

            <p className="features-header-text">And:</p>
            <ul className="checkmark-list">
              <li>Agent Hub</li>
              <li>Agent Builder</li>
              <li>Simple marketing automation</li>
              <li>CRM segments</li>
              <li>Ad management</li>
              <li>Data Agent</li>
            </ul>
          </div>
        </div>

        {/* CARD 3: PROFESSIONAL */}
        <div className="pricing-card">
          <div className="card-top-header">
            <h3 className="plan-name">Professional</h3>
           
            <div className="price-box">
              <span className="starts-at">Starts at</span>
              <span className="price-main">
                {billingType === "monthly"
                  ? PLAN_PRICES.professional.monthly
                  : PLAN_PRICES.professional.annually}
              </span>
              <span className="price-unit">{PLAN_PRICES.professional.unit}</span>
              <div className="original-price">
                {billingType === "monthly" ? "" : PLAN_PRICES.professional.monthlyStrike}
              </div>
              <div className="core-seats">Includes 3 Core Seats</div>
              <div className="seats-sub">
                Additional Core Seats start at $45/mon
              </div>
            </div>

            <BillingToggle
              billingType={billingType}
              setBillingType={setBillingType}
            />
          </div>

          <div className="card-actions-wrapper">
            <button className="btn-orange-fill">Talk to Sales ↗</button>
            <div className="btn-outline-spacer"></div>
          </div>

          <div className="features-section">
            <div className="credits-info">3,000 HubSpot Credits ⓘ</div>
            <div className="contacts-highlight">2,000 marketing contacts</div>

            <p className="features-header-text">Marketing Hub Starter, plus:</p>
            <ul className="checkmark-list">
              <li>
                Marketing studio <b>BETA</b>
              </li>
              <li>
                AEO <b>BETA</b>
              </li>
              <li>
                Content Agent <b>BETA</b>
              </li>
              <li>
                Nurture Agent <b>BETA</b>
              </li>
              <li>Social media</li>
              <li>Video creation & editing</li>
            </ul>

            <p className="disclaimer-text">
              *Cost shown does not include the required, one-time Professional
              Onboarding for a fee of $3,000. <a href="#learn">Learn monre ↗</a>
            </p>
          </div>
        </div>

        {/* CARD 4: ENTERPRISE */}
        <div className="pricing-card">
          <div className="card-top-header">
            <h3 className="plan-name">Enterprise</h3>
           

            <div className="price-box">
              <span className="starts-at">Starts at</span>
              <span className="price-main">
                {billingType === "monthly"
                  ? PLAN_PRICES.enterprise.monthly
                  : PLAN_PRICES.enterprise.annually}
              </span>
              <span className="price-unit">{PLAN_PRICES.enterprise.unit}</span>
              <div className="original-price">
                {billingType === "monthly" ? "" : PLAN_PRICES.enterprise.monthlyStrike}
              </div>
              <div className="core-seats" style={{ marginTop: 14 }}>
                Includes 5 Core Seats
              </div>
              <div className="seats-sub">
                Additional Core Seats start at $75/mon
              </div>
            </div>

            <BillingToggle
              billingType={billingType}
              setBillingType={setBillingType}
            />
          </div>

          <div className="card-actions-wrapper">
            <button className="btn-orange-fill">Talk to Sales ↗</button>
            <div className="btn-outline-spacer"></div>
          </div>

          <div className="features-section">
            <div className="credits-info">5,000 HubSpot Credits ⓘ</div>
            <div className="contacts-highlight">10,000 marketing contacts</div>

            <p className="features-header-text">
              Marketing Hub Professional, plus:
            </p>
            <ul className="checkmark-list">
              <li>Multi-touch revenue attribution</li>
              <li>
                Lookalike Segments <b>BETA</b>
              </li>
              <li>Customer journey analytics</li>
              <li>Email approvals</li>
              <li>Limit access to content and data</li>
              <li>Behavioral event triggers and reporting</li>
            </ul>

            <p className="disclaimer-text">
              *Cost shown does not include the required, one-time Enterprise
              Onboarding for a fee of $7,000. <a href="#learn">Learn monre ↗</a>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: CUSTOMIZATION BANNER */}
      <CustomizationBanner />

      {/* SECTION 3: DETAILED FEATURE COMPARISON TABLE */}
      <div className="comparison-section" ref={comparisonRef}>
        <div className="comparison-table-wrap">
        <table className="comparison-table">
          <colgroup>
            <col className="col-name" />
            <col className="col-plan" />
            <col className="col-plan" />
            <col className="col-plan" />
          </colgroup>
          <thead>
            <tr>
              <th>Name</th>
              <th>Pro</th>
              <th>Professional</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>$9</td>
              <td>$19</td>
              <td>From $50k/year</td>
            </tr>
            <tr>
              <td>Seats limit</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>

            {/* Workspace Category */}
            <tr className="category-row">
              <td colSpan="4">Workspace</td>
            </tr>
            <tr>
              <td>Custom objects</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Custom fields</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Custom views</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>View types</td>
              <td>Table, Kanban, Calendar</td>
              <td>Table, Kanban, Calendar</td>
              <td>Table, Kanban, Calendar</td>
            </tr>
            <tr>
              <td>Custom layout</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Records</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>CSV import & export</td>
              <td>✓ Yes</td>
              <td>✓ Yes</td>
              <td>✓ Yes</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>30+</td>
              <td>30+</td>
              <td>30+</td>
            </tr>

            {/* Reports Category */}
            <tr className="category-row">
              <td colSpan="4">Reports</td>
            </tr>
            <tr>
              <td>Number of dashboards</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>

            {/* Emails & Calendar Category */}
            <tr className="category-row">
              <td colSpan="4">Emails & Calendar</td>
            </tr>
            <tr>
              <td>Internet accounts per user</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>

            {/* Hidden features — shown when "See more Features" is clicked */}
            {showMoreFeatures && (
              <>
                {/* Automation & AI Category */}
                <tr className="category-row">
                  <td colSpan="4">Automation & AI</td>
                </tr>
                <tr>
                  <td>AI Agents</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>Workflow Automation</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>AI Lead Scoring</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>AI Email Drafting</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>

                {/* Integrations Category */}
                <tr className="category-row">
                  <td colSpan="4">Integrations</td>
                </tr>
                <tr>
                  <td>Email Integrations</td>
                  <td>5</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Calendar Sync</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>Slack Integration</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>WhatsApp Integration</td>
                  <td>✗ No</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                </tr>

                {/* Security & Compliance Category */}
                <tr className="category-row">
                  <td colSpan="4">Security & Compliance</td>
                </tr>
                <tr>
                  <td>SSO / SAML</td>
                  <td>✗ No</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>Audit Logs</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>Data Encryption</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>GDPR Compliance</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>

                {/* Support & SLA Category */}
                <tr className="category-row">
                  <td colSpan="4">Support & SLA</td>
                </tr>
                <tr>
                  <td>Email Support</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>Priority Support</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>24/7 Phone Support</td>
                  <td>✗ No</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                </tr>
                <tr>
                  <td>Dedicated Account Manager</td>
                  <td>✗ No</td>
                  <td>✗ No</td>
                  <td>✓ Yes</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        </div>

        <div className="comparison-footer" ref={comparisonFooterRef}>
          <button
            className="btn-see-more"
            onClick={() => {
              // Save the button's position in the viewport before the table changes.
              footerViewportTopRef.current =
                comparisonFooterRef.current?.getBoundingClientRect().top ?? null;

              setShowMoreFeatures((previous) => !previous);
            }}
          >
            {showMoreFeatures ? "See less Features" : "See more Features"}
          </button>
        </div>
      </div>

      {/* SECTION 4: FAQ ACCORDION WITH ANIMATED BACKGROUND */}
      <FaqSection />
    </div>
  );
};

export default Pricing;