import { ExternalLink } from "lucide-react";
import Card from "../../../components/common/Card";

export default function ProjectCard({ p }) {
  if (p.large) {
    return (
      <Card className="col-span-full p-0 flex rounded-2xl overflow-hidden border-outline-variant bg-surface-container-low group hover:border-primary-container/50 transition-colors">
        <div className="w-2/5 shrink-0">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-7 flex flex-col justify-center gap-3 flex-1 bg-surface-container-low">
          <h3 className="text-on-surface font-extrabold text-[22px] leading-tight m-0">{p.title}</h3>
          <p className="text-on-surface-variant text-[14px] leading-relaxed m-0">{p.description}</p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-[10px] font-extrabold tracking-widest text-on-surface-variant border border-outline-variant px-2 py-1 rounded-md">
              {p.version}
            </span>
            <button className="flex items-center gap-1.5 text-on-surface font-bold text-[14px] hover:text-primary transition-colors">
              View Case Study <ExternalLink size={13} />
            </button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-0 rounded-2xl overflow-hidden border-outline-variant bg-surface-container-low hover:border-primary-container/50 transition-colors flex flex-col">
      <div className="relative h-43.75 overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
        {p.featured && (
          <span className="absolute bottom-3 left-3 bg-tertiary text-background text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded-full">
            FEATURED
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1 bg-surface-container-low">
        <h3 className="text-on-surface font-extrabold text-[15px] m-0">{p.title}</h3>
        <p className="text-on-surface-variant text-[13px] leading-relaxed m-0">{p.description}</p>
        {p.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {p.tags.map(tag => (
              <span key={tag} className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}