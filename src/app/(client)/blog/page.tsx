/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { Metadata } from 'next'
import Teaser from 'components/shared/Teaser'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function Blog() {
  return (
    <>
      <div className="bg-gradient-to-b from-primary via-primary to-primary">
        <Teaser
          image={{ src: '/images/marketing/metal-pattern.jpeg', alt: 'Perforacja' }}
          title="Blog"
          label="Blog"
        />
        <section className="amir-container mx-auto grid md:grid-cols-6 py-10 gap-x-6 gap-y-8 -mt-20 relative z-10">
          {/* {articles.map((article: any, idx: number) => {
            const { image, description, title, slug } = article.attributes

            return (
              <>
                <ArticleCard
                  key={`article--${article.id}`}
                  image={image}
                  description={description}
                  title={title}
                  slug={slug}
                  isLatest={idx === 0}
                />
                <ArticleCard
                  key={`article--${article.id}`}
                  image={image}
                  description={description}
                  title={title}
                  slug={slug}
                  isLatest={idx === 0}
                />
              </>
            )
          })} */}
        </section>
      </div>
    </>
  )
}
