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
        <div className="fixed top-4 left-0 w-full px-10 z-50">
          <div className="bg-green-400/60 text-white ml-auto p-2 text-center text-sm rounded-full w-52">
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
