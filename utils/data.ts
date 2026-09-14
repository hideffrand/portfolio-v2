export interface ProjectProps {
  id: string;
  title: string;
  img: string;
  type: string;
  year: number;
  url: string;
  github: string;
  desc: string;
  stack: string[];
  // New technical documentation fields
  overviewParagraphs: string[];
  architectureParagraphs: string[];
  designParagraphs: string[];
  architectureImg?: string;
  designImg?: string;
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
    id: "ovo",
    title: "OVO",
    img: "/ovo.webp",
    type: "Web Design and Development",
    year: 2023,
    url: "https://ovo-landing.vercel.app",
    github: "https://github.com/hideffrand/ovo-landing",
    desc: "I built this landing page with a simple visual style and a strong focus on speed and responsive layouts.",
    stack: ["next", "ts", "tw", "figma"],
    overviewParagraphs: [
      "I wanted the main content to load quickly and be easy to understand from the first screen.",
      "I kept the implementation simple and removed things that were not really needed."
    ],
    architectureParagraphs: [
      "I used static pages and deployed the site through a content delivery network to keep it fast.",
      "I used utility classes to keep the styling simple and avoid unnecessary CSS."
    ],
    designParagraphs: [
      "For the design, I used simple layouts, large headings, and enough spacing to keep the page easy to read.",
      "I added a few simple CSS animations to make the page feel smoother without making it too busy."
    ],
    // architectureImg: "/ovo.webp",
    // designImg: "/ovo.webp",
    deliverables: [
      { label: "A / Speed", title: "Instant Site Delivery", desc: "The static files are served through a content delivery network to help the site load faster." },
      { label: "B / Typography", title: "Fluid Font Scaling Blocks", desc: "I made the text sizes responsive so the typography still looks balanced on different screens." },
      { label: "C / Layout", title: "Minimal Asset Overhead", desc: "I kept the styling lightweight by removing code and assets that were not needed." },
      { label: "D / Interaction", title: "Accelerated Animations", desc: "I used CSS animations for simple transitions instead of adding extra JavaScript logic." }
    ],
    lighthouse: {
      performance: 92,
      accessibility: 95,
      bestPractices: 100,
      seo: 90
    }
  },
  {
    id: "gowize",
    title: "Gowize",
    img: "/gowize.webp",
    type: "Mobile App Development",
    year: 2024,
    url: "https://www.youtube.com/watch?v=8fVH6FajDVY",
    github: "https://github.com/hideffrand/gemastik-frontend",
    desc: "A React Native app I worked on to help households track waste, manage food expiration dates, get AI suggestions, and arrange waste pickup.",
    stack: ["rn", "figma"],
    overviewParagraphs: [
      "GoWize is a household waste management app that I worked on to make everyday waste tracking and management easier. It also uses AI recommendations to help users make better use of things they already have.",
      "Users can record daily waste, request pickups, track groceries and expiration dates, and get ideas for recycling, DIY projects, or recipes using food that is close to expiring."
    ],
    architectureParagraphs: [
      "The app is built around four main features: Waste Tracking, Waste Pickup, Grocery Management, and AI Recommendations. Together, they cover the main things users need to manage household waste.",
      "I built the app with React Native and designed the interface in Figma. I focused on keeping navigation simple and making everyday actions quick to do."
    ],
    designParagraphs: [
      "I kept the interface simple so users can quickly record waste, schedule pickups, and check their household data without going through too many steps.",
      "The app uses reminders, simple waste summaries, and AI suggestions to help users build better waste habits and reuse things when possible."
    ],
    // architectureImg: "/gowize.webp",
    // designImg: "/gowize.webp",
    deliverables: [
      { label: "A / Mobile", title: "Cross-Platform Mobile Application", desc: "Built the React Native Android app with simple navigation, waste tracking, and tools for everyday waste management." },
      { label: "B / Smart Features", title: "AI Waste Recommendation System", desc: "Added AI suggestions for recipes using food that is close to expiring and ideas for reusing different types of waste." },
      { label: "C / Household Management", title: "Waste & Grocery Tracking", desc: "Designed features for daily waste tracking, grocery expiration dates, food waste reduction, and monthly waste summaries." },
      { label: "D / Sustainability", title: "Waste Pickup Integration", desc: "Added waste pickup requests so users have an easier way to arrange household waste collection." }
    ],
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    }
  },
  {
    id: "signify",
    title: "Signify",
    img: "/signify.webp",
    type: "UI/UX",
    year: 2025,
    url: "https://www.figma.com/proto/ueRKm0yUs3lxyh05T4RakR/Wireframe?page-id=0%3A1&node-id=654-3920&p=f&viewport=480%2C386%2C0.05&t=DsPof1akFJBtMk6u-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1",
    github: "",
    desc: "An AI-powered mobile app I designed to help Deaf and hearing users communicate through sign language translation, learning features, and a community space.",
    stack: ["figma"],
    overviewParagraphs: [
      "I designed Signify to help reduce communication barriers for Deaf users in Indonesia. The app uses AI gesture recognition to translate BISINDO and SIBI into text or speech, while spoken language can also be converted into text.",
      "Besides translation, I added sign language lessons, a community feature, and an accessible interface for both Deaf and hearing users."
    ],
    architectureParagraphs: [
      "I organized the app into six main sections: AI Camera, Learn, Community, Dictionary, Daily Quiz, and Profile. Each one has a clear purpose in the overall user journey.",
      "I designed the interface in Figma with reusable components, responsive layouts for mobile and tablet, Inter typography, and accessible color choices."
    ],
    designParagraphs: [
      "I focused on clear navigation, good contrast, and simple interactions so the screens would be easier to understand for users with different levels of sign language knowledge.",
      "I tested the design with 14 participants and used their feedback to improve the wording, Dark Mode, community moderation, badge visibility, and several user flows."
    ],
    // architectureImg: "/signify.webp",
    // designImg: "/signify.webp",
    deliverables: [
      { label: "A / Research", title: "UX Research & Problem Validation", desc: "I researched communication challenges faced by Deaf users through literature reviews, brainstorming, surveys, and pain-point analysis to decide which features were most useful." },
      { label: "B / Design", title: "End-to-End UI/UX Prototype", desc: "Designed the complete mobile and tablet experience, from authentication to AI Camera, Learn, Community, Dictionary, Daily Quiz, Profile, and Notifications." },
      { label: "C / Design System", title: "Accessible Design Language", desc: "Created a reusable Figma design system with responsive layouts, Inter typography, accessible colors, and consistent components." },
      { label: "D / Validation", title: "Usability Testing & Iteration", desc: "Tested the design with 14 participants, reviewed their feedback, and made several changes to the navigation, wording, Dark Mode, community features, and overall experience." }
    ],
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    }
  },
  {
    id: "zyrex-cs",
    title: "Zyrex CS",
    img: "/zyrex-cs.png",
    type: "Full Stack Web Development",
    year: 2026,
    url: "https://zyrex.com/service",
    github: "",
    desc: "Zyrex CS is a customer service and ticketing system I worked on to manage bookings, service requests, ticket tracking, and admin tasks.",
    stack: ["next", "tw", "py", "sql"],
    overviewParagraphs: [
      "The existing service process had several manual steps that could slow down repairs. I worked on Zyrex CS to make service requests easier for customers and give admins a clearer view of incoming tickets.",
      "During the initial analysis, I found that walk-in tickets and service center assignments were still handled manually. This made it harder to keep physical device drop-offs and digital records in sync."
    ],
    architectureParagraphs: [
      "I designed the system so ticket updates and background tasks could run without slowing down the main application. Customer bookings can also send WhatsApp confirmations automatically.",
      "For admins, tasks such as generating Repair Order documents and scanning ticket barcodes are handled separately from the customer interface. This makes the system easier to manage across service centers."
    ],
    designParagraphs: [
      "I designed two different experiences for customers and admins. Customers get a simple booking form, while admins get a dashboard for searching, filtering, sorting, and updating tickets.",
      "Features such as ticket scanning give users clear feedback after each action. The dashboard uses simple tables and status badges, and the responsive layout lets technicians update repair progress from phones or desktop devices."
    ],
    // architectureImg: "/zyrex-cs.png",
    // designImg: "/zyrex-cs.png",
    deliverables: [
      { label: "A / Client Automation", title: "Automated Booking & Alerts", desc: "Built a service request form that sends WhatsApp confirmation messages automatically, reducing manual follow-up." },
      { label: "B / Admin Operations", title: "Comprehensive Ticket Management", desc: "Built admin features for creating requests, updating device status, managing service center locations, and generating RO documents." },
      { label: "C / Hardware Integration", title: "Walk-In Ticket Scanning", desc: "Added a web-based barcode and QR scanner so service center staff can quickly find and process walk-in tickets." },
      { label: "D / Performance Optimization", title: "High-Throughput State Syncing", desc: "Improved ticket and inventory updates to keep the data in sync while reducing unnecessary database requests." }
    ],
    lighthouse: {
      performance: 92,
      accessibility: 95,
      bestPractices: 100,
      seo: 90
    }
  },
  {
    id: "mooni",
    title: "Mooni",
    img: "/mooni.png",
    type: "Mobile + Backend Development",
    year: 2026,
    url: "https://web-mooni.vercel.app/",
    github: "https://github.com/hideffrand/mooni",
    desc: "A small remote-control setup I built for my Linux machine. It uses an Android app and a Go agent connected through Tailscale so I can browse files, check system health, and restart the machine remotely.",
    stack: ["go", "rn", "ts", "expo", "tailscale", "linux"],
    overviewParagraphs: [
      "Mooni started as a way for me to control my Linux machine when I was not on the same network. I built a small Go agent for the laptop and an Expo/React Native app for Android. They connect through Tailscale, so I do not need to set up port forwarding.",
      "The main features are a file manager, a system health dashboard, and reboot or shutdown controls. I also wanted the setup to be simple, so the Linux machine can be configured with one install script and paired using a QR code or code on the phone."
    ],
    architectureParagraphs: [
      "The backend uses Go 1.22 with a small number of dependencies. I separated the API into health, file, and system routes. File paths are checked so the app cannot access files outside the selected folder. Large uploads and media previews are also supported.",
      "I read system information directly from Linux files, so Mooni does not need another monitoring service. Reboot and shutdown have extra confirmation steps. Pairing uses a QR code or text code, and the agent can detect the Tailscale address automatically."
    ],
    designParagraphs: [
      "I designed the app to avoid unnecessary typing. Scanning a QR code or pasting the pairing code fills in the server details automatically. The dashboard shows live system health and lets me switch between paired machines easily.",
      "I added extra checks for actions such as reboot, shutdown, and uninstall. Reboot and shutdown can require fingerprint or PIN confirmation. API keys are stored securely on Android, and the uninstall script asks for confirmation before deleting files."
    ],
    // architectureImg: "/mooni.png",
    // designImg: "/mooni.png",
    deliverables: [
      { label: "A / Agent", title: "Go Backend Agent", desc: "A small Go HTTP agent with a protected file area that prevents unsafe paths and access outside the selected folder." },
      { label: "B / App", title: "Android Control App", desc: "An Expo/React Native Android app with file management, media previews, multi-device support, and native sharing." },
      { label: "C / Pairing", title: "Zero-Typing Onboarding", desc: "An install script that sets up the service, creates a pairing code, and shows a QR code. Scanning or pasting the code fills in the connection details." },
      { label: "D / Control", title: "System Health + Power", desc: "A live dashboard showing CPU, memory, disk, load, uptime, process count, and temperature, with protected reboot and shutdown controls." }
    ]
  },
  {
    id: "flick",
    title: "Flick",
    img: "/flick.webp",
    type: "Full Stack Web + Browser Extension",
    year: 2026,
    url: "",
    github: "",
    desc: "A browser extension that scans a paper document and auto-fills its fields into any web form. Extraction rules are configured live in a web admin, so supporting a new document never needs a code change.",
    stack: ["go", "ts", "py", "next", "tw", "sql"],
    overviewParagraphs: [
      "Flick scans a paper document from a camera photo or an upload, reads its fields with OCR, and fills them into the matching form on the active tab. Instead of writing a parser for each document, an admin defines a document type once in the web interface — fields plus regex rules — and the extension reads from that config.",
      "Rule changes apply instantly because nothing is compiled per document. The document types are stored in the database and read by the OCR pipeline on every request, so a field that was added or corrected shows up on the next scan."
    ],
    architectureParagraphs: [
      "Flick is a monorepo of four independent packages. A browser extension holds the side panel and autofill logic, a Go API handles auth, payments, and document type CRUD, and a FastAPI microservice runs the OCR with PaddleOCR by default and a fallback to CnOCR.",
      "The extension never contains extraction rules. It sends the image to the Go API, which applies the paywall and forwards the stored field config to the OCR service, so rule changes take effect without a rebuild or restart."
    ],
    designParagraphs: [
      "I kept the scanning flow short: sign in, pick a document type, capture or upload the image, preview it, then run the scan. The result shows each extracted field with a confidence value so failures are visible instead of silent.",
      "The web admin is bilingual and shows the extraction rules next to demo forms styled as a real hospital SIMRS and a real ERP, both clearly flagged as demo, so a rule can be tested against realistic layouts before it is used in the extension."
    ],
    // architectureImg: "/flick.webp",
    // designImg: "/flick.webp",
    deliverables: [
      { label: "A / Extension", title: "Scan-to-Fill Side Panel", desc: "A Chrome, Edge, and Firefox extension that captures or uploads a document, sends it for OCR, and auto-fills the matched form on the active tab." },
      { label: "B / Rules", title: "Config-Driven Extraction", desc: "An admin defines document types, fields, and regex rules in the database. No per-document parsers in code, and rule edits apply without a rebuild." },
      { label: "C / Backend", title: "Go API with Auth and Paywall", desc: "A Go service handling JWT auth, rate-limited signup, mock payment plans, and document type CRUD as the single source the extension reads." },
      { label: "D / OCR", title: "Hybrid OCR Microservice", desc: "A FastAPI service running PaddleOCR with CnOCR fallback, applying regex field config with generic line-by-line parsing as a safety net." }
    ]
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
  expo: {
    label: "Expo",
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