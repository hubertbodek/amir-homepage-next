interface ProseProps {
  heading?: string
  text: string
}

export default function Prose({ heading, text }: ProseProps) {
  return (
    <section className="my-md-40 mx-auto my-20 max-w-prose px-4 text-xl">
      {heading && <h2 className="text-h2 mb-8 text-left font-bold">{heading}</h2>}
      <p
        className="mx-auto !leading-7 max-lg:text-base lg:leading-8"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </section>
  )
}
