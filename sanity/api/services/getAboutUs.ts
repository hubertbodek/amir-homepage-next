import { groq } from 'next-sanity'
import { clientFetch } from '../client'
import { type BlockModel } from 'components/blocks/Block'

interface AboutUsPage {
  title: string
  description: string
  blocks: BlockModel[]
}

const getAboutUsPage = async () => {
  const query = groq`*[_id == "AboutUsPage"][0]
`
  const offer = await clientFetch<AboutUsPage>({ query })

  return offer
}

export default getAboutUsPage
