import type { InferGetStaticPropsType } from 'next'

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'

import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import Teaser from 'components/shared/Teaser'
import { createElement } from 'react'

export default function Contact({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
        title="Jesteśmy do Twojej dyspozycji!"
        label="Kontakt"
      />
      <ContactFormWithMap />
      <section className="my-20 amir-container mx-auto px-4 grid gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-start">
        <ContactDetailsItem icon={MapPinIcon}>
          ul. Przewóz 2 <br />
          30-716 Kraków
        </ContactDetailsItem>
        <ContactDetailsItem icon={PhoneIcon}>
          <a href="tel:+48 123 123 123" className="text-link">
            +48 123 123 123
          </a>
        </ContactDetailsItem>
        <ContactDetailsItem icon={EnvelopeIcon}>NIP: 123123123</ContactDetailsItem>
        <ContactDetailsItem icon={BuildingLibraryIcon}>
          <a href="mailto:biuro@amir-metal.com" className="text-link">
            biuro@amir-metal.com
          </a>
        </ContactDetailsItem>
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

const ContactDetailsItem = ({
  icon,
  children,
}: {
  icon: (...args: any) => JSX.Element
  children: React.ReactNode
}) => {
  const Icon = createElement(icon, { className: 'h-12 w-12 text-blue-900/70' })

  return (
    <div className="flex flex-col items-center justify-start space-y-6">
      {Icon}
      <span className="lg:text-h4 text-primary">{children}</span>
    </div>
  )
}

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
