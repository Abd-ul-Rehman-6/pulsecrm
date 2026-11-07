import "../styles/Why.css";

const Why = () => {
  return (
    <div className="why-page">
      {/* Section 1: Hero */}
      <section className="why-hero-container">
        <div className="why-hero-content">
          <h1 className="why-hero-title">
            The future of CRM <br /> is built, not bought.
          </h1>
          <p className="why-hero-description">
            CRM was a database you filled on Fridays. AI turned it into the system that runs your go-to-market. To differentiate, you have to build what your competitors can't buy.
          </p>
        </div>
      </section>

      {/* Section 2: The Shift */}
      <section className="why-shift-section">
        <div className="plus-divider">
          <span className="plus-icon">+</span>
        </div>
        <div className="why-shift-container">
          <div className="page-tag-header">
            <span className="purple-square"></span>
            <span className="tag-text">The shift</span>
          </div>
          <h2 className="why-shift-title">
            CRM was a ledger. AI turned <br /> it into an operating system.
          </h2>
          <div className="why-shift-grid">
            <p className="why-shift-text">
              For twenty years, CRM meant the same thing: a place to log calls, track deals, and pull reports on Friday. The real work happened in people's heads, in Slack threads, in hallway conversations. The CRM kept score. Nobody expected more from it.
            </p>
            <p className="why-shift-text">
              AI agents are starting to draft outreach, score leads, research accounts, write follow-ups, update deal stages. Every one of these actions reads from and writes to the CRM. The scoreboard became the playbook. The database became the brain.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: What this means */}
      <section className="why-shift-section right-aligned-section">
        <div className="plus-divider left-aligned-line">
          <span className="plus-icon">+</span>
        </div>
        <div className="why-shift-container right-container">
          <div className="page-tag-header right-tag">
            <span className="tag-text">What this means</span>
            <span className="purple-square"></span>
          </div>
          <h2 className="why-shift-title right-title">
            Differentiation now lives <br /> in the code you own.
          </h2>
          <div className="why-shift-grid">
            <p className="why-shift-text">
              You don't buy your deployment pipeline off the shelf. You don't rent your data warehouse from a vendor who decides the schema. You build it, you own it, you iterate on it every week. CRM is going the same way. The teams that treat it as infrastructure they own will compound an advantage every quarter.
            </p>
            <p className="why-shift-text">
              Tuesday your team learns that deals with a technical champion close 3x faster. Wednesday you add the field, wire up the scoring, adjust the workflow. By Thursday your agents are acting on it. That feedback loop is the edge. And it only works if the CRM is yours.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Double-Row Marquee */}
      <section className="why-marquee-section">
        {/* Row 1: Left Scroll */}
        <div className="marquee-track-container">
          <div className="marquee-track marquee-left">
            <span className="marquee-item text-white">SAME CRM</span>
            <span className="marquee-item small-marquee-text">same output</span>
            <span className="marquee-item text-indigo-500 font-bold">SAME RESULTS</span>
            <span className="marquee-item text-white">SAME CRM</span>
            <span className="marquee-item small-marquee-text">same output</span>
            <span className="marquee-item text-indigo-500 font-bold">SAME RESULTS</span>
            {/* Seamless Loop Duplicate */}
            <span className="marquee-item text-white">SAME CRM</span>
            <span className="marquee-item small-marquee-text">same output</span>
            <span className="marquee-item text-indigo-500 font-bold">SAME RESULTS</span>
            <span className="marquee-item text-white">SAME CRM</span>
            <span className="marquee-item small-marquee-text">same output</span>
            <span className="marquee-item text-indigo-500 font-bold">SAME RESULTS</span>
          </div>
        </div>

        {/* Row 2: Right Scroll */}
        <div className="marquee-track-container">
          <div className="marquee-track marquee-right">
            <span className="marquee-item small-marquee-text">same output</span>
            <span className="marquee-item text-indigo-500 font-bold">SAME RESULTS</span>
            <span className="marquee-item text-white">SAME CRM</span>
            <span className="marquee-item small-marquee-text">same output</span>
            <span className="marquee-item text-indigo-500 font-bold">SAME RESULTS</span>
            <span className="marquee-item text-white">SAME CRM</span>
            {/* Seamless Loop Duplicate */}
            <span className="marquee-item small-marquee-text">same output</span>
            <span className="marquee-item text-indigo-500 font-bold">SAME RESULTS</span>
            <span className="marquee-item text-white">SAME CRM</span>
            <span className="marquee-item small-marquee-text">same output</span>
            <span className="marquee-item text-indigo-500 font-bold">SAME RESULTS</span>
            <span className="marquee-item text-white">SAME CRM</span>
          </div>
        </div>
      </section>

      {/* Section 5: Bottom CTA Banner */}
      <section className="why-cta-section">
        <div className="cta-plus-wrapper">
          <span className="cta-plus-icon">+</span>
        </div>

        <div className="why-cta-content">
          <h2 className="why-cta-title">
            Build a CRM your <br /> competitors <span className="cta-sans">can't buy.</span>
          </h2>
          <p className="why-cta-subtext">
            Open-source, AI-ready, and yours to shape.
          </p>
          <button className="why-cta-btn">GET STARTED</button>
        </div>
      </section>
    </div>
  );
};

export default Why;