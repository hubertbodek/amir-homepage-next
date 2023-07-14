import SideTeaser from 'components/shared/sections/SideTeaser'
import Prose from 'components/shared/Prose'
import ContactCta from 'components/shared/sections/ContactCta'
import IconCardsSection from 'components/shared/sections/IconCardsSection'
import NumberedItems from 'components/shared/sections/NumberedItems'
import FullWidthTeaser from 'components/shared/sections/FullWidthTeaser'
import ImageGridSection from 'components/shared/sections/ImageGridSection'
import TableContainer from 'components/shared/TableContainer'

import blocksMapperFactory from 'lib/block-factory'

const blocks = {
  FullWidthTeaser,
  SideTeaser,
  ImageGridSection,
  Prose,
  ContactCta,
  IconCardsSection,
  NumberedItems,
  TableContainer,
}

type TypeName = keyof typeof blocks

export type BlockModel = {
  _type: TypeName
} & Parameters<typeof blocks[TypeName]>[0]

const Block = blocksMapperFactory(blocks)

export default function BlockMapper({ blocks }: { blocks: BlockModel[] }) {
  return (
    <>
      {blocks?.map(({ _type: typeName, ...props }, index) => (
        <Block key={`${typeName as string}--${index}`} typeName={typeName} props={props} />
      ))}
    </>
  )
}
