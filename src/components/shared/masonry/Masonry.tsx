import Image from 'next/image'

interface Item {
  name: string
  description: string
  image: string
}

interface MasonryProps {
  items: Item[]
}

export default function Masonry({ items }: MasonryProps) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 space-y-4 amir-container my-24">
      {items.map((item, idx) => {
        return (
          <div key={`${item.name}--${idx}`} className="relative group overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={460}
              height={300}
              className="h-auto object-contain w-full rounded"
            />
            <div className="absolute top-0 left-0 z-10 bg-primary/10 group-hover:bg-transparent max-lg:bg-gradient-to-b group-hover:lg:bg-gradient-to-b from-transparent via-primary/10 to-primary/80 w-full h-full transition duration-300" />
            <span className="text-h4 absolute bottom-0 left-0 w-full lg:translate-y-full group-hover:lg:translate-y-0 transition ease-out duration-300 text-gray-100 z-20 px-5 pb-2">
              {item.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
