import Teaser from 'components/shared/Teaser'
import SideTeaser from 'components/shared/sections/SideTeaser'
import Prose from 'components/shared/Prose'
import ContactCta from 'components/shared/sections/ContactCta'
import IconCardsSection from 'components/shared/sections/IconCardsSection'
import NumberedItems from 'components/shared/sections/NumberedItems'

import blocksMapperFactory from 'lib/block-factory'

const blocks = {
  Teaser,
  SideTeaser,
  Prose,
  ContactCta,
  IconCardsSection,
  NumberedItems,
}

type TypeName = keyof typeof blocks

export type BlockProps = {
  __typename: TypeName
} & Parameters<typeof blocks[TypeName]>[0]

const Block = blocksMapperFactory(blocks)

export default function BlockMapper({ blocks }: { blocks: BlockProps[] }) {
  return (
    <>
      {blocks?.map(({ __typename: typeName, ...props }, index) => (
        <Block key={`${typeName as string}--${index}`} typeName={typeName} props={props} />
      ))}
    </>
  )
}
