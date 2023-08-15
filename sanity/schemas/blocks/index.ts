import contactCta from './contact-cta'
import fullWidthTeaser from './full-width-teaser'
import iconCardsSection from './icon-cards-section'
import imageGridSection from './image-grid-section'
import logoContentSection from './logo-content-section'
import numberedItems from './numbered-items'
import prose from './prose'
import sideBySide from './side-by-side'
import sideTeaser from './side-teaser'
import table from './table'
import rowsSection from './rows-section'
import sideTeaserWithBlock from './side-teaser-with-block'

export const blocks = [
  prose,
  sideTeaser,
  sideTeaserWithBlock,
  contactCta,
  iconCardsSection,
  numberedItems,
  table,
  fullWidthTeaser,
  imageGridSection,
  sideBySide,
  logoContentSection,
  rowsSection,
]

export const blockTypes = blocks.map((block) => ({ type: block.name }))
