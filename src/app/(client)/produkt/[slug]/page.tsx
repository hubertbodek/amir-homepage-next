import Image from 'next/image'
import getProductBySlug from '@sanity/api/services/getProductBySlug'
import { PortableText } from '@portabletext/react'

import Teaser from 'components/shared/Teaser'
import { prepareImg } from 'lib/prepareImg'
import Button from 'components/shared/Button'

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
      <Teaser image={mainImage} title={product.title} label="Produkt" />
      <section className="py-10 amir-container gap-12 flex">
        <div className="flex-1 flex flex-col gap-8">
          {product.images.map((image, idx) => {
            const img = prepareImg(image, 'Zdjęcie produktu')

            return (
              <Image
                key={`${img.source.alt}${idx}`}
                src={img.source.src}
                alt={img.source.alt}
                {...img.dimensions}
                className="object-contain object-center w-full h-auto rounded-lg shadow-lg"
              />
            )
          })}
        </div>
        <div className="flex-1 py-8 h-auto self-start sticky top-20">
          <h2 className="text-h2 font-bold mb-4">{product.title}</h2>
          {!!product.description && (
            <div className="text-gray-800 prose prose-slate prose-li:marker:text-sky-800 mb-8">
              <PortableText value={product.description} />
            </div>
          )}
          <a
            href={product.allegroUrl}
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
    </>
  )
}
