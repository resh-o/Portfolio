import type { Metadata } from 'next'
import { Unbounded, Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const title = 'Reshaan Govender — Developer & Builder'
const description =
  'Reshaan Govender is a developer and builder in Gqeberha, South Africa, who ships real tools — including Tradesman, a live AI quoting product for South African tradespeople.'

export const metadata: Metadata = {
  metadataBase: new URL('https://reshaan.com'),
  title,
  description,
  keywords: ['Reshaan Govender', 'developer', 'builder', 'portfolio', 'Next.js', 'AI', 'South Africa', 'Gqeberha', 'Tradesman'],
  authors: [{ name: 'Reshaan Govender' }],
  creator: 'Reshaan Govender',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://reshaan.com',
    title,
    description,
    siteName: 'Reshaan Govender',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
      <body className={`${unbounded.variable} ${hanken.variable}`}>
        {children}
      </body>
    </html>
  )
}
