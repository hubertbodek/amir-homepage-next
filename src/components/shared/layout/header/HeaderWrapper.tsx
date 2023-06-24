'use client'

import useHeader from 'hooks/useHeader'

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const { isScrollingDown, isShrinked } = useHeader()

  return (
    <nav
      className={`fixed top-0 left-0 z-30  bg-transparent text-light w-full flex transition-all duration-300 ${
        isShrinked ? 'h-[var(--header-height-shrinked)] bg-slate-900' : 'h-[var(--header-height)]'
      } ${isScrollingDown ? '-translate-y-full' : ''}
      `}
    >
      {children}
    </nav>
  )
}
