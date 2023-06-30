import { createElement } from 'react'

import Welding from 'components/shared/icon/icons/Welding'
import WeldingMachine from 'components/shared/icon/icons/WeldingMachine'
import Laser from 'components/shared/icon/icons/Laser'
import Container from 'components/shared/icon/icons/Container'
import Param from 'components/shared/icon/icons/Param'
import ArrowRightLeft from 'components/shared/icon/icons/ArrowRightLeft'

const icons = {
  laser: Laser,
  welding: Welding,
  'welding-machine': WeldingMachine,
  container: Container,
  param: Param,
  'arrow-right-left': ArrowRightLeft,
} as const

export type IconType = keyof typeof icons

export default function Icon({ icon: type, className }: { icon: IconType; className?: string }) {
  const Icon = icons[type]

  if (!Icon) return null

  return createElement(Icon, { className })
}
