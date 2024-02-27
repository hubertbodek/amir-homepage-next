import Image from 'next/image'
import Link from 'next/link'

import logo from '@public/images/logo.png'
import footerData from './data.json'
import FooterColumn from './FooterColumn'
import { getOffers, getServices } from '@sanity/api/services'

const { columns: columnsData } = footerData

async function Footer() {
  const [services, offers] = await Promise.all([getServices(), getOffers()])

  const columns = [
    columnsData[0],
    {
      headline: columnsData[1].headline,
      items: services.map((service) => ({
        title: service.title,
        link: `/uslugi/${service.slug}`,
      })),
      large: columnsData[1].large ?? false,
    },
    {
      headline: columnsData[2].headline,
      items: offers.map((offer) => ({
        title: offer.title,
        link: `/oferta/${offer.slug}`,
      })),
      large: columnsData[2].large ?? false,
    },
  ]

  return (
    <footer className="bg-primary px-4 text-light">
      <div className="amir-container mx-auto flex justify-between py-12 max-lg:flex-col">
        <div className="mb-8">
          <Link href="/" title="Logo">
            <Image src={logo} alt="Logo" width={160} height={62} className="mb-8" />
          </Link>
          <ul className="space-y-1 text-gray-300">
            <li>ul. Przewóz 2, 30-716 Kraków</li>
            <li>NIP: 678 275 61 80</li>
            <li>Biuro: +48 660 26 03 99</li>
            <li>Kontakt: biuro@amir-metal.com</li>
          </ul>
        </div>
        <div className="grid gap-x-8 gap-y-8 max-lg:grid-cols-2 lg:col-auto lg:grid-flow-col">
          {columns.map((column) => (
            <FooterColumn
              key={column.headline}
              headline={column.headline}
              items={column.items}
              large={column.large}
            />
          ))}
        </div>
      </div>
      <hr className="amir-container border-gray-200/10" />
      <div className="amir-container py-6 text-center">
        <p className="text-gray-400">AMIRmetal Marcin Bodek © 2024. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
