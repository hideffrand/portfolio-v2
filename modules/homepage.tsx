'use client'

import Greetings from "@/components/greetings";
import Reveal from "@/components/reveal";
import { experiences, techTag, projects } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Star } from "lucide-react";

export default function HomePage() {
    const router = useRouter()
    const [expandedExp, setExpandedExp] = useState<Record<number, boolean>>({});

    function getZ(i: number) {
        return i + 1;
    }

    function getTop(i: number) {
        return `${(i + 1) * 6}%`;
    }

    return (
        <>
            {/* ─── Hero ─────────────────────────────────────────────── */}
            <div
                id="home"
                className="relative z-10 flex flex-col justify-end pb-[14vh] pt-[45vh] sm:pb-[20vh] sm:pt-[55vh] md:pt-[38vh]"
            >
                {/* Ambient glow behind hero text */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
                >
                    <div className="h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
                </div>

                {/* Name */}
                <h1 className="relative text-2xl pb-1 text-white flex flex-wrap items-baseline gap-x-1.5 gap-y-1 font-light tracking-tight xs:text-3xl md:text-5xl md:gap-x-2">
                    <span className="relative">
                        <Greetings />
                    </span>
                    <span className="text-neutral-300">,</span>
                    <span className="font-medium">I am</span>
                    <span
                        title="Call me Deff"
                        className="relative cursor-default"
                    >
                        <span className="relative z-10 font-medium">
                            <span className="border-b border-white/40 pb-px">Deff</span>rand
                        </span>
                    </span>
                    <span className="font-medium">Farera</span>
                    <span className="md:hidden font-medium">Software Engineer.</span>
                </h1>

                {/* Desktop second line */}
                <h1 className="relative hidden text-5xl pb-1 text-white md:flex flex-wrap items-baseline gap-x-2 font-light tracking-tight font-medium">
                    Software Engineer.
                </h1>

                {/* Availability badge */}
                <div className="mt-5 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] sm:text-xs text-neutral-400 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="leading-tight">Available for full-time roles &amp; projects</span>
                </div>
            </div>

            {/* ─── Capabilities ──────────────────────────────────────── */}
            <section className="relative z-10">
                <div className="mb-10 md:mb-12">
                    <h2
                        id="services"
                        className="text-xl sm:text-2xl md:text-4xl text-white tracking-tight font-medium mb-3"
                    >
                        What Can I Do?
                    </h2>
                    <p className="text-neutral-300 text-sm md:text-base max-w-lg leading-relaxed">
                        End-to-end web systems engineering, third-party API integration, and product UI/UX design.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px] xs:auto-rows-[280px] md:auto-rows-[340px]">

                    {/* 01 - Frontend */}
                    <div className="
      md:col-span-2 relative group overflow-hidden
      rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md
      p-5 sm:p-6 flex flex-col justify-between
      transition-all duration-500
      hover:border-white/[0.12] hover:bg-white/[0.05]
      hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.07)]
    ">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div className="relative z-10">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">01 — Interface</span>
                            <h3 className="text-base font-medium text-white mt-2 tracking-tight">Frontend Engineering</h3>
                            <p className="text-neutral-300 text-sm max-w-[85%] sm:max-w-sm mt-2 leading-relaxed">
                                Polished web applications engineered for SEO performance, content discoverability, and precision Figma-to-production execution.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["Next.js", "TypeScript", "Tailwind CSS", "React.js"].map(tag => (
                                    <span key={tag} className="text-[11px] bg-white/[0.05] text-neutral-400 px-2.5 py-1 rounded-lg border border-white/[0.07]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-[50%] sm:w-[45%] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-y-[-4px]">
                            <Image
                                className="w-full h-auto object-cover object-top rounded-tl-md"
                                src="/fe.png"
                                width={600}
                                height={600}
                                alt="Frontend"
                                priority
                            />
                        </div>
                    </div>

                    {/* 02 - Product UI/UX Design */}
                    <div className="
      relative group overflow-hidden
      rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md
      p-5 sm:p-6 flex flex-col justify-between
      transition-all duration-500
      hover:border-white/[0.12] hover:bg-white/[0.05]
      hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.07)]
    ">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div className="relative z-10 max-w-[75%] sm:max-w-full">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">02 — Experience</span>
                            <h3 className="text-base font-medium text-white mt-2 tracking-tight">Product UI/UX Design</h3>
                            <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
                                User-centric UI/UX improvements, wireframes, and prototypes structured to enhance discoverability and user flow.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["Figma", "Wireframing", "Prototyping", "User Flow"].map(tag => (
                                    <span key={tag} className="text-[11px] bg-white/[0.05] text-neutral-400 px-2.5 py-1 rounded-lg border border-white/[0.07]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Positioned cleanly bottom-right, non-intrusive on text */}
                        <div className="absolute -bottom-4 -right-4 w-[55%] sm:w-[50%] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.03] opacity-40 sm:opacity-70 md:opacity-90">
                            <Image
                                className="w-full h-auto object-contain"
                                src="/mobile2.png"
                                width={500}
                                height={500}
                                alt="UIUX"
                                priority
                            />
                        </div>
                    </div>

                    {/* 03 - Backend & Systems */}
                    <div className="
      md:col-span-3 relative group overflow-hidden
      rounded-2xl border border-white/[0.07] bg-white/[0.14] backdrop-blur-md
      p-5 sm:p-6 flex flex-col justify-between
      transition-all duration-500
      hover:border-white/[0.12] hover:bg-white/[0.05]
      hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.07)]
    ">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div className="relative z-10 max-w-full md:max-w-[50%] lg:max-w-[55%]">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">03 — Architecture</span>
                            <h3 className="text-base font-medium text-white mt-2 tracking-tight">Backend &amp; Systems</h3>
                            <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
                                Scalable RESTful APIs, multi-threaded scripts, and SQL database design. Currently expanding expertise into Linux environments, low-level system operations, and server administration.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["Go", "Linux", "Python", "SQL", "Express.js"].map(tag => (
                                    <span key={tag} className="text-[11px] bg-white/[0.05] text-neutral-400 px-2.5 py-1 rounded-lg border border-white/[0.07]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Anchored right side with constrained max-width */}
                        <div className="absolute bottom-0 right-0 w-[55%] md:w-[45%] max-w-md pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02] opacity-50 md:opacity-100">
                            <Image
                                className="w-full h-auto object-contain object-right-bottom rounded-tl-xl"
                                src="/be.png"
                                width={800}
                                height={800}
                                alt="Backend"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* ─── Experiences ───────────────────────────────────────── */}
            <section className="relative z-10">
                <div className="mt-24 mb-14 md:mt-40 md:mb-20 text-center">
                    <h2
                        id="experience"
                        className="text-xl sm:text-2xl md:text-4xl text-white font-light tracking-tight font-medium"
                    >
                        Experiences
                    </h2>
                    <p className="pt-3 text-sm text-neutral-300">
                        More at{" "}
                        <a
                            className="text-neutral-300 underline underline-offset-2 transition-colors hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/deffrand-farera/"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>

                <div className="relative flex flex-col items-center justify-start h-fit overflow-x-hidden md:overflow-visible">
                    {/* Timeline spine */}
                    <span className="absolute h-full w-px opacity-30 bg-gradient-to-b from-transparent via-neutral-500 to-transparent" />

                    {experiences.map((exp, i) => (
                        <Reveal key={i} direction={i % 2 === 0 ? "left" : "right"} amount={0.3}>
                            <div
                                key={i}
                                className={`
                                group my-4 md:my-6 w-[92vw] xs:w-[88vw] sm:w-full md:w-full max-w-[540px] p-5 sm:p-7
                                rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md
                                transition-all duration-400 ease-out
                                hover:border-white/[0.12] hover:bg-white/[0.05]
                                hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]
                                ${i % 2 === 0
                                        ? 'md:-translate-x-36 hover:rotate-[0.6deg]'
                                        : 'md:translate-x-36 hover:-rotate-[0.6deg]'
                                    }
                            `}
                            >
                                {/* Top highlight */}
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                                <div className="flex flex-col space-y-2">
                                    <div className="flex flex-col md:flex-row mb-3 justify-between gap-1">
                                        <h3 className="text-base md:text-lg text-white font-semibold tracking-tight leading-snug">
                                            {exp.title}
                                        </h3>
                                        <p className="text-[11px] text-neutral-500 md:text-right shrink-0">{exp.time}</p>
                                    </div>
                                    <p className="text-sm text-neutral-400 font-medium">
                                        {exp.at}
                                        <span className="mx-2 text-neutral-700">·</span>
                                        <span className="text-neutral-500">{exp.type}</span>
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <ul className="space-y-1.5">
                                            {(expandedExp[i] ? exp.desc : exp.desc.slice(0, 1)).map((line, k) => (
                                                <li key={k} className="flex gap-2 text-sm text-neutral-300 leading-relaxed">
                                                    <span className="text-neutral-600 shrink-0">—</span>
                                                    <span>{line}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.desc.length > 1 && (
                                            <button
                                                onClick={() => setExpandedExp(prev => ({ ...prev, [i]: !prev[i] }))}
                                                className="w-fit text-xs text-neutral-500 underline underline-offset-2 transition-colors hover:text-white"
                                            >
                                                {expandedExp[i] ? "Show less" : `Show ${exp.desc.length - 1} more`}
                                            </button>
                                        )}
                                    </div>
                                    <div className="w-full pt-5 flex flex-wrap gap-2">
                                        {exp.stack.map((item, j) => (
                                            <div
                                                key={j}
                                                className={`w-fit px-3.5 py-1.5 text-xs rounded-full ${techTag[item].style}`}
                                            >
                                                {techTag[item].label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="relative z-10">
                <div className="mt-24 mb-12 md:mt-40 md:mb-16">
                    <h2
                        id="works"
                        className="text-xl sm:text-2xl md:text-4xl text-white mb-3 tracking-tight font-medium"
                    >
                        Selected Works
                    </h2>
                    <p className="text-neutral-300 text-sm md:text-base max-w-lg leading-relaxed">
                        Web applications, system architectures, and tools built to solve specific technical problems.
                    </p>
                </div>

                <section className="w-full h-auto flex flex-col items-end">
                    <div className="relative w-full">
                        {projects.map((project, i) => {
                            const isStar = project.id === "mooni";

                            return (
                                <div
                                    key={project.title}
                                    className={`
                    group sticky my-3 p-4 sm:p-5 w-full rounded-2xl
                    backdrop-blur-lg
                    flex flex-col md:flex-row gap-4 sm:gap-5 items-start
                    cursor-pointer
                    transition-all duration-400 ease-out
                    hover:shadow-[0_8px_48px_-12px_rgba(0,0,0,0.7)]
                    hover:rotate-[0.4deg]
                    ${isStar
                                            ? `border border-amber-300/[0.18] bg-amber-400/[0.045]
                           hover:border-amber-300/[0.3] hover:bg-amber-400/[0.07]
                           shadow-[0_0_60px_-24px_rgba(217,160,60,0.35)]`
                                            : `border border-white/[0.07] bg-white/[0.03]
                           hover:border-white/[0.12] hover:bg-white/[0.05]`
                                        }
                `}
                                    style={{ top: getTop(i), zIndex: getZ(i) }}
                                    onClick={() => router.push(`/${project.id}`)}
                                >
                                    {isStar && (
                                        <div className="absolute -top-2.5 -left-2.5 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-amber-400/[0.12] border border-amber-300/[0.25] backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(217,160,60,0.5)]">
                                            <Star
                                                size={24}
                                                className="text-amber-300 fill-amber-300/80"
                                            />
                                        </div>
                                    )}
                                    <div
                                        className={`pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent to-transparent ${isStar ? "via-amber-300/25" : "via-white/12"
                                            }`}
                                    />

                                    <div className="relative w-full md:w-3/5 aspect-[16/9] shrink-0 overflow-hidden rounded-xl">
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                                            priority
                                        />
                                    </div>

                                    <div className="w-full flex flex-col justify-between items-start gap-4 sm:gap-6">
                                        <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-4 pt-1 sm:pt-2">
                                            <p className={`font-semibold text-lg sm:text-xl leading-snug tracking-tight ${isStar ? "text-amber-100" : "text-white"
                                                }`}>
                                                {project.title}
                                            </p>
                                            <p className={`text-xs sm:text-sm sm:text-right shrink-0 ${isStar ? "text-amber-200/50" : "text-neutral-500"
                                                }`}>
                                                {project.type}
                                            </p>
                                        </div>

                                        <div className={`w-full flex justify-between text-sm pb-3 border-b ${isStar ? "border-amber-300/[0.15] text-amber-200/40" : "border-white/[0.08] text-neutral-700"
                                            }`}>
                                            <span>0{i + 1}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((item, j) => (
                                                <div
                                                    key={j}
                                                    className={`w-fit px-3.5 py-1.5 text-xs rounded-full ${techTag[item].style}`}
                                                >
                                                    {techTag[item].label}
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href={`/${project.id}`}
                                            onClick={e => e.stopPropagation()}
                                            className={`
                            inline-flex items-center gap-1.5 text-sm
                            transition-colors duration-200
                            underline underline-offset-2
                            ${isStar ? "text-amber-200/80 hover:text-amber-100" : "text-neutral-300 hover:text-white"}
                        `}
                                        >
                                            See Details
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                                <path d="M7 17 17 7M7 7h10v10" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </section>
        </>
    )
}