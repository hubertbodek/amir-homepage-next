import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ContactFormWithMap />
    </>
  )
}
