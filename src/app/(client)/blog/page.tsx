/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { Metadata } from 'next'

import getArticles from '@sanity/api/services/getArticles'
import { prepareImg } from 'lib/prepareImg'
import { type StaticImageModel } from 'types/StaticImageModel'
import { type ImageData } from '@sanity/schemas/objects/image-data'
import Hero from 'components/shared/Hero'
import Button from 'components/shared/Button'
import ArticleCard from 'components/blog/ArticleCard'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function Blog() {
  const articles = await getArticles()
  const latestArticle = articles.shift()

  let mainImage: ImageData | StaticImageModel = {
    src: '/images/marketing/metal-pattern.jpeg',
    alt: 'Perforacja',
  }

  if (latestArticle) {
    const img = prepareImg(latestArticle.mainImage, 'Blog Image')

    mainImage = {
      src: img.source.src,
      alt: img.source.alt,
    }
  }

  return (
    <div>
      <Hero
        image={mainImage}
        title={latestArticle?.title ?? 'Blog'}
        description={latestArticle?.description}
        label="Najnowszy artykuł"
      >
        <Button
          theme="light"
          href={`/blog/${latestArticle?.slug.current ?? ''}`}
          className="mt-5 px-10"
        >
          Czytaj
        </Button>
      </Hero>
      <section className="amir-container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 py-10 gap-x-6 gap-y-8 relative z-10">
        {articles.map((article, idx) => {
          const { mainImage, slug, text, title, description } = article

          return (
            <>
              <ArticleCard
                key={`article--${slug.current}`}
                mainImage={mainImage}
                description={description}
                title={title}
                slug={slug}
                text={text}
              />
            </>
          )
        })}
      </section>
      <ContactFormWithMap />
    </div>
  )
}
