import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ArticleCard() {
  return (
    <article className="p-4 bg-primary-100 rounded shadow-md">
      <div className="relative aspect-[15/9] mb-4">
        <Link href="/">
          <Image
            src="/images/marketing/uslugi.webp"
            alt="Test"
            fill
            sizes="(max-width: 768px) 90vw,
              (max-width: 1200px) 45vw,
              25vw"
            className="object-cover object-center"
          />
        </Link>
      </div>
      <h4 className="text-h4 font-semibold mb-4">
        <Link href="/">
          <span className="text-hover-effect">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </span>
        </Link>
      </h4>
      <p className="text-subtitle text-neutral-400 mb-4 font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium voluptates ex
        perferendis? Magni nihil dolor dignissimos facilis.
      </p>
      <div className="flex gap-x-4">
        <span className="font-semibold text-subtitle">Gosia</span>
        <span className="font-light">4 grudnia 2021</span>
      </div>
    </article>
  )
}
