const getImageSizes = (mobile: string, tablet: string, desktop: string) => {
  const mobileBreakpoint = '768px'
  const tabletBreakpoint = '1024px'

  return `(max-width: ${mobileBreakpoint}) ${mobile}vw, (max-width: ${tabletBreakpoint}) ${tablet}vw, ${desktop}vw`
}

export default getImageSizes
