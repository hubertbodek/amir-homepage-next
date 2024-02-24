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

  return (
    <nav
      className={`fixed left-0 top-0 z-30 flex w-full text-light transition-all duration-300 ${
        isShrinked ? 'h-[var(--header-height-shrinked)]' : 'h-[var(--header-height)]'
      } ${isScrollingDown ? '-translate-y-full' : ''}
      ${isShrinked && !isScrollingDown ? 'bg-slate-900' : maybeTransparent}
      `}
    >
      {children}
    </nav>
  )
}
