import { getCategories, getOffers, getServices } from '@sanity/api/services'
import getSitemap from 'constants/sitemap'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import HeaderWrapper from './HeaderWrapper'

function createSubroutes<T extends { title: string; slug: string }>(items: T[], segment: string) {
  return items.map((item) => ({
    title: item.title,
    link: `/${segment}/${item.slug}`,
  }))
}

async function Header() {
  const [offers, services, categories] = await Promise.all([
    getOffers(),
    getServices(),
    getCategories(),
  ])

  const offerSubroutes = createSubroutes(offers, 'oferta')
  const serviceSubroutes = createSubroutes(services, 'uslugi')
  const categorySubroutes = createSubroutes(categories, 'katalog')

  const sitemap = getSitemap({ offerSubroutes, serviceSubroutes, categorySubroutes })

  return (
    <HeaderWrapper>
      <MobileHeader sitemap={sitemap} />
      <DesktopHeader sitemap={sitemap} />
    </HeaderWrapper>
  )
}

export default Header
