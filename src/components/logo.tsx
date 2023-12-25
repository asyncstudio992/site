import React from 'react'
import BrandLogo from '../../public/assets/images/logo.svg'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src={BrandLogo}
      alt="Logo da Async"
      width={112}
      height={50}
    />
  )
}
