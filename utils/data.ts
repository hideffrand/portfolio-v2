interface ProjectProps {
  id: string;
  title: string;
  img: string;
  type: string;
  year: number;
  url: string;
  desc: string;
  stack: string[];
}

export const projects: ProjectProps[] = [
  {
    id: "kozy",
    title: "Kozy",
    img: "/kozy.webp",
    type: "Full Stack Web Development",
    year: 2024,
    url: "https://kozy-one.vercel.app",
    desc: "Kozy is an end-to-end\nsolution for modern living.\nBuilt with performance in mind.",
    stack: ["react", "tw", "py", "sql"],
  },
  {
    id: "signify",
    title: "Signify",
    img: "/signify.webp",
    type: "UI/UX",
    year: 2024,
    url: "https://www.figma.com/proto/ueRKm0yUs3lxyh05T4RakR/Wireframe?page-id=0%3A1&node-id=654-3920&p=f&viewport=480%2C386%2C0.05&t=DsPof1akFJBtMk6u-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1",
    desc: "",
    stack: ["figma"],
  },
  {
    id: "tkagape",
    title: "TK Agape",
    img: "/tkagape.webp",
    type: "Full Stack Web Development",
    year: 2024,
    url: "https://tkagape.vercel.app",
    desc: "",
    stack: ["next", "ts", "tw", "firebase"],
  },
  {
    id: "gowize",
    title: "Gowize",
    img: "/gowize.webp",
    type: "Mobile App Development",
    year: 2024,
    url: "https://www.youtube.com/watch?v=8fVH6FajDVY",
    desc: "",
    stack: ["rn", "figma"],
  },
  {
    id: "ovo",
    title: "OVO",
    img: "/ovo.webp",
    type: "Web Design and Development",
    year: 2023,
    url: "https://ovo-landing.vercel.app",
    desc: "",
    stack: ["next", "ts", "tw", "figma"],
  },
];

interface ITechTag {
  label: string;
  style: string;
}

export const techTag: Record<string, ITechTag> = {
  sql: { label: "SQL", style: "bg-[rgb(100,70,0,0.2)] text-[rgb(200,140,0)]" },
  firebase: {
    label: "Firebase",
    style: "bg-[rgb(200,140,0,0.2)] text-[rgb(240,100,0)]",
  },
  cf: {
    label: "ColdFusion",
    style: "bg-[rgb(0,70,100,0.2)] text-[rgb(0,140,200)]",
  },
  ts: {
    label: "TypeScript",
    style: "bg-[rgb(0,70,100,0.2)] text-[rgb(0,140,200)]",
  },
  py: {
    label: "Python",
    style: "bg-[rgb(100,100,100,0.2)] text-[rgb(200,200,200)]",
  },
  next: {
    label: "Next.js",
    style: "bg-[rgb(100,100,100,0.2)] text-[rgb(200,200,200)]",
  },
  tw: {
    label: "Tailwind CSS",
    style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]",
  },
  css: { label: "CSS", style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]" },
  html: { label: "HTML", style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]" },
  react: {
    label: "React.js",
    style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]",
  },
  rn: {
    label: "React Native",
    style: "bg-[rgb(0,70,50,0.2)] text-[rgb(0,200,240)]",
  },
  figma: {
    label: "Figma",
    style: "bg-[rgb(181,122,232,0.1)] text-[rgb(181,122,232)]",
  },
  wix: {
    label: "WIX",
    style: "bg-[rgb(100,100,100,0.2)] text-[rgb(200,200,200)]",
  },
  wp: {
    label: "WordPress",
    style: "bg-[rgb(39,138,127,0.2)] text-[rgb(80,158,140)]",
  },
};

interface IExperience {
  title: string;
  time: string;
  at: string;
  type: string;
  desc: string;
  stack: string[];
}

export const experiences: IExperience[] = [
  {
    title: "Implementation Consultant",
    time: "Jun 2025 - Aug 2025",
    at: "PT. Indodev Niaga Internet",
    type: "Internship",
    desc: "Solved custom payroll modules bugs using ColdFusion and SQL. Utilized Excel to automatically generate bulk SQL statements to fix client's issues on data side.",
    stack: ["cf", "sql"],
  },
  {
    title: "Frontend Developer",
    time: "Feb 2025 - May 2025",
    at: "PT. Kreasi Untuk Indonesia",
    type: "Internship",
    desc: "Assist in revamping the kuyy.id website for improved SEO performance using NextJS and Help implement websites for clients (Kuyy for Business)",
    stack: ["next", "tw", "ts"],
  },
  {
    title: "Implementation Consultant",
    time: "Jun 2024 - Sept 2024",
    at: "PT. Indodev Niaga Internet",
    type: "Internship",
    desc: "Delivered 5 customized finance report modules according to client's requirements on both backend and frontend using ColdFusion, SQL (MariaDB), and React.js",
    stack: ["react", "cf", "sql"],
  },
  {
    title: "Web Designer",
    time: "May 2023 - May 2025",
    at: "Calvin Institute of Technology",
    type: "Part-time",
    desc: "Resolved frontend issues with Chrome DevTools, designed 9+ promotional landing pages, captured leads using WIX storage, and redesigned calvin.ac.id's homepage for improved UX and UI.",
    stack: ["figma", "css", "wp", "wix"],
  },
];
