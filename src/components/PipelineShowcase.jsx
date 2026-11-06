import '../styles/PipelineShowcase.css';

const PipelineShowcase = () => {
  return (
    <section className="pipeline-showcase-container">
      <div className="browser-window">
        
        {/* Browser Top Bar */}
        <div className="browser-header">
          <div className="browser-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="browser-address-bar">
            <span>🔒</span> app.pulsecrm.com/pipeline
          </div>
          <div className="browser-actions">•••</div>
        </div>

        {/* Dashboard Main App Area */}
        <div className="dashboard-body">
          
          {/* Left Navigation Sidebar */}
          <aside className="dash-sidebar">
            <div>
              <div className="workspace-badge">
                <div className="workspace-icon">P</div>
                <div className="workspace-info">
                  <h4>Revenue Squad</h4>
                  <p>Enterprise Plan</p>
                </div>
              </div>

              <nav className="dash-nav">
                <div className="nav-item">Dashboard</div>
                <div className="nav-item active">
                  <span>Pipeline</span>
                  <span className="nav-badge">18</span>
                </div>
                <div className="nav-item">Contacts</div>
                <div className="nav-item">Deals</div>
                <div className="nav-item">Reports</div>
                <div className="nav-item">Settings</div>
              </nav>
            </div>

            <div className="user-profile-badge">
              <div className="user-avatar-initials">EK</div>
              <div className="user-info">
                <h5>Elena Vance</h5>
                <p>Head of Sales</p>
              </div>
            </div>
          </aside>

          {/* Main Dashboard Panel */}
          <main className="dash-content">
            
            {/* Top Stat Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-title">Pipeline Value</div>
                <div className="stat-value-container">
                  <span className="stat-value">$4,280,000</span>
                  <span className="stat-trend">+24%</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">Deals Won</div>
                <div className="stat-value-container">
                  <span className="stat-value">184</span>
                  <span className="stat-trend">+18%</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">Win Rate</div>
                <div className="stat-value-container">
                  <span className="stat-value">68.4%</span>
                  <span className="stat-trend">+4.2%</span>
                </div>
              </div>

              {/* Highlighted Card */}
              <div className="stat-card highlight-card">
                <div className="stat-title">Avg Deal Cycle</div>
                <div className="stat-value-container">
                  <span className="stat-value">14.8 Days</span>
                  <span className="stat-trend" style={{ color: '#147f4b' }}>-3.1d</span>
                </div>
              </div>
            </div>

            {/* Pipeline Columns Board */}
            <div className="pipeline-columns-grid">
              
              {/* Col 1: Lead In */}
              <div>
                <div className="column-header">
                  <span className="col-dot col-dot-gray"></span>
                  <span>Lead In</span>
                  <span className="col-amount">$380K</span>
                </div>
                <div className="deal-card">
                  <div className="deal-header">
                    <span className="deal-name">Stripe Inc</span>
                    <span className="priority-tag tag-high">High</span>
                  </div>
                  <div className="deal-sub">Payments Infrastructure</div>
                  <div className="deal-footer">
                    <span className="deal-price">$45,000</span>
                    <span className="avatar-initial">JD</span>
                  </div>
                </div>
                <div className="deal-card">
                  <div className="deal-header">
                    <span className="deal-name">Figma Org</span>
                    <span className="priority-tag tag-med">Med</span>
                  </div>
                  <div className="deal-sub">Design System Sync</div>
                  <div className="deal-footer">
                    <span className="deal-price">$32,000</span>
                    <span className="avatar-initial" style={{ backgroundColor: '#003057' }}>MK</span>
                  </div>
                </div>
              </div>

              {/* Col 2: Contact Made */}
              <div>
                <div className="column-header">
                  <span className="col-dot col-dot-blue"></span>
                  <span>Contact Made</span>
                  <span className="col-amount">$640K</span>
                </div>
                <div className="deal-card">
                  <div className="deal-header">
                    <span className="deal-name">Linear App</span>
                    <span className="priority-tag tag-high">High</span>
                  </div>
                  <div className="deal-sub">Product Sync Pipeline</div>
                  <div className="deal-footer">
                    <span className="deal-price">$78,000</span>
                    <span className="avatar-initial" style={{ backgroundColor: '#003057' }}>EV</span>
                  </div>
                </div>
              </div>

              {/* Col 3: Demo Scheduled */}
              <div>
                <div className="column-header">
                  <span className="col-dot col-dot-orange"></span>
                  <span>Demo Scheduled</span>
                  <span className="col-amount">$1.1M</span>
                </div>
                <div className="deal-card">
                  <div className="deal-header">
                    <span className="deal-name">Notion Labs</span>
                    <span className="priority-tag tag-high">High</span>
                  </div>
                  <div className="deal-sub">Global Team Migration</div>
                  <div className="deal-footer">
                    <span className="deal-price">$120,000</span>
                    <span className="avatar-initial" style={{ backgroundColor: '#003057' }}>AL</span>
                  </div>
                </div>
              </div>

              {/* Col 4: Proposal Sent */}
              <div>
                <div className="column-header">
                  <span className="col-dot col-dot-yellow"></span>
                  <span>Proposal Sent</span>
                  <span className="col-amount">$4.1M</span>
                </div>
                <div className="deal-card">
                  <div className="deal-sub" style={{ margin: 0, fontWeight: 600 }}>Internal Ops System</div>
                  <div className="deal-footer" style={{ marginTop: 8 }}>
                    <span className="deal-price">95,$000</span>
                    <span className="avatar-initial" style={{ backgroundColor: '#003057' }}>TR</span>
                  </div>
                </div>
                <div className="deal-card">
                  <div className="deal-header">
                    <span className="deal-name">Retool Corp</span>
                    <span className="priority-tag tag-high">High</span>
                  </div>
                </div>
              </div>

              {/* Col 5: Closed Won (Highlighted Column) */}
              <div className="closed-won-column">
                <div className="column-header">
                  <span className="col-dot col-dot-green"></span>
                  <span>Closed Won</span>
                  <span className="col-amount" style={{ color: '#147f4b' }}>$9.1M</span>
                </div>
                <div className="deal-card">
                  <div className="deal-header">
                    <span className="deal-name">Vercel Inc</span>
                  </div>
                  <div className="deal-sub">Frontend Cloud Hub</div>
                  <div className="deal-footer">
                    <span className="deal-price">$160,000</span>
                  </div>
                </div>
              </div>

            </div>

          </main>
        </div>

      </div>
    </section>
  );
};

export default PipelineShowcase;