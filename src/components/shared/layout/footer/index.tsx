import Image from 'next/image'
import Link from 'next/link'

import logo from '@public/images/logo.png'
import footerData from './data.json'
import FooterColumn from './FooterColumn'

const { columns } = footerData

function Footer() {
  return (
    <footer className="bg-primary-100 text-light px-4">
      <div className="amir-container py-12 flex justify-between mx-auto !px-0 max-lg:flex-col">
        <div className="mb-8">
          <Link href="/">
            <Image src={logo} alt="Logo" width={160} height={62} className="mb-8" />
          </Link>
          <ul className="space-y-1 text-gray-300">
            <li>ul. Przewóz 2, 30-716 Kraków</li>
            <li>NIP: 123123123</li>
            <li>Biuro: +48 123 123 123</li>
            <li>Kontakt: email@emailemail.com</li>
          </ul>
        </div>
        <div className="grid max-lg:grid-cols-2 lg:col-auto lg:grid-flow-col gap-x-16 gap-y-8">
          {columns.map((column) => (
            <FooterColumn key={column.headline} headline={column.headline} items={column.items} />
          ))}
        </div>
      </div>
      <hr className="amir-container border-gray-200/10" />
      <div className="amir-container py-6 text-center">
        <p className="text-gray-400">AMIRmetal Marcin Bodek © 2023. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
