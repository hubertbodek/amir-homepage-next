import type { AppProps } from 'next/app'
import { Sora } from '@next/font/google'

import '@/src/styles/globals.css'
import Layout from '@/src/app/components/layout'

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={sora.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
