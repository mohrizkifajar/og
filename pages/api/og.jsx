import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req, res) {
  const { searchParams } = new URL(req.url)

  // ?title=<title>
  const hasTitle = searchParams.has('title')
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'Fajar Blog'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #bae6fd, #e0f2fe)',
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            padding: '5px 40px',
            width: 'auto',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(90deg, #be123c, #fbbf24)',
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  )
}
