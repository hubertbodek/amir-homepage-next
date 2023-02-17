import useHeader from 'app/hooks/useHeader'

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const { isScrollingDown, isShrinked } = useHeader()

  return (
    <nav
      className={`fixed top-0 left-0 z-30  bg-transperent text-light w-full flex transition-all duration-300 ${
        isShrinked ? 'h-[var(--header-height-shrinked)] bg-gray-900' : 'h-[var(--header-height)]'
      } ${isScrollingDown ? '-translate-y-full' : ''}
      `}
    >
      {children}
    </nav>
  )
}