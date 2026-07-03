import { Heart, MessageCircle } from "lucide-react";

export default function FeedPostCard({ post }) {
  return (
    <div className="py-4 border-b border-outline-variant last:border-0">
      <div className="flex gap-3">
        <img src={post.avatar} alt={post.user} className="w-9 h-9 rounded-full object-cover border border-outline-variant shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-on-surface font-bold text-[13px]">{post.user}</span>
            <span className="text-on-surface-variant text-[11px]">{post.time} · {post.label}</span>
          </div>
          <p className="text-on-surface-variant text-[13px] leading-relaxed mt-1.5 mb-0">{post.body}</p>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-primary text-[11px] cursor-pointer hover:underline">{tag}</span>
              ))}
            </div>
          )}
          {post.image && (
            <div className="mt-2.5 rounded-lg overflow-hidden border border-outline-variant">
              <img src={post.image} alt="preview" className="w-full h-27.5 object-cover" />
            </div>
          )}
          <div className="flex gap-4 mt-2.5">
            <button className="flex items-center gap-1.5 text-on-surface-variant text-[12px] hover:text-on-surface transition-colors">
              <Heart size={12} /> {post.likes}
            </button>
            <button className="flex items-center gap-1.5 text-on-surface-variant text-[12px] hover:text-on-surface transition-colors">
              <MessageCircle size={12} /> {post.comments}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}