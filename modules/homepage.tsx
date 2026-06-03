'use client'

import Greetings from "@/components/greetings";
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
            {/* Hero Section */}
            <div id="home" className="relative z-10 flex flex-col justify-end pb-[20vh] pt-[55vh] md:pt-[35vh]">
                <h1 className="relative md:text-5xl text-3xl pb-1 text-white flex flex-wrap items-center gap-x-2 font-normal">
                    <div className="relative">
                        <Greetings />
                    </div>
                    <div>,</div>
                    <div>I</div>
                    <div>am</div>
                    <div>
                        <u title="Call me Deff">Deff</u>rand
                    </div>
                    <div>Farera</div>
                    <div>,</div>
                    {/* <div className="md:hidden block">Aspiring</div> */}
                    <div className="md:hidden block">Software</div>
                    <div className="md:hidden block">Engineer.</div>
                </h1>
                <h1 className="relative md:text-5xl text-3xl pb-1 text-white hidden md:flex flex-wrap items-center gap-x-2 font-normal">
                    Software Engineer.
                </h1>
                <div className="flex items-center gap-2 mt-4 text-xs text-neutral-400">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for full-time roles / projects
                </div>
            </div>

            {/* Core Competencies Section */}
            <section className="relative z-10">
                <div className="mb-12">
                    <h2 id="services" className="text-2xl md:text-4xl text-white font-normal mb-3">
                        Capabilities
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base max-w-xl">
                        Full-stack web systems development, third-party API implementation and integrations.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[340px]">

                    {/* Frontend Card */}
                    <div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/60">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">01 / Interface</span>
                            <h3 className="text-lg font-medium text-white mt-1">Frontend Engineering</h3>
                            <p className="text-neutral-400 text-sm max-w-sm mt-1.5">
                                Responsive web applications optimized for speed, access metrics, and design-to-production precision.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">Next.js</span>
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">TypeScript</span>
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">Tailwind CSS</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-[45%] pointer-events-none transition-transform duration-500 group-hover:scale-105">
                            <Image
                                className="w-full h-auto object-cover object-top"
                                src="/deplix.webp"
                                width={600}
                                height={600}
                                alt="Frontend engineering interface view"
                            />
                        </div>
                        <Image
                            className="absolute z-20 top-1/2 right-1/4 w-[12%] select-cursor-animation hidden md:block animate-pulse"
                            src="/cursor_select.png"
                            width={200}
                            height={200}
                            alt="Selection cursor"
                        />
                    </div>

                    {/* Backend Card */}
                    <div className="relative group overflow-hidden rounded-xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/60">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">02 / Architecture</span>
                            <h3 className="text-lg font-medium text-white mt-1">Backend Systems</h3>
                            <p className="text-neutral-400 text-sm mt-1.5">
                                Scalable RESTful APIs, scheduled system automations, and transactional database schema design.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">Go</span>
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">Python</span>
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">SQL</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] pointer-events-none transition-transform duration-500 group-hover:translate-y-[-4px]">
                            <Image
                                className="w-full h-auto object-contain"
                                src="/backend_thumb.webp"
                                width={800}
                                height={800}
                                alt="Data architecture context map"
                            />
                        </div>
                    </div>

                    {/* UI/UX Design Card */}
                    <div className="md:col-span-3 relative group overflow-hidden rounded-xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/60">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">03 / Experience</span>
                            <h3 className="text-lg font-medium text-white mt-1">Product UI/UX Design</h3>
                            <p className="text-neutral-400 text-sm max-w-md mt-1.5">
                                Constructing interfaces structured around logical information discovery, functional data entry workflows, and clarity.
                            </p>
                            <div className="flex gap-2 mt-4 flex-wrap">
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">Figma</span>
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">Wireframing</span>
                                <span className="text-[11px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-700/50">Prototyping</span>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 left-0 md:left-auto md:right-10 md:bottom-0 w-full md:w-[45%] pointer-events-none transition-transform duration-500 group-hover:scale-102">
                            <Image
                                className="w-full h-auto object-contain"
                                src="/mobile_thumb2.png"
                                width={1200}
                                height={1200}
                                alt="Mobile app interface layout sample"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Experiences Section */}
            <section className="relative z-10">
                <div className="mt-40 mb-20">
                    <h1 id="experience" className="relative text-center md:text-4xl text-2xl text-white font-normal">
                        Experiences
                    </h1>
                    <p className="pt-4 text-center text-base text-neutral-400">
                        More at <a className="underline text-white" target="_blank" href="https://www.linkedin.com/in/deffrand-farera/">LinkedIn</a>
                    </p>
                </div>
                <div className="relative flex flex-col items-center justify-start h-fit">
                    <span className="absolute h-full w-1 rounded-full opacity-50 bg-linear-to-b from-transparent via-[rgb(80,80,80)] to-transparent"></span>
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className={`
                                my-8 md:w-full max-w-135 p-8 bg-[rgb(08,08,08,0.8)] border border-[rgb(200,200,200,0.2)] bg-blur-80 rounded-[10px] hover:scale-103 transition-all
                                ${i % 2 === 0 ? 'md:-translate-x-40 hover:rotate-1' : 'md:translate-x-40 hover:-rotate-1'}
                            `}
                        >
                            <div className="flex flex-col space-y-2">
                                <div className="flex flex-col md:flex-row mb-4 justify-between">
                                    <h2 className="md:text-xl text-lg text-white font-semibold">{exp.title}</h2>
                                    <p className="text-xs text-neutral-400">{exp.time}</p>
                                </div>
                                <p className="text-white text-md">{exp.at}  | {exp.type}</p>
                                <p className="text-sm text-neutral-400">{exp.desc}</p>
                                <div className="w-full pt-6 flex flex-wrap gap-2">
                                    {exp.stack.map((item, i) => (
                                        <div key={i} className={`w-fit px-4 py-2 text-sm rounded-full ${techTag[item].style}`}>{techTag[item].label}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Selected Works Section */}
            <section className="relative z-10">
                <div className="mt-40 mb-16">
                    <h1 id="works" className="text-2xl md:text-4xl text-white font-normal mb-3">
                        Selected Works
                    </h1>
                    <p className="text-neutral-400 text-sm md:text-base max-w-xl">
                        A curated collection of web applications, system architectures, and tools built to solve specific technical problems.
                    </p>
                </div>

                {/* Swapped min-h-screen out for h-auto to keep document bounds stable */}
                <section className="w-full h-auto flex flex-col items-end">
                    <div className="relative w-full">
                        {projects.map((project, i) => (
                            <div
                                key={project.title}
                                className="transition-all ease-in-out sticky top-shadow my-4 p-4 w-full h-2/3 rounded-xl bg-[rgb(08,08,08,0.9)] border border-[rgb(200,200,200,0.2)] backdrop-blur-lg flex flex-col md:flex-row gap-4 items-start hover:cursor-pointer hover:rotate-2"
                                style={{
                                    top: getTop(i),
                                    zIndex: getZ(i),
                                }}
                                onClick={() => router.push(`/${project.id}`)}
                            >
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={800}
                                    height={800}
                                    className="md:w-2/3 h-2/3 rounded-md"
                                    id={project.title}
                                    priority
                                />
                                <div className="w-full h-2/3 flex flex-col justify-between items-start">
                                    <div className="w-full flex justify-between">
                                        <p className="font-poppins text-white font-bold h-40 py-4 text-2xl">
                                            {project.title}
                                        </p>
                                        <p className="font-poppins text-gray-400 h-40 py-4 text-md w-1/2 text-end">
                                            {project.type}
                                        </p>
                                    </div>
                                    <div className="w-full flex justify-between font-poppins text-white text-xl border-b border-[rgb(255,255,255,0.5)] pb-2">
                                        <p>{i + 1}</p>
                                    </div>
                                    <div className="pt-4 flex flex-wrap gap-2">
                                        {project.stack.map((item, i) => (
                                            <div key={i} className={`w-fit px-4 py-2 text-sm rounded-full ${techTag[item].style}`}>{techTag[item].label}</div>
                                        ))}
                                    </div>
                                    <a href={project.url} className="text-white font-poppins pt-10 text-end w-full underline">
                                        See Details
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative z-50 w-full flex justify-center mt-24">
                        <a href="https://github.com/hideffrand" target="_blank" className="flex items-center justify-center gap-4 font-bold text-xl bg-[rgb(10,10,10)] text-white font-poppins title px-14 py-4 rounded-full border hover:bg-white hover:text-black hover:border-white">
                            See All Works
                        </a>
                    </div>
                </section>
            </section>
        </>
    )
}