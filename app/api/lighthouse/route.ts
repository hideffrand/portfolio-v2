import { NextResponse } from "next/server"

const TTL_MS = 6 * 60 * 60 * 1000
const cache = new Map<string, { expires: number; scores: LighthouseScores }>()

export interface LighthouseScores {
  performance: number
  accessibility: number
  bestPractices: number
  seo: number
}

type PsiResponse = {
  lighthouseResult?: {
    categories?: Record<string, { score?: number }>
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get("url")
  if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 })

  const cached = cache.get(url)
  if (cached && cached.expires > Date.now()) {
    return NextResponse.json(cached.scores)
  }

  const apiKey = process.env.PAGESPEED_API_KEY
  const api =
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile` +
    (apiKey ? `&key=${apiKey}` : "")

  let data: PsiResponse
  try {
    const res = await fetch(api, { signal: AbortSignal.timeout(60000) })
    if (!res.ok) {
      return NextResponse.json({ error: `pagespeed ${res.status}` }, { status: 502 })
    }
    data = (await res.json()) as PsiResponse
  } catch {
    return NextResponse.json({ error: "pagespeed request failed" }, { status: 502 })
  }

  const cats = data?.lighthouseResult?.categories
  if (!cats) {
    return NextResponse.json({ error: "no lighthouse result" }, { status: 502 })
  }

  const scores: LighthouseScores = {
    performance: Math.round((cats.performance?.score ?? 0) * 100),
    accessibility: Math.round((cats.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((cats["best-practices"]?.score ?? 0) * 100),
    seo: Math.round((cats.seo?.score ?? 0) * 100),
  }

  cache.set(url, { expires: Date.now() + TTL_MS, scores })
  return NextResponse.json(scores)
}
