import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/GettingStarted.css";

const Developers = () => {
  const [activeSection, setActiveSection] = useState("why-build-on-Pulse");

  useEffect(() => {
    const handleScroll = () => {
      const exploreSection = document.getElementById("explore-developer-docs");
      if (exploreSection) {
        const rect = exploreSection.getBoundingClientRect();
        if (rect.top <= 250) {
          setActiveSection("explore-developer-docs");
        } else {
          setActiveSection("why-build-on-Pulse");
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
          <Link to="/" className="doc-nav-logo-link" aria-label="Home">
            <span className="doc-nav-logo">P</span>
          </Link>
          <Link to="/docs/getting-started" className="doc-nav-link">
            GETTING STARTED
          </Link>
          <span className="doc-nav-divider">|</span>
          <Link to="/user-guide" className="doc-nav-link">
            USER GUIDE
          </Link>
          <span className="doc-nav-divider">|</span>
          <Link to="/developers" className="doc-nav-link active">
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
            <span className="tag-text">Developers</span>
          </div>

          <h1 className="user-guide-title">Build on Pulse</h1>

          {/* Graphic Banner */}
          <div className="user-guide-banner">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
              alt="Build on Pulse Graphic"
              className="banner-image"
            />
          </div>

          <p className="user-guide-description">
            Build apps in TypeScript, connect your tools through APIs, and host Pulse yourself.
          </p>

          {/* Action Buttons */}
          <div className="user-guide-actions">
            <button className="btn-solid-white">BUILD YOUR FIRST APP</button>
            <button className="btn-outline-dark">VIEW ON GITHUB</button>
          </div>

          {/* Section 1: Why build on Pulse */}
          <section id="why-build-on-Pulse" className="content-section" style={{ marginTop: "40px" }}>
            <h2 className="section-heading">Why build on Pulse</h2>
            
            <p className="section-text" style={{ marginBottom: "24px" }}>
              Most CRMs give developers an API and a few places to plug in. Pulse gives you the platform itself. Declare objects, server-side functions, React components and AI agents in plain TypeScript with the <code className="code-badge">Pulse-sdk</code>, see each change sync to a local server as you save, and ship with the CLI.
            </p>

            <ul className="custom-bullet-list">
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Manage your workspace with code.</strong> Objects, fields, views and page layouts live as TypeScript files in your repository, versioned and reviewed like any other change.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>The same SDK as Pulse’s own apps.</strong> Slack, Linear and Granola are apps built with the <code className="code-badge">Pulse-sdk</code>, so you build with exactly what Pulse’s team uses.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Plug into the core, not a sidebar.</strong> Your objects get the same tables and permissions as People and Companies. Your apps can bring conversations into Pulse’s messages, write to record timelines, and expose functions to workflows and AI agents.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>No ceiling.</strong> The core is open source and self-hostable. When an extension point is missing, change Pulse itself or contribute it back.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Safe to experiment.</strong> Apps run sandboxed and only touch the data their role allows, whether your team or an AI agent wrote the code.
                </p>
              </li>
            </ul>
          </section>

          {/* Section 2: Explore the developer docs */}
          <section id="explore-developer-docs" className="content-section" style={{ marginTop: "40px" }}>
            <h2 className="section-heading">Explore the developer docs</h2>
            <p className="section-text">
              Besides apps, the developer docs cover the API, self-hosting, contributing to Pulse and the UI library.
            </p>

            {/* Grid Cards Container */}
            <div className="guide-grid-cards" style={{ marginTop: "24px" }}>
              
              {/* Card 1: Apps */}
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" alt="Apps" />
                </div>
                <h3 className="card-title">Apps</h3>
                <p className="card-desc">Build objects, logic, interfaces and AI agents as TypeScript apps, from quick start to publishing.</p>
              </div>

              {/* Card 2: API */}
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" alt="API" />
                </div>
                <h3 className="card-title">API</h3>
                <p className="card-desc">Read and write records over REST and GraphQL, get webhooks when records change, and connect apps with OAuth.</p>
              </div>

              {/* Card 3: Self-Host */}
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600" alt="Self-Host" />
                </div>
                <h3 className="card-title">Self-Host</h3>
                <p className="card-desc">Run Pulse on your own infrastructure with Docker Compose, then secure and upgrade it.</p>
              </div>

              {/* Card 4: Contribute */}
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600" alt="Contribute" />
                </div>
                <h3 className="card-title">Contribute</h3>
                <p className="card-desc">Set up the monorepo locally and help improve the open-source core.</p>
              </div>

              {/* Card 5: UI Library */}
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600" alt="UI Library" />
                </div>
                <h3 className="card-title">UI Library</h3>
                <p className="card-desc">Pulse’s open-source React primitives, components, icons and theme tokens.</p>
              </div>

              {/* Card 6: GitHub */}
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=600" alt="GitHub" />
                </div>
                <h3 className="card-title">GitHub ↗</h3>
                <p className="card-desc">Browse the source code, report issues and follow releases.</p>
              </div>

              {/* Card 7: Discord */}
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
                <span className="feedback-icon">👍</span> Yes
              </button>
              <button className="feedback-btn">
                <span className="feedback-icon">👎</span> No
              </button>
            </div>
          </div>

          {/* Floating Sticky Search Bar */}
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
                  href="#why-build-on-Pulse" 
                  className={`sidebar-link ${activeSection === "why-build-on-Pulse" ? "active" : ""}`}
                >
                  Why build on Pulse
                </a>
              </li>
              <li>
                <a 
                  href="#explore-developer-docs" 
                  className={`sidebar-link ${activeSection === "explore-developer-docs" ? "active" : ""}`}
                >
                  Explore the developer docs
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

Developers.displayName = "Developers";

export default Developers;