import Teaser from 'components/shared/Teaser'
import shuffleArray from 'utlis/shuffleArray'
import Masonry from 'components/shared/masonry/Masonry'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import realisationsData from './data.json'

const { items } = realisationsData
const shuffledItems = shuffleArray(items)

export default function OurWork() {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/corten.webp', alt: 'Perforacja' }}
        title="Nasze realizacje - Dowód na nasze doświadczenie i kreatywność"
        label="Realizacje"
      />
      <Masonry items={shuffledItems} />
      <ContactFormWithMap />
    </>
  )
}
