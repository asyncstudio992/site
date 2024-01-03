import React from 'react'
import { Logo } from './logo'
import { WebNavbar } from './web-navbar'
import { MobileNavbar } from './mobile-navbar'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full px-5 h-20 flex items-center">
      <div className="container w-full h-full flex gap-5 items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <WebNavbar />
        <MobileNavbar />
      </div>
    </header>
  )
}
