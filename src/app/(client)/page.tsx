import type { Metadata } from 'next'
import HomePage from 'components/home/Page'

export const metadata: Metadata = {
  title: 'Strona Główna | Amir Metal',
}

export default function Home() {
  return <HomePage />
}
