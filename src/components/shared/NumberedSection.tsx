import React from 'react'

export default function NumberedSection({
  number,
  children,
}: {
  number: number
  children: React.ReactNode
}) {
  return (
    <div className="md:grid grid-cols-7 md:items-center my-8">
      <div className="max-md:mr-4 max-md:mb-4 flex items-center col-span-1">
        <span className="text-4xl md:text-6xl text-outline-1 text-outline-light text-transparent flex-shrink-1">
          0{number}
        </span>
        <div className="hidden md:block h-[2px] mx-4 w-full bg-white"></div>
      </div>
      <p className="col-span-6 text-subtitle">{children}</p>
    </div>
  )
}
