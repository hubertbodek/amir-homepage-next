import { type Metadata } from 'next'

import Teaser from 'components/shared/Teaser'
import BlockMapper from 'components/blocks/Block'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'

import { prepareImg } from 'lib/prepareImg'
import { getCategories, getGenericPage } from '@sanity/api/services'
import img from '@public/images/marketing/ogrod.jpg'

export const metadata: Metadata = {
  title: 'Produkty',
}

export default async function Products() {
  const [{ title, description, blocks }, categories] = await Promise.all([
    getGenericPage('ProductsListPage'),
    getCategories(),
  ])

  return (
    <>
      <Teaser image={{ src: img, alt: 'Perforacja' }} title={title} label="Produkty" />
      <p className="mx-auto max-w-prose px-4 my-24 text-subtitle">{description}</p>
      <BlockMapper blocks={blocks} />
      <section className="amir-container grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <h2 className="text-h2 col-span-full font-bold">Lorem, ipsum dolor.</h2>
        <p className="max-w-xl text-subtitle text-left col-span-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magnam vel, soluta
          temporibus ipsum porro?
        </p>
        {categories.map((category) => (
          <VerticalOverlayCard
            className="max-lg:!aspect-square max-lg:!h-auto"
            key={category.slug}
            title={category.title}
            image={prepareImg(category.mainImage, '').source}
            url={`/katalog/${category.slug}`}
            overlay
          />
        ))}
      </section>
    </>
  )
}
