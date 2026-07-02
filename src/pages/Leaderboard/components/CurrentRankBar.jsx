
import {
  ArrowUp,
  Share2,
  Zap,
  MessageCircle,
  Send,
  Mail,

} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CurrentRankBar({ currentUser }) {
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShare = (platform) => {
    const shareText = `أنا في المركز #${currentUser.rank} في الليدر بورد! 🎖️ هل تنضم إليّ في Level-Up؟`;
    const shareUrl = "https://levelup.com"; // عدّل الـ URL لو كانت مختلفة

    const shareLinks = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      email: `mailto:?subject=${encodeURIComponent("انضم إلي في Level-Up!")}&body=${encodeURIComponent(shareText + " " + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    };

    if (shareLinks[platform]) {
      window.open(shareLinks[platform], "_blank");
    }
    setShowShareMenu(false);
  };

  return (
    <div className="sticky bottom-4 z-20">
      <div className="bg-surface-container-high/95 backdrop-blur-md border border-outline-variant/10 rounded-2xl shadow-xl shadow-black/10 px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        {/* صورة ورانك المستخدم */}
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => navigate("/profile")}
            className="hover:opacity-80 transition-opacity cursor-pointer"
            title="اذهب إلى البروفايل"
          >
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.avatarSeed}`}
              alt="Your avatar"
              className="w-11 h-11 rounded-full object-cover border-2 border-primary"
            />
          </button>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/60">
              Your Current Rank
            </p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold text-on-surface">
                #{currentUser.rank}
              </span>
              <span className="flex items-center gap-0.5 text-[11px] font-bold text-tertiary">
                <ArrowUp size={12} />
                {currentUser.positionsUp} positions
              </span>
            </div>
          </div>
        </div>

        {/* بروجرس بار الوصول للتير الجاي */}
        <div className="flex-1 min-w-[160px] w-full sm:w-auto">
          <p className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-2">
            {currentUser.nextTierLabel}
          </p>
          <div className="h-2 rounded-full bg-outline-variant/15 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-tertiary"
              style={{ width: `${currentUser.progressPercent}%` }}
            />
          </div>
          <p className="text-[10px] text-on-surface-variant mt-1.5">
            {currentUser.xpToNextTier} XP to Master
          </p>
        </div>

        {/* الأزرار */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto flex-wrap sm:flex-nowrap">
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors px-3 py-2.5 hover:bg-surface-container-highest rounded-lg w-full sm:w-auto justify-center sm:justify-start"
            >
              <Share2 size={15} />
              <span className="hidden sm:inline">Share</span>
            </button>

            {/* قائمة الشير */}
            {showShareMenu && (
              <div className="absolute bottom-full mb-2 left-0 sm:left-auto sm:right-0 bg-surface-container-highest border border-outline-variant/20 rounded-xl shadow-lg overflow-hidden z-50 w-full sm:w-max min-w-[200px]">
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/10 transition-colors text-on-surface border-b border-outline-variant/10 last:border-b-0"
                >
                  <MessageCircle size={16} className="text-green-500" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => handleShare("telegram")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/10 transition-colors text-on-surface border-b border-outline-variant/10 last:border-b-0"
                >
                  <Send size={16} className="text-blue-400" />
                  <span>Telegram</span>
                </button>
                <button
                  onClick={() => handleShare("email")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/10 transition-colors text-on-surface border-b border-outline-variant/10 last:border-b-0"
                >
                  <Mail size={16} className="text-red-500" />
                  <span>Email</span>
                </button>
                
              </div>
            )}
          </div>
          <button
            onClick={() => navigate("/curriculum")}
            className="flex items-center gap-2 bg-primary-container hover:bg-opacity-90 text-white text-xs font-bold px-5 py-2.5 rounded-xl active:scale-95 transition-all shadow-md shadow-primary-container/10 w-full sm:w-auto justify-center"
          >
            <span>Go to Lesson</span>
            <Zap size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
