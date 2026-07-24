import { projects, techTag, type ProjectProps } from "@/utils/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

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

    // One full paragraph per section — the log reads like a build note,
    // not a marketing pitch. No repeated imagery, one figure only.
    const firstParagraph = (paragraphs?: string[]) => paragraphs?.[0]?.trim()

    // Continuous browsing — wraps around so there's always a next
    // and previous entry, regardless of where you land in the list.
    const currentIndex = projects.findIndex((p) => p.id === project.id)
    const hasSiblings = projects.length > 1
    const prevProject = hasSiblings
        ? projects[(currentIndex - 1 + projects.length) % projects.length]
        : null
    const nextProject = hasSiblings
        ? projects[(currentIndex + 1) % projects.length]
        : null

    return (
        <main className="relative z-10 min-h-screen bg-[#0a0a0b]/20 border border-gray-50/20 backdrop-blur-md text-[#f2f2f0] pb-32 top-40 selection:bg-white selection:text-black rounded-4xl">
            {/* Top bar */}
            <div className="max-w-6xl mx-auto px-6 pt-10 pb-16 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
                <a
                    href="/#works"
                    className="hover:text-white transition-colors duration-200 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
                >
                    ← Index
                </a>
                <span>{project.year} · {project.type}</span>
            </div>

            {/* Title — the thesis. Text leads, not an image. */}
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.02] font-light tracking-tight text-white">
                    {project.title}
                </h1>
                <p className="mt-6 max-w-xl text-neutral-300 text-sm md:text-base leading-relaxed">
                    {project.desc}
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="mt-16 border-t border-neutral-800/80" />
            </div>

            {/* Masthead (sticky) + build log */}
            <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-16 gap-y-16">

                <aside className="md:sticky md:top-16 md:self-start space-y-8">
                    <MetaField label="Year">
                        <p className="text-sm text-neutral-300">{project.year}</p>
                    </MetaField>
                    <MetaField label="Type">
                        <p className="text-sm text-neutral-300">{project.type}</p>
                    </MetaField>
                    <MetaField label="Stack">
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((s) => (
                                <span
                                    key={s}
                                    className={`w-fit px-3 py-1 text-xs rounded-full ${techTag[s]?.style || "bg-white/[0.05] text-neutral-400 border border-white/[0.07]"
                                        }`}
                                >
                                    {techTag[s]?.label || s}
                                </span>
                            ))}
                        </div>
                    </MetaField>
                    {project.url && (
                        <MetaField label="Link">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors duration-200 underline underline-offset-2 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
                            >
                                View live
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <path d="M7 17 17 7M7 7h10v10" />
                                </svg>
                            </a>
                        </MetaField>
                    )}
                </aside>

                <div className="divide-y divide-neutral-800/80">

                    <LogEntry index="01" label="Overview">
                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl">
                            {firstParagraph(project.overviewParagraphs)}
                        </p>
                        <figure className="mt-10 max-w-md">
                            <div className="relative w-full aspect-[4/3] border border-neutral-800/80">
                                <Image
                                    src={project.img}
                                    alt={`${project.title} interface`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover"
                                />
                            </div>
                            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">
                                Fig. 1 — {project.title} interface
                            </figcaption>
                        </figure>
                    </LogEntry>

                    <LogEntry index="02" label="Build">
                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl">
                            {firstParagraph(project.architectureParagraphs)}
                        </p>
                    </LogEntry>

                    <LogEntry index="03" label="Design">
                        <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl">
                            {firstParagraph(project.designParagraphs)}
                        </p>
                    </LogEntry>

                    {project.deliverables && project.deliverables.length > 0 && (
                        <LogEntry index="04" label="Shipped">
                            <ul className="divide-y divide-neutral-800/80">
                                {project.deliverables.map((item, i) => (
                                    <li
                                        key={i}
                                        className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6"
                                    >
                                        <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium shrink-0 sm:w-28">
                                            {item.label ?? String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h3 className="text-white font-medium text-base">{item.title}</h3>
                                            <p className="mt-1 text-neutral-400 text-sm leading-relaxed max-w-xl">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </LogEntry>
                    )}

                    {project.lighthouse && (
                        <LogEntry index="05" label="Metrics">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10">
                                <Metric label="Performance" value={project.lighthouse.performance} />
                                <Metric label="Accessibility" value={project.lighthouse.accessibility} />
                                <Metric label="Best Practices" value={project.lighthouse.bestPractices} />
                                <Metric label="SEO" value={project.lighthouse.seo} />
                            </div>
                        </LogEntry>
                    )}

                </div>
            </div>

            {/* Continue — the bookend to the title above. No arrows: direction
                comes from position (previous sits left, next sits right) and
                from the page-locator tag, like folios at the foot of a page. */}
            {(prevProject || nextProject) && (
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mt-24 border-t border-neutral-800/80" />
                    <nav
                        aria-label="Project navigation"
                        className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {prevProject ? (
                            <ProjectNavLink project={prevProject} direction="Previous" align="left" />
                        ) : (
                            <div />
                        )}
                        {nextProject ? (
                            <ProjectNavLink project={nextProject} direction="Next" align="right" />
                        ) : (
                            <div />
                        )}
                    </nav>
                </div>
            )}
        </main>
    )
}

function MetaField({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">{label}</p>
            <div className="mt-1">{children}</div>
        </div>
    )
}

function LogEntry({
    index,
    label,
    children,
}: {
    index: string
    label: string
    children: ReactNode
}) {
    return (
        <section className="py-16 first:pt-0 last:pb-0">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {index} — {label}
            </span>
            <div className="mt-6">{children}</div>
        </section>
    )
}

function Metric({ label, value }: { label: string; value: number }) {
    return (
        <div>
            <p className="text-3xl font-light text-white tabular-nums">{value}</p>
            <div className="mt-3 h-px w-full bg-neutral-800">
                <div className="h-px bg-white" style={{ width: `${value}%` }} />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-medium">{label}</p>
        </div>
    )
}

function ProjectNavLink({
    project,
    direction,
    align,
}: {
    project: ProjectProps
    direction: "Previous" | "Next"
    align: "left" | "right"
}) {
    const position = projects.findIndex((p) => p.id === project.id) + 1

    return (
        <Link
            href={`/${project.id}`}
            className={`group relative block overflow-hidden border border-neutral-800/80 p-8 transition-colors duration-300 hover:border-neutral-600 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60 ${align === "right" ? "sm:text-right" : "text-left"
                }`}
        >
            {/* Hover-reveal figure — a quiet peek at what's next, not a full image */}
            <div className="absolute inset-0">
                <Image
                    src={project.img}
                    alt=""
                    fill
                    className="object-cover grayscale opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-20 group-hover:scale-100"
                />
            </div>

            <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium transition-colors duration-300 group-hover:text-neutral-300">
                    {direction}
                </p>
                <h3 className="mt-3 text-2xl md:text-4xl font-light tracking-tight text-neutral-400 transition-colors duration-300 group-hover:text-white">
                    {project.title}
                </h3>
                <p className="mt-3 text-xs text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400">
                    {String(position).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
            </div>
        </Link>
    )
}