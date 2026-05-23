export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['C#', 'Kotlin', 'Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    skills: ['Next.js', 'React', 'ASP.NET Core MVC', 'Tailwind CSS', 'Express'],
  },
  {
    label: 'AI / ML',
    skills: ['Anthropic API', 'Groq API', 'Google Gemini', 'Ollama', 'Whisper'],
  },
  {
    label: 'Cloud & Infra',
    skills: ['Supabase', 'Vercel', 'Azure', 'Tailscale', 'Linux', 'systemd'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'VS Code', 'Cursor', 'Paystack', 'Resend'],
  },
  {
    label: 'Hardware',
    skills: ['Raspberry Pi 5', 'ESP32'],
  },
]

export const currentlyLearning =
  'Deepening into LLM architecture and fine-tuning, Rust for systems-level projects, and the business mechanics of building SaaS in emerging markets.'
