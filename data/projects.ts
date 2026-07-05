export type ProjectStatus = 'Live' | 'Completed' | 'In Progress'

export interface Metric {
  value: string
  label: string
}

export interface Project {
  /** Print-style running number, 01–06. */
  no: string
  id: string
  name: string
  tagline: string
  description: string
  problem: string
  tech: string[]
  status: ProjectStatus
  github?: string
  liveSiteUrl?: string
  features: string[]
  learned: string
  featured: boolean
  year: string
  /** Verified headline numbers, shown only where they exist. */
  metrics?: Metric[]
  /** Visible flag for anything still unconfirmed. Rendered in the UI. */
  todo?: string
}

export const projects: Project[] = [
  // ── Featured ──────────────────────────────────────────
  {
    no: '01',
    id: 'tradesman',
    name: 'Tradesman',
    tagline: 'A live, AI-powered quoting tool for South African tradespeople.',
    description:
      'Describe a job in plain language and Tradesman returns a professional, itemised quote with realistic local pricing — ready to send in under 30 seconds. Built for the South African trades market and used by real tradespeople.',
    problem:
      'South African tradespeople lose hours building quotes by hand. Tradesman removes that friction: describe the job, the AI generates an accurate itemised quote with local pricing, and you send a professional document minutes later.',
    tech: ['Next.js', 'Supabase', 'Anthropic API', 'Groq API', 'Paystack', 'Resend', 'Google OAuth', 'Vercel'],
    status: 'Live',
    liveSiteUrl: 'https://tradesman.to',
    github: 'https://github.com/resh-o/Tradesman',
    metrics: [
      { value: '98%', label: 'quote accuracy' },
      { value: '<30s', label: 'to a finished quote' },
      { value: 'Live', label: 'at tradesman.to' },
    ],
    features: [
      'AI quote generation from plain-language job descriptions',
      '98% quote accuracy against real job pricing',
      'Finished, itemised quotes in under 30 seconds',
      'Realistic local South African pricing',
      'Google OAuth sign-in and Paystack payments',
      'Automated quote delivery via Resend',
    ],
    learned:
      'End-to-end SaaS architecture, orchestrating multiple AI and payment APIs, and the discipline of shipping a real product that people rely on to get paid.',
    featured: true,
    year: '2024',
  },
  {
    no: '02',
    id: 'techmove',
    name: 'TechMove',
    tagline: '[TODO: one-line description — confirm with Reshaan]',
    description:
      '[TODO] A Dockerized project on Reshaan\'s GitHub. The public description and stack still need to be confirmed before this copy goes live — no details are being invented here.',
    problem:
      '[TODO: what problem TechMove solves — to confirm.]',
    tech: ['Docker', '[TODO: rest of stack]'],
    status: 'Completed',
    github: 'https://github.com/resh-o',
    features: [
      '[TODO: confirm feature list from the repo.]',
    ],
    learned:
      '[TODO: to confirm.]',
    featured: true,
    year: '[TODO]',
    todo: 'No repo named "TechMove" was found on github.com/resh-o. Confirm the exact repo, one-line description, stack, and link.',
  },
  {
    no: '03',
    id: 'agora',
    name: 'Agora',
    tagline: 'A multi-persona AI debate tool that runs in your terminal.',
    description:
      "Chat one-on-one with 12 philosopher personas, or set them against each other in a live debate on any topic. A colourful terminal application powered by the Google Gemini API.",
    problem:
      'Philosophy lands harder as dialogue than as a textbook. Agora stages a living seminar in the terminal — pressure-test an idea against Nietzsche, or watch twelve thinkers argue a question out in real time.',
    tech: ['Python', 'Google Gemini API', 'Rich'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Agora',
    features: [
      '12 philosopher personas, each with a distinct voice',
      'Multi-persona debate mode — the philosophers argue with each other',
      'Persistent, resumable conversation history',
      'Colourful terminal UI built with the Rich library',
      'Clean OOP architecture: models, services, UI, utils',
    ],
    learned:
      'Persona engineering with LLMs and holding a consistent voice across long conversations, plus clean Python architecture for multi-agent session state.',
    featured: true,
    year: '2024',
  },

  // ── More builds ───────────────────────────────────────
  {
    no: '04',
    id: 'zentara',
    name: 'Zentara',
    tagline: 'A local-first AI chat app. Nothing leaves your machine.',
    description:
      'A minimal AI chatbot with a React front end and a Node.js back end that runs entirely on your own hardware using Ollama. No cloud, no API costs, no data leaving the machine.',
    problem:
      'Mainstream chatbots send your conversations to third-party servers. Zentara runs the model locally, so chats stay private, cost nothing to run, and work offline.',
    tech: ['React', 'Node.js', 'Express', 'Ollama', 'Llama 3.2'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Zentara',
    features: [
      'Real-time chat powered by a local model via Ollama',
      'Session memory preserved across conversations',
      'Message history persistence',
      'Clean, minimal chat interface',
      'Zero external API calls — capable of running fully offline',
    ],
    learned:
      'The trade-offs of local LLM inference versus cloud APIs, full-stack JavaScript architecture, and what privacy-first design actually demands at the system level.',
    featured: false,
    year: '2024',
  },
  {
    no: '05',
    id: 'cmcs',
    name: 'Contract Monthly Claim System',
    tagline: 'End-to-end claims management for contract lecturers.',
    description:
      'A full-stack ASP.NET Core MVC web application that runs the monthly claims lifecycle for contract lecturers — from submission, through coordinator review, to academic-manager approval.',
    problem:
      'Contract lecturers deal with manual, paper-heavy claims. This system digitises the whole workflow with a role-appropriate dashboard for each stakeholder.',
    tech: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'HTML', 'CSS'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Contract-Monthly-Claim-System',
    features: [
      'Role-based dashboards: Lecturer, Programme Coordinator, Academic Manager',
      'Claim submission with supporting-document uploads',
      'Multi-stage approval workflow',
      'Search and filter across claim data',
      'Role-based access control throughout',
    ],
    learned:
      'MVC architecture in the .NET ecosystem, role-based access control, and designing UX for data-heavy, multi-user approval workflows.',
    featured: false,
    year: '2023',
  },
  {
    no: '06',
    id: 'solar-system',
    name: 'Solar System Simulation',
    tagline: 'Planetary orbits, visualised in vanilla JavaScript.',
    description:
      'A browser-based visualisation of the planets orbiting the sun, built from three files — index.html, script.js, style.css — with no frameworks or dependencies.',
    problem:
      'A focused study in animation and the browser: build something visually satisfying with plain JavaScript and nothing else.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Solar-System-Simulation',
    features: [
      'Animated orbits of the planets around the sun',
      'Built in vanilla JavaScript — no frameworks',
      'Self-contained: index.html, script.js, style.css',
    ],
    learned:
      'Animation loops in the browser and why plain JavaScript is often the right tool for small creative-coding projects.',
    featured: false,
    year: '2023',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const moreBuilds = projects.filter((p) => !p.featured)
