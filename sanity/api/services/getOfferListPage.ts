import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type BlockModel } from 'components/blocks/Block'

interface OfferListPage {
  title: string
  description: string
  blocks: BlockModel[]
}

const getOfferPage = async () => {
  const query = groq`*[_id == "OfferListPage"][0]
`
  const offer = await clientFetch<OfferListPage>(query)

  return offer
}

export default getOfferPage
