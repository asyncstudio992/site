
import { Faq } from '@/components/faq'
import { Banner } from '@/components/banner'
import { Socials } from '@/components/socials'
import { RocketIcon } from 'lucide-react'

export default function About() {
  return (
    <>
      <section className="w-full py-20 px-5">
        <div className="relative container w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <RocketIcon className="w-5 h-5 text-secondary" />
              <p className="text-sm text-dark">Queremos te ajudar a construir sua história</p>
            </div>
            <p className="text-6xl font-light leading-[70px]">Nós vamos te ajudar a <span className="font-bold">transformar</span> sua ideia em <span className="font-bold">realidade</span></p>
            <Socials />
          </div>
          <p>A Async é um estúdio de UI/UX e Desenvolvimento Web que busca agregar valor e transformar empresas por meio de soluções digitais exclusivas, elegantes e sofisticadas. Criamos layouts pensando na jornada do cliente, visando proporcionar a melhor experiência possível. Nosso objetivo é garantir que nosso trabalho seja excelente e impacte positivamente a vida de várias pessoas. </p>
          <div className="col-span-2 w-full max-w-5xl mx-auto py-10 px-5 bg-dark rounded-lg h-[350px] text-white text-center flex flex-col items-center justify-center gap-2">
            <h2 className="text-8xl py-[14px] font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">Async</h2>
            <p className="text-2xl bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">Estudio de Design e Desenvolvimento Web</p>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-5 bg-light-gray">
        <div className="relative container w-full h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <RocketIcon className="w-5 h-5 text-secondary" />
              <p className="text-sm text-dark">Valores que construímos moldam nosso compromisso</p>
            </div>
            <p className="md:w-[75%] text-6xl font-light leading-[70px]">
              Somos guiados por <span className="font-bold">valores</span> que nos nos orientam na <span className="font-bold">exploração</span> e <span className="font-bold">inovação</span>
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-lg bg-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-16 w-16 border border-secondary">

                </div>
                <p className="text-lg font-bold text-dark">Lorem ipsum dolor</p>
              </div>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Pharetra leo urna felis pellentesque scelerisque velit ipsum in nunc. Porttitor in aliquet eget urna.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-16 w-16 border border-secondary">

                </div>
                <p className="text-lg font-bold text-dark">Lorem ipsum dolor</p>
              </div>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Pharetra leo urna felis pellentesque scelerisque velit ipsum in nunc. Porttitor in aliquet eget urna.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-16 w-16 border border-secondary">

                </div>
                <p className="text-lg font-bold text-dark">Lorem ipsum dolor</p>
              </div>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Pharetra leo urna felis pellentesque scelerisque velit ipsum in nunc. Porttitor in aliquet eget urna.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-16 w-16 border border-secondary">

                </div>
                <p className="text-lg font-bold text-dark">Lorem ipsum dolor</p>
              </div>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Pharetra leo urna felis pellentesque scelerisque velit ipsum in nunc. Porttitor in aliquet eget urna.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-16 w-16 border border-secondary">

                </div>
                <p className="text-lg font-bold text-dark">Lorem ipsum dolor</p>
              </div>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Pharetra leo urna felis pellentesque scelerisque velit ipsum in nunc. Porttitor in aliquet eget urna.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-white">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full h-16 w-16 border border-secondary">

                </div>
                <p className="text-lg font-bold text-dark">Lorem ipsum dolor</p>
              </div>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Pharetra leo urna felis pellentesque scelerisque velit ipsum in nunc. Porttitor in aliquet eget urna.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <section className="py-5 md:py-10 lg:py-20 px-5">
        <div className="container w-full h-full grid gap-8 ">
          <Banner />
        </div>
      </section>
    </>
  )
}
