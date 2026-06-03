import { projects, techTag } from "@/utils/data"
import { notFound } from "next/navigation"
import Image from "next/image"

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }))
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { id } = await params
    const project = projects.find((p) => p.id === id)

    if (!project) {
        notFound()
    }

    return (
        <main className="relative z-10 pt-32 pb-32 text-neutral-200 font-sans selection:bg-white selection:text-black">
            {/* Meta Context Header Nav */}
            <div className="mb-8 flex items-center justify-between border-b border-neutral-800 pb-6">
                <a
                    href="/#works"
                    className="text-xs uppercase font-extrabold tracking-wider text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Case Studies
                </a>
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-600">
                    CASE_STUDY // {project.id.toUpperCase()}
                </span>
            </div>

            {/* Title & Category Block */}
            <header className="mb-12">
                <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-400 bg-neutral-900/60 border border-neutral-800/80 px-3 py-1 rounded-md">
                    {project.type}
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold mt-4 text-white tracking-tighter uppercase">
                    {project.title}
                </h1>
            </header>

            {/* Immersive Main Showcase & Spec Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                <section className="lg:col-span-8 relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950/40 shadow-2xl">
                    <Image
                        src={project.img}
                        alt={`${project.title} Hero Application Interface View`}
                        fill
                        className="object-cover"
                        priority
                    />
                </section>

                <section className="lg:col-span-4 bg-neutral-900/20 border border-neutral-800/60 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between gap-8">
                    <div className="space-y-6">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-white border-b border-neutral-800 pb-2">
                            Metadata Overview
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500">Timeline</p>
                                <p className="text-sm font-bold text-white mt-0.5">{project.year}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500">System Status</p>
                                <p className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Production Active
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">Core Technology Stack</p>
                            <div className="flex flex-wrap gap-1.5">
                                {project.stack.map((tech) => (
                                    <div
                                        key={tech}
                                        className={`w-fit px-2.5 py-1 text-[11px] font-bold rounded-md border ${techTag[tech]?.style || 'bg-neutral-900 text-neutral-300 border-neutral-800'}`}
                                    >
                                        {techTag[tech]?.label || tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-white text-black font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-200 active:scale-[0.99] transition-all duration-200"
                        >
                            Launch Live Production
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    )}
                </section>
            </div>

            {/* Deep-Dive Case Study Documentation Section */}
            <div className="space-y-24 border-t border-neutral-900 pt-16">
                
                {/* 01 / The Problem Space */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 font-mono">
                            01 // Discovery
                        </h3>
                        <h2 className="text-xl font-extrabold text-white uppercase mt-2 tracking-tight">
                            The Problem Space
                        </h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 space-y-6 text-neutral-400 text-sm md:text-base font-medium">
                        {project.overviewParagraphs?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <blockquote className="border-l-2 border-neutral-700 pl-4 py-1 text-sm font-bold italic text-neutral-300 bg-neutral-900/10 rounded-r-md">
                            &ldquo;{project.desc}&rdquo;
                        </blockquote>
                    </div>
                </div>

                {/* 02 / System Architecture (With Contextual Split Image) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-neutral-900/60 pt-16">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28 self-start">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 font-mono">
                            02 // Engineering
                        </h3>
                        <h2 className="text-xl font-extrabold text-white uppercase mt-2 tracking-tight">
                            Architecture & Engineering
                        </h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 space-y-8">
                        <div className="text-neutral-400 text-sm md:text-base font-medium space-y-4">
                            {project.architectureParagraphs?.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        
                        {/* Secondary Context Image Spot */}
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-950/50 shadow-xl group">
                            <Image
                                src={project.img}
                                alt={`${project.title} Architectural Breakdown Interface Layout`}
                                fill
                                className="object-cover filter brightness-[0.85] transition-all duration-500 group-hover:scale-102 group-hover:brightness-100"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-neutral-800 px-3 py-1.5 rounded text-[11px] font-mono text-neutral-400 font-bold">
                                FIG 02 // Engineering Infrastructure & UI State Syncing
                            </div>
                        </div>
                    </div>
                </div>

                {/* 03 / Interface Engineering & Interaction Dynamics */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-900/60 pt-16">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 font-mono">
                            03 // Interface
                        </h3>
                        <h2 className="text-xl font-extrabold text-white uppercase mt-2 tracking-tight">
                            UI/UX & Systems Layout
                        </h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 space-y-6 text-neutral-400 text-sm md:text-base font-medium">
                        {project.designParagraphs?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* 04 / Core Project Deliverables (High Density Grid Layout Block) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-900/60 pt-16">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 font-mono">
                            04 // Outcomes
                        </h3>
                        <h2 className="text-xl font-extrabold text-white uppercase mt-2 tracking-tight">
                            Key Deliverables
                        </h2>
                    </div>
                    
                    <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.deliverables?.map((item, index) => (
                            <div key={index} className="bg-neutral-900/10 border border-neutral-800/60 p-6 rounded-xl space-y-2">
                                <div className="text-xs font-extrabold font-mono text-blue-400 uppercase tracking-widest">
                                    {item.label}
                                </div>
                                <h4 className="text-white font-bold text-base uppercase">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    )
}