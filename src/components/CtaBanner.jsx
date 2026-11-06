import '../styles/CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-container">
        
        <h2 className="cta-headline">
          Make impossible growth feel impossibly easy, with PulseCRM<span className="brand-dot">.</span>
        </h2>

        <div className="cta-buttons-group">
          <button className="cta-btn-primary">Get a demo</button>
          <button className="cta-btn-secondary">Get started free</button>
        </div>

      </div>
    </section>
  );
};

export default CtaBanner;