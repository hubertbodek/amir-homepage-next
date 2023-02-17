import type { InferGetStaticPropsType } from 'next'
import {
  ChartBarSquareIcon,
  // Cog8ToothIcon,
  // PuzzlePieceIcon,
  // WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

import type { SideBySideProps } from 'components/home/SideBySide'

import SideBySide from 'components/home/SideBySide'
import ServicesSection from 'components/home/ServicesSection'
import Teaser from 'components/shared/Teaser'
import OfferSection from 'components/home/OfferSection'
import DesktopCarousel from 'components/shared/carousel/Carousel'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import Button from 'components/shared/Button'
import PerforationPattern from 'components/shared/patterns/PerforationPattern'

import homeData from 'data/home.json'
import SideTeaser from 'components/shared/sections/SideTeaser'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

export default function Home({
  pageData: { products, sideTeaser, perks, realisations, blog },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
        title="Lorem ipsum dolor sit, amet consectetur."
      >
        <Button theme="light" href="/oferta" className="mt-5">
          Sprawdź ofertę
        </Button>
      </Teaser>
      <SideTeaser {...sideTeaser} />
      <OfferSection />
      <div className="py-24 bg-[url('/images/abstracts/flux-bg.svg')] bg-no-repeat bg-cover">
        <SideBySide {...(products as SideBySideProps)} />
      </div>
      <section className="my-24">
        <div className="relative amir-container px-4 py-24 grid md:grid-cols-3 gap-12 items-center">
          <div className="absolute top-12 left-0 h-56 w-56">
            <PerforationPattern fill="fill-sky-600/30" />
          </div>
          <div>
            <h3 className="text-h2 font-semibold mb-3 inline-block text-gray-900">{perks.title}</h3>
            <p className="text-gray-600 text-lg mb-2">{perks.description}</p>
            <Button className="!text-gray-900 font-semibold" theme="secondary">
              {perks.buttonText}
            </Button>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-6 gap-y-12">
            {perks.items.map((perk, idx) => (
              <div key={`perk--${idx}`} className="flex flex-col">
                <span className="inline-block w-12 h-12 bg-white p-2 shadow-lg mb-4 rounded border border-gray-100">
                  <ChartBarSquareIcon className="h-full w-full text-sky-700" />
                </span>
                <span className="text-h4 font-semibold text-gray-800 mb-2 inline-block">
                  {perk.title}
                </span>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesSection />
      <section className="my-36">
        <h2 className="relative amir-container text-h2 text-center uppercase font-bold text-neutral-800">
          <div className="absolute -top-6 right-0 md:right-1/4 h-16 md:h-36 w-32 md:w-56 z-0 text-primary-100">
            <PerforationPattern fill="fill-sky-600/30" />
          </div>
          {realisations.title}
        </h2>
        <p className=" mx-auto text-center max-w-xl mb-16">{realisations.description}</p>
        <DesktopCarousel options={{ isLooped: true }}>
          {realisations.cards.map((card, idx) => (
            <VerticalOverlayCard key={`card--${idx}`} {...card} overlay />
          ))}
        </DesktopCarousel>
        <div className="mx-auto flex justify-center items-center mb-12">
          <Button theme="primary">Zobacz pozostałe</Button>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 my-40">
        <h4 className="text-h2 text-center mb-3 font-semibold uppercase">{blog.title}</h4>
        <p className="max-w-xl text-center mx-auto">{blog.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          {blog.items.map((item, idx) => (
            <VerticalOverlayCard key={`blogcard--${idx}`} {...item} overlay>
              <Button theme="secondary" className="mt-4">
                Czytaj
              </Button>
            </VerticalOverlayCard>
          ))}
        </div>
      </section>
      <ContactFormWithMap />
    </>
  )
}
export const getStaticProps = async () => {
  return {
    props: { pageData: homeData },
  }
}
