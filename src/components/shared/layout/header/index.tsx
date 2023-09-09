import { getOffers, getServices } from '@sanity/api/services'
import getSitemap from 'constants/sitemap'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import HeaderWrapper from './HeaderWrapper'

async function Header() {
  const offers = await getOffers()
  const services = await getServices()

  const offerSubroutes = offers.map((offer) => ({
    title: offer.title,
    link: `/oferta/${offer.slug}`,
  }))

  const serviceSubroutes = services.map((service) => ({
    title: service.title,
    link: `/uslugi/${service.slug}`,
  }))

  const sitemap = getSitemap({ offerSubroutes, serviceSubroutes })

  return (
    <HeaderWrapper>
      <MobileHeader sitemap={sitemap} />
      <DesktopHeader sitemap={sitemap} />
    </HeaderWrapper>
  )
}

export default Header
