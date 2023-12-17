import Footer from './footer'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
  solidHeader?: boolean
}

function Layout({ children, solidHeader = false }: LayoutProps) {
  return (
    <>
      <Header solid={solidHeader} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
