'use client'

import { useEffect, useState } from 'react'

const SHRINK_TRESHOOLD = 40
const HIDE_TRESHOOLD = 300

export default function useHeader() {
  const [isShrinked, setIsShrinked] = useState<boolean | null>(null)
  const [isScrollingDown, setIsScrollingDown] = useState<boolean | null>(null)

  useEffect(() => {
    setIsShrinked(window.scrollY > SHRINK_TRESHOOLD)
    setIsScrollingDown(window.scrollY > HIDE_TRESHOOLD)
  }, [])

  useEffect(() => {
    let oldScrollY = window.scrollY

    function scrollHandler() {
      const scrollY = window.scrollY
      setIsShrinked(window.scrollY > SHRINK_TRESHOOLD)

      window.scrollY > HIDE_TRESHOOLD && scrollY > oldScrollY
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
