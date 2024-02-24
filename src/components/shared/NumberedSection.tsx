import React from 'react'

export default function NumberedSection({
  number,
  children,
}: {
  number: number
  children: React.ReactNode
}) {
  return (
    <div className="my-8 grid-cols-7 md:grid md:items-center">
      <div className="col-span-1 flex items-center max-md:mb-4 max-md:mr-4">
        <span className="text-outline-1 text-outline-light flex-shrink-1 text-4xl text-transparent md:text-6xl">
          0{number}
        </span>
        <div className="mx-4 hidden h-[2px] w-full bg-white md:block"></div>
      </div>
      <p className="text-subtitle col-span-6">{children}</p>
    </div>
  )
}
