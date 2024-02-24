'use client'

import MyLink from 'components/shared/MyLink'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from 'components/ui/navigation-menu'

interface CollapsibleItemProps {
  item: {
    title: string
    link: string
    subroutes: Array<{ title: string; link: string }>
  }
}

export default function CollapsibleItem({ item }: CollapsibleItemProps) {
  return (
    <NavigationMenuItem>
      <MyLink
        href={item.link}
        className="underline-animation px-3 py-2"
        activeClassName="text-secondary-100"
      >
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
      </MyLink>
      <NavigationMenuContent className="bg-primary px-1 py-2 text-white shadow-lg">
        <ul className="flex min-w-[250px] flex-col">
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
    </NavigationMenuItem>
  )
}
