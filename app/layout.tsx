import type { Metadata } from 'next'
import { Playfair_Display, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Reshaan — Developer & Builder',
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
    title: 'Reshaan — Developer & Builder',
    description:
      'Developer, builder, and CS student from Gqeberha, South Africa. Shipping AI tools, full-stack products, and developer infrastructure with global ambition.',
    siteName: 'Reshaan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reshaan — Developer & Builder',
    description: 'Developer, builder, and CS student from Gqeberha, South Africa. Building with global ambition.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-canvas text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
