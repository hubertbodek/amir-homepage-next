import Welding from '@/src/shared/components/icon/icons/Welding'
import WeldingMachine from '@/src/shared/components/icon/icons/WeldingMachine'
import Laser from '@/src/shared/components/icon/icons/Laser'

const icons = {
  laser: () => <Laser />,
  welding: () => <Welding />,
  'welding-machine': () => <WeldingMachine />,
} as const

export default function Icon({ icon: type }: { icon: keyof typeof icons }) {
  const Icon = icons[type]

  return <Icon />
}
