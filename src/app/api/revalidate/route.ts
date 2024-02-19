import { mapContentToRevlidate, mapContentToRoute } from 'lib/map-content-to-route'
import { parseBody } from 'next-sanity/webhook'
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'
import { Doc } from 'types/sanity-doc'

const secret = process.env.SANITY_REVALIDATE_TOKEN

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<Doc>(request, secret)

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({ message, isValidSignature, body }), { status: 401 })
    }

    if (!body?._type) {
      const message = 'Bad Request'
      return new Response(JSON.stringify({ message, body }), { status: 400 })
    }

    const paths = mapContentToRevlidate(body._type)

    if (!paths.length) {
      return Response.json({
        revalidated: false,
        now: Date.now(),
        message: 'Missing path to revalidate',
      })
    }

    paths.forEach((path) => revalidatePath(path, 'layout'))

    return new Response(JSON.stringify({ revalidated: true, now: Date.now(), paths }), {
      status: 200,
    })
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}
