import Image from 'next/image'

import Button from 'components/shared/Button'
import { type ArticleDocument } from '@sanity/schemas/documents/article'
import { prepareImg } from 'lib/prepareImg'
import Link from 'next/link'

export interface ArticleCardProps extends ArticleDocument {}

export default function ArticleCard({
  mainImage,
  title,
  text,
  metadescription,
  slug,
}: ArticleCardProps) {
  const img = prepareImg(mainImage, 'Article Card Image')
  const articleUrl = `/blog/${slug.current}`

  return (
    <>
      <article className="group relative col-span-2 h-96 overflow-hidden rounded border border-gray-200/20 shadow-lg">
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-start bg-primary/80 px-6 py-10 transition duration-200 group-hover:bg-primary/75 ">
          <h3 className="!text-h2 mb-5 line-clamp-3 max-w-lg text-neutral-50 transition duration-200 group-hover:drop-shadow-2xl">
            <Link href={articleUrl} className="hover:underline" title={title}>
              {title}
            </Link>
          </h3>
          <p className="text-subtitle line-clamp-3 justify-self-end text-neutral-100">
            {metadescription}
          </p>
          <div className="mt-auto inline-block">
            <Button theme="secondary" href={articleUrl}>
              Czytaj
            </Button>
          </div>
        </div>
        <Image
          {...img.source}
          alt={img.source.alt}
          fill
          className="z-0 object-cover object-center"
        />
      </article>
    </>
  )
}
