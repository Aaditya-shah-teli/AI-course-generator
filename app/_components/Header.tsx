import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm'>
        <Image width={150} height={100} src={`/logo.svg`} alt='logo' />
        <Button>Get Started</Button>
    </div>
  )
}

export default Header