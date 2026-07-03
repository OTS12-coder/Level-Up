import { Timer } from "lucide-react";
import ShareButtons from "./ShareButtons";

export default function LeaderboardHeader({ seasonInfo }) {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
      <div>
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-tertiary mb-2">
          {seasonInfo.season} • {seasonInfo.week}
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-tight text-on-surface mb-3">
          {seasonInfo.title}
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant max-w-lg leading-relaxed">
          {seasonInfo.description}
        </p>
      </div>

      <div className="shrink-0 flex flex-col gap-3 items-stretch sm:items-end">
        <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl px-4 sm:px-5 py-3 flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
            <Timer size={16} />
          </span>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/60">
              {seasonInfo.countdownLabel}
            </p>
            <p className="text-xs sm:text-sm font-extrabold text-on-surface">
              {seasonInfo.countdown}
            </p>
          </div>
        </div>
        <ShareButtons />
      </div>
    </div>
  );
}
