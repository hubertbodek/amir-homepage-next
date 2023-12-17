import { groq } from 'next-sanity'
import { clientFetch } from '../client'

interface Product {
  slug: string
}

const getProducts = async () => {
  const query = groq`*[_type == "product"]{
    "slug": slug.current,
  }`
  const products = await clientFetch<Product[]>(query)

  return products
}

export default getProducts
