import Footer from './footer'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Header />
      <main className="min-h-screen overflow-x-hidden">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
