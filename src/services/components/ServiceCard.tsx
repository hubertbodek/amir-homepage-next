import Icon from 'shared/components/icon'
// import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ComponentProps<typeof Icon>['icon']
  title: string
  anchor: string
}

export default function ServiceCard({ icon, title, anchor }: ServiceCardProps) {
  return (
    <a href={anchor}>
      <div className="service-card aspect-square bg-primary-100 max-md:px-2 p-8 flex flex-col items-center justify-between hover:scale-105 hover:shadow-xl transition duration-200 rounded group">
        <div className="h-12 w-12 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-56 lg:w-56 mb-8">
          <div className="transition duration-300 group-hover:-translate-y-2">
            <Icon icon={icon} />
          </div>
        </div>
        <div className="text-center">
          <span className="text-hover-effect text-sm md:text-2xl font-bold text-center">
            {title}
          </span>
        </div>
      </div>
    </a>
  )
}
