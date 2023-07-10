import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import 'styles/globals.css'
import Layout from 'components/shared/layout'

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ fontFamily: sora.style.fontFamily }}>
      <body suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
      <Analytics />
    </html>
  )
}
