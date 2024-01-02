'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(3, { message: "O nome precisa de no mínimo 3 caracteres",}),
  company: z.string().min(1, { message: "Esse campo é obrigatório",}),
  email: z.string().email(),
  whatsapp: z.string(),
  web_development: z.boolean().default(false),
  ui_design: z.boolean().default(false),
  time_available: z.string(),
  budget: z.string(),
  description: z.string(),
})

export const  ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      whatsapp: '',
      web_development: false,
      ui_design: false,
      time_available: '',
      budget: '',
      description: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  } 

  console.log(form.watch())
  return (
    <div className="py-8 px-5 w-full bg-light-gray shadow rounded-lg">
      <h3 className="text-2xl font-bold mb-3">Lorem ipsum dolor sit amet consectetur.</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. Congue sed morbi at condimentum amet vitae dui vulputate.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Empresa</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email para Contato</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Whatsapp</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <p className="text-sm font-medium mb-4">Qual serviço está procurando?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="web_development"
                render={({ field }) => (
                  <div className="flex items-center gap-2">
                    {/* @ts-ignore  */}
                    <Checkbox id="web_development" defaultChecked={field.value} onCheckedChange={e => field.onChange(e)} {...field} />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="web_development"
                        className="text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Desenvolvimento Web
                      </label>
                    </div>
                  </div>
                )}
              />
              
              <FormField
                control={form.control}
                name="ui_design"
                render={({ field }) => (
                  <div className="flex items-center gap-2">
                    {/* @ts-ignore  */}
                    <Checkbox id="ui_design" defaultChecked={field.value} onCheckedChange={e => field.onChange(e)} {...field} />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="ui_design"
                        className="text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        UI Design
                      </label>
                    </div>
                  </div>
                )}
              />
            </div>
            <div className="mt-5 w-full">
              <FormField
                control={form.control}
                name="time_available"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Qual o tempo disponível para a entrega?</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="time_is_not_a_problem" id="time_is_not_a_problem"/>
                          <Label htmlFor="time_is_not_a_problem" className="text-md font-normal">Tempo não é problema</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one_two_months" id="one_two_months"/>
                          <Label htmlFor="one_two_months" className="text-md font-normal">1 a 2 meses</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="three_four_months" id="three_four_months"/>
                          <Label htmlFor="three_four_months" className="text-md font-normal">3 a 4 meses</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgency" id="urgency" />
                          <Label htmlFor="urgency" className="text-md font-normal">Preciso com urgência</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-5 w-full">
              <FormField
                control={form.control}
                name="time_available"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Qual valor do seu investimento?</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-3"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="less_than_1000" id="less_than_1000" className="hidden"/>
                          <Label 
                            htmlFor="less_than_1000" 
                            className={cn(
                              "rounded-full text-xs px-5 py-3 border border-input text-dark cursor-pointer",
                              field.value === 'less_than_1000' && 'border-dark'
                            )}>
                              Menor que R$1000
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1k_5k" id="1k_5k" className="hidden"/>
                          <Label 
                            htmlFor="1k_5k" 
                            className={cn(
                              "rounded-full text-xs px-5 py-3 border border-input text-dark cursor-pointer",
                              field.value === '1k_5k' && 'border-dark'
                            )}>
                              R$1000 - R$5 mil
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5k_10k" id="5k_10k" className="hidden"/>
                          <Label 
                            htmlFor="5k_10k" 
                            className={cn(
                              "rounded-full text-xs px-5 py-3 border border-input text-dark cursor-pointer",
                              field.value === '5k_10k' && 'border-dark'
                            )}>
                              R$5 mil - R$10 mil
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="greater_than_10k" id="greater_than_10k" className="hidden"/>
                          <Label 
                            htmlFor="greater_than_10k" 
                            className={cn(
                              "rounded-full text-xs px-5 py-3 border border-input text-dark cursor-pointer",
                              field.value === 'greater_than_10k' && 'border-dark'
                            )}>
                              Acima de R$10 mil
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descreva seu projeto contando todos os  detalhes</FormLabel>
                <FormControl>
                  <Textarea className="h-32" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="text-sm">Enviar mensagem</Button>
        </form>
      </Form>
    </div>
  )
}
