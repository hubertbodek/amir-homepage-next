import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import Teaser from 'components/shared/Teaser'
import getContactPage from '@sanity/api/services/getContactPage'
import { draftMode } from 'next/headers'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z nami, aby rozpocząć współpracę w dziedzinie metalurgii i precyzyjnej obróbki metalu. Jesteśmy gotowi odpowiedzieć na Twoje pytania, przyjąć zlecenia i udzielić fachowej pomocy. Znajdź nasze dane kontaktowe i dołącz do grona zadowolonych klientów Amir Metal.',
}

export default async function Contact() {
  const { isEnabled } = draftMode()

  const page = await getContactPage(isEnabled)

  if (!page) return null

  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alt: 'Perforacja' }}
        title={page.title}
        label="Kontakt"
      />
      <section className="amir-container mx-auto my-20 grid grid-cols-2 items-start justify-between gap-y-8 px-4 md:grid-cols-4 lg:my-40">
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
      <ContactFormWithMap />
      <section className="amir-container mx-auto my-20 px-4 lg:my-40">
        {/* <h3 className="text-h2 text-center font-bold mb-12">Zespół doradczy</h3> */}
        {page.Team.map((department) => (
          <div
            key={department.name}
            className="mb-14 mt-10 grid gap-8 rounded border border-border bg-gray-100 px-8 py-10 shadow-lg md:grid-cols-2"
          >
            <h3 className="text-h3 col-span-full font-semibold uppercase">{department.name}</h3>
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
      <span className="lg:text-h4 text-sm text-primary md:text-base">{children}</span>
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
    <span className="text-h5 mb-2 inline-block font-semibold">{name}</span>
    <p className="text-subtitle text-sm text-gray-600">{responsibilites}</p>
    <div className="my-3 grid grid-cols-[20px_1fr] items-center gap-2 text-sm">
      <EnvelopeIcon className="mr-2 inline-block h-5 w-5 text-blue-600/70" />
      <a href={`mailto:${email}`} className="text-link max-md:text-xs">
        {email}
      </a>
    </div>
    <div className="grid grid-cols-[20px_1fr] items-center gap-2 text-sm">
      <PhoneIcon className="mr-2 inline-block h-5 w-5 text-blue-600/70" />
      <a href={`tel:${phone}`} className="text-link max-md:text-xs">
        {phone}
      </a>
    </div>
  </div>
)
