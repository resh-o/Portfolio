export type ProjectStatus = 'Live' | 'Completed' | 'In Progress'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  problem: string
  tech: string[]
  status: ProjectStatus
  github?: string
  demo?: string
  features: string[]
  learned: string
  icon: string
  featured: boolean
  year: string
}

export const projects: Project[] = [
  {
    id: 'tradesman-copilot',
    name: 'Tradesman Copilot',
    tagline: 'AI quoting tool for South African tradespeople.',
    description:
      'Describe a job in plain language, get a professional itemised quote with realistic local pricing — ready to send in under a minute. Built for the South African trades market.',
    problem:
      'South African tradespeople spend hours manually calculating and formatting quotes. Tradesman Copilot removes that friction entirely — describe the job, AI generates the itemised quote with local pricing, export a professional PDF, get paid faster.',
    tech: ['Next.js', 'Supabase', 'Anthropic API', 'Groq API', 'Paystack', 'Resend', 'Google OAuth', 'Vercel'],
    status: 'Live',
    github: 'https://github.com/resh-o',
    features: [
      'AI quote generation from plain-language job descriptions',
      'Realistic local South African pricing database',
      'Professional PDF export ready to send to clients',
      'Google OAuth authentication',
      'Paystack payment integration',
      'Automated quote delivery via Resend',
    ],
    learned:
      'End-to-end SaaS architecture, multi-API integration and orchestration, South African market context, and shipping a real product used by real people. My first full production SaaS.',
    icon: '🔧',
    featured: true,
    year: '2024',
  },
  {
    id: 'atlas',
    name: 'Atlas',
    tagline: 'Personal AI assistant on a Raspberry Pi 5. Voice in, voice out.',
    description:
      'Telegram-based AI assistant deployed on a Raspberry Pi 5. Voice messages in, voice responses out — with persistent memory, notes, scheduled tasks, and live system monitoring.',
    problem:
      'I wanted a personal AI assistant I actually own. No cloud dependency for inference, always available, understands my context over time. Atlas runs on hardware in my room, accessible anywhere via Telegram and Tailscale.',
    tech: ['Python', 'Raspberry Pi 5', 'Telegram Bot API', 'Whisper', 'gTTS', 'Claude API', 'systemd', 'Tailscale'],
    status: 'Live',
    features: [
      'Voice message transcription with OpenAI Whisper (local)',
      'Text-to-speech voice responses via gTTS',
      'JSON-based persistent memory across all conversations',
      'Note-taking and scheduled task management',
      'Live system stats: CPU, RAM, temperature monitoring',
      'Remote access via Tailscale tunnel from anywhere',
      'Modular OOP/SOLID architecture with clean separation of concerns',
    ],
    learned:
      'Edge AI deployment on constrained hardware, Linux service management with systemd, modular Python architecture with SOLID principles, and the practical realities of owning your own AI infrastructure.',
    icon: '🤖',
    featured: true,
    year: '2024',
  },
  {
    id: 'agora',
    name: 'Agora',
    tagline: 'Philosophical discourse with history\'s greatest thinkers — in your terminal.',
    description:
      'Chat one-on-one with 12 of history\'s greatest philosophers, or orchestrate multi-philosopher debates on any topic. Built entirely for the terminal with a rich colourful UI.',
    problem:
      'Philosophy is best understood through dialogue, not textbooks. Agora creates a living seminar — pressure-test ideas against Nietzsche, debate ethics with Kant, or watch Socrates interrogate a modern concept in real time.',
    tech: ['Python', 'Google Gemini API', 'Rich'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Agora',
    features: [
      '12 philosopher personas with distinct voices and worldviews',
      'Multi-philosopher debate mode — philosophers argue with each other',
      'Session management with full persistent conversation history',
      'Colourful terminal UI built with the Rich library',
      'Clean OOP architecture: models, services, ui, utils layers',
    ],
    learned:
      'Deep persona engineering with LLMs — maintaining consistent philosophical voice across long conversations. Clean Python architecture patterns and complex multi-agent session state management.',
    icon: '🏛️',
    featured: false,
    year: '2024',
  },
  {
    id: 'zentara',
    name: 'Zentara',
    tagline: 'Fully local AI chatbot. No cloud, no cost, no data leaving your machine.',
    description:
      'A minimal AI chatbot with a clean React frontend and Node.js backend. Runs entirely on your machine using Ollama + Llama 3.2. Zero cloud dependency, zero API costs.',
    problem:
      'Every mainstream AI chatbot sends your data to third-party servers. Zentara runs entirely on your hardware — conversations stay private, there are no API costs, and it works fully offline.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Ollama', 'Llama 3.2'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Zentara',
    features: [
      'Real-time AI chat powered by local Llama 3.2 via Ollama',
      'Session memory — context preserved across conversations',
      'PostgreSQL-backed message history',
      'Clean, minimal chat UI',
      'Zero external API calls — fully air-gapped capable',
    ],
    learned:
      'Local LLM deployment trade-offs versus cloud APIs, full-stack JavaScript architecture, and why privacy-first design requires deliberate decisions at the system level.',
    icon: '💬',
    featured: false,
    year: '2024',
  },
  {
    id: 'cmcs',
    name: 'Contract Monthly Claim System',
    tagline: 'End-to-end claims management for contract lecturers.',
    description:
      'Full-stack MVC web application managing the monthly claims lifecycle for contract lecturers — from submission through coordinator review to academic manager approval.',
    problem:
      'Contract lecturers at universities deal with manual, paper-heavy claims processes. CMCS digitises the entire workflow with role-appropriate dashboards for each stakeholder.',
    tech: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'HTML', 'CSS'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Contract-Monthly-Claim-System',
    features: [
      'Role-based dashboards: Lecturer, Programme Coordinator, Academic Manager',
      'Claim submission with supporting document uploads',
      'Multi-stage approval workflow with full audit trail',
      'Search and filter across all data tables',
      'Secure role-based access control throughout',
    ],
    learned:
      'MVC architecture in the .NET ecosystem, role-based access control design, UX for data-heavy admin workflows, and the complexity of multi-user approval systems with real-world constraints.',
    icon: '📋',
    featured: false,
    year: '2023',
  },
  {
    id: 'solar-system',
    name: 'Solar System Simulation',
    tagline: 'Interactive planetary orbit visualisation — pure vanilla JavaScript.',
    description:
      'A browser-based interactive simulation of planetary orbits around the sun, rendered entirely with the HTML5 Canvas API. No frameworks, no dependencies.',
    problem:
      'A focused deep-dive into physics-based animation and the Canvas API — building something visually compelling with zero external dependencies.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Solar-System-Simulation',
    features: [
      'Accurate relative orbital periods for all planets',
      'Scaled planet sizes and orbital distances',
      'Smooth 60fps canvas rendering loop',
      'Interactive — click to focus on any planet',
    ],
    learned:
      'The Canvas API inside-out, trigonometric animation loops, physics-based rendering, and why vanilla JavaScript is often the right tool for creative coding.',
    icon: '🪐',
    featured: false,
    year: '2023',
  },
  {
    id: 'abc-retailer',
    name: 'ABC Retailer',
    tagline: 'Cloud-native retail management on the full Azure stack.',
    description:
      'Cloud-native retail management system managing customers, products, orders, and contracts — fully integrated with Azure Blob, Table, Queue, File Share, and Functions.',
    problem:
      'A practical exploration of cloud-native architecture using Azure\'s full storage stack — building a real application that leverages the right Azure service for each data type and workload.',
    tech: ['ASP.NET Core MVC', 'C#', 'Azure Blob Storage', 'Azure Table Storage', 'Azure Queue Storage', 'Azure File Share', 'Azure Functions'],
    status: 'Completed',
    github: 'https://github.com/resh-o/Retailer-Website',
    features: [
      'Product image hosting and display via Azure Blob Storage',
      'Async order processing via Azure Queue Storage',
      'Contract management via Azure File Share',
      'Customer/product/order CRUD via Azure Table Storage',
      'Serverless processing with Azure Functions',
    ],
    learned:
      'Azure cloud services in depth — knowing when to use Blob vs Table vs Queue vs File Share. Serverless function design patterns and practical cloud-native architecture.',
    icon: '☁️',
    featured: false,
    year: '2023',
  },
]
