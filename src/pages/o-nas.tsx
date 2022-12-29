import React from 'react'
import CardSection from '@/src/shared/components/CardSection'
import NumberedSection from '@/src/shared/components/NumberedSection'
import Teaser from '../shared/components/Teaser'

export default function About() {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/perforation.webp', alternativeText: 'Wzór' }}
        title="O nas"
        specific
      />
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
