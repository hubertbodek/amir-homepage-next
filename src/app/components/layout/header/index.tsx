import Image from 'next/image'
import Link from 'next/link'

import sitemap from '@/src/app/constants/sitemap'
import MyLink from '@/src/app/components/MyLink'
import logo from '@/public/images/logo.png'

function Header() {
  return (
    <nav className="absolute top-0 left-0 z-30 py-8 bg-transperent text-light w-full">
      <div className="amir-container mx-auto flex justify-between items-center">
        <div className="aspect-[256/62] relative h-9">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              sizes="(max-width: 768px) 25vw,
              (max-width: 1200px) 15vw,
              10vw"
              fill
            />
          </Link>
        </div>
        <ul className="hidden md:flex gap-x-8">
          {sitemap.map((item) => (
            <li key={item.title} className="lg:text-lg font-light tracking-wide capitalize">
              <MyLink
                href={item.link}
                className="underline-animation"
                activeClassName="text-secondary-100"
              >
                {item.title}
              </MyLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
