import { type Metadata } from 'next'
import { PortableText } from '@portabletext/react'

import getProductBySlug, { getProductPreview } from '@sanity/api/services/getProductBySlug'
import Teaser from 'components/shared/Teaser'
import Button from 'components/shared/Button'
import ImageGallery from 'components/shared/ImageGallery'
import { prepareImg } from 'lib/prepareImg'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import getProducts from '@sanity/api/services/getProducts'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

interface ProductPageParams {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    return {}
  }

  const firstImage = product.images[0]

  const mainImage = firstImage
    ? prepareImg(firstImage, 'Zdjęcie produktu').source
    : { src: '/images/marketing/spaw.jpeg', alt: 'Perforacja' }

  return {
    title: product.title,
    description: product.metadescription,
    openGraph: {
      title: product.title,
      description: product.metadescription,
      url: `/blog/${product.slug.current}`,
      images: [
        {
          url: mainImage.src as string,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const products = await getProducts()

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function Product({ params }: ProductPageParams) {
  const { isEnabled } = draftMode()

  let product = await getProductBySlug(params.slug)

  if (isEnabled && product?._id) {
    product = await getProductPreview(product._id)
  }

  if (!product) {
    return notFound()
  }

  const firstImage = product.images?.[0]

  const mainImage = firstImage
    ? prepareImg(firstImage, 'Zdjęcie produktu').source
    : { src: '/images/marketing/spaw.jpeg', alt: 'Perforacja' }

  return (
    <>
      <Teaser image={mainImage} title={product.title} label={product.category.title} />
      <section className="amir-container flex gap-12 py-10 max-lg:flex-col">
        <div className="lg:hidden">
          <span className="mb-2 inline-block text-xs uppercase text-orange-700">
            {product.category.title}
          </span>
          <h2 className="text-h2 mb-4 font-bold">{product.title}</h2>
          {product.price && <h3 className="text-h3 mb-3 font-bold">{product.price} PLN</h3>}
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <ImageGallery images={product.images} />
        </div>
        <a
          href={product.allegroUrl}
          title="Kup teraz"
          target="_blank"
          rel="noreferrer"
          className="mt-auto self-stretch lg:hidden"
        >
          <Button className="mt-auto w-full" theme="primary">
            Kup teraz
          </Button>
        </a>
        <div className="h-auto flex-1 self-start">
          <div className="max-lg:hidden">
            <span className="mb-2 inline-block text-xs uppercase text-orange-700">
              {product.category.title}
            </span>
            <h2 className="text-h2 mb-4 font-bold">{product.title}</h2>
            {product.price && <h3 className="text-h4 mb-3 font-semibold">{product.price} PLN</h3>}
          </div>
          {!!product.description && (
            <div className="prose prose-slate mb-8 text-gray-800 prose-li:marker:text-sky-800">
              <PortableText value={product.description} />
            </div>
          )}
          <a
            href={product.allegroUrl}
            title="Kup teraz"
            target="_blank"
            rel="noreferrer"
            className="mt-auto self-stretch justify-self-end max-lg:hidden"
          >
            <Button className="mt-auto" theme="primary">
              Kup teraz
            </Button>
          </a>
        </div>
      </section>
      <ContactFormWithMap />
    </>
  )
}
