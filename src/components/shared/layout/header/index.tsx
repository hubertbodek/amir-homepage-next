'use client'

import DesktopHeader from './DesktopHeader'
import HeaderWrapper from './HeaderWrapper'
import MobileHeader from './MobileHeader'

function Header() {
  return (
    <HeaderWrapper>
      <MobileHeader />
      <DesktopHeader />
    </HeaderWrapper>
  )
}

export default Header
