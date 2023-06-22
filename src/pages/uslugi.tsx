import type { InferGetStaticPropsType } from 'next'

import SideTeaser from 'components/shared/sections/SideTeaser'
import Teaser from '../components/shared/Teaser'

import servicesData from 'data/services.json'
import SideBySide, { type SideBySideProps } from 'components/home/SideBySide'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

export default function Services({
  pageData: { sideTeaser, services },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/spaw.jpeg', alternativeText: 'Perforacja' }}
        title="Skorzystaj z naszego doświadczenia"
        label="Usługi"
      />
      <SideTeaser {...sideTeaser} reversed />
      <div className="py-24">
        <SideBySide {...(services as SideBySideProps)} alignLeft light />
      </div>
      <ContactFormWithMap />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: { pageData: { ...servicesData } },
  }
}
