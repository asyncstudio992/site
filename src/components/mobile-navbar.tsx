'use client'
import React from 'react'
import { AlignRight, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
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

export const MobileNavbar = () => {
  return (
    <div className="flex items-center gap-5 md:hidden ">
      <ToggleThemeMode />
      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" variant="ghost" size="icon" className="dark:text-white">
            <span className="sr-only">Abrir menu mobile</span>
            <AlignRight className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="dark:bg-dark">
          <nav className="mt-10 flex flex-col gap-y-2">
            {
              navigationMap.map(link => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="py-4 px-3 w-full rounded-md transition hover:bg-accent dark:text-white dark:hover:bg-secondary-cn/30"
                >
                  {
                    link.label
                  }
                </Link>
              ))
            }
            <Link href="/fale-conosco" className="mt-2 w-full rounded-full py-4 px-3 flex items-center justify-center bg-primary font-medium">
                Fale conosco
                <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
