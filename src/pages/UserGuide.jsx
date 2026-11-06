import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/UserGuide.css";

const UserGuide = () => {
  const [activeSection, setActiveSection] = useState("make-Pulse-fit");

  useEffect(() => {
    const handleScroll = () => {
      const exploreSection = document.getElementById("explore-user-guide");
      if (exploreSection) {
        const rect = exploreSection.getBoundingClientRect();
        // Jab explore section screen ke upper ya mid-viewport mein aa jaye
        if (rect.top <= 250) {
          setActiveSection("explore-user-guide");
        } else {
          setActiveSection("make-Pulse-fit");
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
          <Link to="/docs/getting-started" className="doc-nav-link">
            GETTING STARTED
          </Link>
          <span className="doc-nav-divider">|</span>
          <Link to="/user-guide" className="doc-nav-link active">
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

      {/* Main Content Layout */}
      <div className="user-guide-container">
        {/* Left Main Article Section */}
        <main className="user-guide-main">
          {/* Tag Header Add Kiya Gaya Hai */}
          <div className="page-tag-header">
            <span className="purple-square"></span>
            <span className="tag-text">User Guide</span>
          </div>

          <h1 className="user-guide-title">Master Pulse</h1>

          {/* Blue Glitch Banner Container */}
          <div className="user-guide-banner">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
              alt="Master Pulse Graphic"
              className="banner-image"
            />
          </div>

          <p className="user-guide-description">
            Step-by-step guides to model your data, automate your work, and run
            your workspace.
          </p>

          {/* Action Buttons */}
          <div className="user-guide-actions">
            <button className="btn-solid-white">MODEL YOUR DATA</button>
            <button className="btn-outline-dark">IMPORT DATA</button>
          </div>

          {/* Make Pulse Fit Your Team Section */}
          <section id="make-Pulse-fit" className="content-section">
            <h2 className="section-heading">Make Pulse fit your team</h2>
            <p className="section-text">
              Pulse is built to change with your business. This guide shows you
              how to set up your workspace and shape it as you go, from the data
              you track to the screens your team works in every day.
            </p>

            <ul className="custom-bullet-list">
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Set up your data.</strong> Model objects and fields
                  around your business, then bring in your records from CSV files
                  or another CRM.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Bring your conversations in.</strong> Sync email and
                  calendar so every exchange lands on the right record, and reach
                  your contacts with email campaigns.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Organize the work.</strong> Build the views, pipelines
                  and record pages your team uses every day.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Automate the busywork.</strong> Hand repetitive steps
                  to workflows and multi-step tasks to AI agents.
                </p>
              </li>
              <li>
                <span className="bullet-square"></span>
                <p>
                  <strong>Stay in control.</strong> Follow your numbers on
                  dashboards, decide who sees what with roles, and manage billing
                  and settings.
                </p>
              </li>
            </ul>
          </section>

          {/* Explore the user guide Section */}
          <section id="explore-user-guide" className="content-section">
            <h2 className="section-heading">Explore the user guide</h2>
            <p className="section-text">
              Each section covers one part of Pulse, from your data model to billing and settings.
            </p>

            <div className="guide-grid-cards">
              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600" alt="Data Model" />
                </div>
                <h3 className="card-title">Data Model</h3>
                <p className="card-desc">Customize your data model to fit your business processes.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600" alt="Data Migration" />
                </div>
                <h3 className="card-title">Data Migration</h3>
                <p className="card-desc">Import and export your data via CSV or API.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600" alt="Calendar & Emails" />
                </div>
                <h3 className="card-title">Calendar & Emails</h3>
                <p className="card-desc">Centralize your team’s meetings and emails.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600" alt="Email Campaigns" />
                </div>
                <h3 className="card-title">Email Campaigns</h3>
                <p className="card-desc">Send email campaigns built on your CRM data.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" alt="Workflows" />
                </div>
                <h3 className="card-title">Workflows</h3>
                <p className="card-desc">Automate processes and integrate with external tools.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" alt="AI" />
                </div>
                <h3 className="card-title">AI</h3>
                <p className="card-desc">Enhance your team with AI agents.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600" alt="Layout" />
                </div>
                <h3 className="card-title">Layout</h3>
                <p className="card-desc">Sidebar, views, and record page customization.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Dashboards" />
                </div>
                <h3 className="card-title">Dashboards</h3>
                <p className="card-desc">Real-time insights to track performance.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600" alt="Permissions & Access" />
                </div>
                <h3 className="card-title">Permissions & Access</h3>
                <p className="card-desc">Manage roles and access to Pulse.</p>
              </div>

              <div className="guide-card">
                <div className="card-image-box">
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" alt="Billing" />
                </div>
                <h3 className="card-title">Billing</h3>
                <p className="card-desc">Understand how Pulse pricing and billing works.</p>
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

          {/* FLOATING STICKY ASK QUESTION BAR */}
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

        {/* Right Sidebar Menu with Dynamic Active Highlight */}
        <aside className="user-guide-sidebar">
          <div className="sidebar-sticky">
            <div className="sidebar-header">
              <span className="sidebar-icon">≡</span> On this page
            </div>
            <ul className="sidebar-links">
              <li>
                <a 
                  href="#make-Pulse-fit" 
                  className={`sidebar-link ${activeSection === "make-Pulse-fit" ? "active" : ""}`}
                >
                  Make Pulse fit your team
                </a>
              </li>
              <li>
                <a 
                  href="#explore-user-guide" 
                  className={`sidebar-link ${activeSection === "explore-user-guide" ? "active" : ""}`}
                >
                  Explore the user guide
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default UserGuide;