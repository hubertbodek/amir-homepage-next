import type { InferGetStaticPropsType } from 'next'
import Teaser from '../components/shared/Teaser'

import realisationsData from 'data/realisations.json'
import shuffleArray from 'utlis/shuffleArray'
// import sliceIntoChunks from 'utlis/splitArrayEvenly'
import Masonry from 'components/shared/masonry/Masonry'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

export default function OurWork({
  pageData: { items },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/corten.webp', alternativeText: 'Perforacja' }}
        title="Nasze realizacje - Dowód na nasze doświadczenie i kreatywność"
        label="Realizacje"
      />
      <Masonry items={items} />
      <ContactFormWithMap />
    </>
  )
}

export const getStaticProps = async () => {
  const { items } = realisationsData

  const shuffledItems = shuffleArray(items)

  return {
    props: { pageData: { ...realisationsData, items: shuffledItems } },
  }
}
