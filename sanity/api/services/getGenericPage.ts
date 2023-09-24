import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type BlockModel } from 'components/blocks/Block'

interface GenericPage {
  title: string
  description: string
  blocks: BlockModel[]
}

type PageId = 'OfferListPage' | 'ServicesListPage' | 'ProductsListPage'

const getGenericPage = async (pageId: PageId) => {
  const query = groq`*[_id == "${pageId}"][0]
`
  const page = await clientFetch<GenericPage>(query)

  return page
}

export default getGenericPage
