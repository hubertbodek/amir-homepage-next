import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import 'styles/globals.css'
import Layout from 'components/shared/layout'

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Amir Metal',
    default: 'Amir Metal - Innowacyjne rozwiązania metalurgiczne',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ fontFamily: sora.style.fontFamily }}>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d3564" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <body suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
      <Analytics />
    </html>
  )
}
