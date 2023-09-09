import SideBySide, { type SideBySideProps } from 'components/home/SideBySide'

export default function SideBySideSection(props: SideBySideProps) {
  return (
    <div
      className={`py-24 bg-no-repeat bg-cover overflow-hidden ${
        !props.light ? "bg-[url('/images/abstracts/flux-bg.svg')]" : ''
      }`}
    >
      <SideBySide {...props} />
    </div>
  )
}
