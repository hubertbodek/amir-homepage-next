import { blocks } from './blocks'
import { documents } from './documents'
import { objects } from './objects'
import { singletons } from './singletons'

export const schemaTypes = [...documents, ...blocks, ...objects, ...singletons]
