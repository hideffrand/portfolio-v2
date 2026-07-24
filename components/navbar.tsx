'use client'

import { useEffect, useState } from "react"
import { FaHouse, FaLaptopCode } from "react-icons/fa6"
import { IoMdCall } from "react-icons/io"
import { FaBusinessTime } from "react-icons/fa"
import { GoProjectRoadmap } from "react-icons/go"
import { useLenis } from "@/components/smooth-scroll"

interface ILinks {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const links: ILinks[] = [
  { href: "/#home", text: "Home", icon: <FaHouse size={15} /> },
  { href: "/#services", text: "Skills", icon: <FaLaptopCode size={16} /> },
  { href: "/#experience", text: "Experiences", icon: <FaBusinessTime size={16} /> },
  { href: "/#works", text: "Works", icon: <GoProjectRoadmap size={16} /> },
  { href: "/#contact", text: "Contact", icon: <IoMdCall size={16} /> },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const lenis = useLenis()

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50

      if (isAtBottom) {
        setActiveSection("/#contact")
        return
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`/#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    links.forEach((link) => {
      const id = link.href.split("#")[1]
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    const handleScrollFallback = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
      if (isAtBottom) {
        setActiveSection("/#contact")
      }
    }

    window.addEventListener("scroll", handleScrollFallback)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScrollFallback)
    }
  }, [])

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const id = href.split("#")[1]
    const target = document.getElementById(id)
    if (!target) return // let the browser handle it if section isn't on this page

    e.preventDefault()
    lenis?.scrollTo(target, { offset: -80 })
    // keep the URL hash in sync without triggering a native jump
    window.history.pushState(null, "", href)
  }

  return (
    <nav className="fixed top-0 right-1/2 translate-x-1/2 z-50 mt-6 flex items-center justify-between md:justify-center gap-4 md:gap-2 px-6 py-2.5 w-[calc(100%-2rem)] md:w-fit bg-neutral-900/30 border border-white/[0.06] backdrop-blur-xl rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transition-all duration-300">
      {links.map((link, i) => {
        const isActive = activeSection === link.href
        return (
          <a
            key={i}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`relative px-3 py-1.5 transition-all duration-300 flex items-center gap-2 rounded-full font-sans text-xs tracking-wide hover:scale-105 active:scale-95 ${
              isActive ? "text-blue-400 bg-white/4" : "text-white hover:text-blue-400"
            }`}
          >
            <span className="flex items-center justify-center">{link.icon}</span>
            <span className="hidden md:inline font-medium">{link.text}</span>

            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-300 rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]" />
            )}
          </a>
        )
      })}
    </nav>
  )
}