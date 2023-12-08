import getProductBySlug from '@sanity/api/services/getProductBySlug'
import { PortableText } from '@portabletext/react'

import Teaser from 'components/shared/Teaser'
import Button from 'components/shared/Button'
import ImageGallery from 'components/shared/ImageGallery'
import { prepareImg } from 'lib/prepareImg'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

interface ProductPageParams {
  params: {
    slug: string
  }
}

export default async function Product({ params }: ProductPageParams) {
  const product = await getProductBySlug(params.slug)
  const firstImage = product.images[0]

  const mainImage = firstImage
    ? prepareImg(firstImage, 'Zdjęcie produktu').source
    : { src: '/images/marketing/spaw.jpeg', alt: 'Perforacja' }

  return (
    <>
      <Teaser image={mainImage} title={product.title} label={product.category.title} />
      <section className="py-10 amir-container gap-12 flex">
        <div className="flex-1 flex flex-col gap-8">
          <ImageGallery images={product.images} />
        </div>
        <div className="flex-1 h-auto self-start">
          <span className="text-orange-700 uppercase inline-block mb-2 text-xs">
            {product.category.title}
          </span>
          <h2 className="text-h2 font-bold mb-4">{product.title}</h2>
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
            className="justify-self-end self-stretch mt-auto"
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
