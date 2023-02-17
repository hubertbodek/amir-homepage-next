import MobileCarousel from 'components/shared/carousel/responsive/MobileCarousel'
import DesktopCarousel from 'components/shared/carousel/responsive/DesktopCarousel'

export interface CarouselProps {
  children: React.ReactNode[]
  options?: {
    centered?: boolean
    autoWidth?: boolean
    isBottomNavigation?: boolean
    isLooped?: boolean
  }
}

export default function Carousel({ children, options }: CarouselProps) {
  const customClass = options?.centered ? 'carousel-centered' : ''

  return (
    <div className={`relative my-8 w-full overflow-x-clip ${customClass}`}>
      <MobileCarousel options={options}>{children}</MobileCarousel>
      <DesktopCarousel options={options}>{children}</DesktopCarousel>
    </div>
  )
}
