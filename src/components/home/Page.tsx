import { ChartBarSquareIcon } from '@heroicons/react/24/outline'

import type { SideBySideProps } from 'components/home/SideBySide'

import SideBySide from 'components/home/SideBySide'
import ServicesSection from 'components/home/ServicesSection'
import Hero from 'components/shared/Hero'
import OfferSection from 'components/shared/OfferSection'
import DesktopCarousel from 'components/shared/carousel/Carousel'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import Button from 'components/shared/Button'
import PerforationPattern from 'components/shared/patterns/PerforationPattern'
import SideTeaser from 'components/shared/sections/SideTeaser'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

import homeData from 'app/data.json'
import heroImage from '@public/images/marketing/metal-pattern.jpeg'
import LatestBlogArticles from 'components/blog/LatestBlogArticles'

const { products, sideTeaser, perks, realisations } = homeData

export default function Page() {
  return (
    <>
      <Hero
        image={{ src: heroImage, alt: 'Perforacja' }}
        title="Innowacyjne rozwiązania metalurgiczne"
        description="Odkryj naszą ofertę innowacyjnych rozwiązań. Oferujemy wyroby metalowe oraz specjalistyczne usługi metalurgiczne, które zaspokoją Twoje potrzeby."
      >
        <Button theme="light" href="/oferta" className="mt-5">
          Sprawdź ofertę
        </Button>
      </Hero>
      <SideTeaser {...sideTeaser} />
      <OfferSection />
      <div className="bg-primary bg-cover bg-no-repeat py-24 lg:bg-[url('/images/abstracts/flux-bg.svg')]">
        <SideBySide {...(products as SideBySideProps)} />
      </div>
      <section className="my-24">
        <div className="amir-container relative grid items-center gap-12 px-4 py-2 md:grid-cols-3 md:py-24">
          <div className="absolute left-0 top-12 h-56 w-56 max-md:hidden">
            <PerforationPattern fill="fill-sky-600/30" />
          </div>
          <div>
            <h3 className="text-h2 mb-3 inline-block font-semibold text-gray-900">{perks.title}</h3>
            <p className="mb-2 text-lg text-gray-600">{perks.description}</p>
            <Button className="font-semibold !text-gray-900" theme="secondary" href="/kontakt">
              {perks.buttonText}
            </Button>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:col-span-2">
            {perks.items.map((perk, idx) => (
              <div key={`perk--${idx}`} className="flex flex-col">
                <span className="mb-4 inline-block h-12 w-12 rounded border border-gray-100 bg-white p-2 shadow-lg">
                  <ChartBarSquareIcon className="h-full w-full text-sky-700" />
                </span>
                <span className="text-h4 mb-2 inline-block font-semibold text-gray-800">
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
        <h2 className="amir-container text-h2 relative mb-3 px-4 text-center font-bold uppercase text-neutral-800">
          <div className="absolute -top-6 right-0 z-0 h-16 w-32 text-primary md:right-1/4 md:h-36 md:w-56">
            <PerforationPattern fill="fill-sky-600/30" />
          </div>
          {realisations.title}
        </h2>
        <p className=" mx-auto mb-16 max-w-xl px-4 text-center">{realisations.description}</p>
        <DesktopCarousel options={{ isLooped: true }}>
          {realisations.cards.map((card, idx) => (
            <VerticalOverlayCard key={`card--${idx}`} {...card} overlay />
          ))}
        </DesktopCarousel>
        <div className="mx-auto mb-12 flex items-center justify-center">
          <Button theme="primary">Zobacz wszystkie</Button>
        </div>
      </section>
      <LatestBlogArticles />
      <ContactFormWithMap />
    </>
  )
}
