import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.jpeg";
import lumina from "./assets/l.jpeg";
import velocity from "./assets/v.jpeg";
import prism from "./assets/p.jpeg";
export const jobs = [
  {
    id: "job-1",
    title: "Senior Product Designer",
    company: "Lumina Systems",
    location: "Remote",
    locationType: "remote",
    matchPercent: 98,
    tags: ["Figma Mastery", "Design Systems", "Prototyping"],
    salaryMin: 140,
    salaryMax: 185,
    salaryPeriod: "year",
    logo: lumina,
    featured: true,
  },
  {
    id: "job-2",
    title: "Frontend Engineer (React)",
    company: "Velocity AI",
    location: "Austin, TX",
    locationType: "onsite",
    matchPercent: 85,
    tags: ["React", "TypeScript", "Tailwind"],
    salaryMin: 120,
    salaryMax: 155,
    salaryPeriod: "year",
    logo: velocity,
    featured: false,
  },
  {
    id: "job-3",
    title: "UX Research Intern",
    company: "Prism Global",
    location: "Hybrid",
    locationType: "hybrid",
    matchPercent: 72,
    tags: ["User Interviews", "Surveys"],
    salaryMin: 35,
    salaryMax: 50,
    salaryPeriod: "hour",
    logo: prism,
    featured: false,
  },
  
];

export const resources = [
  {
    id: "resource-1",
    category: "GUIDES",
    title: "Mastering the ATS: Designing Resumes that Rank",
    image: img1,
  },
  {
    id: "resource-2",
    category: "NETWORKING",
    title: "Cold Outreach: How to Get Referred at Top Tech Companies",
    image: img2,
  },
];
export const applicationStatus = [
  { id: "app-1", company: "Spotify", role: "Product Designer", status: "Interviewing" },
  { id: "app-2", company: "Stripe", role: "Systems Engineer", status: "Applied" },
];

export const savedJobs = [
  { id: "saved-1", company: "Notion", role: "Content Strategist" },
  { id: "saved-2", company: "Airbnb", role: "Creative Director" },
];

export const profileReadiness = {
  percent: 70,
  message: 'Complete your "Advanced Typography" module to increase match rate to 85%.',
};
