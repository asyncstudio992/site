import { ContactUsEmailTemplate } from '@/components/templates/contact-us';
import { render } from '@react-email/render';
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {

    const {
      name,
      company,
      email,
      whatsapp,
      web_development,
      ui_design,
      time_available,
      budget,
      description,
    } = await req.json()

    const transporter = nodemailer.createTransport({
      //@ts-ignore
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    });

    const emailTemplate = render(ContactUsEmailTemplate({
      name,
      company,
      email,
      whatsapp,
      web_development,
      ui_design,
      time_available,
      budget,
      description,
    }))

    const options = {
      from: "Async <asyncstudio.co@gmail.com>",
      to: ['asyncstudio.co@gmail.com'],
      subject: `Nova mensagem de ${name} da empresa ${company}`,
      html: emailTemplate,
    };
    
    const data = await transporter.sendMail(options);

    return NextResponse.json(data)

  } catch(error) {
    console.log('SEND_EMAIL', error)
    return new NextResponse('Ocorreu um erro ao enviar a mensagem, tente novamente!')
  }
}