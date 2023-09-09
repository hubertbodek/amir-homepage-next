import Link from 'next/link'

interface FooterColumnProps {
  headline: string
  items: Array<{ title: string; link: string }>
}

export default function FooterColumn({ headline, items }: FooterColumnProps) {
  return (
    <div className="lg:w-44">
      <h4 className="text-h4 uppercase font-semibold mb-3">{headline}</h4>
      <ul className="space-y-2 text-gray-300">
        {items.map((item) => (
          <li key={item.title}>
            <Link href={item.link} className="text-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
