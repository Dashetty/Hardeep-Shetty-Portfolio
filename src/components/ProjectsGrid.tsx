import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projectCardPalettes } from './projectPalettes'
import { projects } from '../data/projects'

const layoutClasses = ['sm:col-span-2 lg:col-span-2', '', 'lg:col-span-2']

export const ProjectsGrid: FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') return
    setIsDark(document.documentElement.classList.contains('dark'))

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ isDark: boolean }>).detail
      if (detail && typeof detail.isDark === 'boolean') {
        setIsDark(detail.isDark)
      }
    }

    document.addEventListener('theme-changed', handler as EventListener)
    return () => {
      document.removeEventListener('theme-changed', handler as EventListener)
    }
  }, [])

  const palette = isDark ? projectCardPalettes.dark : projectCardPalettes.light

  const handleHover = (id: number) => setExpandedId(id)
  const handleLeave = () => setExpandedId(null)

  return (
    <div className="space-y-16">
      <div
        className="relative rounded-[2.5rem] border px-4 py-10 sm:px-6 md:px-8 lg:px-12"
        style={{
          borderColor: palette.sectionBorder,
          background: palette.sectionBackground,
          boxShadow: palette.sectionShadow,
        }}
        onMouseLeave={handleLeave}
      >
        <div
          className="pointer-events-none absolute inset-x-6 top-0 h-[1px] rounded-full"
          style={{ background: palette.sectionLine }}
        />

        <div className="grid auto-rows-[minmax(300px,_auto)] grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[minmax(340px,_auto)] lg:grid-cols-3">
          {projects.map((project, index) => {
            const layoutClass = layoutClasses[index] ?? ''
            const isExpanded = expandedId === project.id
            const isDimmed = expandedId !== null && expandedId !== project.id

            return (
              <div
                key={project.id}
                className={`relative transition-[transform,filter] duration-500 ease-out ${layoutClass}`}
                style={{
                  transform: isExpanded ? 'translateY(-10px)' : 'translateY(0)',
                  filter: isDimmed ? 'saturate(0.92) brightness(0.96)' : 'none',
                  zIndex: isExpanded ? 30 : isDimmed ? 5 : 10,
                }}
                onMouseEnter={() => handleHover(project.id)}
                onFocus={() => handleHover(project.id)}
                onBlur={handleLeave}
                onMouseLeave={handleLeave}
              >
                <ProjectCard
                  project={project}
                  isExpanded={isExpanded}
                  isDimmed={isDimmed}
                  isDark={isDark}
                  onHover={() => handleHover(project.id)}
                  onLeave={handleLeave}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div
        className="flex items-center justify-center gap-3 rounded-3xl px-8 py-6 text-center transition-all duration-300"
        style={{
          border: `1px solid ${palette.accentSage}55`,
          background: palette.sectionBackground,
          color: palette.ink,
        }}
      >
        <Github className="h-5 w-5" style={{ color: palette.accentTerracotta }} />
        <p className="text-sm" style={{ color: palette.ink }}>
          Want to see more? Visit my{' '}
          <a
            href="https://github.com/Dashetty"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-4 transition-colors"
            style={{ color: palette.accentTerracotta }}
          >
            GitHub profile
          </a>
        </p>
      </div>
    </div>
  )
}

export default ProjectsGrid
