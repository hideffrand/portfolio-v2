import { projects, techTag } from "@/utils/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import LighthouseGauge from "@/components/lighthouse-gauge"

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
            <div className="mb-8 flex items-center justify-between border-b border-neutral-800 pb-6">
                <a
                    href="/#works"
                    className="text-xs font-medium tracking-wide text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to case studies
                </a>
                <span className="text-xs font-medium tracking-wider text-neutral-500">
                    Case Study — {project.id}
                </span>
            </div>

            <header className="mb-12">
                <span className="text-xs font-medium tracking-wide text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded">
                    {project.type}
                </span>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-white">
                    {project.title}
                </h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                <section className="lg:col-span-8 relative w-full aspect-video rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950">
                    <Image
                        src={project.img}
                        alt={`${project.title} interface view`}
                        fill
                        className="object-cover"
                        priority
                    />
                </section>

                <section className="lg:col-span-4 bg-neutral-900/40 border border-neutral-800/80 rounded-lg p-6 flex flex-col justify-between gap-8">
                    <div className="space-y-6">
                        <h3 className="text-xs font-medium tracking-wider text-neutral-300 border-b border-neutral-800 pb-2">
                            Metadata Overview
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[11px] font-medium tracking-wide text-neutral-500">Timeline</p>
                                <p className="text-sm font-normal text-neutral-200 mt-0.5">{project.year}</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-medium tracking-wide text-neutral-500">System Status</p>
                                <p className="text-sm font-normal text-emerald-400 mt-0.5 flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    Production Active
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-medium tracking-wide text-neutral-500 mb-2">Core Technology Stack</p>
                            <div className="flex flex-wrap gap-1.5">
                                {project.stack.map((tech) => (
                                    <div
                                        key={tech}
                                        className={`w-fit px-2.5 py-0.5 text-[11px] font-medium tracking-wide rounded border ${techTag[tech]?.style || 'bg-neutral-900 text-neutral-400 border-neutral-800'}`}
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
                            className="w-full bg-neutral-100 text-neutral-900 font-medium text-xs tracking-wide py-3 rounded flex items-center justify-center gap-2 hover:bg-white active:scale-[0.99] transition-all duration-150"
                        >
                            Launch Live Production
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </a>
                    )}
                </section>
            </div>

            <div className="space-y-24 border-t border-neutral-900 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28">
                        <h2 className="text-xl font-medium text-white mt-2">
                            The Problem
                        </h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 space-y-6 text-neutral-300 text-sm md:text-base">
                        {project.overviewParagraphs?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        {/* <blockquote className="border-l-2 border-neutral-700 pl-4 py-1 text-sm font-bold italic text-neutral-300 bg-neutral-900/10 rounded-r-md">
                            &ldquo;{project.desc}&rdquo;
                        </blockquote> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-neutral-900/60 pt-16">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28 self-start">
                        <h2 className="text-xl font-medium text-white mt-2">
                            Architecture & Engineering
                        </h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 space-y-8">
                        <div className="text-neutral-300 text-sm md:text-base space-y-4">
                            {project.architectureParagraphs?.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-950/50 shadow-xl group">
                            <Image
                                src={project.img}
                                alt={`${project.title} Architectural Breakdown Interface Layout`}
                                fill
                                className="object-cover filter brightness-[0.85] transition-all duration-500 group-hover:scale-102 group-hover:brightness-100"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-neutral-800 px-3 py-1.5 rounded text-[11px] text-neutral-300 font-bold">
                                FIG 02 // Engineering Infrastructure & UI State Syncing
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-900/60 pt-16">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28">
                        <h2 className="text-xl font-medium text-white mt-2">
                            The Design
                        </h2>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 space-y-6 text-neutral-300 text-sm md:text-base">
                        {project.designParagraphs?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-900/60 pt-16">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28">
                        <h2 className="text-xl font-medium text-white mt-2">
                            Lighthouse Audit
                        </h2>
                    </div>

                    <div className="md:col-span-8 lg:col-span-9 space-y-8">
                        {project.lighthouse ? (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <LighthouseGauge score={project.lighthouse.performance} label="Performance" />
                                <LighthouseGauge score={project.lighthouse.accessibility} label="Accessibility" />
                                <LighthouseGauge score={project.lighthouse.bestPractices} label="Best Practices" />
                                <LighthouseGauge score={project.lighthouse.seo} label="SEO" />
                            </div>
                        ) : (
                            <div className="text-xs text-neutral-600">
                                No telemetry data recorded for this deployment.
                            </div>
                        )}

                        {/* Deskripsi Teknis Aspek */}
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-900/60 pt-6">
                            <div className="border border-neutral-900 bg-neutral-950/20 p-4 rounded-lg">
                                <span className="text-[10px] font-bold text-blue-400 uppercase block mb-1">01 / Performance</span>
                                <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                                    Mengukur kecepatan muat elemen visual, efisiensi script blocking, dan stabilitas tata letak runtime saat interaksi pertama dijalankan.
                                </p>
                            </div>
                            <div className="border border-neutral-900 bg-neutral-950/20 p-4 rounded-lg">
                                <span className="text-[10px] font-bold text-blue-400 uppercase block mb-1">02 / Accessibility</span>
                                <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                                    Memastikan struktur elemen HTML semantik, kontras warna teks, serta dukungan navigasi pembaca layar (screen-readers) terpenuhi secara penuh.
                                </p>
                            </div>
                            <div className="border border-neutral-900 bg-neutral-950/20 p-4 rounded-lg">
                                <span className="text-[10px] font-bold text-blue-400 uppercase block mb-1">03 / Best Practices</span>
                                <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                                    Audit keamanan web melalui koneksi HTTPS tingkat tinggi, kebersihan log dependensi pustaka, dan pemanfaatan rasio aspek media modern.
                                </p>
                            </div>
                            <div className="border border-neutral-900 bg-neutral-950/20 p-4 rounded-lg">
                                <span className="text-[10px] font-bold text-blue-400 uppercase block mb-1">04 / SEO Optimization</span>
                                <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                                    Kelayakan meta-tag dokumen, kesiapan data terstruktur crawl engine, serta ketersediaan index tautan ramah perayapan robot pencari.
                                </p>
                            </div>
                        </div> */}

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-neutral-900/60 pt-16">
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-28">
                        <h2 className="text-xl font-medium text-white mt-2">
                            Key Deliverables
                        </h2>
                    </div>

                    <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {project.deliverables?.map((item, index) => (
                            <div key={index} className="bg-neutral-700/40 border border-neutral-800/60 p-6 rounded-xl space-y-2">
                                {/* <div className="text-xs font-semibold text-gray-400">
                                    {item.label}
                                </div> */}
                                <h4 className="text-white font-semibold">
                                    {item.title}
                                </h4>
                                <p className="text-md text-neutral-300">
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