import { Share2, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ShareButtons() {
  const [showMenu, setShowMenu] = useState(false);

  // الرابط اللي هيتم مشاركته
  const shareUrl = window.location.href;
  const shareTitle = "🏆 شوف ترتيبي في Leaderboard!";
  const shareText = `${shareTitle}\n\nانضم الى Level Up وابدأ رحلة تطورك! 🚀`;

  const handleShareWhatsApp = () => {
    const encodedText = encodeURIComponent(shareText + `\n\n${shareUrl}`);
    window.open(`https://wa.me/?text=${encodedText}`, "_blank");
    setShowMenu(false);
  };

  const handleShareTelegram = () => {
    const encodedText = encodeURIComponent(shareText);
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodedText}`,
      "_blank",
    );
    setShowMenu(false);
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent("🏆 شوف ترتيبي في Level Up!");
    const body = encodeURIComponent(`${shareText}\n\nالرابط: ${shareUrl}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
    setShowMenu(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setShowMenu(false);
    alert("تم نسخ الرابط! 📋");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 bg-tertiary/10 hover:bg-tertiary/20 text-tertiary font-bold py-2 px-4 rounded-xl transition-colors"
      >
        <Share2 size={18} />
        <span className="hidden sm:inline">شير</span>
      </button>

      {showMenu && (
        <div className="absolute top-full right-0 mt-2 bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-lg z-50 min-w-[200px]">
          <button
            onClick={handleShareWhatsApp}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 text-on-surface transition-colors text-sm font-semibold border-b border-outline-variant/10 first:rounded-t-2xl"
          >
            <MessageCircle size={18} className="text-green-500" />
            <span>واتس آب</span>
          </button>

          <button
            onClick={handleShareTelegram}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 text-on-surface transition-colors text-sm font-semibold border-b border-outline-variant/10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                fill="#0088cc"
              />
            </svg>
            <span>تليجرام</span>
          </button>

          <button
            onClick={handleShareEmail}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 text-on-surface transition-colors text-sm font-semibold border-b border-outline-variant/10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span>بريد إلكتروني</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 text-on-surface transition-colors text-sm font-semibold last:rounded-b-2xl"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
            <span>نسخ الرابط</span>
          </button>
        </div>
      )}
    </div>
  );
}
