'use client'
import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from './ui/button'
import { ToggleThemeMode } from './toggle-theme-button'

const navigationMap = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Sobre',
    href: '/#sobre',
  },
  {
    label: 'Nosso serviço',
    href: '/#nosso-servico',
  },
  {
    label: 'Cases',
    href: '/#cases',
  },
]

export const WebNavbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {
        navigationMap.map(link => (
          <Link 
            key={link.label}
            href={link.href}
            className="relative w-fit h-auto text-md font-medium text-dark dark:text-white transition link-hover"
          >
            {
              link.label
            }
          </Link>
        ))
      }
      <Link href="/fale-conosco">
        <Button>
          Fale conosco
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
      <ToggleThemeMode />
    </nav>
  )
}
