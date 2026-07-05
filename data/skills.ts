export interface SkillGroup {
  label: string
  skills: string[]
}

// Languages/frameworks are derived only from the six projects.
// Platforms/tools are the confirmed set (Docker, Git, Azure, AWS) plus
// infrastructure the projects actually run on.
export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C#', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    skills: ['Next.js', 'React', 'Node.js', 'Express', 'ASP.NET Core MVC', 'Tailwind CSS'],
  },
  {
    label: 'AI',
    skills: ['Anthropic API', 'Groq API', 'Google Gemini', 'Ollama'],
  },
  {
    label: 'Platforms & tools',
    skills: ['Docker', 'Git', 'Azure', 'AWS', 'Supabase', 'Vercel', 'SQL Server', 'Paystack'],
  },
]

// [TODO: add anything else from your resume you want listed — extra languages,
// tools, or platforms not derivable from the six projects above.]
