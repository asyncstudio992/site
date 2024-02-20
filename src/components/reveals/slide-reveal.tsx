'use client'
import React from 'react'
import { Slide, SlideProps } from "react-awesome-reveal";

interface SlideRevealProps extends SlideProps {
  children: React.ReactNode
}

export const SlideReveal = ({ children, ...rest }: SlideRevealProps) => {
  return (
    <Slide {...rest}>
      {children}
    </Slide>
  )
}
