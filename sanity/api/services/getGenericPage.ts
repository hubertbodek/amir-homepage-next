import { groq } from 'next-sanity'
import { clientFetch, draftClientFetch } from '../client'
import { type BlockModel } from 'components/blocks/Block'

interface GenericPage {
  title: string
  description: string
  blocks: BlockModel[]
}

type PageId = 'OfferListPage' | 'ServicesListPage' | 'ProductsListPage' | 'ContactPage'

const getGenericPage = async (pageId: PageId, preview?: boolean) => {
  const query = groq`*[_id == "${preview ? 'drafts.' : ''}${pageId}"][0]
`
  const page = preview
    ? await draftClientFetch<GenericPage>({ query })
    : await clientFetch<GenericPage>({ query })

  return page
}

export default getGenericPage
