import { Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-dark border-t border-t-gray-200 dark:border-t-gray-800 relative">
      <div className="container w-full py-10 px-5 flex flex-col gap-10 md:flex-row justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold text-dark dark:text-white">Async Studio</p>
          <div className="flex gap-1 items-center text-dark dark:text-white">
            <Mail size={20} />
            asyncstudio@email.com
          </div>  
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h5 className="text-lg font-semibold text-dark dark:text-white mb-5">Navegação</h5>
            <div className="flex flex-col gap-2">
              <Link href="" className="text-lg  text-dark dark:text-gray-400">Início</Link>
              <Link href="" className="text-lg  text-dark dark:text-gray-400">Sobre</Link>
              <Link href="" className="text-lg  text-dark dark:text-gray-400">Cases</Link>
              <Link href="" className="text-lg  text-dark dark:text-gray-400">Expertise</Link>
              <Link href="" className="text-lg  text-dark dark:text-gray-400">Fale conosco</Link>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-dark dark:text-white mb-5">Redes Sociais</h5>
            <div className="flex flex-col gap-2">
              <Link href="" className="text-lg text-dark dark:text-gray-400">Instagram</Link>
              <Link href="" className="text-lg text-dark dark:text-gray-400">Linkedin</Link>
              <Link href="" className="text-lg text-dark dark:text-gray-400">Discord</Link>
              <Link href="" className="text-lg text-dark dark:text-gray-400">Behance</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 bg-dark dark:border-t dark:border-t-gray-800 font-medium text-white text-center">
        Todos os direitos reservados 2023
      </div>
    </footer>
  )
}
