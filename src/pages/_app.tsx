import type { AppProps } from 'next/app'
import { Sora } from '@next/font/google'

import 'styles/globals.css'
import Layout from 'app/components/layout'

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
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
