import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export const Banner = () => {
  return (
    <div className="h-96 p-10 flex flex-col gap-10 items-center justify-center bg-dark dark:bg-gray-100 rounded-tl-[100px] rounded-tr-xl rounded-bl-xl rounded-br-[100px]">
      <p className="text-5xl md:text-7xl font-bold text-white dark:text-dark text-center">Vamos impulsionar sua <br />marca no digital</p>
      <Button className="rounded-full px-8 h-12 shadow-sm"> 
        <Link href="/fale-conosco">Vamos começar</Link>
      </Button>
    </div>
  )
}
