import BitCircle from '../icon/icons/BitCircle'

interface NumberedItemsProps {
  heading: string
  description: string
  listItems: string[]
}

export default function NumberedItems({ heading, description, listItems }: NumberedItemsProps) {
  return (
    <section className="amir-container mx-auto my-40 px-4">
      <div className="mx-auto max-w-2xl">
        <h4 className="mb-3 text-2xl font-bold text-sky-800">{heading}</h4>
        <p className="mb-10 max-w-prose">{description}</p>
        <ol className="mb-4 space-y-1">
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
    <div className="relative mr-2 text-sky-800">
      <BitCircle className="h-10 w-10" />
      <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-lg font-bold">
        {index + 1}
      </span>
    </div>
    {children}
  </li>
)
