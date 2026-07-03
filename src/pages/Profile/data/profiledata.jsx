import { Lock } from "lucide-react";

export const trophies = [
  {
    id: "1",
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#4edea3" strokeWidth="2" />
        <path d="M14 9l1.5 4.5H20l-3.7 2.7 1.4 4.3L14 18l-3.7 2.5 1.4-4.3L8 13.5h4.5z" fill="#4edea3" />
      </svg>
    ),
    name: "Top Scholar",
    subtitle: "Batch '23 Alpha",
    locked: false,
    iconBg: "rgba(78,222,163,0.12)",
  },
  {
    id: "2",
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="14" rx="2" stroke="#818cf8" strokeWidth="2" />
        <path d="M10 13l3 3 5-5" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "React Master",
    subtitle: "Curriculum Completion",
    locked: false,
    iconBg: "rgba(129,140,248,0.12)",
  },
  {
    id: "3",
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 7.5H24l-6.5 4.7 2.5 7.8L14 19.5l-6 4.5 2.5-7.8L4 11.5h7.5z" stroke="#c084fc" strokeWidth="1.5" fill="none"/>
        <circle cx="14" cy="14" r="3" fill="#c084fc" />
      </svg>
    ),
    name: "UI Ninja",
    subtitle: "Design Sprint Winner",
    locked: false,
    iconBg: "rgba(192,132,252,0.12)",
  },
  {
    id: "4",
    Icon: () => (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#fb923c" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "Fast Learner",
    subtitle: "7 Day Streak",
    locked: false,
    iconBg: "rgba(251,146,60,0.12)",
  },
  {
    id: "5",
    Icon: Lock,
    name: "Locked",
    subtitle: "Next Milestone",
    locked: true,
    iconBg: "rgba(100,116,139,0.10)",
  },
];

export const projects = [
  {
    id: "1",
    title: "Kinetic Pulse OS",
    description: "A futuristic operating system concept focusing on fluid transitio...",
    tags: ["#Figma", "#SwiftUI"],
    image: "https://picsum.photos/seed/kineticOS/600/340",
    featured: true,
    large: false,
    version: null,
  },
  {
    id: "2",
    title: "Neural Link Dashboard",
    description: "Data visualization tool for tracking synaptic responses in real-time...",
    tags: ["#React", "#D3.js"],
    image: "https://picsum.photos/seed/neural/600/340",
    featured: false,
    large: false,
    version: null,
  },
  {
    id: "3",
    title: "Scholar Quest Mobile",
    description: "Gamified learning platform that turns curriculum milestones into epic dungeon crawls and boss battles.",
    tags: [],
    image: "https://picsum.photos/seed/scholarquest/600/400",
    featured: false,
    large: true,
    version: "V3 RELEASE",
  },
];

export const feedPosts = [
  {
    id: "1",
    user: "Sarah Jenkins",
    avatar: "https://picsum.photos/seed/sarah99/80/80",
    time: "Just now",
    label: "Milestone Shared",
    body: "Finally finished the Advanced Python module! 🐍 The decorator section was tough but worth it. On to the Capstone project!",
    tags: ["#Python", "#Backend", "#LevelUp"],
    likes: 24,
    comments: 8,
    image: null,
  },
  {
    id: "2",
    user: "Marcus Thorne",
    avatar: "https://picsum.photos/seed/marcus55/80/80",
    time: "2h ago",
    label: "Portfolio Update",
    body: "Just pushed a new version of my weather app using the Kinetic Scholar UI guidelines. Thoughts on the color contrast?",
    tags: [],
    likes: 152,
    comments: 42,
    image: "https://picsum.photos/seed/weatherapp/400/180",
  },
];