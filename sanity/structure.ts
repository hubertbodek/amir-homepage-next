import type { StructureBuilder, ListItemBuilder } from 'sanity/structure'
import { singletons } from './schemas/singletons'
import { SanityDocument } from 'next-sanity'
import { Iframe } from 'sanity-plugin-iframe-pane'

interface Doc extends SanityDocument {
  slug: {
    current: string
  }
}

function getPreviewUrl(doc: Doc) {
  return `/api/draft?type=${doc._type}&id=${doc._id}`
}

const getSinglePages = (S: StructureBuilder) =>
  singletons.map((singleton) =>
    S.listItem()
      .title(singleton.title)
      .child(
        S.document()
          .schemaType(singleton.name)
          .documentId(singleton.name)
          .views([
            S.view.form(),
            S.view
              .component(Iframe)
              .options({
                url: (doc: Doc) => getPreviewUrl(doc),
              })
              .title('Preview'),
          ])
      )
  )

const singleTypeNames = singletons.map((singleton) => singleton.name)

const filterDocuments = (listItem: ListItemBuilder) =>
  !singleTypeNames.includes(listItem.getId() as string)

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Typy stron')
    .items([
      S.listItem()
        .title('Strony')
        .child(S.list().title('Strony statyczne').items(getSinglePages(S))),
      ...S.documentTypeListItems().filter(filterDocuments),
    ])
