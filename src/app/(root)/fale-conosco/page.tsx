import { Socials } from "@/components/socials";
import { AtSign, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "./_components/contact-form";
import Link from "next/link";


export default function ContactUs() {
  return (
    <>
     <section className="w-full pt-40 pb-20">
        <div className="relative container w-full h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <AtSign className="w-5 h-5 text-secondary" />
              <p className="text-sm text-dark dark:text-white">Entre em contato conosco</p>
            </div>
            <p className="md:w-[60%] text-6xl font-light leading-[70px] text-dark dark:text-white">
              Queremos <span className="font-bold">ajudar</span> você a ganhar espaço no <span className="font-bold">digital</span>. <span className="font-bold">Vamos Conversar</span>
            </p>
            <Socials />
          </div>
          <div className="mt-16 w-full flex flex-col md:flex-row gap-10 md:gap-16">
            <ContactForm />
            <div className="w-full max-w-md flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-medium mb-4 text-dark dark:text-white">Lorem ipsum dolor sit amet consectetur.</h3>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Mail className="w-5 h-5 text-secondary" />
                    <Link href="mailto:email@provedor.com.br?subject=Assunto do email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conteúdo do email que será preenchido automaticamente" className="dark:text-white">
                      contato@email.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                    <Link href="https://web.whatsapp.com/send?phone=5599111112222" className="dark:text-white">
                      (99) 9 9999-9999
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4 text-dark dark:text-white">Lorem ipsum dolor sit amet consectetur.</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium text-dark dark:text-white">1.</span>
                    <p className=" text-dark dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium text-dark dark:text-white">2.</span>
                    <p className=" text-dark dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium text-dark dark:text-white">3.</span>
                    <p className=" text-dark dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium text-dark dark:text-white">4.</span>
                    <p className=" text-dark dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
    </>
  )
}
