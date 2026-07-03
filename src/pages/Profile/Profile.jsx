import { useState } from "react";
import Card from "../../components/common/Card";

// استدعاء البيانات
import { trophies, projects, feedPosts } from "./data/profiledata"; 

// استدعاء المكونات
import HeroSection from "./components/HeroSection";
import TrophyCard from "./components/TrophyCard";
import ProjectCard from "./components/ProjectCard";
import FeedPostCard from "./components/FeedPostCard";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-background font-sans pb-12">
      
      <HeroSection />

      {/* ── الجوائز (Trophy Case) ── */}
      <div className="mt-12 px-10">
        <p className="text-[10px] font-bold tracking-[0.18em] text-on-surface-variant uppercase mb-4">
          Digital Trophy Case
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {trophies.map(t => <TrophyCard key={t.id} t={t} />)}
        </div>
      </div>

      {/* ── المحتوى الرئيسي (Main content + Sidebar) ── */}
      <div className="mt-10 px-10 flex flex-col lg:flex-row gap-8">
        
        {/* اليسار: التبويبات والمحتوى */}
        <div className="flex-1 min-w-0">
          <div className="flex gap-8 border-b border-outline-variant mb-6">
            {["portfolio", "feed"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[14px] font-bold capitalize transition-all border-b-2 ${
                  activeTab === tab 
                    ? "text-on-surface border-primary-container" 
                    : "text-on-surface-variant border-transparent hover:text-on-surface"
                }`}
              >
                {tab === "portfolio" ? "My Portfolio" : "Community Feed"}
              </button>
            ))}
          </div>

          {activeTab === "portfolio" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map(p => <ProjectCard key={p.id} p={p} />)}
            </div>
          )}

          {activeTab === "feed" && (
            <Card className="bg-surface-container-low border-outline-variant p-5">
              {feedPosts.map(post => <FeedPostCard key={post.id} post={post} />)}
            </Card>
          )}
        </div>

        {/* اليمين: الـ Sidebar للـ Feed */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-on-surface font-extrabold text-[15px] m-0">Community Feed</h2>
              <button className="text-primary text-[12px] font-bold hover:underline">
                View All
              </button>
            </div>
            <Card className="bg-surface-container-low border-outline-variant p-5">
              {feedPosts.map(post => <FeedPostCard key={post.id} post={post} />)}
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
