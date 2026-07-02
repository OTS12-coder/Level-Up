// ============================================
// leaderboardData.js
// كل الـ Data بتاعة صفحة الـ Leaderboard هنا
// (Static دلوقتي، هيتم ربطها بالـ API بعدين)
// ============================================

// معلومات الموسم والعداد اللي فوق
export const seasonInfo = {
  season: "SEASON 4",
  week: "WEEK 12",
  title: "Global Leaderboard",
  description:
    "Push your limits, master the curriculum, and earn your place among the top kinetic scholars this month.",
  countdownLabel: "ENDS IN",
  countdown: "04d 12h 30m",
};

// التلاتة الأوائل (البوديوم) - المركز الأول في النص والباقي على الجنب
// badges: أيقونات lucide-react اللي بتتعرض تحت الاسم
export const podium = {
  first: {
    rank: 1,
    name: "محمود عز الدين",
    xp: 14820,
    avatarSeed: "MahmoudEzzaldin",
    title: "APEX SCHOLAR",
    tag: "MVP WEEK 12",
  },
  second: {
    rank: 2,
    name: "فاطمة علي",
    xp: 12450,
    avatarSeed: "FatimaAli",
    badges: ["medal", "sparkles"],
  },
  third: {
    rank: 3,
    name: "أحمد حسام",
    xp: 11900,
    avatarSeed: "AhmedHossam",
    badges: ["star"],
  },
};

// تابز فلترة الترتيب (All Time / Monthly)
export const rankingFilters = ["All Time", "Monthly"];

// جدول الترتيب العام - من المركز الرابع وطالع
// badges: أيقونات lucide-react (zap, shield, home, sparkles, graduationCap...)
export const rankings = [
  {
    rank: 4,
    name: "كريم عبد الله",
    level: 24,
    role: "معماري",
    avatarSeed: "KarimAbdullah",
    badges: ["zap", "shield", "home"],
    points: 10240,
  },
  {
    rank: 5,
    name: "نور محمود",
    level: 22,
    role: "محللة",
    avatarSeed: "NourMahmoud",
    badges: ["sparkles", "graduationCap"],
    points: 9810,
  },
  {
    rank: 6,
    name: "محمد أحمد",
    level: 21,
    role: "مطور",
    avatarSeed: "MohammadAhmed",
    badges: ["zap", "medal"],
    points: 9350,
  },
  {
    rank: 7,
    name: "ياسمين سامي",
    level: 20,
    role: "مستراتيج",
    avatarSeed: "YasminSami",
    badges: ["star", "shield"],
    points: 8990,
  },
];

// بيانات المستخدم الحالي في الشريط الثابت تحت الجدول
export const currentUser = {
  rank: 42,
  positionsUp: 12,
  avatarSeed: "CurrentUser",
  nextTierLabel: "NEXT TIER",
  xpToNextTier: 340,
  progressPercent: 70,
};

// كروت "Boost Your XP" في العمود الجانبي
// icon: bookOpen | messageSquareHeart | rocket
// accent: لون الخط الجانبي للكارت
export const xpBoosts = [
  {
    id: "daily-module",
    icon: "bookOpen",
    title: "Daily Module",
    description: "Complete one full curriculum module within 24 hours.",
    reward: "+500 XP",
    accent: "primary",
  },
  {
    id: "community-help",
    icon: "messageSquareHeart",
    title: "Community Hero",
    description: "Get your answer marked as 'Helpful' in the community hub.",
    reward: "+250 XP",
    accent: "tertiary",
  },
  {
    id: "streak",
    icon: "rocket",
    title: "7-Day Streak",
    description: "Maintain a learning streak for 7 consecutive days.",
    reward: "+1200 XP",
    accent: "primary",
  },
];

// كارت "Badge Gallery" تحت
export const badgeGallery = {
  collected: 12,
  total: 48,
  description: "You've collected 12 of 48 legendary badges. Keep climbing!",
  preview: ["sparkles", "medal", "diamond", "locked"],
};
