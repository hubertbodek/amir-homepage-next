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
    <div className="amir-container my-24 columns-2 space-y-4 md:columns-3 lg:columns-4">
      {items.map((item, idx) => {
        return (
          <div key={`${item.name}--${idx}`} className="group relative overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={460}
              height={300}
              className="h-auto w-full rounded object-contain"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-primary/10 from-transparent via-primary/10 to-primary/80 transition duration-300 group-hover:bg-transparent max-lg:bg-gradient-to-b group-hover:lg:bg-gradient-to-b" />
            <span className="text-h4 absolute bottom-0 left-0 z-20 w-full px-5 pb-2 text-gray-100 transition duration-300 ease-out lg:translate-y-full group-hover:lg:translate-y-0">
              {item.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
