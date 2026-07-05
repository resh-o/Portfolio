export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['C# (.NET)', 'Python', 'TypeScript', 'JavaScript', 'Kotlin', 'Java', 'SQL', 'HTML'],
  },
  {
    label: 'Frameworks and tools',
    skills: ['ASP.NET Core', 'Next.js', 'React', 'Node.js', 'Supabase', 'REST/API integration'],
  },
  {
    label: 'Platforms',
    skills: ['Docker', 'Git', 'Azure', 'AWS'],
  },
  {
    label: 'Hardware and IoT',
    skills: ['Arduino', 'Embedded/IoT prototyping'],
  },
  {
    label: 'Core competencies',
    skills: [
      'Object-oriented design (GoF patterns)',
      'Software development lifecycle',
      'Database management',
      'Applied machine learning',
    ],
  },
]
