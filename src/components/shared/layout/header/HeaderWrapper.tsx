'use client'

import useHeader from 'hooks/useHeader'

export default function HeaderWrapper({
  children,
  solid = false,
}: {
  children: React.ReactNode
  solid?: boolean
}) {
  const { isScrollingDown, isShrinked } = useHeader()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tw = ['bg-[var(--header-bg-shrinked)]']
  const maybeTransparent = solid ? 'bg-slate-900' : 'bg-transparent'

  console.log(maybeTransparent)

  return (
    <nav
      className={`fixed top-0 left-0 z-30 text-light w-full flex transition-all duration-300 ${
        isShrinked ? 'h-[var(--header-height-shrinked)]' : 'h-[var(--header-height)]'
      } ${isScrollingDown ? '-translate-y-full' : ''}
      ${isShrinked && !isScrollingDown ? 'bg-slate-900' : maybeTransparent}
      `}
    >
      {children}
    </nav>
  )
}
