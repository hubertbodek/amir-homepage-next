'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from 'components/ui/navigation-menu'
import MyLink from 'components/shared/MyLink'
import logo from '@public/images/logo.png'
import type { Sitemap } from 'constants/sitemap'
import CollapsibleItem from './CollapsibleItem'

export default function DesktopHeader({ sitemap }: { sitemap: Sitemap }) {
  return (
    <div className="amir-container mx-auto justify-between items-center hidden md:flex">
      <div className="aspect-[256/62] relative h-9">
        <Link href="/" title="Logo">
          <Image src={logo} alt="Logo" width={256} height={62} />
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {sitemap.map((item) => {
            if (item.subroutes) {
              return <CollapsibleItem key={item.title} item={item} />
            }

            return (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink asChild>
                  <MyLink
                    href={item.link}
                    className="underline-animation px-3 py-2"
                    activeClassName="text-secondary-100"
                  >
                    {item.title}
                  </MyLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
