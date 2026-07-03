import { MessageSquare, UserPlus, Zap } from "lucide-react";
import Button from "../../../components/common/Button";

export default function HeroSection() {
  return (
    <>
      <div className="relative h-60 overflow-hidden mx-6 mt-6 rounded-3xl">
        <div className="absolute inset-0 bg-linear-to-br from-primary-container via-primary/60 to-[#c47aa3]" />
        <svg className="absolute right-[5%] top-0 h-full opacity-60" viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="130" rx="80" ry="95" fill="#e8b4a0" />
          <ellipse cx="160" cy="65" rx="82" ry="55" fill="#3b1f8c" />
          <rect x="78" y="65" width="22" height="80" rx="11" fill="#3b1f8c" />
          <rect x="220" y="65" width="22" height="80" rx="11" fill="#3b1f8c" />
          <ellipse cx="130" cy="118" rx="16" ry="20" fill="#c9daf8" />
          <ellipse cx="190" cy="118" rx="16" ry="20" fill="#c9daf8" />
          <ellipse cx="130" cy="120" rx="9" ry="11" fill="#3b1f8c" />
          <ellipse cx="190" cy="120" rx="9" ry="11" fill="#3b1f8c" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-25 bg-linear-to-t from-background to-transparent" />
      </div>

      <div className="px-12 -mt-15 relative z-10 flex items-end justify-between flex-wrap gap-6">
        <div className="flex items-end gap-5">
          <div className="relative">
            <div className="w-30 h-30 rounded-2xl border-4 border-background bg-surface-container-high overflow-hidden shadow-lg">
              <img src="https://picsum.photos/seed/maya/220/220" alt="Maya Mohamed" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-tertiary text-background text-[10px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
              <Zap size={10} className="fill-background" /> Level 42
            </div>
          </div>
          
          <div className="pb-1">
            <h1 className="text-on-surface font-black text-3xl tracking-tight m-0">Maya Mohamed</h1>
            <p className="text-on-surface-variant text-sm mt-1.5 leading-relaxed max-w-85">
              Software Developer & Tech Enthusiast.<br />
              Building the next generation of kinetic interfaces at Level Up Academy.
            </p>
          </div>
        </div>

        <div className="flex gap-3 pb-1">
          <Button variant="secondary" className="flex items-center gap-2 bg-surface-container-low border-outline-variant text-on-surface-variant hover:bg-surface-container-high">
            <MessageSquare size={16} /> Message
          </Button>
          <Button variant="primary" className="flex items-center gap-2 bg-primary-container text-white">
            <UserPlus size={16} /> Follow
          </Button>
        </div>
      </div>
    </>
  );
}