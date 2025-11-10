export type Project = {
  title: string
  description: string
  image: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'WebWay',
    description: 'Minimal portfolio scaffolded with Vite, React, TailwindCSS, and HeroUI.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'Another Project',
    description: 'Replace with your own project description and link.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
]


