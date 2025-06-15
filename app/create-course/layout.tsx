'use client'

import React, { ReactNode, useState } from 'react'
import Header from '../dashboard/_components/Header'
import { UserInputContext, UserCourseInput } from '../_context/UserInputContext'

interface Props {
  children: ReactNode
}

const CreateCourseLayout = ({ children }: Props) => {
  const [userCourseInput, setUserCourseInput] = useState<UserCourseInput>({
    category: ''
  })

  return (
    <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
      <>
        <Header />
        {children}
      </>
    </UserInputContext.Provider>
  )
}

export default CreateCourseLayout