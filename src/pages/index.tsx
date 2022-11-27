import Image from 'next/image'

import logo from '@/public/images/logo.png'
import CardSection from '@/src/shared/components/CardSection'

export default function Home() {
  return (
    <>
      <CardSection
        className="my-36"
        decorations={[
          {
            image: {
              url: '/images/decorations/bryla1.png',
              width: 500,
              height: 500,
            },
            position: '-top-60 -left-32',
            z: 'under',
          },
          {
            image: {
              url: '/images/decorations/bryla2.png',
              height: 300,
              width: 300,
            },
            position: '-bottom-40 -right-0',
            z: 'over',
          },
        ]}
      >
        <div className="grid grid-cols-2 divide-x-2 divide-light">
          <div className="pr-16 flex justify-center items-center">
            <Image src={logo} alt="Amir Metal" />
          </div>
          <div className="pl-16">
            <h1 className="text-3xl font-bold mb-6">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              obcaecati veniam. Alias ab cupiditate, repellat esse possimus
              nisi! Iure optio dolore, aperiam laboriosam natus illo tempora nam
              voluptatem voluptate doloremque sequi est unde. Amet atque natus
              placeat aut? Perferendis, a!
            </p>
            <button className="px-4 py-2 bg-tertiary uppercase text-light">
              Więcej o nas
            </button>
          </div>
        </div>
      </CardSection>
    </>
  )
}
