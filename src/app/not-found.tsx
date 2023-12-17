import type { Metadata, Viewport } from 'next'
import { Sora } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

import 'styles/globals.css'
import Layout from 'components/shared/layout'
import Button from 'components/shared/Button'

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata: Metadata = {
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

function NotFoundPage() {
  return (
    <html lang="en" style={{ fontFamily: sora.style.fontFamily }}>
      <body className="overflow-x-hidden">
        <Layout solidHeader>
          <section className="amir-container pt-[var(--header-height)] flex items-center justify-center flex-col min-h-screen text-center">
            <h1 className="text-h1 font-bold mb-5 text-sky-900">Nie znaleziono tej strony :(</h1>
            <p className="text-lg max-w-2xl text-center mx-auto">
              Przepraszamy, ale szukana strona nie istnieje lub została przeniesiona.
            </p>
            <Button href="/" theme="primary" className="mt-10">
              Strona główna
            </Button>
          </section>
        </Layout>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default NotFoundPage
