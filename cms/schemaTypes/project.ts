import {defineType} from 'sanity'

// schemas/project.ts
export const project = defineType({
  name: 'project',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'slug', type: 'slug', options: {source: 'title'}},
    {name: 'image', type: 'image'},
    {name: 'description', type: 'text'},
    {name: 'techStack', type: 'array', of: [{type: 'string'}]},
  ],
})
