import CardSection from '@/src/shared/components/CardSection'
import SideBySideItem, {
  SideBySideItemProps,
} from '@/src/home/components/SideBySideItem'

export interface SideBySideProps {
  headline: string
  items: Array<SideBySideItemProps>
}

export default function SideBySide({ headline, items }: SideBySideProps) {
  return (
    <div className="my-24">
      <h2 className="text-4xl md:text-5xl font-bol text-center mb-4 uppercase font-bold">
        {headline}
      </h2>
      <CardSection>
        <div className="flex flex-col gap-y-24 py-2">
          {items.map((item, idx) => {
            return <SideBySideItem key={idx} {...item} index={idx} />
          })}
        </div>
      </CardSection>
    </div>
  )
}
