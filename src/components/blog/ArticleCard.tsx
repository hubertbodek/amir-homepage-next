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
      <article className="h-96 col-span-2 relative shadow-lg group border border-gray-200/20 rounded overflow-hidden">
        <div className="duration-200 absolute h-full w-full top-0 left-0 bg-primary/80 group-hover:bg-primary/75 transition z-10 flex flex-col py-10 px-6 items-start ">
          <h3 className="!text-h2 text-neutral-50 group-hover:drop-shadow-2xl transition duration-200 max-w-lg mb-5 line-clamp-3">
            <Link href={articleUrl} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-subtitle text-neutral-100 justify-self-end line-clamp-3">
            {metadescription}
          </p>
          <div className="inline-block mt-auto">
            <Button theme="secondary" href={articleUrl}>
              Czytaj
            </Button>
          </div>
        </div>
        <Image
          {...img.source}
          alt={img.source.alt}
          fill
          className="object-cover object-center z-0"
        />
      </article>
    </>
  )
}
