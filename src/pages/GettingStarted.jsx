import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/GettingStarted.css";

const GettingStarted = () => {
  const [activeSection, setActiveSection] = useState("why-Pulse");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["why-Pulse", "what-makes-different", "who-is-for", "who-is-not-for"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="user-guide-page">
      {/* Sub Navigation Bar */}
      <nav className="doc-sub-nav">
        <div className="doc-nav-left">
          <Link to="/docs/getting-started" className="doc-nav-link active">
            GETTING STARTED
          </Link>
          <span className="doc-nav-divider">|</span>
          <Link to="/user-guide" className="doc-nav-link">
            USER GUIDE
          </Link>
          <span className="doc-nav-divider">|</span>
          <Link to="/developers" className="doc-nav-link">
            DEVELOPERS
          </Link>
        </div>

        <div className="doc-nav-right">
          <Link to="/login" className="doc-btn-login">
            LOG IN
          </Link>
          <button className="doc-btn-get-started">GET STARTED</button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="user-guide-container">
        {/* Left Main Content */}
        <main className="user-guide-main">
          {/* Tag Header */}
          <div className="page-tag-header">
            <span className="purple-square"></span>
            <span className="tag-text">Getting Started</span>
          </div>

          <h1 className="user-guide-title">Meet Pulse</h1>

          {/* Graphic Banner */}
          <div className="user-guide-banner">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
              alt="Meet Pulse Graphic"
              className="banner-image"
            />
          </div>

          <p className="user-guide-description">
            See what makes Pulse different, set up your workspace, and learn the concepts behind it.
          </p>

          {/* Section 1: Why Pulse */}
          <section id="why-Pulse" className="content-section">
            <h2 className="section-heading">Why Pulse</h2>
            <p className="section-text">
              You’ve been choosing between software that’s easy to start but impossible to change, and software that’s flexible but takes months to set up. Pulse is the third option: <strong>a production-ready CRM you can reshape as you go.</strong>
            </p>
          </section>

          {/* Section 2: What makes Pulse different */}
          <section id="what-makes-different" className="content-section">
            <h2 className="section-heading">What makes Pulse different</h2>
            <p className="section-text">
              Pulse is a platform you can build on, not a product you configure.
            </p>

            <div className="guide-grid-cards" style={{ marginTop: "24px" }}>
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" alt="Built for Agents" />
                </div>
                <h3 className="card-title">Built for Agents</h3>
                <p className="card-desc">Agents operate inside your data model with real permissions. Skills, Tools, MCP.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" alt="Secured Extensibility" />
                </div>
                <h3 className="card-title">Secured Extensibility</h3>
                <p className="card-desc">The flexibility of vibe-coded tools on secured foundations.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" alt="Modern Stack" />
                </div>
                <h3 className="card-title">Modern Stack</h3>
                <p className="card-desc">React, TypeScript. Your team already knows how to extend Pulse. No proprietary languages, no gatekeeping.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600" alt="No Lock-In" />
                </div>
                <h3 className="card-title">No Lock-In</h3>
                <p className="card-desc">Open-source core, self-hostable, export your data anytime.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Who is Pulse for */}
          <section id="who-is-for" className="content-section" style={{ marginTop: "40px" }}>
            <h2 className="section-heading">Who is Pulse for</h2>
            
            <ul className="custom-bullet-list">
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Large enterprises replacing Salesforce</strong> — your team spends more time fighting the tool than using it. You feel locked-in and the costs keep rising.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Startups with technical founders</strong> — you’ve outgrown spreadsheets and Notion. You have big ambitions and want a CRM that scales with you.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>GTM teams looking for an edge</strong> — you want to build your own lead scoring, your own enrichment, your own outbound workflows.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Privacy-conscious organizations</strong> — you need to self-host and own your data end to end. Regulatory, contractual, or just principle.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Salesforce partners</strong> — your developers are tired of presenting license cost increases to your clients. You want a better DX, and to deliver projects faster at a lower license cost for your clients.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Web development agencies</strong> — your team knows TypeScript, React, and PostgreSQL. Pulse opens the CRM market to you without learning APEX or getting proprietary certifications.
                </p>
              </li>
            </ul>
          </section>

          {/* Section 4: Who Pulse is not for */}
          <section id="who-Pulse-is-not-for" className="content-section" style={{ marginTop: "40px" }}>
            <h2 className="section-heading">Who Pulse is not for</h2>
            
            <ul className="custom-bullet-list">
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Teams that want a CRM they never have to think about.</strong> Pulse rewards teams that want to stay close to their tools and shape them over time. If you want something fully managed, Pipedrive or HubSpot will serve you well.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Companies that need hundreds of pre-built integrations today.</strong> Our ecosystem is growing fast, but it’s not yet as broad as Salesforce or HubSpot. If you’re comfortable building what’s missing, you’ll love it. If not, give us another year.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Organizations where tools are chosen in boardrooms, not by the people using them.</strong> We don’t do steak dinners and executive briefings. We win with teams that have the authority to pick their own tools.
                </p>
              </li>
            </ul>

            {/* Bottom 2 Cards Grid (Ready to get started & Discord) */}
            <div className="guide-grid-cards" style={{ marginTop: "32px", gridTemplateColumns: "repeat(2, 1fr)" }}>
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=600" alt="Ready to get started" />
                </div>
                <h3 className="card-title">Ready to get started?</h3>
                <p className="card-desc">Set up Pulse in under 5 minutes — cloud or self-hosted.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" alt="Discord" />
                </div>
                <h3 className="card-title">Discord ↗</h3>
                <p className="card-desc">Ask questions and share what you build with the Pulse community.</p>
              </div>
            </div>
          </section>

          {/* PAGE FEEDBACK SECTION */}
          <div className="page-feedback-section">
            <span className="feedback-question">Was this page helpful?</span>
            <div className="feedback-buttons">
              <button className="feedback-btn">
                <span className="feedback-icon">👍</span> Yes[cite: 7]
              </button>
              <button className="feedback-btn">
                <span className="feedback-icon">👎</span> No[cite: 7]
              </button>
            </div>
          </div>

          {/* Floating Sticky Search Input */}
          <div className="floating-ask-container">
            <div className="ask-question-box">
              <input 
                type="text" 
                placeholder="Ask a question..." 
                className="ask-input" 
                readOnly
              />
              <div className="ask-shortcuts">
                <span className="shortcut-key">Ctrl+I</span>
                <button className="shortcut-btn">↑</button>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="user-guide-sidebar">
          <div className="sidebar-sticky">
            <div className="sidebar-header">
              <span className="sidebar-icon">≡</span> On this page
            </div>
            <ul className="sidebar-links">
              <li>
                <a 
                  href="#why-Pulse" 
                  className={`sidebar-link ${activeSection === "why-Pulse" ? "active" : ""}`}
                >
                  Why Pulse
                </a>
              </li>
              <li>
                <a 
                  href="#what-makes-different" 
                  className={`sidebar-link ${activeSection === "what-makes-different" ? "active" : ""}`}
                >
                  What makes Pulse different
                </a>
              </li>
              <li>
                <a 
                  href="#who-is-for" 
                  className={`sidebar-link ${activeSection === "who-is-for" ? "active" : ""}`}
                >
                  Who is Pulse for
                </a>
              </li>
              <li>
                <a 
                  href="#who-Pulse-is-not-for" 
                  className={`sidebar-link ${activeSection === "who-Pulse-is-not-for" ? "active" : ""}`}
                >
                  Who Pulse is not for
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

GettingStarted.displayName = "GettingStarted";

export default GettingStarted;