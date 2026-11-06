import '../styles/Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      quote: '"PulseCRM replaced three fragmented tools for us. Our sales reps save at least 8 hours every single week on manual CRM admin."',
      name: 'Sarah Jenkins',
      role: 'VP of Sales, CloudScale',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    {
      quote: '"The pipeline visibility is unreal. We increased our close rate by 42% within the first two quarters of switching from our legacy CRM."',
      name: 'Marcus Chen',
      role: 'Head of Revenue, FinFlow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      quote: '"Setup was virtually instantaneous. The automated email triggers alone paid for our annual subscription within the first 14 days."',
      name: 'Elena Rostova',
      role: 'Founder & CEO, NexaDigital',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <section className="testimonials-section">
      
      {/* Header */}
      <div className="testimonials-header">
        <h2 className="testimonials-title">Loved by Teams Everywhere</h2>
        <p className="testimonials-subtitle">
          Hear how leading revenue leaders unlocked predictable growth and freed reps from busywork.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="testimonials-grid">
        {reviews.map((item, idx) => (
          <div key={idx} className="testimonial-card">
            <div>
              <div className="star-rating">★★★★★</div>
              <p className="testimonial-quote">{item.quote}</p>
            </div>
            
            <div className="testimonial-author">
              <img src={item.avatar} alt={item.name} className="author-avatar" />
              <div className="author-info">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;