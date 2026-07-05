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
  // Kept as a visible placeholder until confirmed.
  expectedGraduation: '[TODO: confirm year]',
  facts: [
    { label: 'Degree', value: 'BSc — Computer & Information Sciences (Application Development)' },
    { label: 'Institution', value: 'Emeris University · Gqeberha, South Africa' },
    { label: 'Standing', value: 'Third year' },
    { label: 'Expected graduation', value: '[TODO: confirm year]', todo: true },
  ] satisfies Credential[],
  achievements: [
    {
      title: '1st place — University Hackathon',
      detail: 'Back-to-back wins, two years running.',
      note: '[TODO: confirm the two years to display]',
    },
    // [TODO: academic average / distinctions, if you want them shown.]
  ],
}
