import Link from 'next/link'
import Image from 'next/image'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from 'components/ui/navigation-menu'
import MyLink from 'components/shared/MyLink'
import sitemap from 'constants/sitemap'
import logo from '@public/images/logo.png'

export default function DesktopHeader() {
  return (
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
      <NavigationMenu>
        <NavigationMenuList>
          {sitemap.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.subroutes ? (
                <>
                  <MyLink
                    href={item.link}
                    className="underline-animation px-3 py-2"
                    activeClassName="text-secondary-100"
                  >
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  </MyLink>
                  <NavigationMenuContent className="bg-primary shadow-lg text-white px-1 py-2">
                    <ul className="min-w-[250px] flex flex-col">
                      {item.subroutes.map((subroute) => (
                        <li key={subroute.title} className="px-3 py-2">
                          <NavigationMenuLink asChild>
                            <MyLink
                              href={subroute.link}
                              className="underline-animation py-2"
                              activeClassName="text-secondary-100"
                            >
                              {subroute.title}
                            </MyLink>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <MyLink
                    href={item.link}
                    className="underline-animation px-3 py-2"
                    activeClassName="text-secondary-100"
                  >
                    {item.title}
                  </MyLink>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
