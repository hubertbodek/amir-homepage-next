// import Button from '../Button'
import BitCircle from '../icon/icons/BitCircle'

interface NumberedItemsProps {
  heading: string
  description: string
  listItems: string[]
}

export default function NumberedItems({ heading, description, listItems }: NumberedItemsProps) {
  return (
    <section className="my-40 max-w-4xl mx-auto px-4">
      <h3 className="text-h3 font-bold text-gray-900 mb-3">{heading}</h3>
      <p className="max-w-prose mb-10">{description}</p>
      <ol className="space-y-1 mb-4">
        {listItems.map((item, index) => (
          <ListItem key={index} index={index}>
            {item}
          </ListItem>
        ))}
      </ol>
      {/* <Button theme="primary" className="text-black" href="#contact-form">
        Skontaktuj się z nami
      </Button> */}
    </section>
  )
}

const ListItem = ({ index, children }: { index: number; children: React.ReactNode }) => (
  <li className="flex items-center text-xl">
    <div className="relative text-blue-900 mr-2">
      <BitCircle className="h-12 w-12" />
      <span className="absolute top-0 left-0 flex items-center justify-center w-full h-full font-bold text-lg">
        {index + 1}
      </span>
    </div>
    {children}
  </li>
)
