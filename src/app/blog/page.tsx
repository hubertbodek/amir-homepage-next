/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Teaser from 'components/shared/Teaser'

export default function Blog() {
  return (
    <>
      <div className="bg-gradient-to-b from-primary-100 via-primary-100 to-primary">
        <Teaser
          image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
          title="Blog"
          label="Blog"
        />
        <section className="amir-container mx-auto grid md:grid-cols-6 py-10 gap-x-6 gap-y-8 -mt-20 relative z-10">
          x
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
