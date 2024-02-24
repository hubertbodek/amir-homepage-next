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
    <div className="flex w-full items-center justify-between px-4 md:hidden">
      <div className="relative aspect-[256/62] h-9">
        <Link href="/" title="Logo">
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
            className="flex w-full flex-col items-start pt-2 text-white"
          >
            <div className="relative mb-5 aspect-[472/62] h-5">
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
                  className="w-full border-b-secondary-100/30"
                >
                  <AccordionTrigger className="w-full py-0">
                    <LinkHandler closeSheetHandler={closeSheet} item={item} />
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="divide-y-secondary-100/30 flex flex-col divide-y divide-secondary/20 pl-2">
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
  <div className="w-full border-b border-b-secondary-100/30 py-2">{children}</div>
)
