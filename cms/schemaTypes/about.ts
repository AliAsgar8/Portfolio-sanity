import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'About Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'about',
      title: 'About Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'aboutCard',
      title: 'About Card',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'aboutCard'}]}],
    }),
  ],
})
