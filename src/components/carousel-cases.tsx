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
        align: 'start'
      }}
      className="w-full p-3"
    >
      <CarouselContent className="-ml-4">
        {
          content.map(item => (
            <CarouselItem
              key={item.title}
              className="basis-full md:basis-1/2 pl-4"
            >
              <Case 
                case={item}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious className="w-12 h-12 bg-dark text-primary text-lg hover:text-secondary hover:bg-dark" />
      <CarouselNext className="w-12 h-12 bg-dark text-primary text-lg hover:text-secondary hover:bg-dark" />
    </Carousel>
  )
}