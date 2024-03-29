'use client'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from 'axios'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
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
import { useToast } from "@/components/ui/use-toast"
import { cn } from '@/lib/utils'
import { LoaderIcon } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(3, { message: "Esse campo é obrigatório",}),
  company: z.string().min(1, { message: "Esse campo é obrigatório",}),
  email: z.string().email({ message: "Esse campo é obrigatório" }),
  whatsapp: z.string(),
  web_development: z.boolean().default(false),
  ui_design: z.boolean().default(false),
  time_available: z.string(),
  budget: z.string(),
  description: z.string().min(1, { message: "Esse campo é obrigatório",}),
})

export const  ContactForm = () => {
  const [isSending, setIsSending] = useState(false)
  const { toast } = useToast()
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSending(true)
      const data = await axios.post('/api/contact', values)
      console.log(data)
      toast({
        description: "Sua mensagem foi enviada, entraremos en contato assim que possível.",
      })
      form.reset()
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        description: "Ocorreu um erro ao enviar sua mensagem, tente novamente!",
      })
    } finally {
      setIsSending(false)
    }
  } 

  return (
    <div className="py-8 px-5 w-full bg-light-gray dark:bg-dark dark:border shadow rounded-lg">
      <h3 className="text-2xl font-bold mb-3 text-dark dark:text-white">Lorem ipsum dolor sit amet consectetur.</h3>
      <p className=" text-dark dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. Congue sed morbi at condimentum amet vitae dui vulputate.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-dark dark:text-white">Seu Nome</FormLabel>
                  <FormControl>
                    <Input className="dark:text-gray-400" {...field} />
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
                  <FormLabel className=" text-dark dark:text-white">Nome da Empresa</FormLabel>
                  <FormControl>
                    <Input className="dark:text-gray-400" {...field} />
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
                  <FormLabel className=" text-dark dark:text-white">Email para Contato</FormLabel>
                  <FormControl>
                    <Input className="dark:text-gray-400" type="email" {...field} />
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
                  <FormLabel className=" text-dark dark:text-white">Whatsapp</FormLabel>
                  <FormControl>
                    <Input className="dark:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <p className="text-sm font-medium mb-4 text-dark dark:text-white ">Qual serviço está procurando?</p>
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
                        className="text-dark dark:text-gray-400 text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                        className="text-dark dark:text-gray-400 text-md leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                    <FormLabel className=" text-dark dark:text-white">Qual o tempo disponível para a entrega?</FormLabel>
                    <FormControl>
                      <RadioGroup 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="time_is_not_a_problem" id="time_is_not_a_problem" className="text-secondary dark:text-primary"/>
                          <Label htmlFor="time_is_not_a_problem" className="text-md font-normal text-dark dark:text-gray-400">Tempo não é problema</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one_two_months" id="one_two_months" className="text-secondary dark:text-primary" />
                          <Label htmlFor="one_two_months" className="text-md font-normal text-dark dark:text-gray-400">1 a 2 meses</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="three_four_months" id="three_four_months" className="text-secondary dark:text-primary" />
                          <Label htmlFor="three_four_months" className="text-md font-normal text-dark dark:text-gray-400">3 a 4 meses</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgency" id="urgency" className="text-secondary dark:text-primary" />
                          <Label htmlFor="urgency" className="text-md font-normal text-dark dark:text-gray-400">Preciso com urgência</Label>
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
                name="budget"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className=" text-dark dark:text-white">Qual valor do seu investimento?</FormLabel>
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
                              "rounded-full text-xs px-5 py-3 border border-gray-300 cursor-pointer text-dark dark:text-gray-400",
                              field.value === 'less_than_1000' && 'border-secondary text-secondary dark:border-primary dark:text-primary'
                            )}>
                              Menor que R$1000
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1k_5k" id="1k_5k" className="hidden"/>
                          <Label 
                            htmlFor="1k_5k" 
                            className={cn(
                              "rounded-full text-xs px-5 py-3 border border-gray-300 cursor-pointer text-dark dark:text-gray-400",
                              field.value === '1k_5k' && 'border-secondary text-secondary dark:border-primary dark:text-primary'
                            )}>
                              R$1000 - R$5 mil
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5k_10k" id="5k_10k" className="hidden"/>
                          <Label 
                            htmlFor="5k_10k" 
                            className={cn(
                              "rounded-full text-xs px-5 py-3 border border-gray-300 cursor-pointer text-dark dark:text-gray-400",
                              field.value === '5k_10k' && 'border-secondary text-secondary dark:border-primary dark:text-primary'
                            )}>
                              R$5 mil - R$10 mil
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="greater_than_10k" id="greater_than_10k" className="hidden"/>
                          <Label 
                            htmlFor="greater_than_10k" 
                            className={cn(
                              "rounded-full text-xs px-5 py-3 border border-gray-300 cursor-pointer text-dark dark:text-gray-400",
                              field.value === 'greater_than_10k' && 'border-secondary text-secondary dark:border-primary dark:text-primary'
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-dark dark:text-white">Descreva seu projeto contando todos os  detalhes</FormLabel>
                <FormControl>
                  <Textarea className="h-32 dark:bg-dark dark:text-gray-400 dark:border-gray-800" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="text-sm"
            disabled={isSending}
          >
            {
              isSending 
              ? (
                <div className="animate-spin">
                  <LoaderIcon />
                </div>
              ) 
              : 'Enviar mensagem'
            }
          </Button>
        </form>
      </Form>
    </div>
  )
}
