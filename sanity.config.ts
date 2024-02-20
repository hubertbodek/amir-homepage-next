import { defineConfig, isDev, type SanityDocument } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool, type DefaultDocumentNodeResolver } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'
import { Iframe } from 'sanity-plugin-iframe-pane'
import { structure } from './sanity/structure'
import { table } from '@sanity/table'

const devOnlyPlugins = [visionTool()]

interface Doc extends SanityDocument {
  slug: {
    current: string
  }
}

function getPreviewUrl(doc: Doc) {
  let url = `/api/draft?type=${doc._type}&id=${doc._id}`

  if (doc?.slug?.current) {
    url = url + `&slug=${doc.slug.current}`
  }

  return url
}

const defaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc: Doc) => getPreviewUrl(doc),
      })
      .title('Preview'),
  ])
}

export default defineConfig({
  name: 'default',
  title: 'Amir Admin',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  basePath: '/admin',
  apiVersion: '2023-07-10',
  plugins: [
    table(),
    structureTool({
      structure,
      defaultDocumentNode,
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
  },
})
