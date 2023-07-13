import { getOffers } from '@sanity/api/services'
import getSitemap from 'constants/sitemap'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import HeaderWrapper from './HeaderWrapper'

async function Header() {
  const offers = await getOffers()

  const offerSubroutes = offers.map((offer) => ({
    title: offer.title,
    link: `/oferta/${offer.slug}`,
  }))

  const sitemap = getSitemap({ offerSubroutes })

  return (
    <HeaderWrapper>
      <MobileHeader sitemap={sitemap} />
      <DesktopHeader sitemap={sitemap} />
    </HeaderWrapper>
  )
}

export default Header
