import { Medal, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// خريطة تحويل اسم الأيقونة (نص) لكومبوننت لوسايد فعلي
const badgeIconMap = {
  medal: Medal,
  sparkles: Sparkles,
  star: Star,
};

// كارت أي حد من التلاتة اللي جنب المركز الأول (تاني وتالت)
const SidePodiumCard = ({ scholar }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="relative mb-4" onClick={() => navigate("/profile")}>
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-outline-variant/20 group-hover:border-tertiary transition-colors">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${scholar.avatarSeed}`}
            alt={scholar.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant/10 text-[11px] font-bold text-on-surface flex items-center justify-center">
          {scholar.rank}
        </span>
      </div>

      <div className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-5 text-center group-hover:border-tertiary/30 transition-colors">
        <p className="text-sm font-bold text-on-surface mb-1">{scholar.name}</p>
        <p className="text-xs text-on-surface-variant mb-3">
          {scholar.xp.toLocaleString()} XP
        </p>
        <div className="flex items-center justify-center gap-1.5 text-tertiary">
          {scholar.badges.map((badgeKey) => {
            const Icon = badgeIconMap[badgeKey];
            return Icon ? <Icon key={badgeKey} size={14} /> : null;
          })}
        </div>
      </div>
    </div>
  );
};

// كارت المركز الأول - أكبر وفي النص مع الجلو الأخضر المميز
const FirstPlaceCard = ({ scholar }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center -mt-6 cursor-pointer group">
      <div className="relative mb-4" onClick={() => navigate("/profile")}>
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-tertiary shadow-lg shadow-tertiary/20 group-hover:border-tertiary group-hover:shadow-lg group-hover:shadow-tertiary/40 transition-all">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${scholar.avatarSeed}`}
            alt={scholar.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-tertiary text-surface text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full shadow-md">
          {scholar.title}
        </span>
      </div>

      <div className="w-full podium-gradient bg-surface-container-low border border-tertiary/40 rounded-2xl px-8 py-6 text-center shadow-lg shadow-tertiary/5 group-hover:border-tertiary/60 transition-colors">
        <p className="text-lg font-extrabold text-on-surface mb-1">
          {scholar.name}
        </p>
        <p className="text-base font-bold text-tertiary mb-3">
          {scholar.xp.toLocaleString()} XP
        </p>
        <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-tertiary bg-tertiary/10 px-3 py-1 rounded-full">
          {scholar.tag}
        </span>
      </div>
    </div>
  );
};

export default function Podium({ first, second, third }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-end mb-8 sm:mb-10 px-4 sm:px-0">
      <div className="hidden sm:block">
        <SidePodiumCard scholar={second} />
      </div>
      <FirstPlaceCard scholar={first} />
      <div className="hidden sm:block">
        <SidePodiumCard scholar={third} />
      </div>

      {/* عرض بديل على الموبايل */}
      <div className="sm:hidden col-span-1 space-y-4">
        <SidePodiumCard scholar={second} />
        <SidePodiumCard scholar={third} />
      </div>
    </div>
  );
}
