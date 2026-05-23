import type { Metadata } from 'next'
import { Bricolage_Grotesque, Newsreader } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Reshaan. Developer and Builder.',
  description:
    'Developer, builder, and CS student from Gqeberha, South Africa. Shipping AI tools, full-stack products, and developer infrastructure with global ambition.',
  keywords: ['developer', 'portfolio', 'Next.js', 'AI', 'full-stack', 'South Africa', 'Gqeberha', 'Reshaan'],
  authors: [{ name: 'Reshaan' }],
  creator: 'Reshaan',
  metadataBase: new URL('https://reshaan.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://reshaan.dev',
    title: 'Reshaan. Developer and Builder.',
    description:
      'Developer, builder, and CS student from Gqeberha, South Africa. Shipping AI tools, full-stack products, and developer infrastructure with global ambition.',
    siteName: 'Reshaan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reshaan. Developer and Builder.',
    description: 'Developer, builder, and CS student from Gqeberha, South Africa. Building with global ambition.',
  },
  robots: { index: true, follow: true },
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${bricolage.variable} ${newsreader.variable}`}>
        {children}
      </body>
    </html>
  )
}
