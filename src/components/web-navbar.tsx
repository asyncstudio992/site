'use client'
import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from './ui/button'

const navigationMap = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Sobre',
    href: '/sobre',
  },
  {
    label: 'Cases',
    href: '/cases',
  },
  {
    label: 'Expertise',
    href: '/expertise',
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
            className="relative w-fit h-auto text-md font-medium text-dark transition link-hover"
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
    </nav>
  )
}
