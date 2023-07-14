import contactCta from './contact-cta'
import fullWidthTeaser from './full-width-teaser'
import iconCardsSection from './icon-cards-section'
import imageGridSection from './image-grid-section'
import numberedItems from './numbered-items'
import prose from './prose'
import sideTeaser from './side-teaser'
import table from './table'

export const blocks = [
  prose,
  sideTeaser,
  contactCta,
  iconCardsSection,
  numberedItems,
  table,
  fullWidthTeaser,
  imageGridSection,
]

export const blockTypes = blocks.map((block) => ({ type: block.name }))
