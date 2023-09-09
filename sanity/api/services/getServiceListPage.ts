import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type BlockModel } from 'components/blocks/Block'

interface ServicesListPage {
  title: string
  description: string
  blocks: BlockModel[]
}

const getOfferPage = async () => {
  const query = groq`*[_id == "ServicesListPage"][0]
`
  const offer = await clientFetch<ServicesListPage>(query)

  return offer
}

export default getOfferPage
