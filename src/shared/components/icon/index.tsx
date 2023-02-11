import Welding from 'shared/components/icon/icons/Welding'
import WeldingMachine from 'shared/components/icon/icons/WeldingMachine'
import Laser from 'shared/components/icon/icons/Laser'

const icons = {
  laser: () => <Laser />,
  welding: () => <Welding />,
  'welding-machine': () => <WeldingMachine />,
} as const

export default function Icon({ icon: type }: { icon: keyof typeof icons }) {
  const Icon = icons[type]

  return <Icon />
}
