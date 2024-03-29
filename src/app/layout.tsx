import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/providers/theme-provider'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-satoshi",
})

const satoshi = localFont({
  src: [
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-Black.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/satoshi/Satoshi-BlackItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: "--font-satoshi",
})

//add config for a body font if necessary

export const metadata: Metadata = {
  title: 'Async Studio | Estúdio de Inovação em Desenvolvimento e Design',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        "min-h-screen antialiased font-sans",
        satoshi.variable,
        poppins.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="dark:bg-dark">
            {children}
          </main>
          <Toaster />
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
