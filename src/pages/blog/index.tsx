/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import Teaser from 'components/shared/Teaser'

export default function Blog({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="bg-gradient-to-b from-primary-100 via-primary-100 to-primary">
        <Teaser
          image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
          title="Blog"
          specific
          faded
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: { pageData: {} },
  }
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const page = context.query.p
//   if (!page) {
//     const response = await getArticles()

//     return {
//       props: {
//         articles: response.articles.data,
//         pagination: response.articles.meta,
//       },
//     }
//   }

//   const response = await getArticles({ page: Number(page) })

//   return {
//     props: {
//       articles: response.articles.data,
//       pagination: response.articles.meta,
//     },
//   }
// }
