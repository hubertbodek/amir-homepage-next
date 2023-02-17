import type { InferGetStaticPropsType } from 'next'

import { MapPinIcon } from '@heroicons/react/24/outline'
// import { MapPinIcon, PhoneIcon, EnvelopeIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import Teaser from 'components/shared/Teaser'

export default function Contact({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
        title="Kontakt"
        specific
      />
      <ContactFormWithMap />
      <section className="my-20 amir-container mx-auto px-4 grid grid-cols-4 justify-center items-center">
        <ContactDetailsItem detail="ul. Przewóz 2, 30-716 Kraków" />
        <ContactDetailsItem detail="+48 123 123 123" />
        <ContactDetailsItem detail="NIP: 123123123" />
        <ContactDetailsItem detail="email@emailemail.com" />
      </section>
      <section className="my-40 amir-container mx-auto px-4">
        <h3 className="text-h2 text-center font-bold mb-12">Zespół doradczy</h3>
        <div className="grid grid-cols-2">
          <h4 className="col-span-full text-h4 font-semibold uppercase mb-8">Dział sprzedaży</h4>
          <PersonDetails
            name="Marcin Bodek"
            responsibilites="Konstrukcje stalowe, wycinanie laserowe, gięcie."
            email="x"
            phone="x"
          />
          <PersonDetails
            name="Marcin Bodek"
            responsibilites="Konstrukcje stalowe, wycinanie laserowe, gięcie."
            email="x"
            phone="x"
          />
          <PersonDetails
            name="Marcin Bodek"
            responsibilites="Konstrukcje stalowe, wycinanie laserowe, gięcie."
            email="x"
            phone="x"
          />
        </div>
      </section>
    </>
  )
}

const ContactDetailsItem = ({ detail }: { detail: string }) => (
  <div className="flex flex-col items-center justify-center space-y-6">
    <MapPinIcon className="h-12 w-12 text-blue-900/70" />
    <span className="text-h4 text-primary">{detail}</span>
  </div>
)

const PersonDetails = ({
  name,
  responsibilites,
  email,
  phone,
}: {
  name: string
  responsibilites: string
  email: string
  phone: string
}) => (
  <div className="mb-4">
    <span className="text-h5 inline-block mb-2 font-semibold">{name}</span>
    <p className="text-subtitle text-gray-600">{responsibilites}</p>
  </div>
)

export const getStaticProps = async () => {
  return {
    props: { pageData: {} },
  }
}
