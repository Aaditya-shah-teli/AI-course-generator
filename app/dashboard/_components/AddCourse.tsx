"use client"
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const AddCourse = () => {
    const {user} = useUser()
  return (
    <div className='flex justify-between items-center'>
        <div>
            <h2 className=' text-3xl'> Hello, <span className='text-purple-600 font-bold'>{user?.fullName}</span></h2>
            <p className=' capitalize text-sm text-gray-500'>Create new course with Ai, share with friends and earn form it</p>
        </div>
        <Button className='bg-purple-600'>+ Create AI Course</Button>
    </div>
  )
}

export default AddCourse