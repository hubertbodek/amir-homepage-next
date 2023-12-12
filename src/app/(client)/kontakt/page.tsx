import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import { createElement } from 'react'

import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import Teaser from 'components/shared/Teaser'
import getContactPage from '@sanity/api/services/getContactPage'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z nami, aby rozpocząć współpracę w dziedzinie metalurgii i precyzyjnej obróbki metalu. Jesteśmy gotowi odpowiedzieć na Twoje pytania, przyjąć zlecenia i udzielić fachowej pomocy. Znajdź nasze dane kontaktowe i dołącz do grona zadowolonych klientów Amir Metal.',
}

export default async function Contact() {
  const page = await getContactPage()

  if (!page) return null

  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alt: 'Perforacja' }}
        title={page.title}
        label="Kontakt"
      />
      <ContactFormWithMap />
      <section className="my-20 lg:my-40 amir-container mx-auto px-4 grid gap-y-8 grid-cols-2 md:grid-cols-4 justify-between items-start">
        <ContactDetailsItem icon={<MapPinIcon className="h-12 w-12 text-blue-900/70" />}>
          ul. Przewóz 2 <br />
          30-716 Kraków
        </ContactDetailsItem>
        <ContactDetailsItem icon={<PhoneIcon className="h-12 w-12 text-blue-900/70" />}>
          <a href="tel:+48 660 26 03 99" className="text-link">
            +48 660 26 03 99
          </a>
        </ContactDetailsItem>
        <ContactDetailsItem icon={<EnvelopeIcon className="h-12 w-12 text-blue-900/70" />}>
          NIP: 678 275 61 80
        </ContactDetailsItem>
        <ContactDetailsItem icon={<BuildingLibraryIcon className="h-12 w-12 text-blue-900/70" />}>
          <a href="mailto:biuro@amir-metal.com" className="text-link">
            biuro@amir-metal.com
          </a>
        </ContactDetailsItem>
      </section>
      <section className="my-40 amir-container mx-auto px-4">
        {/* <h3 className="text-h2 text-center font-bold mb-12">Zespół doradczy</h3> */}
        {page.Team.map((department) => (
          <div key={department.name} className="grid grid-cols-2 mt-10 mb-14 gap-8">
            <h3 className="col-span-full text-h3 font-semibold uppercase">{department.name}</h3>
            {department.people.map((person) => (
              <PersonDetails
                key={person.name}
                name={person.name}
                responsibilites={person.description}
                email={person.email}
                phone={person.phone}
              />
            ))}
          </div>
        ))}
      </section>
    </>
  )
}

const ContactDetailsItem = ({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col items-center justify-start space-y-6">
      {icon}
      <span className="text-sm md:text-base lg:text-h4 text-primary">{children}</span>
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
    <p className="text-subtitle text-sm text-gray-600">{responsibilites}</p>
    <div className="flex my-3 items-center text-sm">
      <EnvelopeIcon className="h-5 w-5 text-blue-600/70 inline-block mr-2" />
      <a href={`mailto:${email}`} className="text-link">
        {email}
      </a>
    </div>
    <div className="flex my-3 items-center text-sm">
      <PhoneIcon className="h-5 w-5 text-blue-600/70 inline-block mr-2" />
      <a href={`tel:${phone}`} className="text-link">
        {phone}
      </a>
    </div>
  </div>
)
