import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from 'lucide-react';
import React from 'react'

import { Badge } from './ui/badge';

interface WorkFlowItemProps {
  workFlowNumber: number;
  title: string;
  description: string;
  tags?: string[];
  icon: LucideIcon
}

export const WorkFlowItem = ({ workFlowNumber, title, description, icon: Icon, tags }: WorkFlowItemProps) => {
  return (
    <Card className="group w-full lg:px-5 pb-5 pt-10 relative bg-light-gray dark:bg-dark">
      <CardHeader>
        <div className="absolute -top-10 right-14 w-20 h-20 flex items-center justify-center text-2xl font-bold dark:border text-primary dark:text-primary bg-dark  rounded-full">
          <span className="group-hover:scale-150 duration-300">
            {workFlowNumber}
          </span>
        </div>
        <CardTitle className="flex items-center gap-2 font-semibold text-lg md:text-xl">
          <Icon className="text-secondary w-8 h-8" />
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-dark"></CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-dark dark:text-gray-400">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-1 flex-wrap">
        {
          tags?.map(tag => (
            <Badge 
              key={tag}
              variant="outline" 
              className="font-medium py-1 border-slate-300 dark:border-gray-400 dark:text-gray-400"   
            >
              {tag}
            </Badge>
          ))
        }
      </CardFooter>
    </Card>
  )
}
