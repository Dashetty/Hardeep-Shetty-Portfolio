export type Project = {
  id: number
  title: string
  description: string
  fullDescription: string
  github: string
  demo?: string
  tags: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Vista Club Forms Collector',
    description:
      'Unified intake desk with AI-assisted summaries so organisers can capture frank feedback without chasing forms.',
    fullDescription:
      'An all-in-one forms hub featuring a dedicated administrator console to craft surveys, moderate responses, and unlock AI-authored sentiment highlights via the Gemini API. Anonymous submissions encourage candid insight across clubs, events, and team retrospectives.',
    github: 'https://github.com/Dashetty/Vista-Club-Forms-Collector',
    tags: ['React.js', 'Express.js','Gemini API', 'Supabase'],
    featured: true,
  },
  {
    id: 2,
    title: 'WebWay Parcel Relay',
    description:
      'Regional parcels rerouted through idle bus capacity to keep deliveries swift, affordable, and earth-friendly.',
    fullDescription:
      'A micro-logistics relay that transforms scheduled bus services into last-mile carriers. WebWay orchestrates parcel intake, route optimisation, and rider notifications to deliver same-day drop-offs without the overhead of a bespoke fleet.',
    github: 'https://github.com/Dashetty/HF24-Neurotic',
    tags: ['Logistics', 'Next.js', 'Prisma','gRPC'],
  },
  {
    id: 3,
    title: 'The Save Spins',
    description:
      'A minimalist vault for links, clips, and notes into one searchable feed you can trust on a busy day.',
    fullDescription:
      'Personal knowledge bank that captures URLs, snippets, and stream-of-consciousness notes in a single, searchable canvas. Opinionated categorisation keeps everything easy to resurface when inspiration strikes later.',
    github: 'https://github.com/Dashetty/TheSaveSpins',
    tags: ['Productivity', 'React', 'Cloud Functions'],
  },
]


