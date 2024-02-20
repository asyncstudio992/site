'use client'
import React from 'react'
import { Bounce, BounceProps } from "react-awesome-reveal";

interface BounceRevealProps extends BounceProps {
  children: React.ReactNode
}

export const BounceReveal = ({ children, ...rest }: BounceRevealProps) => {
  return (
    <Bounce {...rest}>
      {children}
    </Bounce>
  )
}
