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
      }}
      className="py-10"
    >
      <CarouselContent>
        {
          content.map(item => (
            <CarouselItem
              key={item.title}
              className="sm:basis-1/2"
            >
              <Case 
                case={item}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 w-12 h-12 bg-dark text-primary text-lg hover:text-secondary hover:bg-dark" />
      <CarouselNext className="hidden md:flex -right-4 lg:-right-6 w-12 h-12 bg-dark text-primary text-lg hover:text-secondary hover:bg-dark" />
    </Carousel>
  )
}