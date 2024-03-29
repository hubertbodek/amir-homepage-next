import { groq } from 'next-sanity'
import { clientFetch, draftClientFetch } from '../client'
import { type BlockModel } from 'components/blocks/Block'

interface AboutUsPage {
  title: string
  description: string
  blocks: BlockModel[]
}

const getAboutUsPage = async (preview?: boolean) => {
  const query = preview ? groq`*[_id == "drafts.AboutUsPage"][0]` : groq`*[_id == "AboutUsPage"][0]`
  const offer = preview
    ? await draftClientFetch<AboutUsPage>({ query })
    : await clientFetch<AboutUsPage>({ query })

  return offer
}

export default getAboutUsPage
