import {CogIcon} from '@sanity/icons'
import {StructureBuilder} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // ✅ Site Settings (singleton – opens directly)
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),

      S.divider(),

      // ✅ All other document types (normal behavior)
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'siteSettings'),
    ])
