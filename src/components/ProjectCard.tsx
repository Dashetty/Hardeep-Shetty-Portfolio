import type { FC } from 'react'
import { useEffect, useState } from 'react'
import type { Project } from '../data/projects'
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Link01Icon } from '@hugeicons/core-free-icons'


type ExtendedProject = Project & {
  techStack?: string[]
  images?: string[]
}

export const ProjectCard: FC<{ project: ExtendedProject }> = ({ project }) => {
  const fallbackImages = [project.image, project.image, project.image]
  const data: ExtendedProject = {
    title: project.title,
    description: project.description,
    image: project.image,
    github: project.github,
    demo: project.demo,
    techStack: project.techStack ?? ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    images: project.images && project.images.length > 0 ? project.images : fallbackImages,
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const total = data.images?.length ?? 1
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % total)
    }, 3000)
    return () => clearInterval(interval)
  }, [data.images])

  const goToImage = (index: number) => setCurrentImageIndex(index)
  const goToPrevious = () => setCurrentImageIndex((prev) => (prev === 0 ? (data.images?.length ?? 1) - 1 : prev - 1))
  const goToNext = () => setCurrentImageIndex((prev) => (prev + 1) % (data.images?.length ?? 1))

  return (
    <div className="w-full rounded-3xl border border-border bg-card backdrop-blur-xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 transition-transform duration-500 hover:-translate-y-2 hover:border-foreground">
      <div className="flex-[2] flex flex-col justify-between min-w-0 space-y-10">
        <div>
          <h2 className="font-raleway text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">{data.title}</h2>
          <p className="font-raleway text-muted-foreground text-lg leading-relaxed">{data.description}</p>

          {data.techStack && data.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {data.techStack.map((tech) => (
                <span key={tech} className="font-raleway px-3 py-1 rounded-lg text-sm bg-muted text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {(data.github || data.demo) && (
          <div className="flex flex-wrap gap-4">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-raleway px-6 py-3 rounded-full bg-primary text-primary-foreground inline-flex items-center gap-2 transition-colors hover:opacity-90"
              >
                <HugeiconsIcon icon={Github01Icon} size={18} /> View Code
              </a>
            )}
            {data.demo && (
              <a
                href={data.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-raleway px-6 py-3 rounded-full border border-foreground text-foreground inline-flex items-center gap-2 transition-colors hover:border-foreground"
              >
                <HugeiconsIcon icon={Link01Icon} size={18} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right Side - Image Slider (60%) */}
      <div className="flex-[3] flex flex-col min-w-0 space-y-6">
        <div className="rounded-2xl border border-border bg-[color-mix(in_oklab,var(--background) 85%,#ffffff 5%)]">
          <div className="relative w-full h-[520px] md:h-[560px] lg:h-[520px] rounded-2xl overflow-hidden bg-muted">
            {data.images?.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`${data.title} screenshot ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[color-mix(in_oklab,var(--foreground) 12%,transparent)] text-foreground flex items-center justify-center shadow-lg transition-all hover:bg-[color-mix(in_oklab,var(--foreground) 18%,transparent)]"
            >
              <span className="text-xl">‹</span>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[color-mix(in_oklab,var(--foreground) 12%,transparent)] text-foreground flex items-center justify-center shadow-lg transition-all hover:bg-[color-mix(in_oklab,var(--foreground) 18%,transparent)]"
            >
              <span className="text-xl">›</span>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-5 pb-6">
            {data.images?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'bg-foreground w-8'
                    : 'bg-[color-mix(in_oklab,var(--foreground) 30%,transparent)] w-2 hover:bg-[color-mix(in_oklab,var(--foreground) 55%,transparent)]'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-left text-sm text-muted-foreground">
          <span className="font-raleway italic">
            {currentImageIndex + 1} / {data.images?.length ?? 1}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard