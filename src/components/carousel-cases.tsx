'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Case } from "./case";

interface CarouselProps {
  content: {
    image: string;
    title: string;
    description: string;
    tags: string[]
  }[]
}

export const CarouselCases = ({ content }: CarouselProps) => {

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="py-10"
    >
      <CarouselContent>
        {
          content.map(item => (
            <CarouselItem
              key={item.title}
              className="basis-full sm:basis-1/2"
            >
              <Case 
                case={item}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious className="-left-4 lg:-left-5 w-10 md:w-12 h-10 md:h-12 bg-dark text-primary text-lg hover:text-secondary hover:bg-dark" />
      <CarouselNext className="-right-4 lg:-right-5 w-10 md:w-12 h-10 md:h-12 bg-dark text-primary text-lg hover:text-secondary hover:bg-dark" />
    </Carousel>
  )
}