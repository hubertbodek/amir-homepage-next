import { getCategoryBySlug, getCategories } from '@sanity/api/services'
import { type ProductDocument } from '@sanity/schemas/documents/product'

import Teaser from 'components/shared/Teaser'
import { prepareImg } from 'lib/prepareImg'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryParams {
  params: {
    category: string
  }
}

export const dynamicParams = false

export async function generateStaticParams() {
  const categories = await getCategories()

  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function Category({ params }: CategoryParams) {
  const { title, mainImage, products } = await getCategoryBySlug(params.category)

  return (
    <>
      <Teaser image={mainImage} title={title} label="Produkty" />
      <section className="amir-container grid gap-8 grid-cols-fluid py-20">
        {products?.map((product) => (
          <ProductTile key={product._id} {...product} />
        ))}
      </section>
    </>
  )
}

interface ProductTileProps extends ProductDocument {}

const ProductTile = ({ title, slug, images }: ProductTileProps) => {
  const img = prepareImg(images[0], 'Produkt')

  return (
    <Link href={`/produkt/${slug.current}`} scroll={false}>
      <div className="group aspect-square rounded-lg bg-gray-600 relative overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 z-10 bg-primary/70 group-hover:bg-primary/60 transition-colors duration-300 will-change-transform" />
        <Image
          src={img.source.src}
          alt={img.source.alt}
          {...img.dimensions}
          className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="relative z-20 py-8 px-6">
          <h3 className="text-h3 text-gray-100">{title}</h3>
          {/* <Link href={`/produkt/${slug.current}`} scroll={false}>
            prod
          </Link> */}
        </div>
        {/* <p>{description}</p> */}
      </div>
    </Link>
  )
}
