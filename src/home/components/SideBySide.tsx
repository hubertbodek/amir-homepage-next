import CardSection from '@/src/shared/components/CardSection'
import SideBySideItem, { SideBySideItemProps } from '@/src/home/components/SideBySideItem'

export interface SideBySideProps {
  headline: string
  items: Array<SideBySideItemProps>
}

export default function SideBySide({ headline, items }: SideBySideProps) {
  return (
    <div>
      <h2 className="amir-container mx-auto text-3xl md:text-5xl mb-24 text-left text-neutral-200 font-bold">
        {headline}
      </h2>
      <div className="flex flex-col gap-y-24 py-2 amir-container">
        {items.map((item, idx) => {
          return <SideBySideItem key={idx} {...item} index={idx} />
        })}
      </div>
    </div>
  )
}
