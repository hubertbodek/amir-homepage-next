// import Button from '../Button'
import Image from 'next/image'
import BitCircle from '../icon/icons/BitCircle'
import illustration from '@public/images/illustrations/mail-illustration.svg'

interface NumberedItemsProps {
  heading: string
  description: string
  listItems: string[]
}

export default function NumberedItems({ heading, description, listItems }: NumberedItemsProps) {
  return (
    <section className="my-40 amir-container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <h4 className="text-2xl font-bold text-sky-800 mb-3">{heading}</h4>
        <p className="max-w-prose mb-10">{description}</p>
        <ol className="space-y-1 mb-4">
          {listItems.map((item, index) => (
            <ListItem key={index} index={index}>
              {item}
            </ListItem>
          ))}
        </ol>
      </div>
    </section>
  )
}

const ListItem = ({ index, children }: { index: number; children: React.ReactNode }) => (
  <li className="flex items-center text-xl">
    <div className="relative text-sky-800 mr-2">
      <BitCircle className="h-10 w-10" />
      <span className="absolute top-0 left-0 flex items-center justify-center w-full h-full font-bold text-lg">
        {index + 1}
      </span>
    </div>
    {children}
  </li>
)
