import Link from 'next/link'
import useButtonTheme from 'hooks/themes/useButtonTheme'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  theme: 'primary' | 'secondary' | 'filled' | 'light'
  children: React.ReactNode
  href?: string
  arrow?: boolean
}

export default function Button({
  children,
  theme,
  href = '',
  arrow = false,
  ...props
}: ButtonProps) {
  const buttonTheme = useButtonTheme(theme)

  return (
    <Wrapper href={href}>
      <button {...props} className={`${buttonTheme} ${props.className ?? ''} py-2`}>
        <span
          className={`${
            theme === 'secondary' ? 'text-hover-effect' : ''
          } inline-flex items-center gap-x-2`}
        >
          {children}
          {arrow && <ArrowSmallRightIcon className="h-5 w-5" />}
        </span>
      </button>
    </Wrapper>
  )
}

function Wrapper({ href, children }: { href: string; children: React.ReactNode }) {
  return href ? <Link href={href}>{children}</Link> : <>{children}</>
}
