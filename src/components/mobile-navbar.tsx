'use client'
import React from 'react'
import { AlignRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'

const navigationMap = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Sobre',
    href: '/about',
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

export const MobileNavbar = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" variant="ghost" size="icon">
            <span className="sr-only">Abrir menu mobile</span>
            <AlignRight className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent >
          <nav className="mt-10 flex flex-col gap-y-2">
            {
              navigationMap.map(link => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="py-4 px-3 w-full rounded-md transition hover:bg-accent"
                >
                  {
                    link.label
                  }
                </Link>
              ))
            }
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
