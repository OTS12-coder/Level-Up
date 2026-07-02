import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

/* ── Icons ── */
const StrokeIcon = ({ size = 16, children, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>{children}</svg>
);
const MailIcon = ({ size = 16 }) => <StrokeIcon size={size}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></StrokeIcon>;
const LockIcon = ({ size = 16 }) => <StrokeIcon size={size}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></StrokeIcon>;
const UserIcon = ({ size = 16 }) => <StrokeIcon size={size}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></StrokeIcon>;
const EyeIcon = ({ open }) => open ? (
  <StrokeIcon><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></StrokeIcon>
) : (
  <StrokeIcon><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></StrokeIcon>
);
const CheckCircleIcon = () => <StrokeIcon size={20}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></StrokeIcon>;
const AlertIcon = () => <StrokeIcon size={18}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></StrokeIcon>;
const BackArrowIcon = () => <StrokeIcon size={14} strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7" /></StrokeIcon>;
const ErrorDotIcon = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="#ef4444"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>;
const SpinnerIcon = () => <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity="0.25" /><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" /></svg>;
const CheckMarkIcon = () => <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const GoogleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);
const GitHubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ── Toast ── */
function Toast({ toast }) {
  const ok = toast.type === "success";
  return (
    <div className={`flex items-start gap-3 px-4 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-sm transition-all duration-500 max-w-sm w-full
      ${toast.visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
      ${ok ? "bg-[#0f2a1e] border-[#4edea3]/30 text-[#4edea3]" : "bg-[#2a0f0f] border-[#ef4444]/30 text-[#ef4444]"}`}>
      <span className="flex-shrink-0 mt-0.5">{ok ? <CheckCircleIcon /> : <AlertIcon />}</span>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-white">{toast.title}</span>
        <span className={`text-xs mt-0.5 ${ok ? "text-[#4edea3]/80" : "text-[#ef4444]/80"}`}>{toast.message}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl overflow-hidden">
        <div className={`h-full ${ok ? "bg-[#4edea3]" : "bg-[#ef4444]"}`} style={{ animation: toast.visible ? "shrink 3s linear forwards" : "none" }} />
      </div>
    </div>
  );
}
const ToastContainer = ({ toasts }) => (
  <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 items-center" style={{ minWidth: 320 }}>
    <style>{`@keyframes shrink { from { width: 100%; } to { width: 0%; } }`}</style>
    {toasts.map(t => <Toast key={t.id} toast={t} />)}
  </div>
);
function useToast() {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((type, title, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, title, message, visible: false }]);
    setTimeout(() => setToasts(prev => prev.map(t => t.id === id ? { ...t, visible: true } : t)), 30);
    setTimeout(() => setToasts(prev => prev.map(t => t.id === id ? { ...t, visible: false } : t)), 2600);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3200);
  }, []);
  return { toasts, show };
}

/* ── Logo ── */
const Logo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-9 h-9 rounded-xl bg-[var(--primary-container-color)] flex items-center justify-center shadow-lg shadow-[rgba(79,70,229,0.4)]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" /></svg>
    </div>
    <span className="text-lg font-bold text-[var(--text-color)] tracking-tight">Level<span className="text-[var(--primary-color)]">Up</span></span>
  </div>
);

/* ── Hero Illustration (البادجات والكروسهيرز من array بدل ما تتكرر) ── */
const HERO_BADGES = [
  { x: 212, y: 12,  w: 72, tx: 26, c: "#c3c0ff", label: "1.2k Paths", icon: <svg x="6" y="4" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c3c0ff" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg> },
  { x: 323, y: 64,  w: 68, tx: 26, c: "#4edea3", label: "XP 4,820",  icon: <svg x="6" y="4" width="14" height="14" viewBox="0 0 24 24" fill="#4edea3" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> },
  { x: 323, y: 194, w: 68, tx: 26, c: "#c3c0ff", label: "#12,094",   icon: <svg x="6" y="3" width="14" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c78f5" strokeWidth="2" strokeLinecap="round"><path d="M6 9H4a2 2 0 0 1-2-2V5h4" /><path d="M18 9h2a2 2 0 0 0 2-2V5h-4" /><path d="M6 5h12v4a6 6 0 0 1-12 0V5z" /><path d="M12 15v4" /><path d="M8 19h8" /></svg> },
  { x: 4,   y: 64,  w: 72, tx: 24, c: "#ff8c42", label: "42d Streak",icon: <svg x="6" y="3" width="13" height="15" viewBox="0 0 24 24" fill="#ff8c42" stroke="none"><path d="M12 2c0 0-6 5.686-6 10a6 6 0 0 0 12 0c0-4-3-7-3-7s-1 3-3 3c0-2 0-4 0-6z" /></svg> },
  { x: 4,   y: 194, w: 72, tx: 26, c: "#c3c0ff", label: "50k+ Users",icon: <svg x="6" y="4" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c3c0ff" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
  { x: 213, y: 244, w: 68, tx: 24, c: "#4edea3", label: "Lv. 38",    icon: <svg x="6" y="4" width="13" height="14" viewBox="0 0 24 24" fill="#4edea3" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> },
];
const HERO_CROSSHAIRS = [[30, 30], [370, 30], [30, 250], [370, 250], [200, 10]];
const HERO_ORBIT = "M200,25 C285,25 315,80 315,140 C315,200 285,255 200,255 C115,255 85,200 85,140 C85,80 115,25 200,25 Z";

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-sm mx-auto">
      <defs>
        <radialGradient id="gCentre" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#4f46e5" stopOpacity="0.35" /><stop offset="100%" stopColor="#4f46e5" stopOpacity="0" /></radialGradient>
        <radialGradient id="gGreen" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#4edea3" stopOpacity="0.25" /><stop offset="100%" stopColor="#4edea3" stopOpacity="0" /></radialGradient>
        <linearGradient id="hexFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f46e5" stopOpacity="0.55" /><stop offset="100%" stopColor="#4edea3" stopOpacity="0.25" /></linearGradient>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f46e5" stopOpacity="0.5" /><stop offset="100%" stopColor="#4edea3" stopOpacity="0.3" /></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <ellipse cx="200" cy="140" rx="140" ry="100" fill="url(#gCentre)" />
      <ellipse cx="310" cy="60" rx="70" ry="50" fill="url(#gGreen)" />
      {[50, 100, 150, 200, 250, 300, 350].map(x => [40, 90, 140, 190, 240].map(y => <circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="#c3c0ff" opacity="0.07" />))}
      <circle cx="200" cy="140" r="115" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="5 6" strokeOpacity="0.4" />
      <circle cx="200" cy="140" r="78" stroke="#4edea3" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.25" />
      <polygon points="200,62 255,95 255,161 200,194 145,161 145,95" fill="url(#hexFill)" stroke="#6d67f0" strokeWidth="1.5" strokeOpacity="0.7" />
      <polygon points="200,75 243,99 243,147 200,171 157,147 157,99" fill="#0b1326" fillOpacity="0.65" />
      <rect x="168" y="102" width="46" height="4" rx="2" fill="#c3c0ff" opacity="0.75" />
      <rect x="168" y="112" width="32" height="4" rx="2" fill="#4edea3" opacity="0.8" />
      <rect x="168" y="122" width="40" height="4" rx="2" fill="#c3c0ff" opacity="0.5" />
      <rect x="168" y="132" width="24" height="4" rx="2" fill="#7c78f5" opacity="0.9" />
      <rect x="168" y="142" width="36" height="4" rx="2" fill="#c3c0ff" opacity="0.4" />
      <rect x="168" y="152" width="18" height="4" rx="2" fill="#4edea3" opacity="0.65" />
      <rect x="188" y="152" width="2" height="8" rx="1" fill="#4edea3"><animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" /></rect>
      <circle cx="200" cy="25" r="6" fill="#4f46e5" opacity="0.85" filter="url(#glow)" /><circle cx="200" cy="25" r="3" fill="#c3c0ff" />
      <circle cx="315" cy="75" r="5" fill="#4edea3" opacity="0.85" filter="url(#glow)" /><circle cx="315" cy="75" r="2.5" fill="white" opacity="0.9" />
      <circle cx="315" cy="205" r="5" fill="#7c78f5" opacity="0.85" filter="url(#glow)" /><circle cx="315" cy="205" r="2.5" fill="#c3c0ff" />
      <circle cx="85" cy="75" r="5" fill="#4edea3" opacity="0.75" filter="url(#glow)" /><circle cx="85" cy="75" r="2.5" fill="white" opacity="0.85" />
      <circle cx="85" cy="205" r="5" fill="#4f46e5" opacity="0.75" filter="url(#glow)" /><circle cx="85" cy="205" r="2.5" fill="#c3c0ff" />
      <circle cx="200" cy="255" r="6" fill="#4edea3" opacity="0.8" filter="url(#glow)" /><circle cx="200" cy="255" r="3" fill="white" opacity="0.9" />
      <line x1="200" y1="62" x2="200" y2="31" stroke="#4f46e5" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="255" y1="95" x2="310" y2="78" stroke="#4edea3" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="255" y1="161" x2="310" y2="202" stroke="#7c78f5" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="145" y1="95" x2="90" y2="78" stroke="#4edea3" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="145" y1="161" x2="90" y2="202" stroke="#4f46e5" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="200" y1="194" x2="200" y2="249" stroke="#4edea3" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 4" />
      {HERO_BADGES.map((b, i) => (
        <g key={i} transform={`translate(${b.x},${b.y})`}>
          <rect width={b.w} height="22" rx="11" fill="#131b2e" stroke="#2d3449" strokeWidth="1" />
          {b.icon}
          <text x={b.tx} y="15" fontSize="8.5" fill={b.c} fontFamily="Inter,sans-serif" fontWeight="600">{b.label}</text>
        </g>
      ))}
      <circle r="4.5" fill="#4edea3" opacity="0.9" filter="url(#glow)"><animateMotion dur="9s" repeatCount="indefinite" path={HERO_ORBIT} /></circle>
      <circle r="3" fill="#c3c0ff" opacity="0.7"><animateMotion dur="14s" repeatCount="indefinite" begin="-5s" path={HERO_ORBIT} /></circle>
      {HERO_CROSSHAIRS.map(([cx, cy], i) => (
        <g key={i}>
          <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke="#c3c0ff" strokeOpacity="0.3" strokeWidth="1" />
          <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke="#c3c0ff" strokeOpacity="0.3" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="1.5" fill="#c3c0ff" opacity="0.5"><animate attributeName="opacity" values="0.5;0.1;0.5" dur={`${2 + i * 0.6}s`} repeatCount="indefinite" /></circle>
        </g>
      ))}
    </svg>
  );
}

/* ── Shared bits: مشتركة بين الفورمات لتقليل التكرار ── */
const isValidEmail = (v) => /\S+@\S+\.\S+/.test(v);

const ErrorText = ({ children, className = "text-[10px] text-[#ef4444] flex items-center gap-1 mt-0.5" }) => (
  <p className={className}><ErrorDotIcon />{children}</p>
);

const Checkbox = ({ checked, onToggle, error, extraClass = "" }) => (
  <div onClick={onToggle} className={`${extraClass}w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
    checked ? "bg-[var(--primary-container-color)] border-[var(--primary-container-color)]"
      : error ? "border-[#ef4444] bg-[var(--bg-hover)]" : "border-[var(--border-color)] bg-[var(--bg-hover)] group-hover:border-[var(--primary-color)]"
  }`}>{checked && <CheckMarkIcon />}</div>
);

const FormHeader = ({ title, subtitle, subtitleClass = "mt-1" }) => (
  <>
    <h2 className="text-xl font-extrabold text-[var(--text-color)] tracking-tight">{title}</h2>
    <p className={`text-xs text-[var(--text-variant)] ${subtitleClass}`}>{subtitle}</p>
  </>
);

const SubmitButton = ({ loading, loadingText, children }) => (
  <button type="submit" disabled={loading}
    className="w-full py-3 rounded-xl bg-[var(--primary-container-color)] text-white font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[rgba(79,70,229,0.3)] mt-1 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
    {loading ? (<><SpinnerIcon />{loadingText}</>) : children}
  </button>
);

const SOCIAL_BTN_CLASS = "flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-hover)] text-sm font-medium text-[var(--text-color)] hover:border-[var(--primary-color)] transition-all duration-200 active:scale-[0.97]";
const SocialButtons = ({ label }) => (
  <>
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-[var(--border-color)]" />
      <span className="text-[10px] font-medium text-[var(--text-variant)] tracking-widest uppercase">{label}</span>
      <div className="flex-1 h-px bg-[var(--border-color)]" />
    </div>
    <div className="grid grid-cols-2 gap-2.5">
      <button type="button" className={SOCIAL_BTN_CLASS}><GoogleIcon /> Google</button>
      <button type="button" className={SOCIAL_BTN_CLASS}><GitHubIcon /> GitHub</button>
    </div>
  </>
);

/* ── Input Field ── */
function InputField({ id, label, type, placeholder, icon, value, onChange, error }) {
  const [show, setShow] = useState(false);
  const isPw = type === "password";
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[10px] font-semibold tracking-widest text-[var(--text-variant)] uppercase">{label}</label>
      <div className="relative group">
        <span className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${error ? "text-[#ef4444]" : "text-[var(--text-variant)] group-focus-within:text-[var(--primary-color)]"}`}>{icon}</span>
        <input id={id} type={isPw && show ? "text" : type} placeholder={placeholder} value={value} onChange={onChange}
          className={`w-full bg-[var(--bg-hover)] border rounded-xl pl-9 pr-9 py-2.5 text-sm text-[var(--text-color)] placeholder-[var(--text-variant)] focus:outline-none focus:ring-2 transition-all duration-200
            ${error ? "border-[#ef4444]/60 focus:border-[#ef4444] focus:ring-[#ef4444]/20" : "border-[var(--border-color)] focus:border-[var(--primary-container-color)] focus:ring-[var(--primary-container-color)]/25"}`} />
        {isPw && (
          <button type="button" onClick={() => setShow(p => !p)} aria-label={show ? "Hide" : "Show"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-variant)] hover:text-[var(--primary-color)] transition-colors duration-200">
            <EyeIcon open={show} />
          </button>
        )}
      </div>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

/* ── Forgot Password Form ── */
function ForgotPasswordForm({ onBack, showToast }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!email.trim()) return setError("Email address is required");
    if (!isValidEmail(email)) return setError("Enter a valid email address");
    setLoading(true);
    setTimeout(() => {
      setLoading(false); setSent(true);
      showToast("success", "Email sent! 📬", "Check your inbox for the reset link.");
    }, 800);
  };

  if (sent) return (
    <div className="flex flex-col items-center text-center gap-4 py-4">
      <div className="w-14 h-14 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/30 flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </div>
      <div>
        <h2 className="text-xl font-extrabold text-[var(--text-color)] tracking-tight">Check your inbox</h2>
        <p className="text-xs text-[var(--text-variant)] mt-1 leading-relaxed">
          We sent a reset link to <span className="text-[var(--primary-color)] font-semibold">{email}</span>.<br />It expires in 15 minutes.
        </p>
      </div>
      <p className="text-xs text-[var(--text-variant)]">
        Didn't receive it?{" "}
        <button type="button" onClick={() => { setSent(false); setEmail(""); }} className="font-semibold text-[var(--primary-color)] hover:opacity-75 transition-opacity">Try again</button>
      </p>
      <button type="button" onClick={onBack}
        className="w-full py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-hover)] text-sm font-semibold text-[var(--text-color)] hover:border-[var(--primary-color)] transition-all duration-200 active:scale-[0.98] mt-1">
        Back to Sign In
      </button>
    </div>
  );

  return (
    <>
      <div className="mb-5">
        <button type="button" onClick={onBack} className="flex items-center gap-1.5 text-xs text-[var(--text-variant)] hover:text-[var(--primary-color)] transition-colors mb-4">
          <BackArrowIcon />Back to Sign In
        </button>
        <FormHeader title="Forgot password?" subtitle="No worries — enter your email and we'll send you a reset link." subtitleClass="mt-1 leading-relaxed" />
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
        <InputField id="fp-email" label="Email Address" type="email" placeholder="name@company.com"
          value={email} onChange={e => { setEmail(e.target.value); setError(""); }} error={error} icon={<MailIcon />} />
        <SubmitButton loading={loading} loadingText="Sending…">Send Reset Link</SubmitButton>
      </form>
    </>
  );
}

/* ── Login Form ── */
function LoginForm({ onSwitch, onForgot, showToast, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!email.trim()) e.email = "Email address is required";
    else if (!isValidEmail(email)) e.email = "Enter a valid email address";
    if (!password) e.password = "Password is required";
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("success", "Welcome back! 👋", "You've signed in successfully. Redirecting…");
      setTimeout(onSuccess, 1500);
    }, 800);
  };

  return (
    <>
      <div className="mb-5"><FormHeader title="Welcome back" subtitle="Continue your ascent to mastery." /></div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
        <InputField id="l-email" label="Email Address" type="email" placeholder="name@company.com"
          value={email} onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: "" })); }} error={errors.email} icon={<MailIcon />} />
        <InputField id="l-pass" label="Password" type="password" placeholder="Enter your password"
          value={password} onChange={e => { setPassword(e.target.value); setErrors(p => ({ ...p, password: "" })); }} error={errors.password} icon={<LockIcon />} />

        <div className="flex items-center justify-between mt-0.5">
          <label className="flex items-center gap-2 cursor-pointer select-none group">
            <Checkbox checked={remember} onToggle={() => setRemember(p => !p)} />
            <span className="text-xs text-[var(--text-variant)]">Keep me signed in</span>
          </label>
          <button type="button" onClick={onForgot} className="text-xs font-semibold text-[var(--primary-color)] hover:opacity-75 transition-opacity">Forgot password?</button>
        </div>

        <SubmitButton loading={loading} loadingText="Signing in…">Sign In</SubmitButton>
      </form>
      <SocialButtons label="or continue with" />
      <p className="text-center text-xs text-[var(--text-variant)] mt-4">
        Don't have an account?{" "}
        <button type="button" onClick={onSwitch} className="font-semibold text-[var(--primary-color)] hover:opacity-75 transition-opacity">Join the community</button>
      </p>
    </>
  );
}

/* ── Register Form ── */
const STRENGTH = [
  { label: "", color: "", width: "0%" },
  { label: "Weak", color: "#ef4444", width: "33%" },
  { label: "Good", color: "#f59e0b", width: "66%" },
  { label: "Strong", color: "#4edea3", width: "100%" },
];

function RegisterForm({ onSwitch, showToast, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const s = STRENGTH[password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3];
  const clear = (field) => setErrors(p => ({ ...p, [field]: "" }));

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!name.trim()) e.name = "Full name is required";
    if (!email.trim()) e.email = "Email address is required";
    else if (!isValidEmail(email)) e.email = "Enter a valid email address";
    if (!password) e.password = "Password is required";
    else if (password.length < 8) e.password = "Password must be at least 8 characters";
    if (!confirm) e.confirm = "Please confirm your password";
    else if (confirm !== password) e.confirm = "Passwords do not match";
    if (!agreed) e.agreed = "You must accept the Terms & Privacy Policy";
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("success", "Account created! 🎉", "Welcome to LevelUp! Your journey begins now.");
      setTimeout(onSuccess, 1500);
    }, 800);
  };

  return (
    <>
      <div className="mb-4"><FormHeader title="Create account" subtitle="Free forever — upgrade when ready." /></div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
        <InputField id="r-name" label="Full Name" type="text" placeholder="Alex Rivera"
          value={name} onChange={e => { setName(e.target.value); clear("name"); }} error={errors.name} icon={<UserIcon />} />
        <InputField id="r-email" label="Email Address" type="email" placeholder="name@company.com"
          value={email} onChange={e => { setEmail(e.target.value); clear("email"); }} error={errors.email} icon={<MailIcon />} />

        <div>
          <InputField id="r-pass" label="Password" type="password" placeholder="Min. 8 characters"
            value={password} onChange={e => { setPassword(e.target.value); clear("password"); }} error={errors.password} icon={<LockIcon />} />
          {password.length > 0 && (
            <div className="mt-1.5 flex items-center gap-2">
              <div className="flex-1 h-1 bg-[var(--bg-hover)] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-300" style={{ width: s.width, backgroundColor: s.color }} />
              </div>
              <span className="text-[10px] font-semibold" style={{ color: s.color }}>{s.label}</span>
            </div>
          )}
        </div>

        <InputField id="r-confirm" label="Confirm Password" type="password" placeholder="Repeat your password"
          value={confirm} onChange={e => { setConfirm(e.target.value); clear("confirm"); }} error={errors.confirm} icon={<LockIcon />} />

        <div>
          <label className="flex items-start gap-2 cursor-pointer select-none group mt-0.5">
            <Checkbox checked={agreed} error={errors.agreed} extraClass="mt-0.5 " onToggle={() => { setAgreed(p => !p); clear("agreed"); }} />
            <span className="text-xs text-[var(--text-variant)] leading-snug">
              I agree to the{" "}
              <button type="button" className="text-[var(--primary-color)] font-semibold hover:opacity-75 transition-opacity">Terms</button>
              {" "}&amp;{" "}
              <button type="button" className="text-[var(--primary-color)] font-semibold hover:opacity-75 transition-opacity">Privacy Policy</button>
            </span>
          </label>
          {errors.agreed && <ErrorText className="text-[10px] text-[#ef4444] flex items-center gap-1 mt-1 ml-6">{errors.agreed}</ErrorText>}
        </div>

        <SubmitButton loading={loading} loadingText="Creating account…">Create Account</SubmitButton>
      </form>
      <SocialButtons label="or sign up with" />
      <p className="text-center text-xs text-[var(--text-variant)] mt-4">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch} className="font-semibold text-[var(--primary-color)] hover:opacity-75 transition-opacity">Sign in</button>
      </p>
    </>
  );
}

/* ── Left / Right Panels ── */
const STATS = [["50k+", "Active Climbers"], ["1.2k", "Guided Paths"], ["98%", "Satisfaction"]];

function LeftPanel({ mode }) {
  const isRegister = mode === "register";
  return (
    <div className="hidden lg:flex flex-col h-screen p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1326] via-[#131b2e] to-[#1a1040]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.22)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(78,222,163,0.07)_0%,transparent_60%)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(195,192,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 flex flex-col h-full">
        <Logo />
        <div className="mt-6 mb-3">
          <div className="inline-flex items-center gap-2 bg-[rgba(79,70,229,0.15)] border border-[rgba(79,70,229,0.3)] rounded-full px-3 py-1 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
            <span className="text-[10px] font-semibold text-[#4edea3] tracking-wider uppercase">{isRegister ? "Start your journey" : "Welcome back"}</span>
          </div>
          <h1 className="text-3xl xl:text-4xl font-extrabold text-white leading-tight tracking-tight text-glow">
            {isRegister
              ? <><span className="text-[var(--primary-color)]">Build skills</span> that<br />actually matter.</>
              : <>Master your craft,<br /><span className="text-[var(--primary-color)]">one level</span> at a time.</>}
          </h1>
          <p className="text-[var(--text-variant)] text-xs leading-relaxed mt-2 max-w-xs">
            {isRegister ? "Create your free account and join 50,000+ creators on guided paths to mastery."
              : "Join 50,000+ creators building their future through guided paths and real-world projects."}
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center min-h-0 py-2"><HeroIllustration /></div>

        <div className="flex gap-6 mb-4">
          {STATS.map(([v, l]) => (
            <div key={l} className="flex flex-col">
              <span className="text-xl font-extrabold text-white">{v}</span>
              <span className="text-[10px] font-semibold tracking-widest text-[#4edea3] uppercase mt-0.5">{l}</span>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-4">
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#4edea3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
          </div>
          <p className="text-[var(--text-variant)] text-xs italic leading-relaxed">"The most comprehensive roadmap I've ever followed. It didn't just teach me tools, it taught me a mindset."</p>
          <p className="text-[9px] font-semibold tracking-widest text-[var(--text-variant)] uppercase mt-2">— Alex Rivera, Senior Design Engineer</p>
        </div>
      </div>
    </div>
  );
}

const FOOTER_LINKS = ["Support", "Privacy", "Terms"];

function RightPanel({ mode, onSwitch, onForgot, onBackFromForgot, showToast, onSuccess }) {
  const isForgot = mode === "forgot";
  return (
    <div className="flex items-center justify-center h-screen p-5 bg-[var(--bg-app)] lg:bg-transparent overflow-y-auto">
      <div className="w-full max-w-sm py-4">
        <div className="flex justify-center mb-5 lg:hidden"><Logo /></div>

        {!isForgot && (
          <div className="flex bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-1 mb-4 gap-1">
            {["login", "register"].map(m => (
              <button key={m} type="button" onClick={() => mode !== m && onSwitch()}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${mode === m ? "bg-[var(--primary-container-color)] text-white shadow-md" : "text-[var(--text-variant)] hover:text-[var(--text-color)]"}`}>
                {m === "login" ? "Sign In" : "Register"}
              </button>
            ))}
          </div>
        )}

        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 shadow-2xl shadow-black/40">
          {isForgot ? <ForgotPasswordForm onBack={onBackFromForgot} showToast={showToast} />
            : mode === "login" ? <LoginForm onSwitch={onSwitch} onForgot={onForgot} showToast={showToast} onSuccess={onSuccess} />
              : <RegisterForm onSwitch={onSwitch} showToast={showToast} onSuccess={onSuccess} />}
        </div>

        <div className="flex justify-center gap-4 mt-4">
          {FOOTER_LINKS.map(item => <button key={item} type="button" className="text-[10px] text-[var(--text-variant)] hover:text-[var(--primary-color)] transition-colors tracking-wide">{item}</button>)}
        </div>
        <p className="text-center text-[9px] text-[var(--text-variant)] mt-1 opacity-40">© 2026 LevelUp. Climb Higher.</p>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function LoginPage() {
  const [mode, setMode] = useState("login");
  const { toasts, show } = useToast();
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden lg:grid lg:grid-cols-[55%_45%] bg-[var(--bg-app)]">
      <ToastContainer toasts={toasts} />
      <LeftPanel mode={mode} />
      <RightPanel
        mode={mode}
        onSwitch={() => setMode(m => m === "login" ? "register" : "login")}
        onForgot={() => setMode("forgot")}
        onBackFromForgot={() => setMode("login")}
        showToast={show}
        onSuccess={() => navigate("/dashboard")}
      />
    </div>
  );
}
