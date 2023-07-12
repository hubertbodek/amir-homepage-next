import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'Amir Admin',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  basePath: '/admin',
  apiVersion: '2023-07-10',
  plugins: [deskTool(), ...(isDev ? devOnlyPlugins : [])],
  schema: {
    types: schemaTypes,
  },
})
