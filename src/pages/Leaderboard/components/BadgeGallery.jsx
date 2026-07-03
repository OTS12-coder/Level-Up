import { Sparkles, Medal, Gem, Lock } from "lucide-react";

// خريطة تحويل اسم الأيقونة (نص) لكومبوننت لوسايد فعلي
const previewIconMap = {
  sparkles: Sparkles,
  medal: Medal,
  diamond: Gem,
  locked: Lock,
};

export default function BadgeGallery({ badgeGallery }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 sm:p-5">
      <h3 className="text-sm sm:text-base font-extrabold text-on-surface mb-2">
        Badge Gallery
      </h3>
      <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
        {badgeGallery.description}
      </p>

      <div className="flex items-center gap-2 sm:gap-3 mb-5 flex-wrap">
        {badgeGallery.preview.map((iconKey, index) => {
          const Icon = previewIconMap[iconKey];
          const isLocked = iconKey === "locked";
          return (
            <span
              key={`${iconKey}-${index}`}
              className={`w-9 sm:w-10 h-9 sm:h-10 rounded-xl flex items-center justify-center ${
                isLocked
                  ? "bg-outline-variant/10 text-on-surface-variant/40"
                  : "bg-tertiary/10 text-tertiary"
              }`}
            >
              {Icon && <Icon size={16} />}
            </span>
          );
        })}
      </div>

      <button className="w-full text-center bg-surface-container-high hover:bg-outline-variant/10 text-on-surface text-xs font-bold py-2 sm:py-2.5 rounded-xl transition-colors">
        View All Badges
      </button>
    </div>
  );
}
