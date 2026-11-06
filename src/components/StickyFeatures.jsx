import '../styles/StickyFeatures.css';

const StickyFeatures = () => {
  const hubsData = [
    {
      title: 'Sales Automation',
      description: 'Attract and convert the right leads. Run campaigns, personalize content, and track it all.',
      link: 'Learn more'
    },
    {
      title: 'Contact Management',
      description: 'Generate qualified leads and close deals faster. Automate prospecting, manage pipeline, and accelerate revenue growth.',
      link: 'Learn more'
    },
    {
      title: 'Pipeline View',
      description: 'Streamline and scale support to serve customers faster. Drive retention with actionable insights, customer health scores, and help desk tools.',
      link: 'Learn more'
    },
    {
      title: 'Analytics & Reports',
      description: 'Create content that clicks with your audience. Build pages, publish across content channels, and stay on brand.',
      link: 'Learn more'
    },
    {
      title: 'Email Tracking',
      description: 'Turn scattered data into unified intelligence. Combine, clean, and activate your customer data across every team and tool.',
      link: 'Learn more'
    },
    {
      title: 'Mobile CRM',
      description: 'Make it easy for customers to pay you. Send quotes, collect payments, and manage subscriptions.',
      link: 'Learn more'
    }
  ];

  return (
    <section className="sticky-features-section">
      <div className="sticky-grid-layout">
        
        {/* Left Side Sticky Text */}
        <div className="sticky-left-content">
          
          <h2 className="sticky-title">
            Growing a business is hard. PulseCRM makes it easier.
          </h2>
          <p className="sticky-description">
            Disconnected tools and data slow you down. PulseCRM connects everything — and everyone
            — in one place to make growing a business easier than you think.
          </p>
          <div className="sticky-buttons">
            <button className="btn-orange">Get a demo</button>
            <button className="btn-outline">Get started free</button>
          </div>
        </div>

        {/* Right Side Scrolling Cards */}
        <div className="scrolling-right-cards">
          {hubsData.map((hub, idx) => (
            <div key={idx} className="hub-card">
              <div>
                <div className="hub-card-header">
                  <h3 className="hub-card-title">{hub.title}</h3>
                  <span className="hub-card-icon">↗</span>
                </div>
                <p className="hub-card-text">{hub.description}</p>
              </div>
              <a href="#learn-more" className="hub-card-link">
                {hub.link} &rarr;
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StickyFeatures;