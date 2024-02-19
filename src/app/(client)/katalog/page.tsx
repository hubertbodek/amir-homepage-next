import { type Metadata } from 'next'

import Teaser from 'components/shared/Teaser'
import BlockMapper from 'components/blocks/Block'

import { getGenericPage } from '@sanity/api/services'
import img from '@public/images/marketing/ogrod.jpg'
import Grid from 'components/shared/Grid'
import { getProductsList } from '@sanity/api/services/getProducts'
import ProductCard from './product-card'

export const metadata: Metadata = {
  title: 'Katalog',
  description:
    'Odkryj naszą szeroką gamę wysokiej jakości produktów metalowych. W Amir Metal znajdziesz precyzję wykonania i innowacyjne podejście do obróbki metalu. Zapoznaj się z naszymi produktami i znajdź idealne rozwiązanie dla Twoich potrzeb.',
}

export default async function Products() {
  const [{ title, description, blocks }, products] = await Promise.all([
    getGenericPage('ProductsListPage'),
    getProductsList(),
  ])

  return (
    <>
      <Teaser image={{ src: img, alt: 'Perforacja' }} title={title} label="Produkty" />
      <p className="mx-auto max-w-prose px-4 my-24 text-subtitle">{description}</p>
      <BlockMapper blocks={blocks} />
      <Grid className="amir-container mb-8">
        <h2 className="text-h2 col-span-full font-bold">Nasze wyroby</h2>
        <p className="max-w-xl text-subtitle text-left col-span-full">
          Oferujemy produkty, które wzbogacą każdą przestrzeń – <br />
          <span className="font-semibold">od domowego zacisza po miejską dżunglę.</span>
        </p>
      </Grid>
      <div className="amir-container grid gap-x-8 gap-y-10 grid-cols-2 md:grid-cols-fluid-sm">
        {products.map((product) => (
          <ProductCard
            key={product.slug.current}
            label={product.category.title}
            title={product.title}
            price={product.price}
            images={product.images}
            url={`/produkt/${product.slug.current}`}
          />
        ))}
      </div>
    </>
  )
}
