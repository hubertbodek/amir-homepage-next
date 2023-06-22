'use client'

import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface MyLinkProps extends LinkProps {
  className?: string
  activeClassName?: string
  children: React.ReactNode
}

function MyLink({ className = '', activeClassName, children, ...props }: MyLinkProps) {
  const pathname = usePathname()
  const [activeClass, setActiveClass] = useState<string>('')

  useEffect(() => {
    if (!activeClassName) {
      return
    }

    pathname === props.href ? setActiveClass(activeClassName) : setActiveClass('')
  }, [activeClassName, pathname, props.href])

  return (
    <Link {...props} className={`${className} ${activeClass}`}>
      {children}
    </Link>
  )
}

export default MyLink
