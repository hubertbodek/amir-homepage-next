import path from 'path'
import { promises as fs } from 'fs'

interface Options {
  dir?: string
  filename: string
}

export async function getFileContent({ dir, filename }: Options) {
  const jsonDirectory = path.join(process.cwd(), 'src', dir ?? '')
  const fileContents = await fs.readFile(jsonDirectory + `/${filename}.json`, 'utf8')

  return JSON.parse(fileContents)
}
