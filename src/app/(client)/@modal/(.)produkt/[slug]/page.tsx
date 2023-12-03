import { PortableText } from '@portabletext/react'
import getProductBySlug from '@sanity/api/services/getProductBySlug'
import Button from 'components/shared/Button'
import ImageGallery from 'components/shared/ImageGallery'

import Modal from 'components/shared/Modal'

export default async function ProductPageModal({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  return (
    <Modal>
      <div className="flex gap-8">
        <div className="flex-1 h-full max-h-[615px] overflow-y-scroll p-4">
          <ImageGallery images={product.images} />
        </div>
        <div className="flex-1 mt-12 mb-8 px-4 flex flex-col max-h-[615px]">
          <div className="max-h-[450px] overflow-y-scroll flex-1">
            <h1 className="text-h2 mb-4">{product.title}</h1>
            {!!product.description && (
              <div className="text-gray-800 prose prose-slate prose-li:marker:text-sky-800">
                <PortableText value={product.description} />
              </div>
            )}
          </div>
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
      </div>
    </Modal>
  )
}
