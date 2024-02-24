import getLatestArticles from '@sanity/api/services/getLatestArticles'
import Button from 'components/shared/Button'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'

export default async function LatestBlogArticles() {
  const articles = await getLatestArticles()

  return (
    <section className="mx-auto my-40 max-w-7xl px-4">
      <h4 className="text-h2 mb-3 text-center font-semibold uppercase">
        Sprawdź nasze wpisy na blogu
      </h4>
      {/* <p className="max-w-xl text-center mx-auto">{blog.description}</p> */}
      <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((item, idx) => {
          return (
            <VerticalOverlayCard
              key={`blogcard--${idx}`}
              {...item}
              image={item.mainImage}
              url={`/blog/${item.slug.current}`}
              overlay
            >
              <Button theme="secondary" className="mt-4" href={`/blog/${item.slug.current}`}>
                Czytaj
              </Button>
            </VerticalOverlayCard>
          )
        })}
      </div>
      <div className="mx-auto mb-12 flex items-center justify-center">
        <Button theme="primary" href="/blog">
          Zobacz blog
        </Button>
      </div>
    </section>
  )
}
