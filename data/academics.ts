export interface Credential {
  label: string
  value: string
  todo?: boolean
}

export const academics = {
  degree: 'Bachelor of Computer and Information Sciences (Application Development)',
  year: 'Third year',
  university: 'Emeris University',
  location: 'Gqeberha, South Africa',
  expectedGraduation: '2026',
  facts: [
    { label: 'Degree', value: 'BSc in Computer & Information Sciences (Application Development)' },
    { label: 'Institution', value: 'Emeris University · Gqeberha, South Africa' },
    { label: 'Standing', value: 'Third year' },
    { label: 'Expected graduation', value: '2026' },
    { label: 'Academic average', value: '90% across 5 semesters' },
  ] satisfies Credential[],
  achievements: [
    {
      title: '1st place, University Hackathon',
      detail: 'Two years running, in 2024 and 2025.',
    },
  ],
}
