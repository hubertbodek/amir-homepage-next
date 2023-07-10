import { groq } from 'next-sanity'
import { client } from '../client'

const getOffers = async () => {
  const query = groq`*[_type == "offer"]`
  const offers = await client.fetch(query)

  return offers
}

export default getOffers
