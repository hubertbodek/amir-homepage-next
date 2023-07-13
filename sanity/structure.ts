import type { StructureBuilder, ListItemBuilder } from 'sanity/desk'
import { singletons } from './schemas/singletons'

const getSinglePages = (S: StructureBuilder) =>
  singletons.map((singleton) =>
    S.listItem()
      .title(singleton.title)
      .child(S.document().schemaType(singleton.name).documentId(singleton.name))
  )

const singleTypeNames = singletons.map((singleton) => singleton.name)

const filterDocuments = (listItem: ListItemBuilder) =>
  !singleTypeNames.includes(listItem.getId() as string)

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Single Pages')
        .child(S.list().title('Pages').items(getSinglePages(S))),
      ...S.documentTypeListItems().filter(filterDocuments),
    ])
