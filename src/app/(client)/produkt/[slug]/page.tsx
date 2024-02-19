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

  const firstImage = product.images[0]

  const mainImage = firstImage
    ? prepareImg(firstImage, 'Zdjęcie produktu').source
    : { src: '/images/marketing/spaw.jpeg', alt: 'Perforacja' }

  return (
    <>
      <Teaser image={mainImage} title={product.title} label={product.category.title} />
      <section className="py-10 amir-container gap-12 flex max-lg:flex-col">
        <div className="lg:hidden">
          <span className="text-orange-700 uppercase inline-block mb-2 text-xs">
            {product.category.title}
          </span>
          <h2 className="text-h2 font-bold mb-4">{product.title}</h2>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <ImageGallery images={product.images} />
        </div>
        <a
          href={product.allegroUrl}
          title="Kup teraz"
          target="_blank"
          rel="noreferrer"
          className="self-stretch mt-auto lg:hidden"
        >
          <Button className="mt-auto w-full" theme="primary">
            Kup teraz
          </Button>
        </a>
        <div className="flex-1 h-auto self-start">
          <div className="max-lg:hidden">
            <span className="text-orange-700 uppercase inline-block mb-2 text-xs">
              {product.category.title}
            </span>
            <h2 className="text-h2 font-bold mb-4">{product.title}</h2>
          </div>
          {!!product.description && (
            <div className="text-gray-800 prose prose-slate prose-li:marker:text-sky-800 mb-8">
              <PortableText value={product.description} />
            </div>
          )}
          <a
            href={product.allegroUrl}
            title="Kup teraz"
            target="_blank"
            rel="noreferrer"
            className="justify-self-end self-stretch mt-auto max-lg:hidden"
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
