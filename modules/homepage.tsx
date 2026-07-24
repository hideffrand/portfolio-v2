'use client'

import Greetings from "@/components/greetings";
import Reveal from "@/components/reveal";
import { experiences, techTag, projects } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter()

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
                    <span>I am</span>
                    {/* "Deff" underline with a subtle accent instead of browser default */}
                    <span
                        title="Call me Deff"
                        className="relative cursor-default"
                    >
                        <span className="relative z-10">
                            <span className="border-b border-white/40 pb-px">Deff</span>rand
                        </span>
                    </span>
                    <span>Farera</span>
                    <span className="text-neutral-300">,</span>
                    {/* Mobile line-break word */}
                    <span className="md:hidden">Software Engineer.</span>
                </h1>

                {/* Desktop second line */}
                <h1 className="relative hidden text-5xl pb-1 text-white md:flex flex-wrap items-baseline gap-x-2 font-light tracking-tight">
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
                        className="text-xl sm:text-2xl md:text-4xl text-white font-light mb-3 tracking-tight"
                    >
                        What Can I Do?
                    </h2>
                    <p className="text-neutral-300 text-sm md:text-base max-w-lg leading-relaxed">
                        Full-stack web systems development, third-party API integration, and product design.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px] xs:auto-rows-[280px] md:auto-rows-[340px]">

                    {/* Frontend */}
                    <div className="
                        md:col-span-2 relative group overflow-hidden
                        rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md
                        p-5 sm:p-6 flex flex-col justify-between
                        transition-all duration-500
                        hover:border-white/[0.12] hover:bg-white/[0.05]
                        hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.07)]
                    ">
                        {/* Inset top highlight */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div className="relative z-10">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">01 — Interface</span>
                            <h3 className="text-base font-medium text-white mt-2 tracking-tight">Frontend Engineering</h3>
                            <p className="text-neutral-300 text-sm max-w-[85%] sm:max-w-sm mt-2 leading-relaxed">
                                Responsive web applications optimised for speed, accessibility metrics, and design-to-production precision.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["Next.js", "TypeScript", "Tailwind CSS"].map(tag => (
                                    <span key={tag} className="text-[11px] bg-white/[0.05] text-neutral-400 px-2.5 py-1 rounded-lg border border-white/[0.07]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decorative image */}
                        <div className="absolute bottom-0 right-0 w-[50%] sm:w-[45%] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-y-[-4px]">
                            <Image
                                className="w-full h-auto object-cover object-top"
                                src="/deplix.webp"
                                width={600}
                                height={600}
                                alt="Frontend engineering interface"
                            />
                        </div>

                        {/* Cursor easter-egg */}
                        <Image
                            className="absolute z-20 top-1/2 right-1/4 w-[12%] hidden md:block animate-pulse select-none pointer-events-none"
                            src="/cursor_select.png"
                            width={200}
                            height={200}
                            alt=""
                            aria-hidden
                        />
                    </div>

                    {/* Backend */}
                    <div className="
                        relative group overflow-hidden
                        rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md
                        p-5 sm:p-6 flex flex-col justify-between
                        transition-all duration-500
                        hover:border-white/[0.12] hover:bg-white/[0.05]
                        hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.07)]
                    ">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div className="relative z-10">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">02 — Architecture</span>
                            <h3 className="text-base font-medium text-white mt-2 tracking-tight">Backend Systems</h3>
                            <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
                                Scalable RESTful APIs, scheduled automations, and transactional database schema design.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["Go", "Python", "SQL"].map(tag => (
                                    <span key={tag} className="text-[11px] bg-white/[0.05] text-neutral-400 px-2.5 py-1 rounded-lg border border-white/[0.07]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] sm:w-[85%] pointer-events-none transition-transform duration-700 ease-out group-hover:-translate-y-1">
                            <Image
                                className="w-full h-auto object-contain"
                                src="/backend_thumb.webp"
                                width={800}
                                height={800}
                                alt="Data architecture diagram"
                            />
                        </div>
                    </div>

                    {/* UI/UX */}
                    <div className="
                        md:col-span-3 relative group overflow-hidden
                        rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md
                        p-5 sm:p-6 flex flex-col justify-between
                        transition-all duration-500
                        hover:border-white/[0.12] hover:bg-white/[0.05]
                        hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.07)]
                    ">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div className="relative z-10">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">03 — Experience</span>
                            <h3 className="text-base font-medium text-white mt-2 tracking-tight">Product UI/UX Design</h3>
                            <p className="text-neutral-300 text-sm max-w-[70%] sm:max-w-md mt-2 leading-relaxed">
                                Interfaces structured around logical information discovery, functional data-entry workflows, and visual clarity.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                {["Figma", "Wireframing", "Prototyping"].map(tag => (
                                    <span key={tag} className="text-[11px] bg-white/[0.05] text-neutral-400 px-2.5 py-1 rounded-lg border border-white/[0.07]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Positioned as a corner accent on mobile instead of a full-bleed overlay,
                            so it no longer sits on top of the text at small widths */}
                        <div className="absolute bottom-[-10%] right-[-10%] w-[65%] xs:w-[55%] md:top-0 md:right-10 md:bottom-0 md:left-auto md:w-[40%] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02] opacity-60 md:opacity-100">
                            <Image
                                className="w-full h-auto object-contain"
                                src="/mobile_thumb2.png"
                                width={1200}
                                height={1200}
                                alt="Mobile app interface sample"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Experiences ───────────────────────────────────────── */}
            <section className="relative z-10">
                <div className="mt-24 mb-14 md:mt-40 md:mb-20 text-center">
                    <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
                        Track record
                    </p>
                    <h2
                        id="experience"
                        className="text-xl sm:text-2xl md:text-4xl text-white font-light tracking-tight"
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
                                    <p className="text-sm text-neutral-300 leading-relaxed">{exp.desc}</p>
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

            {/* ─── Selected Works ────────────────────────────────────── */}
            <section className="relative z-10">
                <div className="mt-24 mb-12 md:mt-40 md:mb-16">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
                        Case studies
                    </p>
                    <h2
                        id="works"
                        className="text-xl sm:text-2xl md:text-4xl text-white font-light mb-3 tracking-tight"
                    >
                        Selected Works
                    </h2>
                    <p className="text-neutral-300 text-sm md:text-base max-w-lg leading-relaxed">
                        Web applications, system architectures, and tools built to solve specific technical problems.
                    </p>
                </div>

                <section className="w-full h-auto flex flex-col items-end">
                    <div className="relative w-full">
                        {projects.map((project, i) => (
                            <div
                                key={project.title}
                                className="
                                    group sticky my-3 p-4 sm:p-5 w-full rounded-2xl
                                    border border-white/[0.07] bg-white/[0.03] backdrop-blur-lg
                                    flex flex-col md:flex-row gap-4 sm:gap-5 items-start
                                    cursor-pointer
                                    transition-all duration-400 ease-out
                                    hover:border-white/[0.12] hover:bg-white/[0.05]
                                    hover:shadow-[0_8px_48px_-12px_rgba(0,0,0,0.7)]
                                    hover:rotate-[0.4deg]
                                "
                                style={{ top: getTop(i), zIndex: getZ(i) }}
                                onClick={() => router.push(`/${project.id}`)}
                            >
                                {/* Top shine */}
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={800}
                                    height={800}
                                    className="w-full md:w-2/3 h-auto rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                                    priority
                                />

                                <div className="w-full flex flex-col justify-between items-start gap-4 sm:gap-6">
                                    {/* Title row */}
                                    <div className="w-full flex justify-between items-start gap-4 pt-1 sm:pt-2">
                                        <p className="text-white font-semibold text-lg sm:text-xl leading-snug tracking-tight">
                                            {project.title}
                                        </p>
                                        <p className="text-neutral-500 text-sm text-right shrink-0">
                                            {project.type}
                                        </p>
                                    </div>

                                    {/* Index rule */}
                                    <div className="w-full flex justify-between text-neutral-700 text-sm border-b border-white/[0.08] pb-3">
                                        <span>0{i + 1}</span>
                                    </div>

                                    {/* Stack tags */}
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

                                    {/* CTA */}
                                    <a
                                        href={project.url}
                                        onClick={e => e.stopPropagation()}
                                        className="
                                            inline-flex items-center gap-1.5 text-sm text-neutral-300
                                            transition-colors duration-200 hover:text-white
                                            underline underline-offset-2
                                        "
                                    >
                                        See Details
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                            <path d="M7 17 17 7M7 7h10v10" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}