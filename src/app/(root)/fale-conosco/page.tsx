import { Socials } from "@/components/socials";
import { AtSign, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "./_components/contact-form";
import Link from "next/link";


export default function ContactUs() {
  return (
    <>
     <section className="w-full py-20 px-5">
        <div className="relative container w-full h-full">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <AtSign className="w-5 h-5 text-secondary" />
              <p className="text-sm text-dark">Entre em contato conosco</p>
            </div>
            <p className="md:w-[60%] text-6xl font-light leading-[70px]">
              Queremos <span className="font-bold">ajudar</span> você a ganhar espaço no <span className="font-bold">digital</span>. <span className="font-bold">Vamos Conversar</span>
            </p>
            <Socials />
          </div>
          <div className="mt-16 w-full flex flex-col md:flex-row gap-10 md:gap-16">
            <ContactForm />
            <div className="w-full max-w-md flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-medium mb-4">Lorem ipsum dolor sit amet consectetur.</h3>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Mail className="w-5 h-5 text-secondary" />
                    <Link href="mailto:email@provedor.com.br?subject=Assunto do email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conteúdo do email que será preenchido automaticamente">
                      contato@email.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                    <Link href="https://web.whatsapp.com/send?phone=5599111112222">
                      (99) 9 9999-9999
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Lorem ipsum dolor sit amet consectetur.</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium">1.</span>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium">2.</span>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium">3.</span>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium">4.</span>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet nisl proin pellentesque hac velit consectetur. </p>
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
