export interface ProjectProps {
  id: string;
  title: string;
  img: string;
  type: string;
  year: number;
  url: string;
  desc: string;
  stack: string[];
  // New technical documentation fields
  overviewParagraphs: string[];
  architectureParagraphs: string[];
  designParagraphs: string[];
  deliverables: {
    label: string;
    title: string;
    desc: string;
  }[];
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

export const projects: ProjectProps[] = [
  {
    id: "zyrex-cs",
    title: "Zyrex CS",
    img: "/zyrex-cs.png",
    type: "Full Stack Web Development",
    year: 2026,
    url: "https://zyrex.com/service",
    desc: "Kozy is an end-to-end\nsolution for modern living.\nBuilt with performance in mind.",
    stack: ["next", "tw", "py", "sql"],
    overviewParagraphs: [
      "Modern software deployments often suffer from structural friction where data delivery delays directly hinder the user experience. For this system framework, the primary engineering obstacle centered around reducing operational latencies, maintaining high system throughput, and designing clean interfaces that make data exploration intuitive.",
      "During the initial analysis phase, diagnostics revealed significant bottlenecks within runtime re-renders and nested component trees. Without deep optimization, managing intensive user workflows created unnecessary layout shifts and visual stutter—negatively impacting conversion metrics and app reliability."
    ],
    architectureParagraphs: [
      "To address these limitations, the architectural foundation was re-engineered from the ground up. By utilizing strict asynchronous state machines and decoupling core presentation layovers from backend transactional mechanisms, component dependencies dropped significantly.",
      "This modular setup ensures that user updates scale smoothly while maintaining responsive cross-device views. Data validation runs inside automated pipelines, keeping state mutations clean and eliminating UI race conditions."
    ],
    designParagraphs: [
      "Great interface engineering balances aesthetic restraint with rigorous logic. Layout designs are structured around precise reading paths, clear functional focus zones, and structured visual hierarchies. This ensures users can locate key controls effortlessly without cognitive overload.",
      "Interactive patterns are paired with smooth CSS transform physics to ensure instant visual confirmation on every click. Elements rely on proportional paddings, crisp high-contrast headings, and fluid breakpoint adjustments to stay cohesive across mobile views and wide desktop arrays."
    ],
    deliverables: [
      { label: "A / Core Performance", title: "Performance Benchmarks", desc: "Optimized asset processing pipelines and clean runtime DOM nodes brought load targets and Lighthouse interaction metrics comfortably into the green zone." },
      { label: "B / Scalability", title: "Modular Layouts", desc: "Component hierarchies use predictable atomic design structures, making it incredibly straightforward to drop in future software tools without triggering cascade break errors." },
      { label: "C / Optimization", title: "API Interfacing", desc: "Outfitted transactional state endpoints with lightweight debouncing, cutting down redundant server traffic while keeping data feeds crisp and snappy." },
      { label: "D / Access", title: "Fluid Adaptive Scaling", desc: "Flexible layout configurations pass automated accessibility and responsive styling validation checks across all modern browser configurations." }
    ],
    lighthouse: {
      performance: 92,
      accessibility: 95,
      bestPractices: 100,
      seo: 90
    }
  },
  {
    id: "kozy",
    title: "Kozy",
    img: "/kozy.webp",
    type: "Full Stack Web Development",
    year: 2024,
    url: "https://kozy-one.vercel.app",
    desc: "Kozy is an end-to-end\nsolution for modern living.\nBuilt with performance in mind.",
    stack: ["react", "tw", "py", "sql"],
    overviewParagraphs: [
      "Modern software deployments often suffer from structural friction where data delivery delays directly hinder the user experience. For this system framework, the primary engineering obstacle centered around reducing operational latencies, maintaining high system throughput, and designing clean interfaces that make data exploration intuitive.",
      "During the initial analysis phase, diagnostics revealed significant bottlenecks within runtime re-renders and nested component trees. Without deep optimization, managing intensive user workflows created unnecessary layout shifts and visual stutter—negatively impacting conversion metrics and app reliability."
    ],
    architectureParagraphs: [
      "To address these limitations, the architectural foundation was re-engineered from the ground up. By utilizing strict asynchronous state machines and decoupling core presentation layovers from backend transactional mechanisms, component dependencies dropped significantly.",
      "This modular setup ensures that user updates scale smoothly while maintaining responsive cross-device views. Data validation runs inside automated pipelines, keeping state mutations clean and eliminating UI race conditions."
    ],
    designParagraphs: [
      "Great interface engineering balances aesthetic restraint with rigorous logic. Layout designs are structured around precise reading paths, clear functional focus zones, and structured visual hierarchies. This ensures users can locate key controls effortlessly without cognitive overload.",
      "Interactive patterns are paired with smooth CSS transform physics to ensure instant visual confirmation on every click. Elements rely on proportional paddings, crisp high-contrast headings, and fluid breakpoint adjustments to stay cohesive across mobile views and wide desktop arrays."
    ],
    deliverables: [
      { label: "A / Core Performance", title: "Performance Benchmarks", desc: "Optimized asset processing pipelines and clean runtime DOM nodes brought load targets and Lighthouse interaction metrics comfortably into the green zone." },
      { label: "B / Scalability", title: "Modular Layouts", desc: "Component hierarchies use predictable atomic design structures, making it incredibly straightforward to drop in future software tools without triggering cascade break errors." },
      { label: "C / Optimization", title: "API Interfacing", desc: "Outfitted transactional state endpoints with lightweight debouncing, cutting down redundant server traffic while keeping data feeds crisp and snappy." },
      { label: "D / Access", title: "Fluid Adaptive Scaling", desc: "Flexible layout configurations pass automated accessibility and responsive styling validation checks across all modern browser configurations." }
    ],
    lighthouse: {
      performance: 92,
      accessibility: 95,
      bestPractices: 100,
      seo: 90
    }
  },
  {
    id: "signify",
    title: "Signify",
    img: "/signify.webp",
    type: "UI/UX",
    year: 2024,
    url: "https://www.figma.com/proto/ueRKm0yUs3lxyh05T4RakR/Wireframe?page-id=0%3A1&node-id=654-3920&p=f&viewport=480%2C386%2C0.05&t=DsPof1akFJBtMk6u-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1",
    desc: "A comprehensive digital design framework focusing on fluid components and modular layout structures.",
    stack: ["figma"],
    overviewParagraphs: [
      "Signify explores the boundaries of micro-interactions and digital spacing rules inside responsive viewport architectures.",
      "The initial wireframe exploration prioritized information layout efficiency over stylized color palettes to build underlying cognitive clarity."
    ],
    architectureParagraphs: [
      "Built entirely inside advanced vector components utilizing deeply nested variants and properties parameters.",
      "Design design systems scale predictably using rigid layout matrix components alongside baseline line heights."
    ],
    designParagraphs: [
      "UI layouts are structured around strict reading blocks to guide interaction pathways across high-fidelity user workflows.",
      "The layout transitions leverage consistent easing configurations to emulate native system hardware feedback behaviors."
    ],
    deliverables: [
      { label: "A / Wireframing", title: "High Fidelity Prototypes", desc: "Interactive presentation spaces detailing multi-directional user state mutations and contextual conditional view gates." },
      { label: "B / System", title: "Component Systems", desc: "Atomic asset sets constructed with responsive auto-layout features mapping precisely to standard frontend CSS rules." },
      { label: "C / Assets", title: "Asset Specification Tokens", desc: "Unified style rules exporting direct hex coordinate keys and micro-spacing matrices across development steps." },
      { label: "D / Review", title: "Usability Validations", desc: "User feedback trials confirming significant drops in task completion friction points during primary workflows." }
    ],
    lighthouse: {
      performance: 92,
      accessibility: 95,
      bestPractices: 100,
      seo: 90
    }
  },
  // {
  //   id: "tkagape",
  //   title: "TK Agape",
  //   img: "/tkagape.webp",
  //   type: "Full Stack Web Development",
  //   year: 2024,
  //   url: "https://tkagape.vercel.app",
  //   desc: "A highly dynamic administrative platform providing management tools and unified information hubs.",
  //   stack: ["next", "ts", "tw", "firebase"],
  //   overviewParagraphs: [
  //     "Administrative system architectures frequently struggle with real-time data sync failures when scaling user interactions.",
  //     "This integration targeted real-time pipeline connections to allow institutional database sets to load without UI interruptions."
  //   ],
  //   architectureParagraphs: [
  //     "The deployment coordinates server-rendered client layouts alongside dynamic database query synchronization layers.",
  //     "State caching behaviors are handled inside structural query frameworks, cutting down processing demands across components."
  //   ],
  //   designParagraphs: [
  //     "Dashboard modules maintain clean card structures, dense data layouts, and high-contrast control states.",
  //     "Forms utilize immediate inline verification feedback to block corrupted dataset updates before transit."
  //   ],
  //   deliverables: [
  //     { label: "A / Database", title: "Dynamic Synchronization", desc: "Real-time state processing infrastructure minimizing connection loss and sync anomalies across user browser sessions." },
  //     { label: "B / Auth", title: "Access Security Layers", desc: "Granular administrative gate controls ensuring data validation integrity protocols remain isolated from public endpoints." },
  //     { label: "C / UI", title: "Admin Workspace Consoles", desc: "Dense layout tables optimizing complex records processing, bulk update operations, and dynamic filtration paths." },
  //     { label: "D / Deployment", title: "Edge Performance Targets", desc: "Asset optimization routines driving core web vital benchmarks past established production parameters." }
  //   ]
  // },
  // lighthouse: {
  //     performance: 92,
  //     accessibility: 95,
  //     bestPractices: 100,
  //     seo: 90
  //   }
  {
    id: "gowize",
    title: "Gowize",
    img: "/gowize.webp",
    type: "Mobile App Development",
    year: 2024,
    url: "https://www.youtube.com/watch?v=8fVH6FajDVY",
    desc: "A native cross-platform mobile application interface optimized for real-time tracking.",
    stack: ["rn", "figma"],
    overviewParagraphs: [
      "Mobile tracking deployments depend heavily on low-latency state caching and consistent viewport scaling logic.",
      "This project implemented asynchronous loop state systems to ensure layout rendering stability during heavy background loads."
    ],
    architectureParagraphs: [
      "The code relies on native execution paths alongside responsive vector transformation hooks to ensure display stability.",
      "Hardware connection threads run inside isolated tasks, preventing view lockouts when updating large telemetry sets."
    ],
    designParagraphs: [
      "The mobile layout uses thumb-accessible touch surfaces, persistent header components, and high-contrast night modes.",
      "Data charts automatically shift layouts depending on hardware bounds to preserve readable info metrics."
    ],
    deliverables: [
      { label: "A / Mobile", title: "Native Component Loops", desc: "High-performance interface rendering pipelines managing multi-layer layout sets without dipping frame rates." },
      { label: "B / Tracking", title: "Telemetry Caching Blocks", desc: "Efficient queue storage handlers packing tracking state updates before dispatching data packets to remote servers." },
      { label: "C / UI/UX", title: "Ergonomic Layout Grids", desc: "Touch-focused interaction systems optimized for fast access to primary functions during active use cases." },
      { label: "D / Frame", title: "Adaptive Layout Scaling", desc: "Comprehensive interface configurations adjusting to standard screen safe-areas across device operating platforms." }
    ],
    lighthouse: {
      performance: 92,
      accessibility: 95,
      bestPractices: 100,
      seo: 90
    }
  },
  {
    id: "ovo",
    title: "OVO",
    img: "/ovo.webp",
    type: "Web Design and Development",
    year: 2023,
    url: "https://ovo-landing.vercel.app",
    desc: "An ultra-minimalist, high-performance landing page architecture featuring fluid typographic grids.",
    stack: ["next", "ts", "tw", "figma"],
    overviewParagraphs: [
      "Marketing landing environments require immediate visual delivery to hold user attention metrics over brief session cycles.",
      "The development focused on removing execution layout blockages to enable fast asset presentation speeds."
    ],
    architectureParagraphs: [
      "Built entirely using static-site code layers deployed out to edge content servers for instant load times.",
      "Styling rules use utility-first configurations to drop overall file transfer sizes well below standard project targets."
    ],
    designParagraphs: [
      "The page framework implements stark layouts, large font headings, and structured negative space grids.",
      "Interactive transitions utilize hardware-accelerated animations to keep viewport scrolling feeling smooth."
    ],
    deliverables: [
      { label: "A / Speed", title: "Instant Site Delivery", desc: "Pre-compiled layout files delivered across global server arrays to maximize discovery engine optimization rankings." },
      { label: "B / Typography", title: "Fluid Font Scaling Blocks", desc: "Dynamic screen text calculations ensuring typographical compositions preserve strict proportional scales across device formats." },
      { label: "C / Layout", title: "Minimal Asset Overhead", desc: "Refined styling logic stripping out redundant presentation files to drastically reduce required data transfers." },
      { label: "D / Interaction", title: "Accelerated Animations", desc: "CSS-driven transformation configurations offloading rendering strain directly to system processors for frame stability." }
    ],
    lighthouse: {
      performance: 92,
      accessibility: 95,
      bestPractices: 100,
      seo: 90
    }
  }
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
  go: {
    label: "Go",
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
    title: "Jr. Full Stack Developer",
    time: "Nov 2025 - Present",
    at: "PT. Zyrexindo Mandiri Buana Tbk",
    type: "Fulltime",
    desc: "Developed a logistics tracking system for a 120k-unit laptop distribution, integrating external API to manage 120k AWBs using Next.js and Go, with automated CRON-based backups to ensure data integrity and operational reliability.",
    stack: ["next", "sql", "go", "py"],
  },
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
