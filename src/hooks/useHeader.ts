'use client'

import { useEffect, useState } from 'react'

export default function useHeader() {
  const [isShrinked, setIsShrinked] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let oldScrollY = window.scrollY

    function scrollHandler() {
      const scrollY = window.scrollY
      setIsShrinked(window.pageYOffset > 65)

      window.pageYOffset > 300 && scrollY > oldScrollY
        ? setIsScrollingDown(true)
        : setIsScrollingDown(false)

      oldScrollY = scrollY
    }

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return {
    isShrinked,
    isScrollingDown,
  }
}
