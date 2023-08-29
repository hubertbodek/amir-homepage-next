import Icon, { type IconType } from 'components/shared/icon'

interface IconCardProps {
  icon: string | IconType
  title: string
  description: string
}

export default function IconCardsSection({ cards }: { cards: IconCardProps[] }) {
  return (
    <section className="amir-container mx-auto my-20">
      <div className="grid grid-cols-3 gap-8">
        {cards.map((card) => (
          <IconCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}

const IconCard = ({ icon, title, description }: IconCardProps) => (
  <div className="flex flex-col items-start px-8 py-6 bg-neutral-100 rounded shadow-lg border border-primary/10">
    <div className="flex items-center justify-between w-full">
      <h4 className="text-h4 font-bold text-gray-900">{title}</h4>
      <Icon icon={icon as IconType} className="text-orange-800 h-8 w-8" />
    </div>
    <p className="mt-4 text-gray-700">{description}</p>
  </div>
)
