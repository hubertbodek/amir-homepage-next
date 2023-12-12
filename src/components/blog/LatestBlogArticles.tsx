import getLatestArticles from '@sanity/api/services/getLatestArticles'
import Button from 'components/shared/Button'
import VerticalOverlayCard from 'components/shared/cards/VerticalOverlayCard'

export default async function LatestBlogArticles() {
  const articles = await getLatestArticles()

  return (
    <section className="max-w-7xl mx-auto px-4 my-40">
      <h4 className="text-h2 text-center mb-3 font-semibold uppercase">
        Sprawdź nasze wpisy na blogu
      </h4>
      {/* <p className="max-w-xl text-center mx-auto">{blog.description}</p> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
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
      <div className="mx-auto flex justify-center items-center mb-12">
        <Button theme="primary" href="/blog">
          Zobacz blog
        </Button>
      </div>
    </section>
  )
}
