import { mapContentToRoute } from 'lib/map-content-to-route'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const type = searchParams.get('type')
  const slug = searchParams.get('slug')

  if (!type || !id) {
    return new Response('Missing parameters', { status: 400 })
  }

  const route = mapContentToRoute(type, slug)

  if (!route) {
    return new Response('No route found', { status: 404 })
  }

  if (id.startsWith('drafts.')) {
    draftMode().enable()
  } else {
    draftMode().disable()
  }

  redirect(route)
}
