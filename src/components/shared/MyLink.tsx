'use client'

import { forwardRef, useEffect, useState } from 'react'

import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface MyLinkProps extends LinkProps {
  className?: string
  activeClassName?: string
  children: React.ReactNode
}

const MyLink = forwardRef<React.ElementRef<typeof Link>, MyLinkProps>(function MyLink(
  { className = '', activeClassName, children, ...props }: MyLinkProps,
  ref
) {
  const pathname = usePathname()
  const [activeClass, setActiveClass] = useState<string>('')

  useEffect(() => {
    if (!activeClassName) {
      return
    }

    pathname === props.href ? setActiveClass(activeClassName) : setActiveClass('')
  }, [activeClassName, pathname, props.href])

  return (
    <Link ref={ref} {...props} className={`${className} ${activeClass}`}>
      {children}
    </Link>
  )
})

export default MyLink
