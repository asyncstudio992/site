import Image from "next/image"

import { Badge } from "./ui/badge";

interface CaseProps {
  case: {
    image: string;
    title: string;
    description: string;
    tags: string[]
  }
}

export const Case = ({ case: { description, image, tags, title } }: CaseProps) => {
  return (
    <div className="w-full bg-white dark:bg-dark dark:border  p-5 rounded-lg">
      <div className="w-full h-[344px] rounded-lg relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-bold text-dark dark:text-white">{title}</h3>
        <p className="my-3 text-md text-dark dark:text-gray-400 break-words">{description}</p>
        <div className="flex items-center flex-wrap gap-1">
          {
            tags.map(tag => (
              <Badge 
                key={tag}
                variant="outline" 
                className="font-medium py-1 border-slate-300 dark:border-gray-400 dark:text-gray-400"  
              >
                {tag}
              </Badge>
            ))
          }
        </div>
      </div>
    </div>
  )
}