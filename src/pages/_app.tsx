import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'

import '@/src/styles/globals.css'
import Layout from '@/src/app/components/layout'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
