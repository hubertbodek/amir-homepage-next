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
      <h3 className="text-h3 font-bold text-gray-900">{title}</h3>
      <Icon icon={icon as IconType} className="text-primary h-12 w-12" />
    </div>
    <p className="mt-4 text-gray-700">{description}</p>
  </div>
)
