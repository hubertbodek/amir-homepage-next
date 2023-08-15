import type { Metadata } from 'next'

import SideTeaser from 'components/shared/sections/SideTeaser'
import Teaser from 'components/shared/Teaser'
import SideBySide, { type SideBySideProps } from 'components/home/SideBySide'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

import servicesData from './data.json'

const { sideTeaser, services } = servicesData

export const metadata: Metadata = {
  title: 'Realizacje',
}

export default function Services() {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/spaw.jpeg', alt: 'Perforacja' }}
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
