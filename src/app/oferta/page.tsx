import SideTeaser from 'components/shared/sections/SideTeaser'
import Teaser from 'components/shared/Teaser'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import data from './data.json'

const { copyText, sideTeaser, main } = data

export default function Offer() {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
        title="Wybierz to, czego potrzebujesz"
        label="Oferta"
      />
      <p className="mx-auto max-w-prose px-4 py-24 text-subtitle">{copyText}</p>
      <SideTeaser {...sideTeaser} reversed />
      <section className="amir-container mx-auto my-24 md:my-36">
        <h2 className="text-h2 mb-8 font-bold">{main.header}</h2>
        <p className="max-w-prose mb-6">{main.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {main.items.map((item, idx) => (
            <VerticalOverlayCard key={`item--${idx}`} {...item} overlay />
          ))}
        </div>
      </section>
      <SideTeaser {...sideTeaser} />
      <ContactFormWithMap />
    </>
  )
}
