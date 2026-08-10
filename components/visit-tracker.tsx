'use client'

import { useEffect } from "react"

export default function VisitTracker() {
  useEffect(() => {
    const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!WEB3FORMS_ACCESS_KEY) return

    const params = new URLSearchParams(window.location.search)
    const source = params.get("source")

    const url = new URL(window.location.href)
    if (source) {
      url.searchParams.delete("source")
      window.history.replaceState({}, "", url.pathname + url.search + url.hash)
    }

    const now = new Date()
    const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
    if (localStorage.getItem("pv:tracked") === today) return

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: source ? `Portfolio visit from "${source}"` : "Portfolio visit",
      from_name: "Portfolio Visitor Tracker",
      source: source || "direct",
      page: url.pathname + url.search + url.hash,
      referrer: document.referrer || "direct",
      visited_at: now.toISOString(),
      screen: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
    }

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) localStorage.setItem("pv:tracked", today)
      })
      .catch(() => {})
  }, [])

  return null
}
