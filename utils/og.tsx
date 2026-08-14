import { readFile } from "node:fs/promises"
import { join } from "node:path"
import type { ReactNode } from "react"

export const OG_SIZE = { width: 1200, height: 630 }

export async function loadOgFonts() {
  const [light, medium, semibold] = await Promise.all([
    readFile(join(process.cwd(), "assets", "Poppins-Light.ttf")),
    readFile(join(process.cwd(), "assets", "Poppins-Medium.ttf")),
    readFile(join(process.cwd(), "assets", "Poppins-SemiBold.ttf")),
  ])

  return [
    { name: "Poppins", data: light, style: "normal" as const, weight: 300 as const },
    { name: "Poppins", data: medium, style: "normal" as const, weight: 500 as const },
    { name: "Poppins", data: semibold, style: "normal" as const, weight: 600 as const },
  ]
}

export function OGCard({
  kicker,
  title,
  subtitle,
  footLeft,
  footRight,
  children,
}: {
  kicker: string
  title: string
  subtitle?: string
  footLeft: string
  footRight: string
  children?: ReactNode
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0b",
        color: "#f2f2f0",
        fontFamily: "Poppins",
      }}
    >
      {/* ambient glow */}
      <div
        style={{
          position: "absolute",
          top: -240,
          right: -240,
          width: 620,
          height: 620,
          borderRadius: 9999,
          backgroundColor: "#ffffff",
          opacity: 0.04,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -260,
          left: -200,
          width: 480,
          height: 480,
          borderRadius: 9999,
          backgroundColor: "#ffffff",
          opacity: 0.02,
        }}
      />

      {/* top */}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <span
          style={{
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a3a3a3",
          }}
        >
          {kicker}
        </span>
      </div>

      {/* middle */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
        {children}
        <h1
          style={{
            margin: 0,
            fontSize: 88,
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.02,
            color: "#ffffff",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              margin: "26px 0 0",
              maxWidth: 860,
              fontSize: 26,
              fontWeight: 300,
              lineHeight: 1.55,
              color: "#a3a3a3",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* bottom */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "100%", height: 1, backgroundColor: "rgba(255,255,255,0.12)" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: 1, color: "#f2f2f0" }}>
            {footLeft}
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#737373",
            }}
          >
            {footRight}
          </span>
        </div>
      </div>
    </div>
  )
}
