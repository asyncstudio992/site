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

export const Faq = () => {
  return (
    <section className="py-20 px-5">
    <div className="container w-full h-full grid gap-8 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <SectionTitle
          subtitle="FAQ"
          title="Perguntas Frequentes"
        />
      </div>
      <div className="py-10">

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-5 py-8 hover:no-underline hover:bg-light-gray">Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac.</AccordionTrigger>
            <AccordionContent className="p-5 text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis. elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-5 py-8 hover:no-underline hover:bg-light-gray">Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac.</AccordionTrigger>
            <AccordionContent className="p-5 text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis. elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-5 py-8 hover:no-underline hover:bg-light-gray">Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac.</AccordionTrigger>
            <AccordionContent className="p-5 text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis. elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="px-5 py-8 hover:no-underline hover:bg-light-gray">Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac.</AccordionTrigger>
            <AccordionContent className="p-5 text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Interdum viverra pharetra ut elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis. elit fringilla convallis consequat proin ac. Aliquet aenean purus quam nisi diam diam vitae nisl sagittis.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
  )
}
