import ContactForm from 'components/contact/ContactForm'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../map/Map'), {
  loading: () => <div>Loading...</div>,
})

export default function ContactFormWithMap() {
  return (
    <div
      id="contact-form"
      className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] 2xl:amir-container gap-x-4 my-24"
    >
      <div className="max-w-lg py-12 mx-auto px-4">
        <h2 className="text-h2 font-semibold text-primary mb-8 uppercase">
          Skontaktuj się z nami!
        </h2>
        <p className="text-subtitle text-gray-600 mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, minima dignissimos error
          fugit placeat sit.
        </p>
        <ContactForm />
      </div>
      <div className="h-full w-full p-4">
        <div className="h-full w-full overflow-hidden shadow-xl rounded-md max-md:min-h-[192px]">
          <DynamicMap />
        </div>
      </div>
    </div>
  )
}
