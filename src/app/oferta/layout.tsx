import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ContactFormWithMap />
    </>
  )
}
