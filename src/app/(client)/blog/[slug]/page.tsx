import { PortableText } from '@portabletext/react'
import getArticleBySlug from '@sanity/api/services/getArticleBySlug'
import Teaser from 'components/shared/Teaser'
import { prepareImg } from 'lib/prepareImg'

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  const preparedMainImage = prepareImg(article.mainImage, 'Article Card Image')

  return (
    <>
      <Teaser image={preparedMainImage.source} title={article.title} label="Artykuł" centered />
      <div className="mx-auto max-w-3xl prose my-20">
        <PortableText value={article.text} />
      </div>
    </>
  )
}
