import React from 'react'
import ArticleCard from '@/src/blog/components/ArticleCard'
import Pagination from '@/src/blog/components/Pagination'
import Teaser from '../shared/components/Teaser'

export default function Blog() {
  return (
    <>
      <>
        <Teaser
          image={{ src: '/images/marketing/corten.webp', alternativeText: 'Perforacja' }}
          title="Blog"
          specific
        />
      </>
      {/* <section className="amir-container">
        <h1 className="text-h1 font-bold mb-8">Nasz Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </section> */}
      {/* <div className="gradient-primary">
        <div className="amir-container mx-auto mt-24">
          <Pagination pagination={{ page: 1, pageCount: 10 }} />
        </div>
      </div> */}
    </>
  )
}
