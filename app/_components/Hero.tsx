import { SignedIn, SignIn } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-white lg:grid  lg:place-content-center">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">

        <strong className="text-indigo-600"> AI Course Generator </strong>
        Custom Learning Paths, Powred By <strong className='text-indigo-600'>AI</strong>
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Unlock Personalized education with AI driven course creation. tailor your language 
        journy to fit your unique goals and peace
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <Link
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href={`/dashboard`}
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero