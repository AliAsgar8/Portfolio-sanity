import {defineType} from 'sanity'

export const experienceSection = defineType({
  name: 'experienceSection',
  type: 'object',
  fields: [{name: 'title', type: 'string', initialValue: 'Experiences'}],
})
