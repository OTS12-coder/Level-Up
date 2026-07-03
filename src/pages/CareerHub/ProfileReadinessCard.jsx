import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

export default function ProfileReadinessCard({ percent, message }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <Card className="flex flex-col items-center text-center">
      {/* Circle */}
      <div className="relative w-32 h-32 mb-4">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="var(--border)"
            strokeWidth="9"
          />

          {/* Gradient */}
          <defs>
            <linearGradient id="readinessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-tertiary)" />
            </linearGradient>
          </defs>

          {/* Progress */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#readinessGradient)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-on-surface">
            {percent}%
          </span>
          <span className="text-[10px] font-bold tracking-widest text-on-surface-variant">
            READY
          </span>
        </div>
      </div>

      {/* Text */}
      <h3 className="text-lg font-bold text-on-surface mb-2">
        Profile Readiness
      </h3>

      <p className="text-xs text-on-surface-variant leading-relaxed mb-5">
        {message}
      </p>

      <Button variant="secondary" className="w-full">
        Edit Career Profile
      </Button>
    </Card>
  );
}