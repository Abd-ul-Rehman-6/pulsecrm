import { useState, useEffect } from 'react';
import '../styles/VideoCards.css';

const VideoCards = () => {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  // Cards data: har card ke liye alag image + alag local video
  const cardsData = [
    {
      id: 1,
      title: 'All your customer data, right at your fingertips.',
      image: '/images/customer.jpg',
      video:  '/videos/crm3.mp4'
    },
    {
      id: 2,
      title: 'Marketing, sales, and service, finally on the same page.',
      image: '/images/marketing.jpg',
      video: '/videos/crm.mp4'
    },
    {
      id: 3,
      title: 'AI you control. Results you can trust.',
      image: '/images/trust.jpg',
      video: '/videos/crm2.mp4'
    }
  ];

  // Hover: card expand + preview video play
  const handleMouseEnter = (cardId, e) => {
    setExpandedCard(cardId);
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  // Leave: card normal size + video reset
  const handleMouseLeave = (e) => {
    setExpandedCard(null);
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Modal band ho to scroll lock + Escape key se close
  useEffect(() => {
    if (!activeVideoModal) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideoModal(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeVideoModal]);

  const closeModal = () => setActiveVideoModal(null);

  return (
    <section className="video-cards-section">
      <div className="cards-grid">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`video-card ${expandedCard === card.id ? 'is-expanded' : ''}`}
            onMouseEnter={(e) => handleMouseEnter(card.id, e)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveVideoModal(card.video)}
          >
            <div className="media-container">
              {/* Static Thumbnail Image */}
              <img src={card.image} alt={card.title} className="card-image" />

              {/* Chhoti floating video panel — image rehti hai, uske upar video chalti hai */}
              <div className="video-preview-panel">
                <video
                  src={card.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="card-video"
                />
              </div>

              {/* Gradient Overlay for text readability */}
              <div className="card-overlay"></div>

              {/* Hover Play Badge */}
              <div className="play-hover-badge">
                <svg
                  className="play-icon-svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Popup (HubSpot style lightbox) */}
      {activeVideoModal && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <button
            className="modal-close-btn"
            aria-label="Close video"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video
              src={activeVideoModal}
              controls
              autoPlay
              playsInline
              className="modal-video-player"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoCards;