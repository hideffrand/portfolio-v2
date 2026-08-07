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
  lighthouse?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

export function isLiveWebUrl(url: string): boolean {
  const blocked = ["youtube.com", "youtu.be", "vimeo.com", "figma.com"]
  try {
    const host = new URL(url).hostname
    return !blocked.some((b) => host === b || host.endsWith(`.${b}`))
  } catch {
    return false
  }
}

export const projects: ProjectProps[] = [
  {
    id: "home-lab",
    title: "Home Lab",
    img: "/homelab.png",
    type: "Self-Hosted Infrastructure",
    year: 2026,
    url: "",
    desc: "A small private home lab linking two laptops and a phone into one mesh network for file sharing, monitoring, and secure remote access.",
    stack: ["tailscale", "samba", "nfs", "ssh", "glances", "linux"],
    overviewParagraphs: [
      "A personal home lab built to bridge two laptops and a mobile phone into a single private network, sharing files and system metrics across devices without exposing anything to the public internet. The goal was the smallest useful infrastructure stack: dependable file sharing, remote monitoring, and safe SSH access between devices that regularly sit on different networks.",
      "The initial constraint was connectivity. The laptops and phone roam between home, office, and mobile hotspots, so a fixed public IP or a port-forwarded NAS was never an option. Any solution had to work behind NAT, require no static public address, and stay reachable from anywhere."
    ],
    architectureParagraphs: [
      "The network layer is built on Tailscale, which replaces public-IP routing with a WireGuard-based mesh. Every device gets a stable private address from the tailnet regardless of the network it currently sits behind, so Samba and NFS shares resolve to the same hostname from home, office, or a hotel hotspot. SSH and Glances bind to the tailnet interface only, keeping every service off the public internet.",
      "File sharing is split by use case: Samba handles SMB mounts for the Windows laptop and the Android phone, while NFS serves the Linux laptop with lower overhead. Both export the same set of directories, and access is scoped by tailnet identity rather than raw IP allow-lists."
    ],
    designParagraphs: [
      "There is no UI to speak of — the design work is in the security and access model. SSH was hardened to a minimum: the default port moved to a non-standard one, password authentication is disabled, only key-based login is permitted, and root login is blocked. Each device keeps its own keypair, so revoking a device from the tailnet immediately kills its access to every share and shell.",
      "Glances runs as the monitoring layer, exposing a read-only web dashboard over Tailscale for CPU, memory, disk, and network usage across the mesh. The dashboard is only reachable through the tailnet, giving a full view of the lab without opening a single inbound port."
    ],
    deliverables: [
      { label: "A / Networking", title: "Tailscale Mesh", desc: "Replaced public-IP exposure with a private WireGuard mesh, giving every device a stable address across home, office, and mobile networks." },
      { label: "B / Sharing", title: "Samba + NFS Shares", desc: "Set up SMB shares for the Windows laptop and phone plus NFS exports for the Linux laptop, all backed by the same directories." },
      { label: "C / Access", title: "Hardened SSH", desc: "Moved SSH off the default port, disabled password auth and root login, and enforced key-based access scoped to the tailnet." },
      { label: "D / Monitoring", title: "Glances Dashboard", desc: "Deployed Glances as a read-only monitoring dashboard reachable only inside the tailnet." }
    ]
  },
  {
    id: "zyrex-cs",
    title: "Zyrex CS",
    img: "/zyrex-cs.png",
    type: "Full Stack Web Development",
    year: 2026,
    url: "https://zyrex.com/service",
    desc: "Zyrex CS is an end-to-end customer service and ticketing system with seamless client booking and advanced admin controls.",
    stack: ["next", "tw", "py", "sql"],
    overviewParagraphs: [
      "Modern technical support systems often suffer from high operational friction, where slow booking pipelines and manual workflows delay customer hardware repairs. For the Zyrex CS platform, the primary engineering obstacle centered around streamlining the service request pipeline—enabling users to log issues effortlessly while simultaneously giving admin teams immediate visibility into incoming ticket backlogs.",
      "During the initial analysis phase, diagnostics revealed significant bottlenecks within the walk-in ticket logging process and manual service center allocation. Without a unified system, syncing on-site device drop-offs with digital records created unnecessary delays, inaccurate repair tracking, and administrative overhead that negatively impacted service turnaround times."
    ],
    architectureParagraphs: [
      "To eliminate these inefficiencies, the system architecture was engineered to handle high-concurrency ticket mutations and automated background tasks. By utilizing asynchronous queues, customer booking forms instantly trigger automated WhatsApp confirmation APIs without blocking the main thread, providing immediate peace of mind to the user.",
      "On the administrative side, the platform decouples heavy data processing—such as generating Repair Order (RO) documents and processing live ticket barcode scans—from the client-facing UI. This modular backend setup scales smoothly across multiple physical service centers, ensuring state mutations remain clean and preventing race conditions when multiple admins update the same ticket."
    ],
    designParagraphs: [
      "The interface design balances rapid data entry for walk-in customers with high-density information layouts for service center admins. The customer portal relies on an intuitive, multi-step booking form structured around clear functional zones, while the admin dashboard utilizes a dense, scannable layout optimized for quick ticket sorting, filtering, and status updates.",
      "Interactive workflows, such as scanning physical service tickets using a device camera, are paired with responsive feedback states to ensure instant operational confirmation. Elements rely on compact, clean tables for ticket management, crisp high-contrast status badges, and fluid breakpoint adjustments to allow field technicians to update repair progress from mobile devices or wide desktop arrays."
    ],
    deliverables: [
      { label: "A / Client Automation", title: "Automated Booking & Alerts", desc: "Built a seamless service request form integrated with automated WhatsApp confirmation notifications, eliminating manual outreach upon successful booking." },
      { label: "B / Admin Operations", title: "Comprehensive Ticket Management", desc: "Equipped admins with robust capabilities to create requests, modify live device statuses, manage service center locations, and instantly generate official RO documents." },
      { label: "C / Hardware Integration", title: "Walk-In Ticket Scanning", desc: "Implemented a lightweight, web-based barcode/QR scanning feature allowing service center agents to instantly look up and process walk-in customer tickets." },
      { label: "D / Performance Optimization", title: "High-Throughput State Syncing", desc: "Optimized transactional endpoints with debounced state updates, ensuring rapid inventory and ticket data synchronization without causing database locks." }
    ],
    lighthouse: {
      performance: 92,
      accessibility: 95,
      bestPractices: 100,
      seo: 90
    }
  },
  // {
  //   id: "kozy",
  //   title: "Kozy",
  //   img: "/kozy.webp",
  //   type: "Full Stack Web Development",
  //   year: 2024,
  //   url: "https://kozy-one.vercel.app",
  //   desc: "Kozy is an end-to-end\nsolution for modern living.\nBuilt with performance in mind.",
  //   stack: ["react", "tw", "py", "sql"],
  //   overviewParagraphs: [
  //     "Modern software deployments often suffer from structural friction where data delivery delays directly hinder the user experience. For this system framework, the primary engineering obstacle centered around reducing operational latencies, maintaining high system throughput, and designing clean interfaces that make data exploration intuitive.",
  //     "During the initial analysis phase, diagnostics revealed significant bottlenecks within runtime re-renders and nested component trees. Without deep optimization, managing intensive user workflows created unnecessary layout shifts and visual stutter—negatively impacting conversion metrics and app reliability."
  //   ],
  //   architectureParagraphs: [
  //     "To address these limitations, the architectural foundation was re-engineered from the ground up. By utilizing strict asynchronous state machines and decoupling core presentation layovers from backend transactional mechanisms, component dependencies dropped significantly.",
  //     "This modular setup ensures that user updates scale smoothly while maintaining responsive cross-device views. Data validation runs inside automated pipelines, keeping state mutations clean and eliminating UI race conditions."
  //   ],
  //   designParagraphs: [
  //     "Great interface engineering balances aesthetic restraint with rigorous logic. Layout designs are structured around precise reading paths, clear functional focus zones, and structured visual hierarchies. This ensures users can locate key controls effortlessly without cognitive overload.",
  //     "Interactive patterns are paired with smooth CSS transform physics to ensure instant visual confirmation on every click. Elements rely on proportional paddings, crisp high-contrast headings, and fluid breakpoint adjustments to stay cohesive across mobile views and wide desktop arrays."
  //   ],
  //   deliverables: [
  //     { label: "A / Core Performance", title: "Performance Benchmarks", desc: "Optimized asset processing pipelines and clean runtime DOM nodes brought load targets and Lighthouse interaction metrics comfortably into the green zone." },
  //     { label: "B / Scalability", title: "Modular Layouts", desc: "Component hierarchies use predictable atomic design structures, making it incredibly straightforward to drop in future software tools without triggering cascade break errors." },
  //     { label: "C / Optimization", title: "API Interfacing", desc: "Outfitted transactional state endpoints with lightweight debouncing, cutting down redundant server traffic while keeping data feeds crisp and snappy." },
  //     { label: "D / Access", title: "Fluid Adaptive Scaling", desc: "Flexible layout configurations pass automated accessibility and responsive styling validation checks across all modern browser configurations." }
  //   ],
  //   lighthouse: {
  //     performance: 92,
  //     accessibility: 95,
  //     bestPractices: 100,
  //     seo: 90
  //   }
  // },
  {
    id: "signify",
    title: "Signify",
    img: "/signify.webp",
    type: "UI/UX",
    year: 2025,
    url: "https://www.figma.com/proto/ueRKm0yUs3lxyh05T4RakR/Wireframe?page-id=0%3A1&node-id=654-3920&p=f&viewport=480%2C386%2C0.05&t=DsPof1akFJBtMk6u-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1",

    desc: "An AI-powered mobile application that bridges communication between the Deaf and hearing communities through real-time sign language translation, interactive learning, and an inclusive social platform.",

    stack: ["figma"],

    overviewParagraphs: [
      "Signify was designed to reduce communication barriers faced by Indonesia's Deaf community by leveraging AI-powered gesture recognition. The application translates BISINDO and SIBI sign language into text or speech in real time while also converting spoken language into text for two-way communication.",
      "Beyond translation, the platform encourages long-term inclusion through free sign language learning modules, an AI-assisted community space, and accessibility-first mobile experiences for both Deaf and non-disabled users."
    ],

    architectureParagraphs: [
      "The application architecture revolves around six core experiences: AI Camera, Learn, Community, Dictionary, Daily Quiz, and Profile. Each module supports a specific stage of the user's journey—from instant communication to continuous learning and social engagement.",
      "The interface was designed using a scalable component system in Figma with reusable design tokens, responsive layouts for mobile and tablet, consistent typography using Inter, and accessibility-focused color systems to maximize readability and usability."
    ],

    designParagraphs: [
      "The user experience prioritizes accessibility through intuitive navigation, high visual contrast, clear content hierarchy, and simplified interaction flows. Every screen was designed to minimize cognitive load while supporting users with varying levels of sign language proficiency.",
      "The design process included user testing with 14 participants, leading to improvements such as language consistency, Dark Mode support, enhanced community moderation, improved badge visibility, and refined interaction flows based on usability feedback."
    ],

    deliverables: [
      {
        label: "A / Research",
        title: "UX Research & Problem Validation",
        desc: "Identified communication challenges experienced by Deaf users through literature studies, brainstorming sessions, user surveys, and pain-point analysis to define the application's core features."
      },
      {
        label: "B / Design",
        title: "End-to-End UI/UX Prototype",
        desc: "Designed complete mobile and tablet experiences including authentication, AI Camera, Learn, Community, Dictionary, Daily Quiz, Profile, and Notification pages."
      },
      {
        label: "C / Design System",
        title: "Accessible Design Language",
        desc: "Built a consistent design system using reusable Figma components, responsive layouts, Inter typography, accessibility-oriented color palettes, and standardized interaction patterns."
      },
      {
        label: "D / Validation",
        title: "Usability Testing & Iteration",
        desc: "Conducted usability testing with 14 participants, analyzed user feedback, and iteratively improved navigation, language consistency, dark mode support, community features, and overall user experience."
      }
    ],

    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
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

    desc: "A React Native mobile application that helps households manage waste through AI-powered recommendations, waste tracking, food expiration monitoring, and scheduled waste pickup.",

    stack: ["rn", "figma"],

    overviewParagraphs: [
      "GoWize is a smart household waste management application designed to encourage sustainable living by helping users monitor daily waste production, reduce food waste, and improve waste disposal efficiency. The platform combines practical household utilities with AI-driven recommendations to promote environmentally responsible habits.",
      "The application enables users to record waste generation, request local waste pickup services, manage grocery inventories with expiration reminders, and receive personalized suggestions for recycling, DIY crafts, and recipes created from ingredients approaching their expiration date."
    ],

    architectureParagraphs: [
      "The application is structured around four primary modules: Waste Tracking, Waste Pickup, Grocery Management, and AI Recommendations. Together these modules support the complete lifecycle of household waste management, from monitoring and prevention to disposal and reuse.",
      "Developed as a mobile-first experience using React Native with UI prototypes designed in Figma, the application emphasizes intuitive navigation, simple data input, and notification-driven interactions to encourage consistent daily usage."
    ],

    designParagraphs: [
      "The user interface prioritizes simplicity and accessibility, allowing users of different technical backgrounds to quickly record waste, schedule pickups, and monitor household consumption. Clean layouts and streamlined navigation reduce friction across the application's primary workflows.",
      "The experience is centered around encouraging sustainable behavior through timely reminders, visual summaries of waste generation, and actionable AI recommendations that transform household waste into reusable resources whenever possible."
    ],

    deliverables: [
      {
        label: "A / Mobile",
        title: "Cross-Platform Mobile Application",
        desc: "Built a React Native application for Android featuring intuitive navigation, household waste monitoring, and community-focused environmental utilities."
      },
      {
        label: "B / Smart Features",
        title: "AI Waste Recommendation System",
        desc: "Implemented intelligent recommendations that suggest recipes for expiring food and creative recycling ideas for plastic, paper, and metal waste."
      },
      {
        label: "C / Household Management",
        title: "Waste & Grocery Tracking",
        desc: "Designed modules for recording daily waste generation, monitoring grocery expiration dates, reducing food waste, and generating monthly waste insights."
      },
      {
        label: "D / Sustainability",
        title: "Waste Pickup Integration",
        desc: "Integrated scheduled waste pickup requests with local collection services, helping users dispose of household waste more efficiently while supporting cleaner communities."
      }
    ],

    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
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
  tailscale: {
    label: "Tailscale",
    style: "bg-[rgb(0,70,100,0.2)] text-[rgb(0,160,220)]",
  },
  samba: {
    label: "Samba",
    style: "bg-[rgb(120,60,0,0.2)] text-[rgb(240,140,60)]",
  },
  nfs: {
    label: "NFS",
    style: "bg-[rgb(0,60,90,0.2)] text-[rgb(60,160,220)]",
  },
  ssh: {
    label: "SSH",
    style: "bg-[rgb(0,80,60,0.2)] text-[rgb(0,220,180)]",
  },
  glances: {
    label: "Glances",
    style: "bg-[rgb(100,70,0,0.2)] text-[rgb(230,170,60)]",
  },
  linux: {
    label: "Linux",
    style: "bg-[rgb(100,100,100,0.2)] text-[rgb(200,200,200)]",
  },
};

interface IExperience {
  title: string;
  time: string;
  at: string;
  type: string;
  desc: string[];
  stack: string[];
}

export const experiences: IExperience[] = [
  {
    title: "Jr. Full Stack Developer",
    time: "Nov 2025 - Present",
    at: "PT. Zyrexindo Mandiri Buana Tbk",
    type: "Full-time · On-site, Jakarta",
    desc: [
      "Developed a logistics tracking system for a 120k-unit government laptop distribution, integrating JNE's API to manage 120k AWBs using Next.js and Go, with automated CRON-based backups to ensure data integrity and operational reliability.",
      "Built a Python-based archiving tool utilizing ThreadPoolExecutor to download and backup 700k audit-required images from external cloud storage to physical drives.",
      "Enhanced customer experience by creating a service booking system integrated with Qontak API to automate real-time service confirmations and customer responses using Next.js and Go.",
      "Redesigned the corporate website from Figma to production, focusing on SEO optimization and user-centric UI/UX, and standardized DevOps workflows by implementing GitLab CI/CD pipelines to automate deployments.",
    ],
    stack: ["next", "ts", "tw", "sql", "go", "py"],
  },
  {
    title: "Implementation Consultant",
    time: "Jun 2025 - Aug 2025",
    at: "DataOn - PT. Indodev Niaga Internet",
    type: "Internship · On-site, Tangerang",
    desc: [
      "Solved and delivered custom payroll modules on SunFish HRIS using ColdFusion and SQL.",
      "Utilized Excel to automatically generate bulk SQL statements to fix client's issues.",
      "Involved with multinational companies projects such as Johnson Controls (Singapore) and CEVA Logistics (Malaysia), and exposed to the Singapore payroll system.",
    ],
    stack: ["cf", "sql"],
  },
  {
    title: "Frontend Developer",
    time: "Feb 2025 - May 2025",
    at: "Kuyy! - PT. Kreasi Untuk Indonesia",
    type: "Internship · Remote, Jakarta",
    desc: [
      "Assist in revamping the kuyy.id website for improved SEO performance using Next.js, TypeScript, and Tailwind CSS.",
      "Help implement websites for clients (Kuyy for Business).",
      "Proposed and designed blog UI/UX improvements, including Related Blogs and Activities features to boost content discoverability and new entrypoint for Activity feature.",
    ],
    stack: ["next", "tw", "ts"],
  },
  {
    title: "Implementation Consultant",
    time: "Jun 2024 - Sep 2024",
    at: "DataOn - PT. Indodev Niaga Internet",
    type: "Internship · On-site, Tangerang",
    desc: [
      "Delivered 5 customized finance report modules according to client's requirements on both backend and frontend using ColdFusion, SQL (MariaDB), and React.js. Documented all customization specs to ensure smooth handover.",
      "Compare and adjust client's data using SQL queries and manually using Excel to ensure data integrity across Workplaze HRIS.",
      "Performed 30+ User Acceptance Testing (UAT) on Workplaze Annual Leave feature.",
      "Involved with multinational companies projects such as AirAsia, Johnson Controls (Singapore), and CEVA Logistics (Malaysia).",
    ],
    stack: ["react", "cf", "sql"],
  },
  {
    title: "Website Designer",
    time: "May 2023 - May 2025",
    at: "Calvin Institute of Technology (CIT)",
    type: "Part-time · Hybrid, Jakarta",
    desc: [
      "Debugged and solved frontend issues using Chrome DevTools.",
      "Designed 9+ landing pages for upcoming events or promos and utilized WIX storage to capture leads and maintained existing websites.",
      "Work closely with the Rectorate to make landing pages for the launching of CIT's new faculty.",
      "Redesigned calvin.ac.id homepage to ensure a good UX and fresh UI.",
    ],
    stack: ["figma", "css", "wp", "wix"],
  },
];