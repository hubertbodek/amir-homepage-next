import { draftMode } from 'next/headers'
import Footer from './footer'
import Header from './header'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
  solidHeader?: boolean
}

function Layout({ children, solidHeader = false }: LayoutProps) {
  const { isEnabled } = draftMode()

  if (isEnabled) {
    return (
      <main className="relative min-h-screen">
        <div className="fixed left-0 top-4 z-50 flex w-full gap-8 px-10">
          <div className="ml-auto w-52 rounded-full bg-green-400/60 p-2 text-center text-sm text-white">
            Wersja podglądowa
          </div>
          <Link
            href="/api/exit-draft"
            prefetch={false}
            className="inline-block rounded-full bg-primary/60 px-6 py-2 text-sm text-white hover:bg-primary/90"
          >
            Wyłącz wersję podglądową
          </Link>
        </div>
        {children}
      </main>
    )
  }

  return (
    <>
      <Header solid={solidHeader} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
