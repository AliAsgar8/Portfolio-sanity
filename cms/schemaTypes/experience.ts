import {defineType} from 'sanity'

// schemas/experience.ts
export const experience = defineType({
  name: 'experience',
  type: 'document',
  fields: [
    {name: 'company', type: 'string'},
    {name: 'role', type: 'string'},
    {name: 'duration', type: 'string'},
    {name: 'description', type: 'text'},
  ],
})
