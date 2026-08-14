import { ImageResponse } from "next/og"
import { loadOgFonts, OG_SIZE, OGCard } from "@/utils/og"

export const alt = "Deffrand Farera — Software Engineer"
export const size = OG_SIZE
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <OGCard
      kicker="Deffrand Farera"
      title="Software Engineer."
      subtitle="Web systems engineering, API integration, and product UI/UX — built end-to-end."
      footLeft="deff.online"
      footRight="Portfolio"
    />,
    { ...size, fonts: await loadOgFonts() }
  )
}
