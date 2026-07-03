import LeaderboardHeader from "./components/LeaderboardHeader";
import Podium from "./components/Podium";
import RankingTable from "./components/RankingTable";
import CurrentRankBar from "./components/CurrentRankBar";
import BoostXPPanel from "./components/BoostXPPanel";
import BadgeGallery from "./components/BadgeGallery";
import {
    seasonInfo,
    podium,
    rankingFilters,
    rankings,
    currentUser,
    xpBoosts,
    badgeGallery,
} from "./leaderboardData";

export default function Leaderboard() {
    return (
        <div>
            {/* الهيدر: العنوان والوصف + عداد نهاية الموسم */}
            <LeaderboardHeader seasonInfo={seasonInfo} />

            {/* البوديوم: التلاتة الأوائل */}
            <Podium first={podium.first} second={podium.second} third={podium.third} />

            {/* العمود الرئيسي (الجدول) + العمود الجانبي (Boost XP + Badges) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
                <RankingTable
                    filters={rankingFilters}
                    rankings={rankings}
                    onLoadMore={() => {}}
                />

                <div className="space-y-6">
                    <BoostXPPanel boosts={xpBoosts} />
                    <BadgeGallery badgeGallery={badgeGallery} />
                </div>
            </div>

            {/* الشريط الثابت اللي بيعرض رانك المستخدم الحالي */}
            <div className="mt-8">
                <CurrentRankBar currentUser={currentUser} />
            </div>
        </div>
    );
}
