import { useState } from 'react';
import {
  LayoutDashboard,
  Columns3,
  Users,
  Handshake,
  BarChart3,
  Settings,
  Search,
  Plus,
  Lock,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Trophy,
  Target,
  Clock,
  Bell,
  ChevronRight,
  UserPlus,
  CalendarCheck,
  FileSignature,
  ArrowUpRight,
  Download,
} from 'lucide-react';
import '../styles/PipelineShowcase.css';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'pipeline', label: 'Pipeline', icon: Columns3, badge: '18' },
  { key: 'contacts', label: 'Contacts', icon: Users },
  { key: 'deals', label: 'Deals', icon: Handshake },
  { key: 'reports', label: 'Reports', icon: BarChart3 },
  { key: 'settings', label: 'Settings', icon: Settings },
];

const pageMeta = {
  dashboard: { title: 'Dashboard', sub: 'Your sales performance at a glance' },
  pipeline: { title: 'Sales Pipeline', sub: 'Track deals across every stage' },
  contacts: { title: 'Contacts', sub: 'Manage your customer relationships' },
  deals: { title: 'Deals', sub: 'All deals in one place' },
  reports: { title: 'Reports', sub: 'Insights and analytics' },
  settings: { title: 'Settings', sub: 'Workspace preferences' },
};

const stats = [
  { title: 'Pipeline Value', value: '$4,280,000', trend: '+24%', up: true, icon: DollarSign, tone: 'green' },
  { title: 'Deals Won', value: '184', trend: '+18%', up: true, icon: Trophy, tone: 'blue' },
  { title: 'Win Rate', value: '68.4%', trend: '+4.2%', up: true, icon: Target, tone: 'purple' },
  { title: 'Avg Deal Cycle', value: '14.8 Days', trend: '-3.1d', up: false, icon: Clock, tone: 'amber' },
];

const revenueData = [
  { m: 'Jan', v: 42 },
  { m: 'Feb', v: 58 },
  { m: 'Mar', v: 51 },
  { m: 'Apr', v: 74 },
  { m: 'May', v: 69 },
  { m: 'Jun', v: 88 },
  { m: 'Jul', v: 82 },
  { m: 'Aug', v: 97 },
  { m: 'Sep', v: 105 },
  { m: 'Oct', v: 98 },
  { m: 'Nov', v: 124 },
  { m: 'Dec', v: 142 },
];

const leadSources = [
  { label: 'Inbound', value: 42, color: '#26b06d' },
  { label: 'Outbound', value: 28, color: '#0ea5e9' },
  { label: 'Referrals', value: 18, color: '#8b5cf6' },
  { label: 'Partners', value: 12, color: '#f59e0b' },
];

const activities = [
  { icon: UserPlus, tone: 'green', text: 'New lead added — Stripe Inc', time: '12 min ago' },
  { icon: CalendarCheck, tone: 'blue', text: 'Demo scheduled with Notion Labs', time: '1 hour ago' },
  { icon: FileSignature, tone: 'purple', text: 'Proposal sent to Retool Corp', time: '3 hours ago' },
  { icon: Trophy, tone: 'amber', text: 'Vercel Inc deal closed — $160,000', time: 'Yesterday' },
];

const topDeals = [
  { name: 'Vercel Inc', amount: '$160,000', stage: 'Closed Won', tone: 'won' },
  { name: 'Notion Labs', amount: '$120,000', stage: 'Demo Scheduled', tone: 'demo' },
  { name: 'Internal Ops', amount: '$95,000', stage: 'Proposal Sent', tone: 'proposal' },
  { name: 'Linear App', amount: '$78,000', stage: 'Contact Made', tone: 'contact' },
];

const columns = [
  {
    name: 'Lead In',
    amount: '$380K',
    tone: 'gray',
    deals: [
      { name: 'Stripe Inc', sub: 'Payments Infrastructure', tag: 'High', tagTone: 'high', price: '$45,000', owner: 'JD', ownerColor: '#0f766e', progress: 20 },
      { name: 'Figma Org', sub: 'Design System Sync', tag: 'Med', tagTone: 'med', price: '$32,000', owner: 'MK', ownerColor: '#003057', progress: 15 },
    ],
  },
  {
    name: 'Contact Made',
    amount: '$640K',
    tone: 'blue',
    deals: [
      { name: 'Linear App', sub: 'Product Sync Pipeline', tag: 'High', tagTone: 'high', price: '$78,000', owner: 'EV', ownerColor: '#003057', progress: 40 },
    ],
  },
  {
    name: 'Demo Scheduled',
    amount: '$1.1M',
    tone: 'orange',
    deals: [
      { name: 'Notion Labs', sub: 'Global Team Migration', tag: 'High', tagTone: 'high', price: '$120,000', owner: 'AL', ownerColor: '#003057', progress: 60 },
    ],
  },
  {
    name: 'Proposal Sent',
    amount: '$4.1M',
    tone: 'yellow',
    deals: [
      { name: 'Internal Ops', sub: 'Ops System Renewal', tag: 'Med', tagTone: 'med', price: '$95,000', owner: 'TR', ownerColor: '#003057', progress: 80 },
      { name: 'Retool Corp', sub: 'Internal Tools Suite', tag: 'High', tagTone: 'high', price: '$54,000', owner: 'JD', ownerColor: '#0f766e', progress: 85 },
    ],
  },
  {
    name: 'Closed Won',
    amount: '$9.1M',
    tone: 'green',
    highlight: true,
    deals: [
      { name: 'Vercel Inc', sub: 'Frontend Cloud Hub', price: '$160,000', owner: 'EK', ownerColor: '#147f4b', progress: 100 },
    ],
  },
];

const CHART_W = 640;
const CHART_H = 240;
const CHART_PAD = { top: 16, right: 12, bottom: 30, left: 44 };
const CHART_MAX = 160;

const buildChartGeometry = () => {
  const innerW = CHART_W - CHART_PAD.left - CHART_PAD.right;
  const innerH = CHART_H - CHART_PAD.top - CHART_PAD.bottom;
  const slot = innerW / revenueData.length;
  const barW = Math.min(slot * 0.52, 30);

  const bars = revenueData.map((d, i) => {
    const h = (d.v / CHART_MAX) * innerH;
    const x = CHART_PAD.left + slot * i + (slot - barW) / 2;
    const y = CHART_PAD.top + innerH - h;
    return { ...d, x, y, w: barW, h };
  });

  const linePoints = bars.map((b) => ({
    x: b.x + b.w / 2,
    y: b.y - 6,
  }));

  const linePath = linePoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ');

  const areaPath = `${linePath} L ${linePoints[linePoints.length - 1].x.toFixed(1)} ${(CHART_PAD.top + innerH).toFixed(1)} L ${linePoints[0].x.toFixed(1)} ${(CHART_PAD.top + innerH).toFixed(1)} Z`;

  const gridLines = [0, 40, 80, 120, 160].map((v) => {
    const y = CHART_PAD.top + innerH - (v / CHART_MAX) * innerH;
    return { v, y };
  });

  return { bars, linePath, areaPath, gridLines, innerH };
};

const { bars, linePath, areaPath, gridLines } = buildChartGeometry();

const RevenueChart = () => (
  <svg
    className="revenue-svg"
    viewBox={`0 0 ${CHART_W} ${CHART_H}`}
    role="img"
    aria-label="Monthly revenue chart"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#26b06d" />
        <stop offset="100%" stopColor="#26b06d" stopOpacity="0.35" />
      </linearGradient>
      <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#26b06d" />
      </linearGradient>
      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
      </linearGradient>
    </defs>

    {gridLines.map((g) => (
      <g key={g.v}>
        <line
          x1={CHART_PAD.left}
          y1={g.y}
          x2={CHART_W - CHART_PAD.right}
          y2={g.y}
          stroke="#e2e8f0"
          strokeDasharray="4 5"
        />
        <text x={CHART_PAD.left - 8} y={g.y + 4} textAnchor="end" className="chart-axis">
          ${g.v}K
        </text>
      </g>
    ))}

    <path d={areaPath} fill="url(#areaGrad)" />

    {bars.map((b) => (
      <rect
        key={b.m}
        x={b.x}
        y={b.y}
        width={b.w}
        height={b.h}
        rx="6"
        fill="url(#barGrad)"
      />
    ))}

    <path
      d={linePath}
      fill="none"
      stroke="url(#lineGrad)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {bars.map((b, i) => (
      <circle
        key={`dot-${b.m}`}
        cx={b.x + b.w / 2}
        cy={b.y - 6}
        r="3.5"
        fill="#ffffff"
        stroke={i === bars.length - 1 ? '#26b06d' : '#0ea5e9'}
        strokeWidth="2"
      />
    ))}

    {bars.map((b) => (
      <text
        key={`label-${b.m}`}
        x={b.x + b.w / 2}
        y={CHART_H - 8}
        textAnchor="middle"
        className="chart-axis"
      >
        {b.m}
      </text>
    ))}
  </svg>
);

const DonutChart = () => {
  const size = 150;
  const stroke = 18;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  const segments = leadSources.reduce(
    (acc, s) => {
      const len = (s.value / 100) * c;
      acc.items.push({ ...s, len, offset: acc.total });
      acc.total += len;
      return acc;
    },
    { items: [], total: 0 }
  ).items;

  return (
    <div className="donut-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="donut-svg">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#eef3f8"
          strokeWidth={stroke}
        />
        {segments.map((s) => (
          <circle
            key={s.label}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={stroke}
            strokeDasharray={`${s.len} ${c - s.len}`}
            strokeDashoffset={-s.offset}
            strokeLinecap="butt"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        ))}
        <text x="50%" y="47%" textAnchor="middle" className="donut-value">
          428
        </text>
        <text x="50%" y="60%" textAnchor="middle" className="donut-label">
          Leads
        </text>
      </svg>

      <ul className="donut-legend">
        {leadSources.map((s) => (
          <li key={s.label}>
            <span className="legend-dot" style={{ backgroundColor: s.color }}></span>
            <span className="legend-name">{s.label}</span>
            <span className="legend-val">{s.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DashboardView = () => (
  <>
    <div className="stats-grid">
      {stats.map(({ title, value, trend, up, icon: Icon, tone }) => (
        <div className="stat-card" key={title}>
          <div className={`stat-icon stat-icon-${tone}`}>
            <Icon size={17} strokeWidth={2.4} />
          </div>
          <div className="stat-body">
            <div className="stat-title">{title}</div>
            <div className="stat-value-container">
              <span className="stat-value">{value}</span>
              <span className={`stat-trend ${up ? 'trend-up' : 'trend-down'}`}>
                {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {trend}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="dash-panels-grid">
      {/* Revenue Chart */}
      <div className="panel-card chart-panel">
        <div className="panel-header">
          <div>
            <h4>Revenue Overview</h4>
            <p>Closed revenue vs. target — last 12 months</p>
          </div>
          <div className="panel-header-actions">
            <div className="chart-legend">
              <span className="legend-item"><i className="swatch swatch-bar"></i>Revenue</span>
              <span className="legend-item"><i className="swatch swatch-line"></i>Trend</span>
            </div>
            <button className="ghost-btn" type="button">
              <Download size={13} />
              Export
            </button>
          </div>
        </div>
        <div className="chart-total-row">
          <span className="chart-total">$1.02M</span>
          <span className="stat-trend trend-up"><TrendingUp size={12} /> +32% YoY</span>
        </div>
        <div className="chart-canvas">
          <RevenueChart />
        </div>
      </div>

      {/* Lead Sources Donut */}
      <div className="panel-card donut-panel">
        <div className="panel-header">
          <div>
            <h4>Lead Sources</h4>
            <p>Where deals come from</p>
          </div>
          <button className="ghost-btn ghost-btn-icon" type="button" aria-label="More">
            <MoreVertical size={14} />
          </button>
        </div>
        <DonutChart />
      </div>

      {/* Recent Activity */}
      <div className="panel-card activity-panel">
        <div className="panel-header">
          <div>
            <h4>Recent Activity</h4>
            <p>Latest team updates</p>
          </div>
          <button className="text-link" type="button">
            View all <ArrowUpRight size={13} />
          </button>
        </div>
        <ul className="activity-list">
          {activities.map(({ icon: Icon, tone, text, time }) => (
            <li key={text} className="activity-item">
              <span className={`activity-icon activity-${tone}`}>
                <Icon size={14} />
              </span>
              <div className="activity-body">
                <span className="activity-text">{text}</span>
                <span className="activity-time">{time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Deals */}
      <div className="panel-card topdeals-panel">
        <div className="panel-header">
          <div>
            <h4>Top Deals</h4>
            <p>Highest value this quarter</p>
          </div>
          <button className="text-link" type="button">
            View all <ArrowUpRight size={13} />
          </button>
        </div>
        <ul className="topdeals-list">
          {topDeals.map((d, i) => (
            <li key={d.name} className="topdeal-item">
              <span className="topdeal-rank">{i + 1}</span>
              <div className="topdeal-info">
                <span className="topdeal-name">{d.name}</span>
                <span className={`stage-chip stage-${d.tone}`}>{d.stage}</span>
              </div>
              <span className="topdeal-amount">{d.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

const PipelineView = () => (
  <div className="stats-grid">
    {stats.map(({ title, value, trend, up, icon: Icon, tone }) => (
      <div className="stat-card" key={title}>
        <div className={`stat-icon stat-icon-${tone}`}>
          <Icon size={17} strokeWidth={2.4} />
        </div>
        <div className="stat-body">
          <div className="stat-title">{title}</div>
          <div className="stat-value-container">
            <span className="stat-value">{value}</span>
            <span className={`stat-trend ${up ? 'trend-up' : 'trend-down'}`}>
              {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {trend}
            </span>
          </div>
        </div>
      </div>
    ))}

    <div className="pipeline-columns-grid" style={{ gridColumn: '1 / -1' }}>
      {columns.map((col) => (
        <div key={col.name} className={`pipeline-col${col.highlight ? ' closed-won-column' : ''}`}>
          <div className={`column-header column-header-${col.tone}`}>
            <span className={`col-dot col-dot-${col.tone}`}></span>
            <span className="col-name">{col.name}</span>
            <span className="col-count">{col.deals.length}</span>
            <span className={`col-amount${col.highlight ? ' amount-green' : ''}`}>{col.amount}</span>
          </div>

          {col.deals.map((deal) => (
            <div className="deal-card" key={deal.name}>
              <div className="deal-header">
                <div className="deal-logo" style={{ backgroundColor: deal.ownerColor }}>
                  {deal.name.charAt(0)}
                </div>
                <div className="deal-title-wrap">
                  <span className="deal-name">{deal.name}</span>
                  <span className="deal-sub">{deal.sub}</span>
                </div>
                {deal.tag && (
                  <span className={`priority-tag tag-${deal.tagTone}`}>{deal.tag}</span>
                )}
              </div>

              <div className="deal-progress">
                <div className="progress-track">
                  <div
                    className={`progress-fill${deal.progress === 100 ? ' progress-done' : ''}`}
                    style={{ width: `${deal.progress}%` }}
                  ></div>
                </div>
                <span className="progress-label">{deal.progress}%</span>
              </div>

              <div className="deal-footer">
                <span className="deal-price">{deal.price}</span>
                <span className="avatar-initial" style={{ backgroundColor: deal.ownerColor }}>
                  {deal.owner}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const PlaceholderView = ({ label, icon: Icon }) => (
  <div className="view-placeholder">
    <div className="placeholder-icon">
      <Icon size={32} strokeWidth={1.8} />
    </div>
    <h3>{label}</h3>
    <p>This section is part of the interactive product tour — switch back to Dashboard or Pipeline to keep exploring.</p>
  </div>
);

const PipelineShowcase = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const meta = pageMeta[activeView];

  const renderView = () => {
    if (activeView === 'dashboard') return <DashboardView />;
    if (activeView === 'pipeline') return <PipelineView />;
    const item = navItems.find((n) => n.key === activeView);
    return <PlaceholderView label={meta.title} icon={item?.icon ?? Settings} />;
  };

  return (
    <section className="pipeline-showcase-container">
      <div className="browser-window">
        {/* Browser Top Bar */}
        <div className="browser-header">
          <div className="browser-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="browser-address-bar">
            <Lock size={13} />
            <span>app.pulsecrm.com/{activeView}</span>
          </div>
          <div className="browser-actions">
            <MoreVertical size={16} />
          </div>
        </div>

        {/* Dashboard Main App Area */}
        <div className="dashboard-body">
          {/* Left Navigation Sidebar */}
          <aside className="dash-sidebar">
            <div>
              <div className="workspace-badge">
                <div className="workspace-icon">P</div>
                <div className="workspace-info">
                  <h4>Revenue Squad</h4>
                  <p>Enterprise Plan</p>
                </div>
                <ChevronRight size={14} className="workspace-chevron" />
              </div>

              <nav className="dash-nav">
                {navItems.map(({ key, label, icon: Icon, badge }) => (
                  <button
                    key={key}
                    type="button"
                    className={`nav-item${activeView === key ? ' active' : ''}`}
                    onClick={() => setActiveView(key)}
                  >
                    <span className="nav-item-left">
                      <Icon size={16} strokeWidth={2.2} />
                      <span>{label}</span>
                    </span>
                    {badge && <span className="nav-badge">{badge}</span>}
                  </button>
                ))}
              </nav>
            </div>

            <div className="user-profile-badge">
              <div className="user-avatar-initials">EK</div>
              <div className="user-info">
                <h5>Elena Vance</h5>
                <p>Head of Sales</p>
              </div>
              <MoreVertical size={14} className="user-more" />
            </div>
          </aside>

          {/* Main Dashboard Panel */}
          <main className="dash-content">
            {/* Page Top Bar */}
            <div className="page-topbar">
              <div className="page-heading">
                <h3>{meta.title}</h3>
                <p>{meta.sub}</p>
              </div>
              <div className="page-actions">
                <div className="search-box">
                  <Search size={14} />
                  <span>Search deals...</span>
                </div>
                <button className="icon-btn" type="button">
                  <Bell size={15} />
                  <span className="notif-dot"></span>
                </button>
                <button className="primary-btn" type="button">
                  <Plus size={15} />
                  <span>New Deal</span>
                </button>
              </div>
            </div>

            {renderView()}
          </main>
        </div>
      </div>
    </section>
  );
};

export default PipelineShowcase;
