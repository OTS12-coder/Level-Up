import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const STREAK_KEY = "lu_streak_start";
const DAY_MS = 24 * 60 * 60 * 1000;

// ─── Icons ──────────────────────────────────────────────────────────────
const ZapIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const StarIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#4edea3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
const ClockIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ArrowRightIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const TrendUpIcon = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const FireIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff8c42"><path d="M12 2c0 0-6 5.686-6 10a6 6 0 0 0 12 0c0-4-3-7-3-7s-1 3-3 3c0-2 0-4 0-6z"/></svg>;
const CourseIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;

// Shared "rounded badge" wrapper used by the 3 activity icons below
function IconBadge({ bg, stroke, path }) {
  return (
    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{path}</svg>
    </div>
  );
}
const CheckBadge = () => <IconBadge bg="rgba(79,70,229,0.2)" stroke="#c3c0ff" path={<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>} />;
const BadgeIcon = () => <IconBadge bg="rgba(78,222,163,0.15)" stroke="#4edea3" path={<><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></>} />;
const ChatIcon = () => <IconBadge bg="rgba(195,192,255,0.12)" stroke="#c3c0ff" path={<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>} />;

// ─── Static data ────────────────────────────────────────────────────────
const ACTIVITIES = [
  { icon: <CheckBadge />, title: `Mastered "Neural Architectures"`, sub: "2 hours ago • Module Completion" },
  { icon: <BadgeIcon />, title: `Earned "The Fast Learner" Badge`, sub: "Yesterday • Achievement" },
  { icon: <ChatIcon />, title: `Contribution to "UI Patterns"`, sub: "3 days ago • Community" },
];

const COURSES = [
  { level: "INTERMEDIATE", color: "#4edea3", bg: "from-[#0e7a6e] to-[#4edea3]", title: "Advanced Interface Logic: Systems Thinking", hours: "4.5h", rating: "4.9", modules: 12 },
  { level: "ADVANCED", color: "#c3c0ff", bg: "from-[#1e1b5e] to-[#6d67f0]", title: "Cybernetic Security: Offensive Defense 101", hours: "8.2h", rating: "4.7", modules: 24 },
];

// ─── Streak hook ────────────────────────────────────────────────────────
function useStreak() {
  const [startTs] = useState(() => {
    try {
      const raw = localStorage.getItem(STREAK_KEY);
      if (raw) return Number(raw);
    } catch {}
    const ts = Date.now() - 12 * DAY_MS;
    try { localStorage.setItem(STREAK_KEY, String(ts)); } catch {}
    return ts;
  });

  const [days, setDays] = useState(() => Math.floor((Date.now() - startTs) / DAY_MS));

  useEffect(() => {
    const id = setInterval(() => setDays(Math.floor((Date.now() - startTs) / DAY_MS)), 60_000);
    return () => clearInterval(id);
  }, [startTs]);

  return days;
}

// ─── Small components ───────────────────────────────────────────────────
function CircularProgress({ pct = 75, size = 120, stroke = 8 }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#2d3449" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="url(#circGrad)" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} style={{ transition: "stroke-dashoffset 1s ease" }} />
      <defs>
        <linearGradient id="circGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4edea3" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function StatCard({ icon, value, label, sub, subIcon, days, isStreak }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 flex flex-col gap-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.06)_0%,transparent_70%)] pointer-events-none" />
      <span className="text-[var(--text-variant)]">{icon}</span>
      <div>
        <p className="text-3xl font-extrabold text-[var(--text-color)] tracking-tight leading-none">
          {isStreak ? <span className="tabular-nums">{days}</span> : value}
        </p>
        <p className="text-xs text-[var(--text-variant)] mt-1">{label}</p>
      </div>
      {sub && (
        <div className="flex items-center gap-1.5 mt-1">
          {subIcon}
          <span className="text-xs font-semibold text-[#4edea3]">{sub}</span>
        </div>
      )}
      {isStreak && (
        <div className="flex gap-1.5 mt-1">
          {["M", "T", "W", "T", "F"].map((d, i) => (
            <div key={i} className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${i <= 2 ? "bg-[var(--primary-container-color)] text-white shadow shadow-[rgba(79,70,229,0.4)]" : "bg-[var(--bg-hover)] text-[var(--text-variant)] border border-[var(--border-color)]"}`}>
              {d}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CourseCard({ course }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden flex flex-col hover:border-[var(--primary-color)] transition-all duration-200 group">
      <div className={`h-32 bg-gradient-to-br ${course.bg} relative flex items-center justify-center`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
        <CourseIcon />
        <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full bg-[rgba(0,0,0,0.5)] border" style={{ color: course.color, borderColor: `${course.color}40` }}>
          {course.level}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <p className="text-sm font-bold text-[var(--text-color)] leading-snug group-hover:text-[var(--primary-color)] transition-colors">{course.title}</p>
        <div className="flex items-center gap-3 text-[11px] text-[var(--text-variant)]">
          <span className="flex items-center gap-1"><ClockIcon />{course.hours}</span>
          <span className="flex items-center gap-1"><StarIcon />{course.rating}</span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-[var(--border-color)]">
          <span className="text-xs font-semibold text-[var(--primary-color)]">{course.modules} Modules</span>
          <button onClick={() => navigate("/curriculum")} className="w-8 h-8 rounded-xl bg-[var(--bg-hover)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-variant)] hover:bg-[var(--primary-container-color)] hover:text-white hover:border-[var(--primary-container-color)] transition-all duration-200">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();
  const streakDays = useStreak();

  return (
    <main className="overflow-y-auto px-6 py-5 space-y-5 bg-[var(--bg-app)] min-h-screen">

      {/* Welcome row */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--text-color)] tracking-tight">Welcome back, Scholar.</h1>
          <p className="text-sm text-[var(--text-variant)] mt-1">
            You're on a <span className="font-bold text-[#c3c0ff]">{streakDays}-day learning streak</span>. Keep the momentum!
          </p>
        </div>
        <div className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl px-4 py-3 shadow-lg shadow-black/20 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[var(--primary-container-color)] flex items-center justify-center shadow shadow-[rgba(79,70,229,0.5)]">
            <ZapIcon />
          </div>
          <div>
            <p className="text-[9px] font-semibold tracking-widest text-[var(--text-variant)] uppercase">Current IQ</p>
            <p className="text-xl font-extrabold text-[var(--text-color)] leading-tight">1,240</p>
          </div>
        </div>
      </div>

      {/* Top stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 relative overflow-hidden sm:col-span-1">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.07)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute right-4 bottom-4 opacity-10">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c3c0ff" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c3c0ff" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <p className="text-4xl font-extrabold text-[var(--text-color)] tracking-tight">08</p>
          <p className="text-xs text-[var(--text-variant)] mt-1 mb-4">Courses in Progress</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-[var(--bg-hover)] rounded-full overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#c3c0ff] shadow shadow-[rgba(79,70,229,0.5)]" />
            </div>
            <span className="text-xs font-semibold text-[var(--text-variant)]">75%</span>
          </div>
        </div>

        <StatCard
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>}
          value="4,250"
          label="Points Earned"
          sub="+12% this week"
          subIcon={<TrendUpIcon />}
        />

        <StatCard icon={<FireIcon />} label="Day Streak" isStreak days={streakDays} />
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_0.85fr] gap-4">

        {/* Recent activity */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[var(--text-color)]">Recent Activity</h2>
            <button className="text-xs font-semibold text-[var(--primary-color)] hover:opacity-75 transition-opacity">View All</button>
          </div>
          <div className="flex flex-col gap-3">
            {ACTIVITIES.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--bg-hover)] transition-colors cursor-pointer">
                {a.icon}
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[var(--text-color)] leading-snug">{a.title}</p>
                  <p className="text-[10px] text-[var(--text-variant)] mt-0.5">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex flex-col items-center gap-2">
            <div className="relative">
              <CircularProgress pct={75} size={100} stroke={7} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-extrabold text-[var(--text-color)] leading-none">75%</span>
                <span className="text-[9px] font-semibold text-[var(--text-variant)] uppercase tracking-wide">LVL 24</span>
              </div>
            </div>
            <p className="text-xs font-bold text-[var(--text-color)]">Rank: Senior Scholar</p>
            <p className="text-[10px] text-[var(--text-variant)]">250 XP until Level 25</p>
          </div>
        </div>

        {/* Recommended courses */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-[var(--text-color)]">Recommended for You</h2>
            <div className="flex gap-1.5">
              {["‹", "›"].map((ch, i) => (
                <button key={i} className="w-7 h-7 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-variant)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all text-sm font-bold">
                  {ch}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COURSES.map((c, i) => <CourseCard key={i} course={c} />)}
          </div>
        </div>

        {/* Roadmap CTA */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-gradient-to-br from-[#131b2e] to-[#1a1040] border border-[var(--border-color)] rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(79,70,229,0.25)_0%,transparent_65%)] pointer-events-none" />
            <div className="absolute right-2 bottom-2 opacity-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#c3c0ff" strokeWidth="1"><path d="M3 3h5l3 9 5-6h5"/><path d="M3 21h18"/></svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-sm font-extrabold text-[var(--text-color)] mb-2">Your Roadmap: Full-Stack Architect</h3>
              <p className="text-xs text-[var(--text-variant)] leading-relaxed mb-4">
                You've completed 65% of the core path. The next milestone is <span className="text-[var(--primary-color)] font-semibold">Cloud Infrastructure</span>.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-[10px] text-[var(--text-variant)] mb-1.5">
                  <span>Progress</span><span className="font-semibold text-[var(--primary-color)]">65%</span>
                </div>
                <div className="h-1.5 bg-[var(--bg-hover)] rounded-full overflow-hidden">
                  <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#4f46e5] to-[#4edea3]" />
                </div>
              </div>
            </div>
            <button onClick={() => navigate("/roadmap")} className="relative z-10 w-full py-3 rounded-xl bg-white text-[#1A153B] text-xs font-extrabold tracking-widest uppercase hover:bg-[var(--primary-color)] hover:text-white active:scale-[0.97] transition-all duration-200 shadow-lg">
              Continue Roadmap
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
