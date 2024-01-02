'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export const Socials = () => {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        className="border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white"
      >
        <Link href="/">
          <Instagram className="w-5 h-5" />
        </Link>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white"
      >
        <Link href="/">
          <Linkedin className="w-5 h-5" />
        </Link>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white"
      >
        <Link href="/">
          <Facebook className="w-5 h-5" />
        </Link>
      </Button>
    </div>
  )
}
