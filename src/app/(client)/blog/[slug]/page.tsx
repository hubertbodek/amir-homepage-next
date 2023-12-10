import { type Metadata } from 'next'

import getArticleBySlug from '@sanity/api/services/getArticleBySlug'
import { PortableText } from '@portabletext/react'
import { prepareImg } from 'lib/prepareImg'
import Teaser from 'components/shared/Teaser'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  const img = prepareImg(article.mainImage, 'Article Card Image')

  return {
    title: article.title,
    description: article.metadescription,
    openGraph: {
      title: article.title,
      description: article.metadescription,
      url: `/blog/${article.slug.current}`,
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

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  const preparedMainImage = prepareImg(article.mainImage, 'Article Card Image')

  return (
    <>
      <Teaser image={preparedMainImage.source} title={article.title} label="Artykuł" centered />
      <div className="mx-auto max-w-3xl prose my-20 px-4">
        <PortableText value={article.text} />
      </div>
    </>
  )
}
