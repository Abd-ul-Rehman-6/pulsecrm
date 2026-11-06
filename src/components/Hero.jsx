import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        
        {/* Badge */}
      

        {/* Headline */}
        <h1 className="hero-title">
          Close More Deals, Faste all on one platform
        </h1>

        {/* Description */}
        <p className="hero-description">
          The all-in-one modern CRM engineered to help fast-moving sales teams
          automate mundane workflows, centralize customer intelligence, and forecast
          pipeline with relentless precision.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary-coral">
            <span>Start Free Trial</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <button className="btn-secondary-demo">
           
            <span>Book Live Demo</span>
          </button>
        </div>

        {/* Bottom Feature Bullets */}
        <div className="hero-features">
          <span>No credit card required</span>
          <span className="feature-dot">•</span>
          <span>14-day free trial</span>
          <span className="feature-dot">•</span>
          <span>Cancel anytime</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;