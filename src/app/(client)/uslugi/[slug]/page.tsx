import { type Metadata } from 'next'

import { getServiceBySlug, getServices } from '@sanity/api/services'
import BlockMapper from 'components/blocks/Block'
import Teaser from 'components/shared/Teaser'
import { prepareImg } from 'lib/prepareImg'
import { draftMode } from 'next/headers'

interface ServiceParams {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { isEnabled } = draftMode()
  let service = await getServiceBySlug(params.slug)

  if (isEnabled && service._id) {
    service = await getServiceBySlug(service._id)
  }
  const img = prepareImg(service.mainImage, 'Zdjęcie usługi')

  return {
    title: service.title,
    description: service.metadescription,
    openGraph: {
      title: service.title,
      description: service.metadescription,
      url: `/blog/${service.slug.current}`,
      images: [
        {
          url: img.source.src as string,
          width: img.dimensions?.width ?? 800,
          height: img.dimensions?.height ?? 600,
        },
      ],
    },
  }
}

export default async function Service({ params }: ServiceParams) {
  const { slug } = params

  const service = await getServiceBySlug(slug)

  return (
    <>
      <Teaser image={service.mainImage} title={service.title} label="Usługi" />
      <BlockMapper blocks={service.blocks} />
    </>
  )
}

export async function generateStaticParams() {
  const services = await getServices()

  return services.map((service) => ({ slug: service.slug }))
}
