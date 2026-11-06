import '../styles/IntegrationsOrbit.css';

const IntegrationsOrbit = () => {
  const tools = [
    {
      name: 'Gmail',
      className: 'badge-gmail',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      name: 'Slack',
      className: 'badge-slack',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a154b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="13" y="2" width="3" height="8" rx="1.5"></rect>
          <path d="M19 8.5V10h1.5A1.5 1.5 0 0 0 22 8.5 1.5 1.5 0 0 0 20.5 7H19v1.5z"></path>
          <rect x="8" y="14" width="3" height="8" rx="1.5"></rect>
          <path d="M5 15.5V14H3.5A1.5 1.5 0 0 0 2 15.5 1.5 1.5 0 0 0 3.5 17H5v-1.5z"></path>
          <rect x="14" y="13" width="8" height="3" rx="1.5"></rect>
          <path d="M15.5 19H14v1.5A1.5 1.5 0 0 0 15.5 22a1.5 1.5 0 0 0 1.5-1.5V19h-1.5z"></path>
          <rect x="2" y="8" width="8" height="3" rx="1.5"></rect>
          <path d="M8.5 5H10V3.5A1.5 1.5 0 0 0 8.5 2 1.5 1.5 0 0 0 7 3.5V5h1.5z"></path>
        </svg>
      )
    },
    {
      name: 'GitHub',
      className: 'badge-github',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      )
    },
    {
      name: 'Stripe',
      className: 'badge-stripe',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#635bff">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
        </svg>
      )
    },
    {
      name: 'HubSpot',
      className: 'badge-hubspot',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff5c35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 9V3m0 18v-6M9 12H3m18 0h-6"></path>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      className: 'badge-whatsapp',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      className: 'badge-notion',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
          <path d="M6 6h12M6 10h12"></path>
        </svg>
      )
    },
    {
      name: 'Zoom',
      className: 'badge-zoom',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24">
          <rect x="1" y="1" width="22" height="22" rx="5" fill="#2D8CFF"/>
          <path d="M5 9.5C5 8.67 5.67 8 6.5 8h6C13.33 8 14 8.67 14 9.5v5c0 .83-.67 1.5-1.5 1.5h-6C5.67 16 5 15.33 5 14.5v-5z" fill="#fff"/>
          <path d="M15.5 10.2l3.2-2.1c.45-.3 1.05.02 1.05.56v6.68c0 .54-.6.86-1.05.56l-3.2-2.1v-3.6z" fill="#fff"/>
        </svg>
      )
    }
  ];

  return (
    <section className="integrations-section">
      <div className="integrations-header">
        <h1 className="integrations-title">Powerful Integrations</h1>
        <p className="integrations-subtitle">
          Seamless zero-latency two-way sync with your daily sales, communication, and engineering stack.
        </p>
      </div>

      <div className="orbit-stage">
        
        {/* === Har Card ki apni alag unique Wrapper Div === */}
        
        {/* 1. Top Left Card */}
        <div className="card-wrapper-top-left">
          <div className="corner-feature-card animate-corner-float-delayed Lightning-Fast-Sync-card">
            <div>
              <h4>Lightning Fast Sync</h4>
              <p>Sub-millisecond event streaming, zero lag triggers & instant updates across your workspace.</p>
            </div>
          </div>
        </div>

        {/* 2. Top Right Card */}
        <div className="card-wrapper-top-right">
          <div className="corner-feature-card animate-corner-float-delayed enterprise-security-card">
            <div>
              <h4>Enterprise Security</h4>
              <p>Advanced OAuth 2.0 authentication tokens, strict rate limiting & fully encrypted payloads.</p>
            </div>
          </div>
        </div>

        {/* 3. Bottom Left Card */}
        <div className="card-wrapper-bottom-left">
          <div className="corner-feature-card animate-corner-float-delayed Real-Time-Alerts-card">
            <div>
              <h4>Real-Time Alerts</h4>
              <p>Instant multi-channel notifications, automated messaging & team communication workflows.</p>
            </div>
          </div>
        </div>

        {/* 4. Bottom Right Card */}
        <div className="card-wrapper-bottom-right">
          <div className="corner-feature-card animate-corner-float smart-data-pipelines-card">
            <div>
              <h4>Smart Data Pipelines</h4>
              <p>Automated CRM lead scoring, seamless data logging & custom object synchronization.</p>
            </div>
          </div>
        </div>

        {/* Rotating system */}
        <div className="orbit-system">
          <svg
            className="orbit-lines"
            viewBox="0 0 700 480"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M565 240 L457.5 319.7 L242.5 319.7 L135 240 L242.5 160.3 L457.5 160.3 Z"
              fill="none"
              stroke="#6ec1e4"
              strokeWidth="3"
              opacity="0.7"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M565 240 L457.5 319.7 L242.5 319.7 L135 240 L242.5 160.3 L457.5 160.3 Z"
              fill="none"
              stroke="#6ec1e4"
              strokeWidth="3"
              opacity="0.7"
              vectorEffect="non-scaling-stroke"
              transform="rotate(60 350 240)"
            />
            <path
              d="M565 240 L457.5 319.7 L242.5 319.7 L135 240 L242.5 160.3 L457.5 160.3 Z"
              fill="none"
              stroke="#6ec1e4"
              strokeWidth="3"
              opacity="0.7"
              vectorEffect="non-scaling-stroke"
              transform="rotate(-60 350 240)"
            />
          </svg>

          {tools.map((tool, idx) => (
            <div key={idx} className={`badge-slot ${tool.className}`}>
              <div className="orbit-badge">
                <span className="tool-icon">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="orbit-center-core">
          <div className="core-logo-icon">✨</div>
          <span className="core-logo-text">CRM PRO</span>
        </div>
      </div>

    </section>
  );
};

export default IntegrationsOrbit;