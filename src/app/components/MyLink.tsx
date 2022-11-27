import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface MyLinkProps extends LinkProps {
  className?: string
  activeClassName?: string
  children: React.ReactNode
}

function MyLink({
  className = '',
  activeClassName,
  children,
  ...props
}: MyLinkProps) {
  const { pathname } = useRouter()
  const [activeClass, setActiveClass] = useState<string>('')

  useEffect(() => {
    if (!activeClassName) {
      return
    }

    pathname === props.href
      ? setActiveClass(activeClassName)
      : setActiveClass('')
  }, [activeClassName, pathname, props.href])

  return (
    <Link {...props} className={`${className} ${activeClass}`}>
      {children}
    </Link>
  )
}

export default MyLink
