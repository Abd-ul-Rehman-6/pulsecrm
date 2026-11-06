import { useEffect, useRef, useState } from 'react';
import '../styles/GrowthSteps.css';

const GrowthSteps = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stepsData = [
    {
      number: '01',
      title: 'Sign Up & Connect',
      description:
        'One-click sync with your existing email, calendar, and lead sources in under 5 minutes without disrupting workflows.',
      variant: 'navy',
      highlight: false,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Customize Your Pipeline',
      description:
        "Tailor stages, automation rules, trigger alerts, and custom deal fields to fit your company's exact sales motion.",
      variant: 'sky',
      highlight: false,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Grow Your Revenue',
      description:
        'Close deals faster with predictive suggestions, real-time collaboration, and automated performance insights.',
      variant: 'green',
      highlight: true,
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="growth-steps-section" ref={sectionRef}>
      {/* Header */}
      <div className={`growth-header ${visible ? 'is-visible' : ''}`}>
        
          
        <h2 className="growth-title">
          How PulseCRM <span className="growth-title-accent">Accelerates</span> Your Growth
        </h2>
        <p className="growth-subtitle">
          Get up and running in minutes, not months. No complex consultants required.
        </p>
        <span className="growth-title-bar" aria-hidden="true"></span>
      </div>

      {/* Steps Timeline */}
      <div className={`steps-container ${visible ? 'is-visible' : ''}`}>
        <div className="steps-connector" aria-hidden="true">
          <span className="connector-pulse"></span>
        </div>

        {stepsData.map((step, idx) => (
          <div
            key={idx}
            className={`step-item step-${step.variant} ${step.highlight ? 'featured' : ''}`}
            style={{ '--i': idx }}
          >
            <div className="step-node">
              {step.icon}
              <span className="step-badge">{step.number}</span>
            </div>

            <div className="step-card" data-step={step.number}>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {step.highlight && <span className="step-flag">Your Goal</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowthSteps;
