import SideBySideItem from 'components/home/SideBySideItem'
import type { SideBySideItemProps } from 'components/home/SideBySideItem'
import { cn } from 'lib/utils'

export interface SideBySideProps {
  headline: string
  description?: string
  items: SideBySideItemProps[]
  alignLeft?: boolean
  light?: boolean
}

export default function SideBySide({
  headline,
  description,
  items,
  alignLeft = false,
  light = false,
}: SideBySideProps) {
  return (
    <div>
      <div className="amir-container mx-auto mb-24">
        <h2
          className={`mx-auto text-left text-3xl font-bold md:text-5xl ${
            light ? 'text-neutral-700' : 'text-neutral-200'
          }`}
        >
          {headline}
        </h2>
        {Boolean(description) && (
          <p className={cn('mt-8 max-w-3xl', light ? 'text-neutral-700' : 'text-neutral-300')}>
            {description}
          </p>
        )}
      </div>
      <div className="amir-container flex flex-col gap-y-24 py-2">
        {items.map((item, idx) => {
          return (
            <SideBySideItem key={idx} {...item} index={alignLeft ? idx * 2 : idx} light={light} />
          )
        })}
      </div>
    </div>
  )
}
