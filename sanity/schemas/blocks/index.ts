import contactCta from './contact-cta'
import iconCardsSection from './icon-cards-section'
import numberedItems from './numbered-items'
import prose from './prose'
import sideTeaser from './side-teaser'

export const blocks = [prose, sideTeaser, contactCta, iconCardsSection, numberedItems]

export const blockTypes = blocks.map((block) => ({ type: block.name }))
