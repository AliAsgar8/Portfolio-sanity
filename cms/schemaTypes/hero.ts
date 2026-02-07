import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      title: 'Hero Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
