import { useState } from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Brand names aur custom SVG icons matching screenshot
  const brandLogos = [
    {
      name: 'Acme Corp',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      )
    },
    {
      name: 'GlobalTech',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      name: 'Nexify',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2"></circle>
          <circle cx="5" cy="19" r="2"></circle>
          <circle cx="19" cy="19" r="2"></circle>
          <line x1="12" y1="7" x2="5" y2="17"></line>
          <line x1="12" y1="7" x2="19" y2="17"></line>
          <line x1="5" y1="19" x2="19" y2="19"></line>
        </svg>
      )
    },
    {
      name: 'Vertex Cloud',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      name: 'Lumina AI',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
        </svg>
      )
    },
    {
      name: 'HyperScale',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2Z"></path>
          <path d="M12 12 2.7 9.2"></path>
          <path d="M12 12v10"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="about-section-container">
      
      {/* Top 2 Columns Header */}
      <div className="about-header-grid">
        <h2 className="about-title">What is PulseCRM?</h2>
        <p className="about-description">
          PulseCRM brings together your teams, tools, AI, and customer data on the
          same platform, so every customer interaction drives growth. Marketing
          generates better leads. Sales wins more deals. Customers stick around.
        </p>
      </div>

      {/* Bottom Trusted Brands Marquee Banner */}
      <div className="trusted-logos-banner">
        <div className="trusted-text-block">
          <p>Trusted by 306,000+<br />Customers Worldwide</p>
        </div>

        <div className="marquee-wrapper">
          <div className={`marquee-track ${!isPlaying ? 'paused' : ''}`}>
            {/* First Set */}
            {brandLogos.map((brand, idx) => (
              <div key={`brand-1-${idx}`} className="brand-logo-item">
                <span className="brand-icon">{brand.icon}</span>
                <span className="brand-name">{brand.name}</span>
              </div>
            ))}
            {/* Duplicate Set for Seamless Infinite Scroll Loop */}
            {brandLogos.map((brand, idx) => (
              <div key={`brand-2-${idx}`} className="brand-logo-item">
                <span className="brand-icon">{brand.icon}</span>
                <span className="brand-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pause / Play Button */}
        <button
          className="pause-btn"
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"></rect>
              <rect x="14" y="4" width="4" height="16" rx="1"></rect>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"></polygon>
            </svg>
          )}
        </button>
      </div>

    </section>
  );
};

export default AboutSection;