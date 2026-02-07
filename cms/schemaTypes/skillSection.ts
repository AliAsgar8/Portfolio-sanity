import {defineType} from 'sanity'

export const skillsSection = defineType({
  name: 'skillsSection',
  title: 'Skills Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      initialValue: 'Skills',
    },
  ],
})
