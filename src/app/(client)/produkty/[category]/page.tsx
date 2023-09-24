import { getCategoryBySlug } from '@sanity/api/services'
import Teaser from 'components/shared/Teaser'

interface CategoryParams {
  params: {
    category: string
  }
}

export default async function Category({ params }: CategoryParams) {
  const { title, mainImage } = await getCategoryBySlug(params.category)

  return (
    <>
      <Teaser image={mainImage} title={title} label="Produkty" />
    </>
  )
}
