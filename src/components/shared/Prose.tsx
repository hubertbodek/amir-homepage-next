interface ProseProps {
  heading?: string
  text: string
}

export default function Prose({ heading, text }: ProseProps) {
  return (
    <section className="max-w-prose text-xl mx-auto px-4">
      {heading && <h2 className="text-h2 font-bold text-left mb-8">{heading}</h2>}
      <p className="leading-8 mx-auto" dangerouslySetInnerHTML={{ __html: text }} />
    </section>
  )
}
