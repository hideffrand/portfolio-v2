'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const links = [
    {
        href: "mailto:hideffrand@gmail.com",
        src: "/gmail.svg",
        alt: "Gmail",
        // final resting position relative to center (px), and vertical offset class
        x: -160,
        y: 48,        // positive = down (translate-y-12 = 48px)
        hoverY: 40,
    },
    {
        href: "https://www.linkedin.com/in/deffrand-farera/",
        src: "/linkedin.svg",
        alt: "LinkedIn",
        x: 0,
        y: 0,
        hoverY: -8,
    },
    {
        href: "https://www.github.com/hideffrand",
        src: "/github.svg",
        alt: "Github",
        x: 160,
        y: 48,
        hoverY: 40,
    },
]

export default function Footer() {
    const ref = useRef<HTMLDivElement>(null)
    const [triggered, setTriggered] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Re-arm every time the footer crosses the threshold, in either
                // direction — leaving resets it instantly (0ms, see below), and
                // entering again replays the spring-out burst.
                setTriggered(entry.isIntersecting)
            },
            { threshold: 0.4 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div id="contact" className="relative mt-80" ref={ref}>
            <div className="flex flex-col items-center space-y-2 mb-24">
                <h1 className="text-center text-2xl md:text-4xl text-white font-light tracking-tight">
                    Let&apos;s Connect or Say Hi !
                </h1>
                <p className="text-xs text-white/50">(promise u i will say hi back within 10minutes)</p>
            </div>

            <footer className="relative pb-32 flex flex-col justify-between items-center">

                {/* Icons */}
                <div className="relative flex items-end z-10" style={{ height: 120 }}>
                    {links.map((link, i) => (
                        <a
                            key={link.alt}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="md:w-20 md:h-20 w-14 h-14 absolute transition-all duration-200 hover:cursor-pointer"
                            style={{
                                /*
                                 * Before trigger: all icons are hidden at the bottom of the beam.
                                 * After trigger: they burst outward to their final resting positions.
                                 */
                                left: "50%",
                                top: "50%",
                                transform: triggered
                                    ? `translate(calc(-50% + ${link.x}px), calc(-50% + ${link.y}px))`
                                    : `translate(-50%, 140px)`,
                                opacity: triggered ? 1 : 0,
                                transitionProperty: "transform, opacity",
                                transitionDuration: triggered ? "600ms" : "0ms",
                                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", // spring
                                transitionDelay: triggered ? `${i * 80}ms` : "0ms",
                                // Hover offset applied via CSS custom approach below
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLElement
                                el.style.transform = `translate(calc(-50% + ${link.x}px), calc(-50% + ${link.hoverY}px))`
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLElement
                                el.style.transform = `translate(calc(-50% + ${link.x}px), calc(-50% + ${link.y}px))`
                            }}
                        >
                            <Image
                                className="w-full h-full object-contain"
                                src={link.src}
                                height={800}
                                width={800}
                                alt={link.alt}
                                priority
                            />
                        </a>
                    ))}
                </div>

                {/* Beam glow */}
                <div
                    className="absolute w-80 h-60 bg-gradient-to-t from-white/20 to-transparent bottom-0 blur-2xl rounded-full animate-pulse"
                    style={{ animationDuration: "2s" }}
                />

                {/* Beam SVG */}
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