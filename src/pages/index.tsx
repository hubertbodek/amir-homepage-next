import { GetStaticProps } from 'next'
import {
  ChartBarSquareIcon,
  Cog8ToothIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

import SideBySide, { SideBySideProps } from '@/src/home/components/SideBySide'
import homeData from '@/src/home/data/homeData.json'
import ServicesSection from '@/src/home/components/ServicesSection'
import Teaser from '../shared/components/Teaser'
import OfferSection from '../home/components/OfferSection'
import DesktopCarousel from '../shared/components/carousel/Carousel'
import VerticalOverlayCard from '../shared/components/cards/VerticalOverlayCard'
import Button from '../shared/components/Button'
import PerforationPattern from '../shared/components/patterns/PerforationPattern'

interface HomePageProps {
  pageData: {
    products: SideBySideProps
  }
}

export default function Home({ pageData: { products } }: HomePageProps) {
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
      <OfferSection />
      <div className="bg-gradient-to-b from-neutral-900 to-primary py-24">
        <SideBySide {...products} />
      </div>
      <ServicesSection />
      <h2 className="relative amir-container text-h2 text-center uppercase font-bold text-neutral-800 mt-24">
        <div className="absolute -top-6 right-0 md:right-1/4 h-16 md:h-36 w-32 md:w-56 z-0">
          <PerforationPattern fill="fill-sky-600/30" />
        </div>
        Nasze realizacje
      </h2>
      <p className=" mx-auto text-center max-w-xl mb-16">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptatum reiciendis
        explicabo, magnam impedit animi?
      </p>
      <DesktopCarousel options={{ isLooped: true }}>
        <VerticalOverlayCard
          image={{ src: '/images/marketing/cricoteka.jpeg', alternativeText: 'Brama' }}
          overlay
          title="Cricoteka"
        />
        <VerticalOverlayCard
          image={{ src: '/images/marketing/brama.jpeg', alternativeText: 'Brama' }}
          title="Brama"
          overlay
        />
        <VerticalOverlayCard
          image={{ src: '/images/marketing/brama2.jpeg', alternativeText: 'Brama' }}
          title="Brama 2"
          overlay
        />
        <VerticalOverlayCard
          image={{ src: '/images/marketing/cricoteka.jpeg', alternativeText: 'Brama' }}
          overlay
          title="Cricoteka"
        />
        <VerticalOverlayCard
          image={{ src: '/images/marketing/brama.jpeg', alternativeText: 'Brama' }}
          title="Brama"
          overlay
        />
        <VerticalOverlayCard
          image={{ src: '/images/marketing/brama2.jpeg', alternativeText: 'Brama' }}
          title="Brama 2"
          overlay
        />
      </DesktopCarousel>
      <div className="mx-auto flex justify-center items-center mb-12">
        <Button theme="primary">Zobacz pozostałe</Button>
      </div>
      <section className="my-24">
        <div className="relative amir-container px-4 py-24 grid md:grid-cols-3 gap-12 items-center">
          <div className="absolute top-12 left-0 h-56 w-56">
            <PerforationPattern fill="fill-sky-600/30" />
          </div>
          <div>
            <h3 className="text-h2 font-semibold mb-3 inline-block text-gray-900">
              Lorem ipsum dolor sit amet consetur.
            </h3>
            <p className="text-gray-600 text-lg mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad omnis adipisci
              quaerat magnam repellat.
            </p>
            <Button className="!text-gray-900 font-semibold" theme="secondary">
              Lorem, ipsum.
            </Button>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-6 gap-y-12">
            <div className="flex flex-col">
              <span className="inline-block w-12 h-12 bg-white p-2 shadow-inner-lg mb-4">
                <ChartBarSquareIcon className="h-full w-full text-sky-700" />
              </span>
              <span className="text-h4 font-semibold text-gray-800 mb-2 inline-block">
                Lorem, ipsum.
              </span>
              <p className="text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nihil, explicabo
                commodi quaerat veniam laboriosam minus, ex error inventore eius debitis corporis,
                ipsam provident itaque.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="inline-block w-12 h-12 bg-white p-2 shadow-inner-lg mb-4">
                <PuzzlePieceIcon className="h-full w-full text-sky-700" />
              </span>
              <span className="text-h4 font-semibold text-gray-800 mb-2 inline-block">
                Lorem, ipsum.
              </span>
              <p className="text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nihil, explicabo
                commodi quaerat veniam laboriosam minus, ex error inventore eius.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="inline-block w-12 h-12 bg-white p-2 shadow-inner-lg mb-4">
                <Cog8ToothIcon className="h-full w-full text-sky-700" />
              </span>
              <span className="text-h4 font-semibold text-gray-800 mb-2 inline-block">
                Lorem, ipsum.
              </span>
              <p className="text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nihil, explicabo
                commodi quaerat veniam laboriosam minus, ex error inventore eius debitis corporis,
                ipsam provident itaque.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="inline-block w-12 h-12 bg-white p-2 shadow-inner-lg mb-4">
                <WrenchScrewdriverIcon className="h-full w-full text-sky-700" />
              </span>
              <span className="text-h4 font-semibold text-gray-800 mb-2 inline-block">
                Lorem, ipsum.
              </span>
              <p className="text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nihil, explicabo
                commodi quaerat veniam laboriosam minus, ex error inventore eius debitis corporis,
                ipsam provident itaque.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="mb-12 amir-container mx-auto">
        <span className="border border-gray-200 h-4 w-4 rounded-full bg-white ease-out transition-all duration-300 inline-block shadow-inner-lg hover:shadow-inner-xl mx-2" />
        <span className="border border-gray-200 h-4 w-4 rounded-full bg-white ease-out transition-all duration-300 inline-block shadow-inner-lg hover:shadow-inner-xl mx-2" />
        <span className="border border-gray-200 h-4 w-4 rounded-full bg-white ease-out transition-all duration-300 inline-block shadow-inner-lg hover:shadow-inner-xl mx-2" />
        <span className="border border-gray-200 h-4 w-4 rounded-full bg-white ease-out transition-all duration-300 inline-block shadow-inner-lg hover:shadow-inner-xl mx-2" />
        <span className="border border-gray-200 h-4 w-4 rounded-full bg-white ease-out transition-all duration-300 inline-block shadow-inner-lg hover:shadow-inner-xl mx-2" />
      </section> */}
      <section className="max-w-7xl mx-auto px-4">
        <h4 className="text-h2 text-center mb-3 font-semibold uppercase">
          Sprawdź nasze wpisy na blogu
        </h4>
        <p className="max-w-xl text-center mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum iure natus ea nesciunt,
          quos quis?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <VerticalOverlayCard
            image={{ src: '/images/marketing/brama2.jpeg', alternativeText: 'Brama' }}
            title="Wpis 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab, fuga enim neque nostrum nemo!"
            overlay
          >
            <Button theme="secondary" className="mt-4">
              Czytaj
            </Button>
          </VerticalOverlayCard>
          <VerticalOverlayCard
            image={{ src: '/images/marketing/brama2.jpeg', alternativeText: 'Brama' }}
            title="Wpis 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab, fuga enim neque nostrum nemo!"
            overlay
          >
            <Button theme="secondary" className="mt-4">
              Czytaj
            </Button>
          </VerticalOverlayCard>
          <VerticalOverlayCard
            image={{ src: '/images/marketing/brama2.jpeg', alternativeText: 'Brama' }}
            title="Wpis 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab, fuga enim neque nostrum nemo!"
            overlay
          >
            <Button theme="secondary" className="mt-4">
              Czytaj
            </Button>
          </VerticalOverlayCard>
        </div>
      </section>
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageData: homeData },
  }
}
