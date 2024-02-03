'use client'
import React, { useEffect, useState } from 'react'
import { Logo } from './logo'
import { WebNavbar } from './web-navbar'
import { MobileNavbar } from './mobile-navbar'
import { cn } from '@/lib/utils'

export const Header = () => {
  const [fixedNav, setFixedNav] = useState(false)

  useEffect(() => {
    const handleFixNavOnScroll = () => {
      if(window.scrollY > 50 && !fixedNav) {
        setFixedNav(true)
      } else if(window.scrollY < 50 && fixedNav) {
        setFixedNav(false)
      }
    }

    window.addEventListener('scroll', handleFixNavOnScroll)

    return () => { 
      window.removeEventListener('scroll', handleFixNavOnScroll)
    }
  }, [fixedNav])

  return (
    <header className={cn(
      "z-50 fixed top-0 left-0 w-full px-5 h-20 flex items-center bg-white dark:bg-dark transition-all duration-300",
      fixedNav && 'shadow-md'
    )}>
      <div className="container w-full h-full flex gap-5 items-center justify-between">
        <Logo />
        <WebNavbar />
        <MobileNavbar />
      </div>
    </header>
  )
}
