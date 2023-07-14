import type { StrapiImageModel } from 'types/strapi'
import Button from 'components/shared/Button'
import Image from 'next/image'

export interface ArticleCardProps {
  image: {
    data: {
      attributes: Omit<StrapiImageModel, 'caption'>
    }
  }
  description: string
  title: string
  slug: string
  isLatest?: boolean
}

export default function ArticleCard({
  image,
  title,
  description,
  slug,
  isLatest = false,
}: ArticleCardProps) {
  const { url, alt } = image.data.attributes
  const articleUrl = `/blog/${slug}`

  return (
    <article className="h-96 first-of-type:min-h-[480px] first-of-type:col-span-full first-of-type:mb-12 relative shadow-lg group col-span-3 article-card">
      <div
        className={`duration-200 absolute h-full w-full top-0 left-0 bg-primary/80 group-hover:bg-primary/70 transition z-10 flex flex-col py-6 px-4 items-start ${
          isLatest ? 'justify-center' : ''
        }`}
      >
        <div
          className={`text-h2 text-neutral-50 group-hover:drop-shadow-2xl transition duration-200 article-title ${
            isLatest ? 'max-w-3xl mb-8' : 'max-w-lg mb-5'
          }`}
        >
          {title}
        </div>
        <p
          className={`text-subtitle text-neutral-100 article-description ${
            !isLatest ? 'flex-1 max-w-md' : 'mb-6 max-w-lg'
          }`}
        >
          {description}
        </p>
        <Button
          theme={isLatest ? 'light' : 'secondary'}
          href={articleUrl}
          className={isLatest ? 'min-w-[200px]' : undefined}
        >
          Czytaj
        </Button>
      </div>
      <Image src={url} alt={alt} fill className="object-cover object-center z-0" />
    </article>
  )
}
