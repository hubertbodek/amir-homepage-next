'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import logo from '@public/images/logo.png'
import logoPlain from '@public/images/logo-plain.png'

import MyLink from 'components/shared/MyLink'
import { SheetTrigger, SheetContent, Sheet } from 'components/ui/sheet'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'components/ui/accordion'
import type { Sitemap } from 'constants/sitemap'

export default function MobileHeader({ sitemap }: { sitemap: Sitemap }) {
  const sheetTriggerRef = React.useRef<HTMLButtonElement>(null)

  const closeSheet = () => sheetTriggerRef.current?.click()

  return (
    <div className="flex md:hidden items-center px-4 w-full justify-between">
      <div className="aspect-[256/62] relative h-9">
        <Link href="/">
          <Image src={logo} alt="Logo" width={256} height={62} />
        </Link>
      </div>
      <Sheet>
        <SheetTrigger ref={sheetTriggerRef}>
          <Menu className="h-9 w-9" />
        </SheetTrigger>
        <SheetContent className="bg-primary">
          <Accordion
            type="single"
            collapsible
            className="w-full text-white flex flex-col pt-2 items-start"
          >
            <div className="aspect-[472/62] relative h-5 mb-5">
              <Link href="/">
                <Image
                  src={logoPlain}
                  alt="Logo"
                  sizes="(max-width: 768px) 25vw,
              (max-width: 1200px) 15vw,
              10vw"
                  fill
                />
              </Link>
            </div>
            {sitemap.map((item) => {
              return item.subroutes ? (
                <AccordionItem
                  key={item.link}
                  value={item.link}
                  className="border-b-secondary-100/30 w-full"
                >
                  <AccordionTrigger className="py-0 w-full">
                    <LinkHandler closeSheetHandler={closeSheet} item={item} />
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col divide-y-secondary-100/30 pl-2 divide-y divide-secondary/20">
                      {item.subroutes.map((subitem) => (
                        <li key={subitem.link} className="py-2">
                          <LinkHandler closeSheetHandler={closeSheet} item={subitem} />
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <RegularLinkItem key={item.link}>
                  <LinkHandler closeSheetHandler={closeSheet} item={item} />
                </RegularLinkItem>
              )
            })}
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  )
}

const LinkHandler = ({
  item,
  closeSheetHandler,
}: {
  item: { title: string; link: string }
  closeSheetHandler: any
}) => (
  <MyLink
    href={item.link}
    className="underline-animation py-2"
    activeClassName="text-secondary-100"
    onClick={closeSheetHandler}
  >
    {item.title}
  </MyLink>
)

const RegularLinkItem = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full py-2 border-b border-b-secondary-100/30">{children}</div>
)
