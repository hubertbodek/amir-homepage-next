import { type ImageData } from '@sanity/schemas/objects/image-data'
import { type StaticImageModel } from 'types/StaticImageModel'
import { invariant } from './invariant'

const baseCdnUrl = 'https://cdn.sanity.io'
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

function extractImageInfo(assetRef: string) {
  const regex = /image-(\w+)-(\d+)x(\d+)-(\w+)/
  const matches = assetRef.match(regex)

  if (matches && matches.length === 5) {
    const assetName = matches[1]
    const width = parseInt(matches[2])
    const height = parseInt(matches[3])
    const extension = matches[4]

    return {
      assetName,
      width,
      height,
      extension,
    }
  }

  return null
}

export function prepareImg(img: ImageData | StaticImageModel, fallbackAlt: string) {
  if ('src' in img) {
    return {
      source: img,
    }
  }

  const { asset } = img
  const imageInfo = extractImageInfo(asset._ref)

  invariant(imageInfo !== null, `Could not extract image info from asset._ref: ${asset._ref}`)

  const { assetName, width, height, extension } = imageInfo

  return {
    source: {
      src: `${baseCdnUrl}/images/${sanityProjectId}/${sanityDataset}/${assetName}-${width}x${height}.${extension}`,
      alt: img.alt ?? fallbackAlt,
    },
    dimensions: {
      width: imageInfo.width,
      height: imageInfo.height,
    },
  }
}

export type PreparedImage = ReturnType<typeof prepareImg>
