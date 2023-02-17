import type { InferGetStaticPropsType } from 'next'
import Teaser from '../components/shared/Teaser'

export default function OurWork({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/corten.webp', alternativeText: 'Perforacja' }}
        title="Nasze realizacje - Dowód na nasze doświadczenie i kreatywność"
        label="Realizacje"
      />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: { pageData: {} },
  }
}
