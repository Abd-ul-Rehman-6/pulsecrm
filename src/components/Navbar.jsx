import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  Lightbulb,
  BookOpen,
  Code,
  Users,
  Tag,
  ExternalLink,
} from "lucide-react";
import '../styles/Navbar.css';

const MOBILE_QUERY = '(max-width: 860px)';

const Navbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [activeResourceIdx, setActiveResourceIdx] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);
  const closeTimeoutRef = useRef(null);

  const location = useLocation();

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const closeAllMenus = useCallback(() => {
    setIsResourcesOpen(false);
    setIsMobileMenuOpen(false);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('nav-menu-open');
    }
    clearCloseTimeout();
  }, [clearCloseTimeout]);

  useEffect(() => {
    const timer = setTimeout(() => closeAllMenus(), 0);
    return () => clearTimeout(timer);
  }, [location.pathname, closeAllMenus]);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);

    const updateMobile = (event) => {
      setIsMobile(event.matches);
      if (event.matches !== isMobile) {
        closeAllMenus();
      }
    };

    updateMobile(mql);
    mql.addEventListener('change', updateMobile);

    const closeOnResize = () => closeAllMenus();
    window.addEventListener('resize', closeOnResize);

    return () => {
      mql.removeEventListener('change', updateMobile);
      window.removeEventListener('resize', closeOnResize);
    };
  }, [isMobile, closeAllMenus]);

  useEffect(() => {
    if (!isMobileMenuOpen && !isResourcesOpen) return;

    const onPointerDown = (e) => {
      if (e.target.closest('.navbar-header')) return;
      closeAllMenus();
    };
    const onKey = (e) => {
      if (e.key === 'Escape') closeAllMenus();
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [isMobileMenuOpen, isResourcesOpen, closeAllMenus]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Customers', href: '#' },
  ];

  const resourcesItems = [
    {
      title: "WHY",
      subtitle: "The story behind Pulse",
      previewTitle: "Why teams choose Pulse",
      previewDesc: "The principles and product philosophy behind the open source CRM.",
      icon: <Lightbulb size={16} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      link: "/why",
      isExternal: false,
      isHighlighted: false,
    },
    {
      title: "USER GUIDE",
      subtitle: "Learn how to use Pulse",
      previewTitle: "Master every corner of Pulse",
      previewDesc: "Step-by-step guides and playbooks to help your team get the most out of their workspace.",
      icon: <BookOpen size={16} />,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      link: "/user-guide",
      isExternal: true,
      isHighlighted: false,
    },
    {
      title: "DEVELOPERS",
      subtitle: "Create apps on Pulse",
      previewTitle: "Build on an open platform",
      previewDesc: "APIs, SDKs and webhooks to extend Pulse and ship apps on top of your CRM data.",
      icon: <Code size={16} />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      link: "/developers",
      isExternal: true,
      isHighlighted: false,
    },
   
    {
      title: "PARTNERS",
      subtitle: "Find a Pulse partner",
      previewTitle: "Team up with a Pulse expert",
      previewDesc: "Meet the certified agencies and consultants implementing Pulse for teams worldwide.",
      icon: <Users size={16} />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      link: "/partners",
      isExternal: false,
      isHighlighted: false,
    },
    {
      title: "RELEASES",
      subtitle: "Discover what's new",
      previewTitle: "See what shipped in 2.40.0",
      previewDesc: "Track every release with changelogs, highlights and demos of the newest features.",
      icon: <Tag size={16} />,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
      link: "/releases",
      isExternal: false,
      isHighlighted: true,
    }
  ];

  const handleMouseEnter = () => {
    if (isMobile) return;
    clearCloseTimeout();
    setIsResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
      closeTimeoutRef.current = null;
    }, 250);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">

        <a href="/" className="navbar-logo" onClick={closeAllMenus}>
          <div className="logo-icon">P</div>
          <span className="logo-text">PulseCRM</span>
        </a>

        <nav className={`navbar-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${location.pathname === link.href ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              {link.name}
            </a>
          ))}

          <div
            className="dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="nav-link dropdown-trigger"
              onClick={() => {
                setIsResourcesOpen((v) => !v);
              }}
            >
              Resources <span className="dropdown-arrow">▾</span>
            </span>

            {isResourcesOpen && (
              <div className="resources-mega-dropdown">
                <div className="dropdown-links-list">
                  {resourcesItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      className={`dropdown-item-card ${activeResourceIdx === idx ? 'active-preview' : ''}`}
                      onMouseEnter={() => setActiveResourceIdx(idx)}
                      onClick={() => {
                        setActiveResourceIdx(idx);
                        closeAllMenus();
                      }}
                    >
                      <div className="item-icon-box">
                        {item.icon}
                        {item.isExternal && <ExternalLink size={14} className="external-arrow" />}
                      </div>
                      <div className="item-text-content">
                        <div className={`item-title ${item.isHighlighted ? 'highlighted-blue' : ''}`}>
                          {item.isHighlighted && <span className="blue-dash">— </span>}
                          {item.title}
                        </div>
                        <div className="item-subtitle">{item.subtitle}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="dropdown-preview-pane">
                  <img
                    src={resourcesItems[activeResourceIdx].image}
                    alt={resourcesItems[activeResourceIdx].previewTitle}
                    className="preview-dynamic-image"
                  />
                  <div className="preview-caption">
                    <strong>{resourcesItems[activeResourceIdx].previewTitle}</strong>
                    <p>{resourcesItems[activeResourceIdx].previewDesc}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="navbar-actions">
          <button className="btn-cta">Get Started Free</button>
          <button
            className={`hamburger-btn ${isMobileMenuOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => {
              const next = !isMobileMenuOpen;
              setIsMobileMenuOpen(next);
              setIsResourcesOpen(false);
              if (typeof document !== 'undefined') {
                if (next) {
                  document.body.classList.add('nav-menu-open');
                } else {
                  document.body.classList.remove('nav-menu-open');
                }
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;