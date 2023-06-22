import SideBySideItem from 'components/home/SideBySideItem'
import type { SideBySideItemProps } from 'components/home/SideBySideItem'

export interface SideBySideProps {
  headline: string
  items: SideBySideItemProps[]
  alignLeft?: boolean
  light?: boolean
}

export default function SideBySide({
  headline,
  items,
  alignLeft = false,
  light = false,
}: SideBySideProps) {
  return (
    <div>
      <h2
        className={`amir-container mx-auto text-3xl md:text-5xl mb-24 text-left font-bold ${
          light ? 'text-neutral-700' : 'text-neutral-200'
        }`}
      >
        {headline}
      </h2>
      <div className="flex flex-col gap-y-24 py-2 amir-container">
        {items.map((item, idx) => {
          return (
            <SideBySideItem key={idx} {...item} index={alignLeft ? idx * 2 : idx} light={light} />
          )
        })}
      </div>
    </div>
  )
}
