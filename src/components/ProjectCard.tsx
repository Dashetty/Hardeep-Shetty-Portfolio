import type { FC } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../data/projects'
import { projectCardPalettes } from './projectPalettes'

type ProjectCardProps = {
  project: Project
  isExpanded: boolean
  isDimmed: boolean
  isDark: boolean
  onHover: () => void
  onLeave: () => void
  className?: string
}

const mergeClasses = (base: string, extra?: string) => (extra ? `${base} ${extra}` : base)

export const ProjectCard: FC<ProjectCardProps> = ({ project, isExpanded, isDimmed, isDark, onHover, onLeave, className }) => {
  const palette = isDark ? projectCardPalettes.dark : projectCardPalettes.light
  const containerClass = mergeClasses('relative h-full w-full cursor-pointer overflow-hidden rounded-3xl', className)

  const scale = isExpanded ? 1.03 : isDimmed ? 0.97 : 1
  const zIndex = isExpanded ? 20 : isDimmed ? 5 : 10
  const minHeight = isExpanded ? 480 : 300
  const cardShadow = isExpanded ? palette.expandedShadow : isDimmed ? palette.dimmedShadow : palette.baseShadow
  const accentWidth = isExpanded ? '100%' : isDimmed ? '30%' : '46%'
  const accentOpacity = isExpanded ? 1 : isDimmed ? 0.55 : 0.92

  return (
    <article
      className={containerClass}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        transform: `scale(${scale})`,
        transition: 'transform 340ms cubic-bezier(0.21, 0.82, 0.25, 1)',
        minHeight,
        zIndex,
      }}
    >
      <div
        className="relative flex h-full flex-col justify-between rounded-3xl border p-6 md:p-8"
        style={{
          backgroundColor: palette.canvas,
          borderWidth: 2,
          borderColor: isExpanded ? palette.ink : palette.canvasBorder,
          boxShadow: cardShadow,
          transition: 'border-color 260ms ease-out, box-shadow 320ms ease-out',
        }}
      >
        <div
          className="absolute left-0 top-0 h-1 rounded-tr-3xl"
          style={{
            width: accentWidth,
            background: `linear-gradient(90deg, ${palette.accentTerracotta}, ${palette.accentGold})`,
            opacity: accentOpacity,
            transition: 'width 420ms ease-out, opacity 260ms ease-out',
          }}
        />

        <div
          style={{
            opacity: isExpanded ? 0 : 1,
            pointerEvents: isExpanded ? 'none' : 'auto',
            transition: 'opacity 260ms ease-out',
            filter: isDimmed && !isExpanded ? 'blur(0px) brightness(0.95)' : 'none',
          }}
        >
          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em]" style={{ color: palette.accentTerracotta }}>
              {project.featured && (
                <span
                  className="rounded-full px-3 py-1 text-[0.65rem] font-semibold"
                  style={{
                    backgroundColor: `${palette.accentSage}1a`,
                    color: palette.ink,
                    border: `1px solid ${palette.accentSage}55`,
                  }}
                >
                  Featured
                </span>
              )}
              <span>{project.tags[0]}</span>
            </div>

            <h3 className="text-2xl font-semibold leading-tight md:text-3xl" style={{ color: palette.ink }}>
              {project.title}
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{
                color: palette.mutedText,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-medium"
                style={{
                  backgroundColor: palette.tagBg,
                  color: palette.ink,
                  border: `1px solid ${palette.tagBorder}`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          className="absolute inset-0 flex flex-col justify-between p-6 md:p-8"
          style={{
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? 'auto' : 'none',
            transition: 'opacity 260ms ease-out',
            background: palette.overlayGradient,
            borderRadius: 'inherit',
          }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold leading-tight md:text-3xl" style={{ color: palette.ink }}>
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: palette.ink }}>
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-4 pt-4" style={{ borderTop: `1px solid ${palette.canvasBorder}` }}>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-medium"
                  style={{
                    backgroundColor: palette.tagBgExpanded,
                    color: palette.ink,
                    border: `1px solid ${palette.tagBorderExpanded}`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold transition-all duration-300 hover:gap-3"
              style={{
                backgroundColor: palette.accentTerracotta,
                color: palette.ctaText,
                boxShadow: palette.ctaShadow,
              }}
            >
              <Github className="h-4 w-4" />
              <span>View Code</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="absolute -bottom-2 -right-2 rounded-sm"
          style={{
            width: isExpanded ? '24px' : '12px',
            height: isExpanded ? '24px' : '12px',
            backgroundColor: palette.accentGold,
            opacity: isExpanded ? 0.95 : 0.45,
            transition: 'all 260ms ease-out',
          }}
        />
      </div>
    </article>
  )
}

export default ProjectCard