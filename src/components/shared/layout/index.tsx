import { draftMode } from 'next/headers'
import Footer from './footer'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
  solidHeader?: boolean
}

function Layout({ children, solidHeader = false }: LayoutProps) {
  const { isEnabled } = draftMode()

  if (isEnabled) {
    return (
      <main className="relative min-h-screen">
        <div className="fixed left-0 top-4 z-50 w-full px-10">
          <div className="ml-auto w-52 rounded-full bg-green-400/60 p-2 text-center text-sm text-white">
            Wersja podglądowa
          </div>
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
