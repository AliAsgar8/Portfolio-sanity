import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'object',
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Me',
      type: 'array',
      fieldset: 'content',
      of: [{type: 'block'}],
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
      name: 'skill',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    }),
    defineField({
      name: 'aboutCard',
      title: 'About Card',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'aboutCard'}]}],
    }),
  ],
})
