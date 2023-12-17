import type { Metadata } from 'next'
import HomePage from 'components/home/Page'

export const metadata: Metadata = {
  description:
    'Innowacyjne rozwiązania z metalu od 2004 roku. Oferujemy wysoką jakość blach perforowanych, siatek, sprężyn i usług związanych z obróbką metalu. Zaufaj profesjonalizmowi i doświadczeniu naszego zespołu - znajdź precyzyjne rozwiązania dla swoich potrzeb metalowych już dziś.',
}

export default function Home() {
  return <HomePage />
}
