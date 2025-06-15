"use client"
import { Button } from '@/components/ui/button'
import React, { useContext, useEffect, useState } from 'react'
import { FaStackOverflow } from 'react-icons/fa'
import { IoMdOptions } from 'react-icons/io'
import { MdTopic } from 'react-icons/md'
import SelectCategory from './_components/SelectCategory'
import TopicDescription from './_components/TopicDescription'
import SelectOption from './_components/SelectOption'
import { UserInputContext } from '../_context/UserInputContext'

const CreateCourse = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    console.log(userCourseInput)
  }, [userCourseInput])

  const StepperOption = [
    { id: 1, name: "Category", icon: <FaStackOverflow /> },
    { id: 2, name: "Topics & Desc", icon: <MdTopic /> },
    { id: 3, name: "Options", icon: <IoMdOptions /> },
  ]

  const CheckStatus = () => {
    if (activeIndex === 0) {
      return !userCourseInput?.category
    }
    if (activeIndex === 1) {
      return !userCourseInput?.topic || !userCourseInput?.description
    }
    return false // step 2 doesn't need validation
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-purple-600 text-4xl font-bold'>Create Course</h2>
        <div className='flex mt-5 items-center'>
          {
            StepperOption.map((item, index) => (
              <div key={item.id} className='flex items-center'>
                <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                  <div className={`bg-purple-300 hover:bg-purple-600 transition-all p-3 text-white rounded-full cursor-pointer ${activeIndex >= index && 'bg-purple-600'}`}>
                    {item.icon}
                  </div>
                  <h2 className='hidden md:block md:text-sm text-center'>{item.name}</h2>
                </div>
                {index !== StepperOption.length - 1 && (
                  <div className={`h-1 bg-purple-200 rounded-full mx-2 w-[50px] md:w-[100px] lg:w-[170px] ${activeIndex >= index && 'bg-purple-600'}`} />
                )}
              </div>
            ))
          }
        </div>
      </div>

      <div className='px-10 md:px20 lg:px-44 mt-10'>
        {activeIndex === 0 && <SelectCategory />}
        {activeIndex === 1 && <TopicDescription />}
        {activeIndex === 2 && <SelectOption />}

        <div className='mt-10 flex justify-between'>
          <Button
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
            variant={'outline'}
          >
            Previous
          </Button>

          {activeIndex < 2 && (
            <Button
              disabled={CheckStatus()}
              className='bg-purple-400'
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}

          {activeIndex === 2 && (
            <Button className='bg-purple-400'>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateCourse