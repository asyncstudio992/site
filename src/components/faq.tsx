'use client'
import React from 'react'
import { SectionTitle } from './section-title'
import { Separator } from './ui/separator'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeReveal } from './reveals/fade-reveal'

export const Faq = () => {
  return (
    <section className="py-20 overflow-x-hidden">
      <div className="container w-full h-full grid gap-8 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <SectionTitle
            subtitle="FAQ"
            title="Perguntas Frequentes"
          />
        </div>
        <div className="py-10">
          <Accordion type="single" collapsible>
            <FadeReveal triggerOnce cascade duration={800}>  
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-5 py-8 hover:no-underline dark:text-white hover:bg-light-gray dark:hover:bg-secondary-cn/20">Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac.</AccordionTrigger>
                <AccordionContent className="p-5 text-[16px] dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis. elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-5 py-8 hover:no-underline dark:text-white hover:bg-light-gray dark:hover:bg-secondary-cn/20">Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac.</AccordionTrigger>
                <AccordionContent className="p-5 text-[16px] dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis. elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-5 py-8 hover:no-underline dark:text-white hover:bg-light-gray dark:hover:bg-secondary-cn/20">Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac.</AccordionTrigger>
                <AccordionContent className="p-5 text-[16px] dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis. elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="px-5 py-8 hover:no-underline dark:text-white hover:bg-light-gray dark:hover:bg-secondary-cn/20">Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac.</AccordionTrigger>
                <AccordionContent className="p-5 text-[16px] dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis. elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis.
                </AccordionContent>
              </AccordionItem>
            </FadeReveal>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
