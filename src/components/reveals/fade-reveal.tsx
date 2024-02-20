'use client'
import React from 'react'
import { Fade, FadeProps } from "react-awesome-reveal";

interface FadeRevealProps extends FadeProps {
  children: React.ReactNode
}

export const FadeReveal = ({ children, ...rest }: FadeRevealProps) => {
  return (
    <Fade {...rest}>
      {children}
    </Fade>
  )
}
