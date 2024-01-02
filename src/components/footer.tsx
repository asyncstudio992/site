import { Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-t-gray-200 relative">
      <div className="container w-full py-10 px-5 flex justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold text-dark">Async Studio</p>
          <div className="flex gap-1 items-center">
            <Mail size={20} />
            asyncstudio@email.com
          </div>  
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h5 className="text-lg font-semibold text-dark mb-5">Navegação</h5>
            <div className="flex flex-col gap-2">
              <Link href="" className="text-lg text-dark">Início</Link>
              <Link href="" className="text-lg text-dark">Sobre</Link>
              <Link href="" className="text-lg text-dark">Cases</Link>
              <Link href="" className="text-lg text-dark">Expertise</Link>
              <Link href="" className="text-lg text-dark">Fale conosco</Link>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-dark mb-5">Redes Sociais</h5>
            <div className="flex flex-col gap-2">
              <Link href="" className="text-lg text-dark">Instagram</Link>
              <Link href="" className="text-lg text-dark">Linkedin</Link>
              <Link href="" className="text-lg text-dark">Discord</Link>
              <Link href="" className="text-lg text-dark">Behance</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 bg-dark font-medium text-white text-center">
        Todos os direitos reservados 2023
      </div>
    </footer>
  )
}
