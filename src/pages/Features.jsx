import { useState } from "react";
import {
  ShieldUser,
  FileText,
  Send,
  Power,
  ShieldCheck,
  Zap,
} from "lucide-react";
import "../styles/Features.css";



const Features = () => {
  const bgTags = [
    "ARTIFICIAL INTELLIGENCE",
    "AGENTS",
    "CANVAS",
    "CLIENT SCRIPT",
    "PIPELINE",
    "TERRITORY MANAGEMENT",
    "FORECASTING",
    "LEAD MANAGEMENT",
    "LEAD CAPTURE",
    "BUSINESS INTELLIGENCE",
    "PAGE LAYOUTS",
    "JOURNEY BUILDER",
  ];

  // State to track active card selection on the right
  const [activeAiTab, setActiveAiTab] = useState(0);

  const aiCardsData = [
    {
      id: 0,
      title: "AI Agents for Sales",
      icon: "🤖",
      desc: "Autonomous agents that handle customer conversations, qualify leads, and schedule follow-ups 24/7."
    },
    {
      id: 1,
      title: "Generative AI",
      icon: "✨",
      desc: "Instantly draft compelling emails, summarize long call transcripts, and generate custom content seamlessly."
    },
    {
      id: 2,
      title: "Efficiency",
      icon: "⚡",
      desc: "Eliminate manual data entry, optimize workflows, and boost team productivity with intelligent automation."
    }
  ];

  return (
    <div className="features-page">
      {/* HERO SECTION */}
      <section className="features-hero">
        {/* Animated Background Pills Backdrop */}
        <div className="floating-tags-backdrop">
          <div className="tags-row row-1">
            {bgTags.map((tag, idx) => (
              <span key={`r1-${idx}`} className="feature-pill-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="tags-row row-2">
            {bgTags.slice().reverse().map((tag, idx) => (
              <span key={`r2-${idx}`} className="feature-pill-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="tags-row row-3">
            {bgTags.map((tag, idx) => (
              <span key={`r3-${idx}`} className="feature-pill-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="tags-row row-4">
            {bgTags.slice().reverse().map((tag, idx) => (
              <span key={`r4-${idx}`} className="feature-pill-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Radial Mesh Gradient Overlay for Soft Blur Effect */}
        <div className="gradient-overlay"></div>

        {/* Center Content Box with Solid White Card */}
        <div className="features-hero-content">
          <div className="features-hero-card">
            <h1 className="hero-title">
              Features that make <span className="blue-highlight">selling easier</span>
            </h1>

            <p className="hero-subtitle">
              Plus CRM offers everything you need to increase leads, accelerate sales,
              and measure sales performance.
            </p>

            <button className="btn-red-trial">START FREE TRIAL</button>
          </div>
        </div>
      </section>

      {/* SECTION: AI THAT LISTENS, LEARNS, AND ASSISTS */}
      <section className="ai-feature-section">
        <div className="ai-feature-container">
          {/* Left Column: Heading & Badge */}
          <div className="ai-left-col">
            <span className="ai-badge">Artificial Intelligence</span>
            <h2 className="ai-title">
              AI that listens, learns, and assists
            </h2>
          </div>

          {/* Right Column: Description & Link */}
          <div className="ai-right-col">
            <p className="ai-description">
              Intelligent Assistance, now at your beck and call. Simply converse 
              with your CRM and watch as your commands get distilled into 
              streamlined action. Dynamic recommendations made, follow-ups 
              automated, anomalies flagged, outcomes predicted, and emails 
              deciphered. It's more than just automation—it's your steadfast 
              strategic partner, empowered for success.
            </p>
            <a href="#learn-more" className="ai-learn-link">
              Learn more <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* NEW SECTION: INTERACTIVE AI GRAPHIC & CARDS SHOWCASE */}
      <section className="ai-showcase-section">
        <div className="ai-showcase-container">
          
          {/* Left Side: Glowing AI Circle Graphic Card */}
          <div className="ai-graphic-card">
            <svg
              className="ai-graphic-svg"
              viewBox="0 0 540 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="bgBaseGrad" x1="0" y1="0" x2="540" y2="540" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0a382d" />
                  <stop offset="30%" stopColor="#147f4b" />
                  <stop offset="60%" stopColor="#26b06d" />
                  <stop offset="100%" stopColor="#147f4b" />
                </linearGradient>
                <radialGradient id="topLeftCyanGlow" cx="0.06" cy="0.06" r="0.55">
                  <stop offset="0%" stopColor="#6ec1e4" stopOpacity="0.9" />
                  <stop offset="45%" stopColor="#26b06d" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0a382d" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="bottomRightCyanGlow" cx="0.95" cy="0.95" r="0.5">
                  <stop offset="0%" stopColor="#6ec1e4" stopOpacity="0.8" />
                  <stop offset="45%" stopColor="#147f4b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0a382d" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="centerDeepNavy" cx="0.5" cy="0.5" r="0.46">
                  <stop offset="0%" stopColor="#003057" stopOpacity="0.98" />
                  <stop offset="60%" stopColor="#0a382d" stopOpacity="0.94" />
                  <stop offset="100%" stopColor="#147f4b" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="irisInnerGrad" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#003057" />
                  <stop offset="60%" stopColor="#0a382d" />
                  <stop offset="100%" stopColor="#147f4b" />
                </radialGradient>
                <linearGradient id="arcTopLeftGrad" x1="115" y1="210" x2="265" y2="95" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#26b06d" />
                  <stop offset="55%" stopColor="#147f4b" />
                  <stop offset="100%" stopColor="#0a382d" />
                </linearGradient>
                <linearGradient id="arcRightGrad" x1="300" y1="100" x2="420" y2="370" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#26b06d" />
                  <stop offset="45%" stopColor="#147f4b" />
                  <stop offset="100%" stopColor="#0a382d" />
                </linearGradient>
                <linearGradient id="arcBottomGrad" x1="145" y1="395" x2="395" y2="400" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#26b06d" />
                  <stop offset="50%" stopColor="#147f4b" />
                  <stop offset="100%" stopColor="#26b06d" />
                </linearGradient>
                <linearGradient id="arcLeftDimGrad" x1="105" y1="220" x2="135" y2="390" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0a382d" />
                  <stop offset="50%" stopColor="#147f4b" />
                  <stop offset="100%" stopColor="#26b06d" />
                </linearGradient>
                <linearGradient id="letterAGrad" x1="175" y1="210" x2="265" y2="345" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6ec1e4" />
                  <stop offset="50%" stopColor="#26b06d" />
                  <stop offset="100%" stopColor="#147f4b" />
                </linearGradient>
                <linearGradient id="letterIGrad" x1="312" y1="200" x2="312" y2="345" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#147f4b" />
                  <stop offset="55%" stopColor="#26b06d" />
                  <stop offset="100%" stopColor="#6ec1e4" />
                </linearGradient>
                <linearGradient id="starLightFacet" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8be5e4" />
                  <stop offset="100%" stopColor="#26b06d" />
                </linearGradient>
                <linearGradient id="starDarkFacet" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#147f4b" />
                  <stop offset="100%" stopColor="#0a382d" />
                </linearGradient>
                <clipPath id="innerIrisClip">
                  <circle cx="270" cy="270" r="165" />
                </clipPath>
                <path id="textPathTop" d="M 65,270 A 205,205 0 0,1 475,270" />
                <path id="textPathRight" d="M 270,65 A 205,205 0 0,1 270,475" />
                <path id="textPathLeft" d="M 270,475 A 205,205 0 0,1 270,65" />
                <path id="textPathBottom" d="M 60,270 A 210,210 0 0,0 480,270" />
              </defs>
              {/* Background Layers */}
              <rect width="540" height="540" rx="36" fill="url(#bgBaseGrad)" />
              <rect width="540" height="540" rx="36" fill="url(#topLeftCyanGlow)" />
              <rect width="540" height="540" rx="36" fill="url(#bottomRightCyanGlow)" />
              <rect width="540" height="540" rx="36" fill="url(#centerDeepNavy)" />

              {/* Inner Dark Navy Circle */}
              <circle cx="270" cy="270" r="166" fill="url(#irisInnerGrad)" />

              {/* Subtle Iris / Camera Shutter Curved Lines Inside Circle */}
              <g clipPath="url(#innerIrisClip)" stroke="#00b4ff" strokeOpacity="0.26" strokeWidth="1.2" fill="none">
                <path d="M 270 95 Q 245 175 170 215" />
                <path d="M 358 118 Q 305 180 220 185" />
                <path d="M 422 182 Q 345 215 275 175" />
                <path d="M 445 270 Q 365 265 320 205" />
                <path d="M 422 358 Q 355 315 340 245" />
                <path d="M 358 422 Q 320 355 350 285" />
                <path d="M 270 445 Q 285 365 345 325" />
                <path d="M 182 422 Q 235 360 315 355" />
                <path d="M 118 358 Q 195 325 265 365" />
                <path d="M 95 270 Q 175 275 220 335" />
                <path d="M 118 182 Q 185 225 200 295" />
                <path d="M 182 118 Q 220 185 190 255" />
              </g>

              {/* Outer Segmented Glowing Ring */}
              <circle cx="270" cy="270" r="172" stroke="#002266" strokeWidth="15" opacity="0.55" />
              <g className="ai-rotating-ring">
                <path d="M 124 361 A 172 172 0 0 1 113 200" stroke="url(#arcLeftDimGrad)" strokeWidth="15" strokeLinecap="butt" />
                <path d="M 113 200 A 172 172 0 0 1 305 101" stroke="url(#arcTopLeftGrad)" strokeWidth="15" strokeLinecap="butt" />
                <path d="M 323 106 A 172 172 0 0 1 402 380" stroke="url(#arcRightGrad)" strokeWidth="15" strokeLinecap="butt" />
                <path d="M 394 389 A 172 172 0 0 1 124 361" stroke="url(#arcBottomGrad)" strokeWidth="15" strokeLinecap="butt" />
              </g>

              {/* Curved Perimeter Labels */}
              <g className="ai-text-rotate">
                <text className="ai-curved-svg-text">
                  <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">RECOMMENDATIONS</textPath>
                </text>
                <text className="ai-curved-svg-text">
                  <textPath href="#textPathRight" startOffset="50%" textAnchor="middle">PREDICTIONS</textPath>
                </text>
                <text className="ai-curved-svg-text">
                  <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">ANOMALY DETECTION</textPath>
                </text>
                <text className="ai-curved-svg-text">
                  <textPath href="#textPathLeft" startOffset="50%" textAnchor="middle">CONVERSATIONS</textPath>
                </text>
              </g>

              {/* 4 Faceted Four-Point Stars */}
              <g className="ai-stars-orbit">
                <g transform="translate(115, 118) rotate(-12)">
                  <path d="M 0 -18 C 3 -5, 5 -3, 18 0 C 5 3, 3 5, 0 18 C -3 5, -5 3, -18 0 C -5 -3, -3 -5, 0 -18 Z" fill="url(#starLightFacet)" />
                  <path d="M 0 -18 C 3 -5, 5 -3, 18 0 C 5 3, 3 5, 0 18 L 0 -18 Z" fill="url(#starDarkFacet)" opacity="0.65" />
                </g>
                <g transform="translate(425, 132) rotate(12)">
                  <path d="M 0 -18 C 3 -5, 5 -3, 18 0 C 5 3, 3 5, 0 18 C -3 5, -5 3, -18 0 C -5 -3, -3 -5, 0 -18 Z" fill="url(#starLightFacet)" />
                  <path d="M 0 -18 C 3 -5, 5 -3, 18 0 C 5 3, 3 5, 0 18 L 0 -18 Z" fill="url(#starDarkFacet)" opacity="0.65" />
                </g>
                <g transform="translate(115, 422) rotate(10)">
                  <path d="M 0 -18 C 3 -5, 5 -3, 18 0 C 5 3, 3 5, 0 18 C -3 5, -5 3, -18 0 C -5 -3, -3 -5, 0 -18 Z" fill="url(#starLightFacet)" />
                  <path d="M 0 -18 C 3 -5, 5 -3, 18 0 C 5 3, 3 5, 0 18 L 0 -18 Z" fill="url(#starDarkFacet)" opacity="0.65" />
                </g>
                <g transform="translate(422, 412) rotate(-10)">
                  <path d="M 0 -18 C 3 -5, 5 -3, 18 0 C 5 3, 3 5, 0 18 C -3 5, -5 3, -18 0 C -5 -3, -3 -5, 0 -18 Z" fill="url(#starLightFacet)" />
                  <path d="M 0 -18 C 3 -5, 5 -3, 18 0 C 5 3, 3 5, 0 18 L 0 -18 Z" fill="url(#starDarkFacet)" opacity="0.65" />
                </g>
              </g>

              {/* Center Giant "AI" Letters */}
              <g className="ai-center-letters">
                <path d="M 206 196 L 238 196 L 286 342 L 252 342 L 242 310 L 202 310 L 192 342 L 159 342 L 206 196 Z M 210 283 L 234 283 L 222 239 L 210 283 Z" fill="url(#letterAGrad)" />
                <rect x="298" y="196" width="32" height="146" fill="url(#letterIGrad)" />
              </g>
            </svg>
          </div>

          {/* Right Side: Interactive Feature Cards List */}
          <div className="ai-cards-list">
            {aiCardsData.map((item, index) => (
              <div
                key={item.id}
                className={`ai-interactive-card ${activeAiTab === index ? 'active' : ''}`}
                onClick={() => setActiveAiTab(index)}
              >
                <div className="card-left-content">
                  <div className="card-icon-box">
                    {index === 0 && (
                      <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="24" cy="41" rx="12" ry="3" fill="#bae6fd" />
                        <line x1="24" y1="7" x2="24" y2="14" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
                        <circle cx="24" cy="6" r="2.2" fill="#fde047" stroke="#0f172a" strokeWidth="1.6" />
                        <rect x="6" y="20" width="4" height="10" rx="2" fill="#facc15" stroke="#0f172a" strokeWidth="1.6" />
                        <rect x="38" y="20" width="4" height="10" rx="2" fill="#facc15" stroke="#0f172a" strokeWidth="1.6" />
                        <rect x="10" y="14" width="28" height="21" rx="4" fill="#fde68a" stroke="#0f172a" strokeWidth="1.8" />
                        <path d="M 14 14 L 34 14 A 4 4 0 0 1 38 18 L 38 31 A 4 4 0 0 1 34 35 L 30 35 L 30 18 L 10 18 A 4 4 0 0 1 14 14 Z" fill="#facc15" opacity="0.65" />
                        <rect x="14" y="19" width="20" height="11" rx="2" fill="#fffbeb" stroke="#0f172a" strokeWidth="1.5" />
                        <rect x="17" y="22.5" width="3.5" height="3.5" rx="0.8" fill="#0f172a" />
                        <polygon points="29,22 31.5,24.2 29,26.5 26.5,24.2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
                        <path d="M 40 28 C 40 36, 33 39, 25 39" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                        <ellipse cx="23.5" cy="39" rx="2.8" ry="1.6" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="24" cy="41" rx="13" ry="3" fill="#bae6fd" />
                        <rect x="13" y="11" width="5" height="25" rx="1" fill="#f59e0b" stroke="#0f172a" strokeWidth="1.6" />
                        <rect x="20" y="10" width="18" height="12" rx="2" fill="#fde68a" stroke="#0f172a" strokeWidth="1.6" />
                        <line x1="23" y1="16" x2="29" y2="16" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" />
                        <polygon points="33.5,13.5 36,16 33.5,18.5 31,16" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
                        <rect x="18" y="18" width="16" height="19" rx="1.5" fill="#fbbf24" stroke="#0f172a" strokeWidth="1.6" />
                        <rect x="10" y="25" width="18" height="11" rx="2" fill="#fde68a" stroke="#0f172a" strokeWidth="1.6" />
                        <circle cx="14.5" cy="30.5" r="2" fill="#ffffff" stroke="#0f172a" strokeWidth="1.4" />
                        <line x1="19" y1="30.5" x2="25" y2="30.5" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg viewBox="0 0 48 48" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="24" cy="41" rx="13" ry="3" fill="#bae6fd" />
                        <path d="M21.5 8H26.5L27.3 12.2C28.6 12.6 29.8 13.3 30.8 14.2L34.9 12.8L37.4 17.1L34.1 19.9C34.3 20.9 34.4 21.9 34.4 23C34.4 24.1 34.3 25.1 34.1 26.1L37.4 28.9L34.9 33.2L30.8 31.8C29.8 32.7 28.6 33.4 27.3 33.8L26.5 38H21.5L20.7 33.8C19.4 33.4 18.2 32.7 17.2 31.8L13.1 33.2L10.6 28.9L13.9 26.1C13.7 25.1 13.6 24.1 13.6 23C13.6 21.9 13.7 20.9 13.9 19.9L10.6 17.1L13.1 12.8L17.2 14.2C18.2 13.3 19.4 12.6 20.7 12.2L21.5 8Z" fill="#fde68a" stroke="#0f172a" strokeWidth="1.6" strokeLinejoin="round" />
                        <path d="M 16.5 25 A 7.5 7.5 0 0 1 31.5 25 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" strokeLinejoin="round" />
                        <line x1="24" y1="25" x2="27.5" y2="19.5" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
                        <circle cx="24" cy="25" r="1.5" fill="#0f172a" />
                      </svg>
                    )}
                  </div>
                  <span className="card-title">{item.title}</span>
                </div>
                <div className="card-arrow-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* TEAM CHAT FEATURE SECTION */}
      <section className="team-chat-section">
        <div className="team-chat-container">

          {/* Left Column: Chat UI Card */}
          <div className="chat-ui-card">
            
            {/* Sidebar / Rooms List */}
            <div className="chat-sidebar">
              <span className="rooms-heading">ROOMS</span>
              <ul className="rooms-list">
                <li className="room-item active">
                  <span className="room-name"># sales-closers</span>
                  <span className="room-badge">3</span>
                </li>
                <li className="room-item"># general</li>
                <li className="room-item"># leads-urgent</li>
                <li className="room-item locked">🔒 executive</li>
              </ul>
            </div>

            {/* Main Chat Area */}
            <div className="chat-main-area">
              
              {/* Chat Header */}
              <div className="chat-header">
                <div className="chat-title-wrap">
                  <span className="chat-channel-title"># sales-closers</span>
                  <span className="online-dot"></span>
                </div>
                <span className="bell-icon"></span>
              </div>

              {/* Chat Messages Body */}
              <div className="chat-body">
                <div className="message-wrapper">
                  <div className="avatar">AV</div>
                  <div className="message-content">
                    <div className="sender-name">Alex Vance</div>
                    <p className="message-text">
                      Closed the Zenith retail account for $48k ARR! Uploaded agreement below.
                    </p>
                    
                    {/* PDF Attachment Card */}
                    <div className="attachment-card">
                      <div className="file-icon-box">📄</div>
                      <div className="file-info">
                        <span className="file-name">Q3_Pipeline_Review.pdf</span>
                        <span className="file-size">1.8 MB</span>
                      </div>
                      <span className="download-icon">📥</span>
                    </div>

                    <span className="message-time">10:42 AM <span className="blue-ticks">✓✓</span></span>
                  </div>
                </div>

                {/* Uploading Progress Bar Component */}
                <div className="upload-progress-card">
                  <div className="upload-header">
                    <span className="upload-label">Uploading contract_signed.png</span>
                    <span className="upload-percentage">92%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>

              </div>

              {/* Chat Input Bar */}
              <div className="chat-input-bar">
                <span className="paperclip-icon">📎</span>
                <input 
                  type="text" 
                  placeholder="Write to #sales-closers..." 
                  className="chat-input"
                  readOnly
                />
                <button className="send-btn">➢</button>
              </div>

            </div>

          </div>

          {/* Right Column: Text & Bullet Points */}
          <div className="team-chat-info">
            <h2 className="chat-section-title">
              Stop Paying for Another Chat App
            </h2>
            <p className="chat-section-subtitle">
              A full team chat is included — rooms, files and notifications.
            </p>

            <ul className="chat-bullets-list">
              <li>
                <div className="blue-check">✓</div>
                <span>Private and group rooms created by the owner</span>
              </li>
              <li>
                <div className="blue-check">✓</div>
                <span>Files, images, replies, seen ticks and search</span>
              </li>
              <li>
                <div className="blue-check">✓</div>
                <span>Sound and pop-up notifications with mute</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* NEW SECTION: WHY CHOOSE US / VALUE PROPOSITIONS */}
      <section className="why-choose-section">
        {/* Section Heading */}
        <div className="why-choose-heading">
          <h2 className="why-choose-title">Top 3 Reasons to choose Pulse</h2>
          <p className="why-choose-subtitle">
            All-in-One. Affordable. Next-Generation.
          </p>
        </div>

        <div className="why-choose-container">
          
          {/* Left Column: Illustration Card & Webinar Link */}
          <div className="why-left-col">
            <div className="why-illustration-card">
              <img
                className="why-illustration-img"
                src="/images/sale.png"
                alt="Sale illustration"
                loading="lazy"
              />
            </div>
            <div className="webinar-text">
              Still not convinced? <a href="#webinar" className="webinar-link">Join our upcoming webinar.</a>
            </div>
          </div>

          {/* Right Column: Numbered Points */}
          <div className="why-right-col">
            
            {/* Point 1 */}
            <div className="why-item">
              <div className="why-number">1</div>
              <div className="why-content">
                <h3 className="why-item-title">All-in-One CRM</h3>
                <p className="why-item-desc">
                  Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="why-item">
              <div className="why-number">2</div>
              <div className="why-content">
                <h3 className="why-item-title">Affordable</h3>
                <p className="why-item-desc">
                  Make the most of Pulse modern features & integrations, easy implementation and great support at an affordable price.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="why-item">
              <div className="why-number">3</div>
              <div className="why-content">
                <h3 className="why-item-title">Next-Generation</h3>
                <p className="why-item-desc">
                  Cloud based SaaS service that is mobile-ready, fast, and simple to use.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      
      {/* AND EVERYTHING ELSE YOU NEED SECTION (6-GRID CARDS) */}
      <section className="everything-else-section">
        <div className="everything-else-container">
          
          {/* Section Header */}
          <div className="section-header-center">
            <h2 className="everything-title">
              And Everything Else You Need
            </h2>
            <p className="everything-subtitle">
              A completely integrated operational foundation so you never stitch together<br />
              fragile third-party tools again.
            </p>
          </div>

          {/* 3x2 Grid Cards */}
          <div className="everything-grid">
            
            {/* Card 1 */}
            <div className="feature-grid-card">
              <div className="grid-icon-box"><ShieldUser size={20} /></div>
              <h3 className="grid-card-title">Owner & Employee Roles</h3>
              <p className="grid-card-desc">
                Server-enforced permissions and custom role access rules.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-grid-card">
              <div className="grid-icon-box"><FileText size={20} /></div>
              <h3 className="grid-card-title">Daily Reports</h3>
              <p className="grid-card-desc">
                Tasks, attendance and response times in your inbox at 7:30.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-grid-card">
              <div className="grid-icon-box"><Send size={20} /></div>
              <h3 className="grid-card-title">Website Form Replies</h3>
              <p className="grid-card-desc">
                Form submissions become leads with instant AI replies.
              </p>
            </div>

            {/* Card 4 */}
            <div className="feature-grid-card">
              <div className="grid-icon-box"><Power size={20} /></div>
              <h3 className="grid-card-title">AI Kill Switch</h3>
              <p className="grid-card-desc">
                Pause all automation anytime with a single click.
              </p>
            </div>

            {/* Card 5 */}
            <div className="feature-grid-card">
              <div className="grid-icon-box"><ShieldCheck size={20} /></div>
              <h3 className="grid-card-title">Security First</h3>
              <p className="grid-card-desc">
                2FA, login lockout and daily automated backups.
              </p>
            </div>

            {/* Card 6 */}
            <div className="feature-grid-card">
              <div className="grid-icon-box"><Zap size={20} /></div>
              <h3 className="grid-card-title">Load Tested</h3>
              <p className="grid-card-desc">
                Built to handle 1,000 DMs a day and 5,000-lead campaigns.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FREE ACCOUNT CTA BANNER SECTION */}
      <section className="free-account-section">
        <div className="free-account-container">
          <h2 className="free-account-title">
            Start with FREE account today!
          </h2>

          <form 
            className="free-account-form" 
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your e-mail here" 
              className="free-email-input"
              required
            />
            <button type="submit" className="btn-get-started">
              GET STARTED
            </button>
          </form>

          <p className="free-account-subtext">
            <strong>FREE for 10 Users.</strong> No credit card required.
          </p>
        </div>
      </section>


      
    </div>
  );
};

export default Features;