import type { AppProps } from 'next/app'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import 'styles/globals.css'
import Layout from 'components/shared/layout'

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sora.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}
