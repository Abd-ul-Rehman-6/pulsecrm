import { useState } from 'react';
import '../styles/PlatformWorkflows.css';

const PlatformWorkflows = () => {
  const [activeTab, setActiveTab] = useState('pipeline');

  return (
    <section className="workflows-section">
      
      {/* Header */}
      <div className="workflows-header">
        <h2 className="workflows-title">One Platform, Every Workflow</h2>
        <p className="workflows-subtitle">
          See how sales teams use PulseCRM every day to close deals faster.
        </p>
      </div>

      {/* Tabs */}
      <div className="workflows-tabs">
        <button
          className={`tab-btn ${activeTab === 'pipeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('pipeline')}
        >
          Pipeline View
        </button>
        <button
          className={`tab-btn ${activeTab === 'contacts' ? '' : ''}`}
          
        >
          Contact Profiles
        </button>
        <button
          className={`tab-btn ${activeTab === 'reports' ? '' : ''}`}
          
        >
          Sales Reports
        </button>
      </div>

      {/* Showcase Window */}
      <div className="workflow-browser-card">
        
        {/* Top Controls Bar */}
        <div className="workflow-bar">
          <div className="bar-left">
            <div className="window-dots">
              <span className="dot-r"></span>
              <span className="dot-y"></span>
              <span className="dot-g"></span>
            </div>
            <div className="pipeline-info">
              <span>Revenue Deals</span>
              <span className="pipeline-count">• 20 Deals ($2.33M)</span>
            </div>
          </div>

          <div className="bar-right">
            <div className="search-input-box">
               Filter deals...
            </div>
            <button className="filter-btn">⚙ Filters</button>
            <button className="new-deal-btn">+ New Deal</button>
          </div>
        </div>

        {/* Content View Based on Active Tab */}
        {activeTab === 'pipeline' && (
          <div className="kanban-grid">
            
            {/* Column 1: Lead */}
            <div className="kanban-col">
              <div className="kanban-col-header">
                <div>
                  <span style={{ color: '#556377' }}>• Lead</span>
                  <span className="badge-count">5</span>
                </div>
                <span className="col-total-val">$420k</span>
              </div>

              <div className="k-card">
                <div className="k-card-top">
                  <span className="k-company">Stripe Inc</span>
                  <span className="k-tag k-tag-blue">High</span>
                </div>
                <div className="k-sub">Platform API expansion</div>
                <div className="k-footer">
                  <span className="k-price">$45,000</span>
                  <span className="k-avatar" style={{ backgroundColor: '#003057' }}>JD</span>
                </div>
              </div>

              <div className="k-card">
                <div className="k-card-top">
                  <span className="k-company">Vercel Inc</span>
                  <span className="k-tag k-tag-gray">Med</span>
                </div>
                <div className="k-sub">Team seat license</div>
                <div className="k-footer">
                  <span className="k-price">$18,500</span>
                  <span className="k-avatar" style={{ backgroundColor: '#003057' }}>SL</span>
                </div>
              </div>
            </div>

            {/* Column 2: Qualified */}
            <div className="kanban-col">
              <div className="kanban-col-header">
                <div>
                  <span style={{ color: '#003057' }}>• Qualified</span>
                  <span className="badge-count">4</span>
                </div>
                <span className="col-total-val">$680k</span>
              </div>

              <div className="k-card">
                <div className="k-card-top">
                  <span className="k-company">Notion Labs</span>
                  <span className="k-tag k-tag-high">High</span>
                </div>
                <div className="k-sub">Enterprise migration 500u</div>
                <div className="k-footer">
                  <span className="k-price">$120,000</span>
                  <span className="k-avatar" style={{ backgroundColor: '#003057' }}>AL</span>
                </div>
              </div>

              <div className="k-card">
                <div className="k-card-top">
                  <span className="k-company">Figma Org</span>
                  <span className="k-tag k-tag-blue">High</span>
                </div>
                <div className="k-sub">Design ops integration</div>
                <div className="k-footer">
                  <span className="k-price">$32,000</span>
                  <span className="k-avatar" style={{ backgroundColor: '#003057' }}>MK</span>
                </div>
              </div>
            </div>

            {/* Column 3: Negotiation */}
            <div className="kanban-col">
              <div className="kanban-col-header">
                <div>
                  <span style={{ color: '#0a382d' }}>• Negotiation</span>
                  <span className="badge-count">3</span>
                </div>
                <span className="col-total-val">$395k</span>
              </div>

              <div className="k-card">
                <div className="k-card-top">
                  <span className="k-company">Linear App</span>
                  <span className="k-tag k-tag-high">In Legal</span>
                </div>
                <div className="k-sub">Product sync pipeline</div>
                <div className="k-footer">
                  <span className="k-price">$78,000</span>
                  <span className="k-avatar" style={{ backgroundColor: '#003057' }}>EV</span>
                </div>
              </div>

              <div className="k-card">
                <div className="k-card-top">
                  <span className="k-company">Retool Corp</span>
                  <span className="k-tag k-tag-blue">High</span>
                </div>
                <div className="k-sub">Security compliance review</div>
                <div className="k-footer">
                  <span className="k-price">$95,000</span>
                  <span className="k-avatar" style={{ backgroundColor: '#003057' }}>TR</span>
                </div>
              </div>
            </div>

            {/* Column 4: Won (Highlighted Green Column) */}
            <div className="kanban-col won-column">
              <div className="kanban-col-header">
                <div>
                  <span style={{ color: '#147f4b' }}>• Won</span>
                  <span className="badge-count">8</span>
                </div>
                <span className="col-total-val" style={{ color: '#147f4b', fontWeight: '800' }}>$840k</span>
              </div>

              <div className="k-card">
                <div className="k-card-top">
                  <span className="k-company">Datadog</span>
                  <span className="k-tag k-tag-green">Closed today</span>
                </div>
                <div className="k-sub">Annual enterprise contract</div>
                <div className="k-footer">
                  <span className="k-price" style={{ color: '#147f4b' }}>$145,000</span>
                  <span className="k-avatar" style={{ backgroundColor: '#003057' }}>SL</span>
                </div>
              </div>

              <div className="k-card">
                <div className="k-card-top">
                  <span className="k-company">Supabase</span>
                  <span className="k-tag k-tag-green">Won</span>
                </div>
                <div className="k-sub">Database cloud add-on</div>
                <div className="k-footer">
                  <span className="k-price" style={{ color: '#147f4b' }}>$52,000</span>
                  <span className="k-avatar" style={{ backgroundColor: '#003057' }}>JD</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2 Placeholder */}
        {activeTab === 'contacts' && (
          <div style={{ padding: '60px', textAlign: 'center', color: '#556377' }}>
            <h3>Contact Profiles View</h3>
            <p>Unified customer profiles, activity timeline, and notes.</p>
          </div>
        )}

        {/* Tab 3 Placeholder */}
        {activeTab === 'reports' && (
          <div style={{ padding: '60px', textAlign: 'center', color: '#556377' }}>
            <h3>Sales Reports & Forecasting View</h3>
            <p>Real-time revenue analytics, team velocity, and deal trends.</p>
          </div>
        )}

      </div>

    </section>
  );
};

export default PlatformWorkflows;