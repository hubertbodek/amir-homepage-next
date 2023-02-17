import React from 'react'
import type { InferGetStaticPropsType } from 'next'
import Teaser from 'shared/components/Teaser'

export default function About({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(items)

  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/perforation.webp', alternativeText: 'Wzór' }}
        title="O nas"
        specific
      />
      <section className="my-20 amir-container">
        <h2 className="text-h2 max-w-3xl text-left">
          Zawsze istnieje łatwe wyjście awaryjne, nawet jeśli poprzednie rozwiązania nie były
          skuteczne. Doradzamy, wspieramy i walczymy dla Ciebie do końca.
        </h2>
      </section>
    </>
  )
}

const items = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam adipisci molestiae a iure alias laboriosam officia, officiis accusamus recusandae cumque architecto! Necessitatibus, quod saepe optio iure aperiam doloremque excepturi dicta. Ut error tenetur delectus reiciendis ullam minus, explicabo asperiores numquam tempora animi beatae voluptates, cumque corrupti at sint quia.',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam adipisci molestiae a iure alias laboriosam officia, officiis accusamus recusandae cumque architecto! Necessitatibus, quod saepe optio iure aperiam doloremque excepturi dicta. Ut error tenetur delectus reiciendis ullam minus, explicabo asperiores numquam tempora animi beatae voluptates, cumque corrupti at sint quia.',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam adipisci molestiae a iure alias laboriosam officia, officiis accusamus recusandae cumque architecto! Necessitatibus, quod saepe optio iure aperiam doloremque excepturi dicta. Ut error tenetur delectus reiciendis ullam minus, explicabo asperiores numquam tempora animi beatae voluptates, cumque corrupti at sint quia.',
  },
]

export const getStaticProps = async () => {
  return {
    props: { pageData: {} },
  }
}
