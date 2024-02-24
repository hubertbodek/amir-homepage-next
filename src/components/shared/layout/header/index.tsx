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

async function Header({ solid = false }) {
  const [offers, services] = await Promise.all([getOffers(), getServices(), getCategories()])

  const offerSubroutes = createSubroutes(offers, 'oferta')
  const serviceSubroutes = createSubroutes(services, 'uslugi')

  const sitemap = getSitemap({ offerSubroutes, serviceSubroutes })

  return (
    <HeaderWrapper solid={solid}>
      <MobileHeader sitemap={sitemap} />
      <DesktopHeader sitemap={sitemap} />
    </HeaderWrapper>
  )
}

export default Header
