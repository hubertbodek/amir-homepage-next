import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
  pagination: {
    page: number
    pageCount: number
  }
}

const Pagination = ({ pagination: { page, pageCount } }: PaginationProps) => {
  const handlePageChange = (selectedPage: number) => {
    if (!selectedPage) {
      return
    }
    const params = new URLSearchParams(window.location.search)
    params.set('p', String(selectedPage))
    window.location.href = `${window.location.pathname}?${params.toString()}`
  }

  return (
    <div className="mt-8 flex items-center justify-center space-x-3 py-6 md:space-x-6">
      <PaginationArrow type="previous" disabled={page === 1} />
      <MobilePagination page={page} pageCount={pageCount} />
      <ReactPaginate
        previousLabel=""
        nextLabel=""
        breakLabel="..."
        pageRangeDisplayed={1}
        pageCount={pageCount}
        initialPage={page - 1} // starts from 0
        onClick={({ nextSelectedPage }) => {
          if (nextSelectedPage === undefined) {
            return
          }

          handlePageChange(nextSelectedPage + 1)
        }}
        // classes
        containerClassName="hidden md:flex md:justify-center md:items-center space-x-6"
        activeClassName="bg-sky-700 text-white"
        pageClassName="h-8 w-8 flex justify-center items-center rounded-full transition hover:bg-sky-100 hover:cursor-pointer"
        pageLinkClassName="h-full w-full flex items-center justify-center"
      />
      <PaginationArrow type="next" disabled={page === pageCount} />
    </div>
  )
}

const MobilePagination = ({ page, pageCount }: PaginationProps['pagination']) => {
  return (
    <div className="block md:hidden">
      strona {page} z {pageCount}
    </div>
  )
}

const PaginationArrow = ({ type, disabled }: { type: 'previous' | 'next'; disabled: boolean }) => {
  const className = 'h-5 w-5'

  const renderArrow = () => {
    if (type === 'previous') {
      return <ChevronLeftIcon className={className} />
    }

    if (type === 'next') {
      return <ChevronRightIcon className={className} />
    }
  }

  const handlePagination = () => {
    if (disabled) {
      return
    }
    const params = new URLSearchParams(window.location.search)
    let page = Number(params.get('p')) || 1

    if (type === 'previous') {
      page--
    }

    if (type === 'next') {
      page++
    }

    params.set('p', String(page))

    window.location.href = `${window.location.pathname}?${params.toString()}`
  }

  return (
    <div
      className={`${
        disabled ? 'bg-gray-300 opacity-20' : 'hover:cursor-pointer hover:bg-sky-200'
      } rounded-full p-1 transition`}
      onClick={handlePagination}
    >
      {renderArrow()}
    </div>
  )
}

export default Pagination
