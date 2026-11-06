import "../styles/ModulesSection.css";

const modules = [
  {
    number: "M1",
    title: "Roles, Dashboards & Tasks",
    status: "Done",
    features: [
      "Owner & Employee roles, server-enforced",
      "Owner dashboard; locked Employee dashboard",
      "Tasks: status, priority, due date, comments",
      "In-app + email alert on assignment",
      "08:00 overdue-task alert; unused modules hidden",
      "Owner 2FA",
    ],
  },
  {
    number: "M2",
    title: "Attendance",
    status: "Done",
    features: [
      "Check In / Check Out panel (server time + request IP)",
      "One open shift per user; optional office-IP allow-list",
      "Late flag; forgotten shifts closed at midnight",
      "Owner views: who is in now, daily register, monthly hours",
      "Excel/CSV export; owner corrections in field audit",
    ],
  },
  {
    number: "M3",
    title: "Email Inbox + AI",
    status: "Done",
    features: [
      "Shared company inbox, fetched every minute, threaded replies",
      "AI category + draft on every email (aiCategory, aiDraft, aiStatus)",
      "Auto Reply Rules: auto-send only if category allowed & AI confident",
      "'Needs human' queue with 'Send AI draft' button",
      "Scheduled emails; follow-up Task when no reply",
      "Knowledge Base loader; accuracy-check tool for 100 real emails",
    ],
  },
  {
    number: "M4",
    title: "Leads & AI Proposals",
    status: "Done",
    features: [
      "CSV import with template, duplicate check, invalid-row report",
      "Proposal Brief: Generate / Regenerate / Send test",
      "Batches of 20 with guards (no invented prices/facts, no placeholders)",
      "Campaign + Mass Email: 50/hour limit, unsubscribe, open tracking",
      "Follow-ups skip replied / opted-out leads",
      "Personalised proposal PDF on a button",
    ],
  },
  {
    number: "M5",
    title: "Instagram & Facebook DMs",
    status: "In Progress",
    features: [
      "Conversation + Social Message records, chat-style view",
      "Meta webhook with signature check; no duplicates on retry",
      "AI draft / auto-reply; assignment to employees",
      "Replies via Meta Send API; 24-hour window enforced",
      "Customer name linked to Contact; App Review kit",
      "Tested against a mock of Meta only",
    ],
  },
  {
    number: "M6",
    title: "Reports & Controls",
    status: "In Progress",
    features: [
      "DailyReport: tasks, attendance, messages per channel, response time",
      "07:30 daily summary email to owner; AI pause (kill) switch",
      "Owner security status panel",
      "Load test: 1,000 DMs/day and 5,000-lead campaign",
      "Upgrade guide; owner and employee guides",
    ],
  },
  {
    number: "M7",
    title: "Staff Chat v1",
    status: "Done",
    features: [
      "Private + group chat, unread counts, bell notifications",
      "Owner reads all chats",
      "Running on main copy (v0.9.4)",
    ],
  },
  {
    number: "M8",
    title: "Staff Chat v2",
    status: "Staging",
    features: [
      "'Everyone' room + owner-made private rooms",
      "Add/remove members; M7 messages moved into rooms",
      "Unread badges, previews, date headers, sound + browser pop-up",
      "Emoji picker; files & images (10 MB each, 5 per message)",
      "Reply / edit (15 min) / delete; owner keeps originals",
      "Seen ticks; online + 'In office' status",
    ],
  },
  {
    number: "M9",
    title: "Website Form Replies",
    status: "Staging",
    features: [
      "Signed webhook /webhooks/form with size and rate limits",
      "Submission creates or updates a Lead (matched by email)",
      "AI personal reply using name + concerns",
      "Auto-sent or held in 'Needs human' (draft-only / pause respected)",
      "No reply after 2 days creates a follow-up Task",
      "Google Form script written; not yet run inside Google",
    ],
  },
];

const ModulesSection = () => {
  return (
    <section className="modules-section">
      <div className="modules-container">
        <div className="modules-grid">
          {modules.map((module) => (
            <div key={module.number} className="module-card">
              <div className="module-header">
                <span className="module-number">{module.number}</span>
                <span className={`module-status ${module.status.toLowerCase()}`}>
                  {module.status}
                </span>
              </div>
              <h3 className="module-title">{module.title}</h3>
              <ul className="module-features">
                {module.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
