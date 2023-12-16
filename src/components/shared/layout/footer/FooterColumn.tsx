import { cn } from 'lib/utils'
import Link from 'next/link'

interface FooterColumnProps {
  headline: string
  items: Array<{ title: string; link: string }>
  large?: boolean
}

export default function FooterColumn({ headline, items, large }: FooterColumnProps) {
  return (
    <div
      className={cn('lg:w-52', {
        'max-lg:col-span-2': large,
      })}
    >
      <h4 className="text-h4 uppercase font-semibold mb-3">{headline}</h4>
      <ul
        className={cn('text-gray-300 gap-x-4', {
          'max-lg:grid max-lg:grid-cols-2 max-lg:gap-y-2 max-lg:items-center': large,
        })}
      >
        {items.map((item) => (
          <li key={item.title} className="mb-2">
            <Link href={item.link} className="text-link" title={item.title}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
