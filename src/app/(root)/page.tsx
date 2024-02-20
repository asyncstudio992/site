import { CarouselCases } from '@/components/carousel-cases'
import { IconBadge } from '@/components/icon-badge'
import { SectionTitle } from '@/components/section-title'
import { Separator } from '@/components/ui/separator'
import { Code, Figma, FigmaIcon, Package, Rocket, Search } from 'lucide-react'
import { ServiceSingle } from './_components/service-single'
import { WorkFlowItem } from '@/components/work-flow-item'
import { Faq } from '@/components/faq'
import { Banner } from '@/components/banner'
import { Socials } from '@/components/socials'
import { SlideReveal } from '@/components/reveals/slide-reveal'

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
      <section className="w-full py-20 mt-20 overflow-x-hidden">
        <div className="container w-full h-full flex flex-col gap-10 md:gap-16">
          <SlideReveal triggerOnce direction="down">
            <h1 className="font-main break-words text-dark dark:text-white text-center md:text-start text-6xl  md:text-[80px] font-bold md:leading-[87px]">Estúdio de inovação em design e desenvolvimento web</h1>
          </SlideReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <SlideReveal triggerOnce direction="left" duration={1500}> 
              <div className="w-full max-w-md text-center text-dark dark:text-gray-400 md:text-start ">
                Nosso papel é transformar suas ideias e problemas em soluções digitais exclusivas, elegantes e sofisticadas. 
              </div>
            </SlideReveal>
            <Separator className="hidden md:block md:max-w-xs lg:max-w-sm dark:bg-gray-800" />
            <SlideReveal triggerOnce direction="right" duration={2000}>
              <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 text-dark dark:text-gray-400">
                <p className="uppercase font-thin text-md">Design • Código • Projetos</p>
                <div className="flex items-center gap-4">
                  <IconBadge icon={Figma} />
                  <IconBadge icon={Code} />
                  <IconBadge icon={Rocket} />
                </div>
              </div>
            </SlideReveal>
          </div>
          <div className="p-5 md:p-10 border bg-dark  rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 text-center">
            <SlideReveal triggerOnce direction="up" cascade>
              <ServiceSingle label="Desenvolvimento Front-end" />
              <ServiceSingle label="Desenvolvimento Back-end" />
              <ServiceSingle label="UX/UI Design" />
            </SlideReveal>
              {/* <ServiceSingle label="Automação" /> */}
          </div>
        </div>
      </section>
      <section id="sobre" className="py-20 bg-light-gray dark:bg-dark">
        <div className="container w-full h-full grid gap-8 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-5">
              <SectionTitle
                subtitle="Quem somos"
                title="Um pouco sobre nós"
              />
              <Socials />
            </div>
            <p className="w-full max-w-xl text-dark dark:text-gray-400 text-md leading-8">
              A Async é um estúdio de UI/UX e Desenvolvimento Web que busca agregar valor e transformar empresas por meio de soluções digitais exclusivas, elegantes e sofisticadas. Criamos layouts pensando na jornada do cliente, visando proporcionar a melhor experiência possível. Nosso objetivo é garantir que nosso trabalho seja excelente e impacte positivamente a vida de várias pessoas. 
            </p>
          </div>
          <Separator className="dark:bg-gray-800" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="w-full max-w-4xl text-md  text-dark dark:text-gray-400">
              Somo um estúdio especializado em design e desenvolvimento composto por pessoas repletas de criatividade e sede de conhecimento dispostas a transformar sua ideia em realidade.
            </p>
            {/* <Link href="/about">
              <Button>
                Conheça a Async
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link> */}
          </div>
        </div>
      </section>
      <section id="nosso-servico" className="py-20">
        <div className="container w-full h-full grid gap-8 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <SectionTitle
              subtitle="Como trabalhamos"
              title="Nosso fluxo de trabalho"
            />
            <p className="w-full max-w-xl  text-dark dark:text-gray-400 text-md leading-8">
              Nossa missão é garantir que nossos clientes tenham a melhor e mais impactante experiência durante toda a sua jornada com a gente. Por isso, nossa estratégia é voltada a garantir que o cliente participe em todas as etapas do processo garantindo que seja entregue um melhor resultado.
            </p>
          </div>
          <Separator className="dark:bg-gray-800" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-20">
          <SlideReveal triggerOnce direction="up" cascade duration={500}>
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
          </SlideReveal>
          </div>
        </div>
      </section>
      <section id="cases" className="py-20 bg-light-gray dark:bg-dark">
        <div className="container w-full h-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <SectionTitle
              subtitle="Nosso portfólio"
              title="Alguns de nossos cases"
            />
            {/* <div className="flex flex-col gap-5">
              <p className="w-full md:max-w-xl text-dark dark:text-gray-400 text-md leading-8 break-words">
                Projetados por designers e desenvolvedores capacitados e engajados, para entregar nada menos do que um trabalho excelente e de qualidade para nossos clientes
              </p>
            </div> */}
          </div>
          {/* <Separator className="dark:bg-gray-400"/> */}
          <div className="w-full max-w-[1440px] mx-auto">
            <CarouselCases 
              content={content}
            />
          </div>
        </div>
      </section>
      <Faq />
      <section className="py-5 pb-20">
        <div className="container w-full h-full ">
          <Banner />
        </div>
      </section>
    </>
  )
}
