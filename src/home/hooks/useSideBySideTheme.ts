import { useEffect, useState } from 'react'

const theme = {
  reversed: {
    text: 'md:text-right',
    image: 'md:-mr-12',
    textContainer: 'md:col-start-1 col-span-7',
    imageContainer: 'md:col-start-8 md:col-span-6 md:row-start-1',
    // imageOffset: '-right-20',
  },
  regular: {
    text: 'md:text-left',
    image: 'md:-lr-12',
    textContainer: 'md:col-start-6 md:col-span-7',
    imageContainer: 'md:col-start-1 md:col-span-5 md:row-start-1',
    // imageOffset: '-left-20',
  },
}

export default function useSideBySideTheme(index: number) {
  const [styles, setStyles] = useState({
    text: '',
    image: '',
    textContainer: '',
    imageContainer: '',
  })

  useEffect(() => {
    const themeStyles = index % 2 === 0 ? theme.regular : theme.reversed
    setStyles(themeStyles)
  }, [index])

  return styles
}
