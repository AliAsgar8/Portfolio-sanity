import {defineType} from 'sanity'

// schemas/skill.ts
export const skill = defineType({
  name: 'skill',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'level', type: 'string'},
    {name: 'icon', type: 'image'},
  ],
})
