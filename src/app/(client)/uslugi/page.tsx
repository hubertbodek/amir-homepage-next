import type { Metadata } from 'next'

import Teaser from 'components/shared/Teaser'

import { getGenericPage, getServices } from '@sanity/api/services'
import { prepareImg } from 'lib/prepareImg'
import BlockMapper from 'components/blocks/Block'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'
import Button from 'components/shared/Button'

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
      <p className="mx-auto max-w-prose px-4 my-24 text-subtitle">{description}</p>
      <section className="amir-container mx-auto my-24 md:my-36">
        <h2 className="text-h2 mb-8 font-bold">Lorem ipsum dolor sit amet.</h2>
        <p className="max-w-prose mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus error, distinctio saepe
          veritatis modi nostrum!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
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
        </div>
      </section>
      <BlockMapper blocks={blocks} />
    </>
  )
}

const CustomService = () => {
  return (
    <div className="h-full w-full px-5 py-6 bg-neutral-200 border border-primary/30 shadow-lg rounded flex flex-col justify-end items-start">
      <h3 className="text-h3 font-bold mb-2">Kompleksowa usługa</h3>
      <p className="text-gray-600 mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.
      </p>
      <Button href="/kontakt" theme="primary">
        Skontaktuj się!
      </Button>
    </div>
  )
}
