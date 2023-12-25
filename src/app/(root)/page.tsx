import { CarouselCases } from '@/components/carousel-cases'
import { Case } from '@/components/case'
import { IconBadge } from '@/components/icon-badge'
import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { CarouselItem } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Code, Figma, FigmaIcon, Package, Rocket, Search, Workflow } from 'lucide-react'
import Link from 'next/link'

import { ServiceSingle } from './_components/service-single'
import { WorkFlowItem } from '@/components/work-flow-item'

const workFlow = [
  {
    workFlowNumber: 1,
    title: 'Exploração',
    description: 'Na etapa de exploração, realizamos uma conversa inicial com o cliente para descobrir quais são suas necessidades e expectativas em relação ao projeto. A partir desse ponto, temos uma compreensão do que o cliente precisa e iniciamos nossas pesquisas para traçarmos o melhor plano possível durante todo o projeto.',
    tags: [
      "Planejamento do projeto",
      "Análise de usabilidade",
      "Ideias para melhorias",
      "Inspiração",
      "Análise de concorrência",
    ],
    icon: Search
  },
  {
    workFlowNumber: 2,
    title: 'Design de Interface e Prototipação',
    description: 'Na etapa de exploração, realizamos uma conversa inicial com o cliente para descobrir quais são suas necessidades e expectativas em relação ao projeto. A partir desse ponto, temos uma compreensão do que o cliente precisa e iniciamos nossas pesquisas para traçarmos o melhor plano possível durante todo o projeto.',
    tags: [
      "Planejamento do projeto",
      "Análise de usabilidade",
      "Ideias para melhorias",
      "Inspiração",
      "Análise de concorrência",
    ],
    icon: FigmaIcon
  },
  {
    workFlowNumber: 3,
    title: 'Desenvolvimento',
    description: 'Na etapa de exploração, realizamos uma conversa inicial com o cliente para descobrir quais são suas necessidades e expectativas em relação ao projeto. A partir desse ponto, temos uma compreensão do que o cliente precisa e iniciamos nossas pesquisas para traçarmos o melhor plano possível durante todo o projeto.',
    tags: [
      "Planejamento do projeto",
      "Análise de usabilidade",
      "Ideias para melhorias",
      "Inspiração",
      "Análise de concorrência",
    ],
    icon: Code
  },
  {
    workFlowNumber: 4,
    title: 'Finalização e Entrega',
    description: 'Na etapa de exploração, realizamos uma conversa inicial com o cliente para descobrir quais são suas necessidades e expectativas em relação ao projeto. A partir desse ponto, temos uma compreensão do que o cliente precisa e iniciamos nossas pesquisas para traçarmos o melhor plano possível durante todo o projeto.',
    tags: [
      "Planejamento do projeto",
      "Análise de usabilidade",
      "Ideias para melhorias",
      "Inspiração",
      "Análise de concorrência",
    ],
    icon: Package
  },
]

const content = [
  {
    title: "Lorem ipsum dolor sit amet consectur 1",
    description: 'Lorem ipsum dolor sit amet consectetur. Diam lacus lectus mi duis nibh bibendum dignissim. Gravida sed scelerisque mattis nisl turpis sit tincidunt risus molestie. Varius felis lorem potenti fames adipiscing tellus maecenas lectus.',
    image: '/assets/images/placeholder-case.png',
    tags: [
      "Planejamento do projeto",
      "Análise de usabilidade",
      "Ideias para melhorias",
      "Inspiração",
      "Análise de concorrência",
    ]
  },
  {
    title: "Lorem ipsum dolor sit amet consectur 2",
    description: 'Lorem ipsum dolor sit amet consectetur. Diam lacus lectus mi duis nibh bibendum dignissim. Gravida sed scelerisque mattis nisl turpis sit tincidunt risus molestie. Varius felis lorem potenti fames adipiscing tellus maecenas lectus.',
    image: '/assets/images/placeholder-case.png',
    tags: [
      "Planejamento do projeto",
      "Análise de usabilidade",
      "Ideias para melhorias",
      "Inspiração",
      "Análise de concorrência",
    ]
  },
  {
    title: "Lorem ipsum dolor sit amet consectur 3",
    description: 'Lorem ipsum dolor sit amet consectetur. Diam lacus lectus mi duis nibh bibendum dignissim. Gravida sed scelerisque mattis nisl turpis sit tincidunt risus molestie. Varius felis lorem potenti fames adipiscing tellus maecenas lectus.',
    image: '/assets/images/placeholder-case.png',
    tags: [
      "Planejamento do projeto",
      "Análise de usabilidade",
      "Ideias para melhorias",
      "Inspiração",
      "Análise de concorrência",
    ]
  }
]

export default function Home() {
  return (
    <>
      <section className="w-full py-20 px-5">
        <div className="container w-full h-full flex flex-col gap-10 md:gap-16">
          <h1 className="text-center md:text-start text-7xl md:text-[90px] font-bold md:leading-[83px]">Estúdio de inovação em design e tecnologia</h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="w-full max-w-md text-center md:text-start ">
              Nosso papel é transformar suas ideias e problemas em soluções digitais exclusivas, elegantes e sofisticadas. 
            </div>
            <Separator className="hidden md:block md:max-w-xs lg:max-w-sm" />
            <div className="flex items-center gap-3 md:gap-8">
              <p className="uppercase font-thin text-md">Design • Código • Projetos</p>
              <div className="flex items-center gap-4">
                <IconBadge icon={Figma} />
                <IconBadge icon={Code} />
                <IconBadge icon={Rocket} />
              </div>
            </div>
          </div>
          <div className="p-10 bg-dark rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-center">
            <ServiceSingle label="Desenvolvimento Web" />
            <ServiceSingle label="Desenvolvimento Mobile" />
            <ServiceSingle label="UX/UI Design" />
            <ServiceSingle label="Data Analytics" />
          </div>
        </div>
      </section>
      <section className="py-20 px-5 bg-light-gray">
        <div className="container w-full h-full grid gap-8 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <SectionTitle
              subtitle="Quem somos"
              title="Um pouco sobre nós"
            />
            <p className="w-full max-w-xl text-dark text-md leading-8">
              A Async é um estúdio de UI/UX e Desenvolvimento Web que busca agregar valor e transformar empresas por meio de soluções digitais exclusivas, elegantes e sofisticadas. Criamos layouts pensando na jornada do cliente, visando proporcionar a melhor experiência possível. Nosso objetivo é garantir que nosso trabalho seja excelente e impacte positivamente a vida de várias pessoas. 
            </p>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="w-full max-w-4xl text-md text-dark">
              Somo um estúdio especializado em design e desenvolvimento composto por pessoas repletas de criatividade e sede de conhecimento dispostas a transformar sua ideia em realidade.
            </p>
            <Link href="/about">
              <Button>
                Conheça a Async
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-5">
        <div className="container w-full h-full grid gap-8 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <SectionTitle
              subtitle="Como trabalhamos"
              title="Nosso fluxo de trabalho"
            />
            <p className="w-full max-w-xl text-dark text-md leading-8">
              Nossa missão é garantir que nossos clientes tenham a melhor e mais impactante experiência durante toda a sua jornada com a gente. Por isso, nossa estratégia é voltada a garantir que o cliente participe em todas as etapas do processo garantindo que seja entregue um melhor resultado.
            </p>
          </div>
          <Separator />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20">
            {
              workFlow.map(item => (
                <WorkFlowItem 
                  key={item.workFlowNumber}
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                  workFlowNumber={item.workFlowNumber}
                  tags={item.tags}
                  />
              ))
            }
          </div>
        </div>
      </section>
      <section className="py-20 px-5 bg-light-gray">
        <div className="container w-full h-full grid gap-8 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <SectionTitle
              subtitle="Nosso portfólio"
              title="Alguns de nossos cases"
            />
            <div className="flex flex-col gap-5">
              <p className="w-full max-w-xl text-dark text-md leading-8">
                Projetados por designers e desenvolvedores capacitados e engajados, para entregar nada menos do que um trabalho excelente e de qualidade para nossos clientes
              </p>
              <Link href="/portfolio" className="self-end">
                <Button>
                  Mais cases
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <Separator />
          <div className="w-full max-w-[1140px] mx-auto">
            <CarouselCases 
              content={content}
            />
          </div>
        </div>
      </section>
    </>
  )
}
