import {MenuIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const siteSetting = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: MenuIcon,

  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              description: 'Example: #skills or /projects',
            },
          ],
        },
      ],
    }),
  ],
})
