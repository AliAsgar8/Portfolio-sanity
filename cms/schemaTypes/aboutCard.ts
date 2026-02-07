import {defineField, defineType} from 'sanity'

export const aboutCard = defineType({
  name: 'aboutCard',
  title: 'About Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ],
})
