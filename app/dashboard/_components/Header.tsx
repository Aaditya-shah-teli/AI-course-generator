import { Button } from '@/components/ui/button'
import { SignedIn, SignIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between p-5 items-center shadow-sm'>
        <Image alt='logo' src={'/logo.png'} height={50} width={50}/>
        <UserButton/>
        <Link href={`sign-in`}><Button>Login</Button></Link>
    </div>
  )
}

export default Header