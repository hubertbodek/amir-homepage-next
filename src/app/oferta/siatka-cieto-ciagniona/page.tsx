import data from './data.json'
import handshakeImg from '@public/images/marketing/handshake.jpeg'
import teaserImg from '@public/images/marketing/metal-pattern.jpeg'

import Teaser from 'components/shared/Teaser'
import SideTeaser from 'components/shared/sections/SideTeaser'
import Prose from 'components/shared/Prose'
import ContactCta from 'components/shared/sections/ContactCta'
import IconCardsSection from 'components/shared/sections/IconCardsSection'
import NumberedItems from 'components/shared/sections/NumberedItems'

export default function Page() {
  return (
    <>
      <Teaser
        image={{ src: teaserImg, alternativeText: 'Perforacja' }}
        title="Siatka cięto-ciągniona"
        label="Oferta"
      />
      <SideTeaser {...data.sideTeaser} />
      <Prose heading={data.copyText.heading} text={data.copyText.paragraph} />
      <ContactCta
        image={handshakeImg}
        heading={data.contactCta.heading}
        description={data.contactCta.description}
      />
      <IconCardsSection cards={data.cards} />
      <NumberedItems {...data.neededInfo} />
    </>
  )
}
