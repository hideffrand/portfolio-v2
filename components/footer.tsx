'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const links = [
    {
        href: "mailto:hideffrand@gmail.com",
        src: "/gmail.svg",
        alt: "Gmail",
        x: -160,
        mobileX: -90,
        y: 48,
        mobileY: 36,
        hoverY: 40,
        mobileHoverY: 28,
    },
    {
        href: "https://www.linkedin.com/in/deffrand-farera/",
        src: "/linkedin.svg",
        alt: "LinkedIn",
        x: 0,
        mobileX: 0,
        y: 0,
        mobileY: 0,
        hoverY: -8,
        mobileHoverY: -8,
        featured: true,
    },
    {
        href: "https://www.github.com/hideffrand",
        src: "/github.svg",
        alt: "Github",
        x: 160,
        mobileX: 90,
        y: 48,
        mobileY: 36,
        hoverY: 40,
        mobileHoverY: 28,
    },
]

export default function Footer() {
    const ref = useRef<HTMLDivElement>(null)
    const [triggered, setTriggered] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)

        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setTriggered(entry.isIntersecting)
            },
            { threshold: 0.4 }
        )
        observer.observe(el)
        return () => {
            observer.disconnect()
            window.removeEventListener("resize", checkMobile)
        }
    }, [])

    return (
        <div id="contact" className="relative mt-80" ref={ref}>
            <div className="flex flex-col items-center space-y-2 mb-24">
                <h1 className="text-center text-2xl md:text-4xl text-white font-light tracking-tight">
                    <span className="font-medium">Looking for a developer?</span>
                    <br />
                    <span className="italic">You just found one!</span>
                </h1>
            </div>

            <footer className="relative pb-32 flex flex-col justify-between items-center">
                <div className="relative flex items-end z-10" style={{ height: 120 }}>
                    {links.map((link, i) => {
                        const currentX = isMobile ? link.mobileX : link.x
                        const currentY = isMobile ? link.mobileY : link.y
                        const currentHoverY = isMobile ? link.mobileHoverY : link.hoverY

                        return (
                            <a
                                key={link.alt}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                className="w-16 h-16 md:w-20 md:h-20 absolute transition-all duration-200 hover:cursor-pointer"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: triggered
                                        ? `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`
                                        : `translate(-50%, 140px)`,
                                    opacity: triggered ? 1 : 0,
                                    transitionProperty: "transform, opacity",
                                    transitionDuration: triggered ? "600ms" : "0ms",
                                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    transitionDelay: triggered ? `${i * 80}ms` : "0ms",
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement
                                    el.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentHoverY}px))`
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement
                                    el.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`
                                }}
                            >
                                <div className="relative w-full h-full">
                                    <div
                                        className={`relative w-full h-full ${link.featured && triggered
                                            ? "scale-120 animate-bounce drop-shadow-[0_0_20px_rgba(20,120,255,0.8)]"
                                            : ""
                                            }`}
                                        style={link.featured ? { animationDuration: "1.8s" } : undefined}
                                    >
                                        <Image
                                            className="w-full h-full object-contain"
                                            src={link.src}
                                            height={800}
                                            width={800}
                                            alt={link.alt}
                                            priority
                                        />
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>

                <div
                    className="absolute w-80 h-60 bg-gradient-to-t from-white/20 to-transparent bottom-0 blur-2xl rounded-full animate-pulse"
                    style={{ animationDuration: "2s" }}
                />

                <Image
                    className="absolute bottom-0 z-0 opacity-60"
                    src="/beam.svg"
                    width={700}
                    height={700}
                    alt=""
                    aria-hidden
                />
            </footer>
        </div>
    )
}