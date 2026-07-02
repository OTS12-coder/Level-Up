import { BookOpen, MessageSquareHeart, Rocket, ArrowRight } from "lucide-react";

// خريطة تحويل اسم الأيقونة (نص) لكومبوننت لوسايد فعلي
const boostIconMap = {
  bookOpen: BookOpen,
  messageSquareHeart: MessageSquareHeart,
  rocket: Rocket,
};

// خريطة ألوان الخط الجانبي حسب نوع الكارت
const accentClassMap = {
  primary: "border-l-primary",
  tertiary: "border-l-tertiary",
};

const iconBgClassMap = {
  primary: "bg-primary/10 text-primary",
  tertiary: "bg-tertiary/10 text-tertiary",
};

const rewardBgClassMap = {
  primary: "bg-primary/10 text-primary",
  tertiary: "bg-tertiary/10 text-tertiary",
};

const BoostCard = ({ boost }) => {
  const Icon = boostIconMap[boost.icon];

  return (
    <div
      className={`bg-surface-container-low border border-outline-variant/10 border-l-[3px] ${
        accentClassMap[boost.accent]
      } rounded-2xl p-4 sm:p-5 hover:border-outline-variant/20 transition-colors`}
    >
      <div className="flex items-start gap-3 mb-3">
        <span
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${iconBgClassMap[boost.accent]}`}
        >
          {Icon && <Icon size={16} />}
        </span>
        <h3 className="text-xs sm:text-sm font-bold text-on-surface pt-1.5">
          {boost.title}
        </h3>
      </div>

      <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
        {boost.description}
      </p>

      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full ${rewardBgClassMap[boost.accent]}`}
        >
          {boost.reward}
        </span>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default function BoostXPPanel({ boosts }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg sm:text-xl font-extrabold text-on-surface mb-1 px-4 lg:px-0">
        Boost Your XP
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        {boosts.map((boost) => (
          <BoostCard key={boost.id} boost={boost} />
        ))}
      </div>
    </div>
  );
}
