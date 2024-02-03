import React from 'react'
import BrandLogo from '../../public/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="text-4xl font-bold text-dark dark:text-white">
      Async
    </Link>
  )
}
