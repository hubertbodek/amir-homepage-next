import SideBySide, { type SideBySideProps } from 'components/home/SideBySide'

export default function SideBySideSection(props: SideBySideProps) {
  return (
    <div
      className={`overflow-hidden bg-cover bg-no-repeat py-24 ${
        !props.light ? "bg-[url('/images/abstracts/flux-bg.svg')]" : ''
      }`}
    >
      <SideBySide {...props} />
    </div>
  )
}
