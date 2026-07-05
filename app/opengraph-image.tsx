import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Reshaan Govender — Developer & Builder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PAPER = '#EDECE6'
const INK = '#17161A'
const PINK = '#FF4B77'
const BLUE = '#0B4BE8'

// A stacked, offset name that mimics the site's misregistration signature.
function Reg({ text, top }: { text: string; top: number }) {
  const base = {
    position: 'absolute' as const,
    top,
    left: 0,
    fontSize: 150,
    fontWeight: 900,
    letterSpacing: '-6px',
    textTransform: 'uppercase' as const,
    lineHeight: 1,
  }
  return (
    <div style={{ position: 'relative', display: 'flex', width: '100%', height: 168 }}>
      <div style={{ ...base, color: PINK, transform: 'translate(-7px, 5px)' }}>{text}</div>
      <div style={{ ...base, color: BLUE, transform: 'translate(7px, -5px)' }}>{text}</div>
      <div style={{ ...base, color: INK }}>{text}</div>
    </div>
  )
}

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: PAPER,
          padding: 64,
          border: `14px solid ${INK}`,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: INK,
          }}
        >
          <span>Gqeberha · South Africa</span>
          <span>Ed. 2026 · No. 01</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Reg text="Reshaan" top={0} />
          <Reg text="Govender" top={0} />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: INK }}>
            Developer &amp; Builder
          </div>
          <div
            style={{
              display: 'flex',
              background: BLUE,
              color: PAPER,
              fontSize: 24,
              fontWeight: 700,
              padding: '10px 20px',
            }}
          >
            reshaan.com
          </div>
        </div>
      </div>
    ),
    size,
  )
}
