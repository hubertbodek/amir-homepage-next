import Image from 'next/image'
import React from 'react'

interface CardSectionProps {
  children: React.ReactNode
  decorations?: Array<{
    image: {
      url: string
      height: number
      width: number
    }
    position: string
    z: 'over' | 'under'
  }>
  className?: string
}

export default function CardSection({
  children,
  decorations,
  className = '',
}: CardSectionProps) {
  return (
    <section className={`container mx-auto lg:px-16 relative ${className}`}>
      <div className="md:bg-primary-100 md:shadow-lg px-4 md:px-8 py-12 relative z-10">
        {children}
      </div>
      {decorations?.map((item, idx) => (
        <div
          key={idx}
          className={`${item.position} ${
            item.z === 'over' ? 'z-20' : 'z-0'
          }  absolute hidden md:block`}
        >
          <Image
            src={item.image.url}
            alt="Decoration"
            height={item.image.height}
            width={item.image.width}
          />
        </div>
      ))}
    </section>
  )
}
