import { ImageResponse } from "next/og"
import { projects } from "@/utils/data"
import { loadOgFonts, OG_SIZE, OGCard } from "@/utils/og"

export const alt = "Deffrand Farera - Project"
export const size = OG_SIZE
export const contentType = "image/png"

const clamp = (text: string, max = 150) =>
  text.length > max ? `${text.slice(0, max).trimEnd()}…` : text

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return new ImageResponse(
      <OGCard
        kicker="Deffrand Farera"
        title="Software Engineer."
        subtitle="Full stack application development, API integration, and product UI/UX, built end-to-end."
        footLeft="deff.online"
        footRight="Portfolio"
      />,
      { ...size, fonts: await loadOgFonts() }
    )
  }

  const position = projects.findIndex((p) => p.id === project.id) + 1

  return new ImageResponse(
    <OGCard
      kicker={`${project.type} · ${project.year}`}
      title={project.title}
      subtitle={clamp(project.desc)}
      footLeft="deff.online"
      footRight={`${String(position).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`}
    />,
    { ...size, fonts: await loadOgFonts() }
  )
}
