import { draftMode } from 'next/headers'

export async function GET() {
  draftMode().disable()

  return new Response('Wersja podglądowa wyłączona')
}
