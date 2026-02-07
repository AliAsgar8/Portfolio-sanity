import {defineType} from 'sanity'

export const projectsSection = defineType({
  name: 'projectsSection',
  type: 'object',
  fields: [{name: 'title', type: 'string'}],
})
