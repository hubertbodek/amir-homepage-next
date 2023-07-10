import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Amir Admin',
  projectId: '940pe5u1',
  dataset: 'production',
  basePath: '/admin',
  apiVersion: '2023-07-10',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
