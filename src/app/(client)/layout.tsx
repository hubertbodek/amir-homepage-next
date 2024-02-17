import type { Metadata, Viewport } from 'next'
import { Sora } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

import 'styles/globals.css'
import Layout from 'components/shared/layout'

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_VERCEL_URL || 'https://amir-metal.com/'),
  title: {
    template: '%s | Amir Metal',
    default: 'Amir Metal - Innowacyjne rozwiązania metalurgiczne',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ fontFamily: sora.style.fontFamily }}>
      <body className="overflow-x-hidden">
        <Layout>{children}</Layout>
        <SpeedInsights />
      </body>
    </html>
  )
}
