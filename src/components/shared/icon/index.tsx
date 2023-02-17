import Welding from 'components/shared/icon/icons/Welding'
import WeldingMachine from 'components/shared/icon/icons/WeldingMachine'
import Laser from 'components/shared/icon/icons/Laser'

const icons = {
  laser: () => <Laser />,
  welding: () => <Welding />,
  'welding-machine': () => <WeldingMachine />,
} as const

export default function Icon({ icon: type }: { icon: keyof typeof icons }) {
  const Icon = icons[type]

  return <Icon />
}
