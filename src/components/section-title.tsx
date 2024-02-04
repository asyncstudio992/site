import { ChevronRight } from 'lucide-react'

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="w-fit md:w-full sm:max-w-xl flex flex-col gap-4">
      <div className="w-fit flex flex-col">
        <div className="flex items-center text-sm uppercase font-light text-dark dark:text-white">
          <ChevronRight className="w-4 h-4" />
          {subtitle}
        </div>
        <div className="w-full h-1 bg-secondary rounded-full" />
      </div>
      <h2 className="text-6xl md:text-[80px] leading-none font-bold text-dark dark:text-white">{title}</h2>
    </div>
  )
}