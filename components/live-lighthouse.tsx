"use client"

import { useEffect, useState } from "react"

type Scores = {
  performance: number
  accessibility: number
  bestPractices: number
  seo: number
}

export default function LiveLighthouse({
  url,
  fallback,
}: {
  url: string
  fallback: Scores
}) {
  const [state, setState] = useState<"loading" | "done" | "error">("loading")
  const [scores, setScores] = useState<Scores | null>(null)

  useEffect(() => {
    let active = true
    fetch(`/api/lighthouse?url=${encodeURIComponent(url)}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (!active) return
        if (data.error) setState("error")
        else {
          setScores(data)
          setState("done")
        }
      })
      .catch(() => {
        if (active) setState("error")
      })
    return () => {
      active = false
    }
  }, [url])

  if (state === "loading") {
    return (
      <div className="flex items-center gap-2 text-sm text-neutral-500">
        <span className="animate-pulse">Running live Lighthouse audit…</span>
      </div>
    )
  }

  const shown = state === "done" && scores ? scores : fallback

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10">
      <MetricCell label="Performance" value={shown.performance} />
      <MetricCell label="Accessibility" value={shown.accessibility} />
      <MetricCell label="Best Practices" value={shown.bestPractices} />
      <MetricCell label="SEO" value={shown.seo} />
    </div>
  )
}

function MetricCell({ label, value }: { label: string; value: number }) {
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
