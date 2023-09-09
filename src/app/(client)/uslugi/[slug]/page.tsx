// import siatkaCcTeaserImg from '@public/images/marketing/metal-pattern.jpeg'
import { getServiceBySlug, getServices } from '@sanity/api/services'

import BlockMapper from 'components/blocks/Block'
import Teaser from 'components/shared/Teaser'

interface ServiceParams {
  params: {
    slug: string
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
