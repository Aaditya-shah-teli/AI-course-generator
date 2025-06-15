"use client"
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { isSignedIn } = useUser(); // Destructure isSignedIn from useUser()

  return (
    <div className='flex justify-between p-5 items-center shadow-sm'>
      <Image alt='logo' src='/logo.png' height={50} width={50} />
      <div className="flex items-center gap-4">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href='/sign-in'>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;