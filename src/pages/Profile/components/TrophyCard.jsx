import { Lock } from "lucide-react";
import Card from "../../../components/common/Card";

export default function TrophyCard({ t }) {
  const IconComp = t.Icon;
  return (
    <Card className={`p-4 flex flex-col items-center gap-3 transition-transform duration-150 border-outline-variant bg-surface-container-low rounded-2xl ${t.locked ? 'opacity-50 grayscale cursor-default' : 'hover:scale-105 cursor-pointer'}`}>
      <div 
        className="w-13 h-13 rounded-xl flex items-center justify-center"
        style={{ background: t.iconBg }}
      >
        {t.locked ? <Lock size={22} className="text-on-surface-variant" /> : <IconComp />}
      </div>
      <div className="text-center">
        <p className="text-on-surface font-bold text-[13px] m-0">{t.name}</p>
        <p className="text-on-surface-variant text-[11px] mt-1">{t.subtitle}</p>
      </div>
    </Card>
  );
}