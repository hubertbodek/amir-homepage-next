import Image from 'next/image'
import Link from 'next/link'

import sitemap from 'constants/sitemap'
import MyLink from 'components/shared/MyLink'
import HeaderWrapper from 'components/shared/layout/header/HeaderWrapper'
import logo from '@public/images/logo.png'

function Header() {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  )
}

export default Header
