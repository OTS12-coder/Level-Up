import { useState } from "react";
import {
  Zap,
  Shield,
  Home,
  Sparkles,
  GraduationCap,
  Medal,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// خريطة تحويل اسم الأيقونة (نص) لكومبوننت لوسايد فعلي
const badgeIconMap = {
  zap: Zap,
  shield: Shield,
  home: Home,
  sparkles: Sparkles,
  graduationCap: GraduationCap,
  medal: Medal,
  star: Star,
};

const RankRow = ({ scholar }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/profile")}
      className="flex items-center px-2 sm:px-3 py-4 border-b border-outline-variant/10 last:border-b-0 hover:bg-primary/5 cursor-pointer transition-colors group"
    >
      <div className="w-8 sm:w-12 text-sm font-bold text-on-surface-variant">
        {scholar.rank}
      </div>

      <div className="flex-1 flex items-center gap-2 sm:gap-3 min-w-0">
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${scholar.avatarSeed}`}
          alt={scholar.name}
          className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover border border-outline-variant/10 shrink-0 group-hover:border-tertiary transition-colors"
        />
        <div className="min-w-0">
          <p className="text-xs sm:text-sm font-bold text-on-surface truncate">
            {scholar.name}
          </p>
          <p className="text-[10px] sm:text-[11px] text-on-surface-variant hidden sm:block">
            Level {scholar.level} • {scholar.role}
          </p>
        </div>
      </div>

      <div className="w-20 sm:w-32 flex items-center gap-1 sm:gap-2 text-on-surface-variant flex-wrap justify-end">
        {scholar.badges.slice(0, 2).map((badgeKey) => {
          const Icon = badgeIconMap[badgeKey];
          return Icon ? <Icon key={badgeKey} size={14} /> : null;
        })}
      </div>

      <div className="w-16 sm:w-24 text-right text-xs sm:text-sm font-extrabold text-on-surface">
        {(scholar.points / 1000).toFixed(1)}k
      </div>
    </div>
  );
};

export default function RankingTable({ filters, rankings, onLoadMore }) {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="px-4 sm:px-0">
      {/* الهيدر: العنوان + تابز الفلترة */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-lg sm:text-xl font-extrabold text-on-surface">
          Global Ranking
        </h2>
        <div className="flex items-center bg-surface-container-low border border-outline-variant/10 rounded-xl p-1 w-full sm:w-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex-1 sm:flex-none ${
                activeFilter === filter
                  ? "bg-primary-container text-white shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* الجدول */}
      <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden">
        <div className="flex items-center px-2 sm:px-3 py-3 border-b border-outline-variant/10 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">
          <div className="w-8 sm:w-12">Rank</div>
          <div className="flex-1">Scholar</div>
          <div className="w-20 sm:w-32">Badges</div>
          <div className="w-16 sm:w-24 text-right">Points</div>
        </div>

        <div className="px-2 sm:px-4 max-h-[400px] overflow-y-auto">
          {rankings.map((scholar) => (
            <RankRow key={scholar.rank} scholar={scholar} />
          ))}
        </div>
      </div>

      {/* زرار Load More */}
      <div className="text-center mt-6">
        <button
          onClick={onLoadMore}
          className="text-xs font-bold text-primary hover:text-primary-container transition-colors px-4 py-2 rounded-lg hover:bg-primary/10"
        >
          Load More Scholars
        </button>
      </div>
    </div>
  );
}
