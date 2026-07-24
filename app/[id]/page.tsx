import { projects, techTag } from "@/utils/data"
import { notFound } from "next/navigation"
import Image from "next/image"
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

    return (
        <main className="relative z-10 min-h-screen bg-[#0a0a0b] text-[#f2f2f0] pb-32 top-40 selection:bg-white selection:text-black rounded-4xl">
            {/* Top bar */}
            <div className="max-w-6xl mx-auto px-6 pt-10 pb-16 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-500">
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
                <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight">
                    {project.title}
                </h1>
                <p className="mt-6 max-w-xl text-neutral-400 text-base md:text-lg leading-relaxed">
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
                        <p className="text-sm text-neutral-200">{project.year}</p>
                    </MetaField>
                    <MetaField label="Type">
                        <p className="text-sm text-neutral-200">{project.type}</p>
                    </MetaField>
                    <MetaField label="Stack">
                        <p className="font-mono text-sm text-neutral-300 leading-relaxed">
                            {project.stack.map((s) => techTag[s]?.label || s).join(" · ")}
                        </p>
                    </MetaField>
                    {project.url && (
                        <MetaField label="Link">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="font-mono text-sm text-white border-b border-neutral-600 hover:border-white transition-colors duration-200 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60"
                            >
                                View live ↗
                            </a>
                        </MetaField>
                    )}
                </aside>

                <div className="divide-y divide-neutral-800/80">

                    <LogEntry index="01" label="Overview">
                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl">
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
                            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                                Fig. 1 — {project.title} interface
                            </figcaption>
                        </figure>
                    </LogEntry>

                    <LogEntry index="02" label="Build">
                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl">
                            {firstParagraph(project.architectureParagraphs)}
                        </p>
                    </LogEntry>

                    <LogEntry index="03" label="Design">
                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl">
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
                                        <span className="font-mono text-xs text-neutral-500 shrink-0 sm:w-20">
                                            {item.label ?? String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h3 className="text-white font-medium">{item.title}</h3>
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
        </main>
    )
}

function MetaField({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">{label}</p>
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
            <div className="flex items-baseline gap-3 mb-6">
                <span className="font-mono text-xs text-neutral-600">§{index}</span>
                <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500">{label}</h2>
            </div>
            {children}
        </section>
    )
}

function Metric({ label, value }: { label: string; value: number }) {
    return (
        <div>
            <p className="font-mono text-3xl text-white tabular-nums">{value}</p>
            <div className="mt-3 h-px w-full bg-neutral-800">
                <div className="h-px bg-white" style={{ width: `${value}%` }} />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-neutral-500">{label}</p>
        </div>
    )
}