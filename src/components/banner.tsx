import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { BounceReveal } from './reveals/bounce-reveal'

export const Banner = () => {
  return (
    <div className="md:h-96 p-10 flex flex-col gap-10 items-center justify-center bg-dark dark:bg-primary rounded-tl-[100px] rounded-tr-xl rounded-bl-xl rounded-br-[100px]">
      <p className="text-4xl md:text-6xl font-bold text-white dark:text-dark text-center">Vamos impulsionar sua <br />marca no digital</p>
      <BounceReveal>
        <Button className="rounded-full px-8 h-12 shadow-sm dark:bg-white"> 
          <Link href="/fale-conosco">Vamos começar</Link>
        </Button>
      </BounceReveal>
    </div>
  )
}
