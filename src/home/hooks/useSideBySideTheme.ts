import { useEffect, useState } from 'react'

const theme = {
  regular: {
    text: 'md:text-right',
    image: 'md:-mr-12',
    textContainer: 'md:col-start-1',
    imageContainer: 'md:col-start-2',
    // imageOffset: '-right-20',
  },
  reversed: {
    text: 'md:text-left',
    image: 'md:-lr-12',
    textContainer: 'md:col-start-2',
    imageContainer: 'md:col-start-1 md:row-start-1',
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
