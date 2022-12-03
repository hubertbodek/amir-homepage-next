import Image from 'next/image'

import logo from '@/public/images/logo.png'
import CardSection from '@/src/shared/components/CardSection'
import Button from '@/src/shared/components/Button'
import SideBySide, { SideBySideProps } from '@/src/home/components/SideBySide'
import { GetStaticProps } from 'next'

import homeData from '@/src/home/data/homeData.json'
import VSection from '@/src/home/components/VSection'
import ServicesSection from '@/src/home/components/ServicesSection'
import Slider from '../home/components/Slider'

interface HomePageProps {
  pageData: {
    products: SideBySideProps
  }
}

export default function Home({ pageData: { products } }: HomePageProps) {
  return (
    <>
      <CardSection
        className="my-12 md:my-36"
        decorations={[
          {
            image: {
              url: '/images/decorations/bryla1.png',
              width: 300,
              height: 278,
            },
            position: '-top-32 -left-12',
            z: 'under',
          },
          {
            image: {
              url: '/images/decorations/bryla2.png',
              height: 325,
              width: 300,
            },
            position: '-bottom-40 -right-0',
            z: 'over',
          },
        ]}
      >
        <div className="grid md:grid-cols-2 divide-x-2 divide-light">
          <div className="hidden md:flex justify-center items-center relative mr-16">
            <Image
              src={logo}
              alt="Amir Metal"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 33vw,
              25vw"
            />
          </div>
          <div className="pl-16">
            <h1 className="text-h1 font-bold mb-6">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="subtitle mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              obcaecati veniam. Alias ab cupiditate, repellat esse possimus
              nisi! Iure optio dolore, aperiam laboriosam natus illo tempora nam
              voluptatem voluptate doloremque sequi est unde. Amet atque natus
              placeat aut? Perferendis, a!
            </p>
            <Button theme="primary" href="/o-nas" className="px-4 py-2 ">
              Więcej o nas
            </Button>
          </div>
        </div>
      </CardSection>
      {/* <Slider /> */}
      <SideBySide {...products} />
      <VSection />
      <ServicesSection />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageData: homeData },
  }
}
