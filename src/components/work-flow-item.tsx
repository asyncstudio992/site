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
    <Card className="w-full pxasy-2 lg:px-5 pb-5 pt-10 relative bg-light-gray">
      <CardHeader>
        <div className="absolute -top-10 right-14 w-20 h-20 flex items-center justify-center text-2xl font-bold text-primary bg-dark rounded-full">{workFlowNumber}</div>
        <CardTitle className="flex items-center gap-2 font-semibold text-xl">
          <Icon className="text-secondary w-8 h-8" />
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-dark"></CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-dark">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-1 flex-wrap">
        {
          tags?.map(tag => (
            <Badge 
              key={tag}
              variant="outline" 
              className="font-medium py-1 border-slate-300"   
            >
              {tag}
            </Badge>
          ))
        }
      </CardFooter>
    </Card>
  )
}
