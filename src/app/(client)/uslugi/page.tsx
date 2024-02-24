import type { Metadata } from 'next'

import Teaser from 'components/shared/Teaser'

import { getGenericPage, getServices } from '@sanity/api/services'
import { prepareImg } from 'lib/prepareImg'
import BlockMapper from 'components/blocks/Block'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import Button from 'components/shared/Button'
import Grid from 'components/shared/Grid'

export const metadata: Metadata = {
  title: 'Usługi',
  description:
    'Amir Metal oferuje szeroki zakres usług związanych z obróbką metalu. Odkryj nasze kompleksowe podejście do realizacji zleceń i zaufaj naszemu doświadczeniu w świecie metalurgii.',
}

export default async function Services() {
  const [{ title, description, blocks }, offers] = await Promise.all([
    getGenericPage('ServicesListPage'),
    getServices(),
  ])

  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/spaw.jpeg', alt: 'Perforacja' }}
        title={title}
        label="Usługi"
      />
      <p className="text-subtitle mx-auto my-24 max-w-prose px-4">{description}</p>
      <section className="amir-container mx-auto my-24 md:my-36">
        <h2 className="text-h2 mb-8 font-bold">Lorem ipsum dolor sit amet.</h2>
        <p className="mb-6 max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus error, distinctio saepe
          veritatis modi nostrum!
        </p>
        <Grid>
          {offers.map((item, idx) => (
            <VerticalOverlayCard
              key={`item--${idx}`}
              title={item.title}
              image={prepareImg(item.mainImage, '').source}
              url={`/uslugi/${item.slug}`}
              overlay
            />
          ))}
          <CustomService />
        </Grid>
      </section>
      <BlockMapper blocks={blocks} />
    </>
  )
}

const CustomService = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-end rounded border border-primary/30 bg-neutral-200 px-5 py-6 shadow-lg">
      <h3 className="text-h3 mb-2 font-bold">Kompleksowa usługa</h3>
      <p className="mb-3 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
      </p>
      <Button href="/kontakt" theme="primary">
        Skontaktuj się!
      </Button>
    </div>
  )
}
