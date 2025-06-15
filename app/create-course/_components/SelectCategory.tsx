import { UserInputContext } from '@/app/_context/UserInputContext'
import CategoryList from '@/app/_shared/CategoryList'
import React, { useContext } from 'react'

interface CategoryItem {
  id: number
  name: string
  icon: React.ReactNode
}

const SelectCategory = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  // ✅ Properly typed function parameter
  const handleCategoryChange = (category: string) => {
    setUserCourseInput(prev => ({
      ...prev,
      category: category
    }))
  }

  return (
    <div>
      <h2 className='text-xl'>Select your Course Category:</h2>
      <div className='grid grid-cols-3 gap-3 px-10 md:px-20'>
        {CategoryList.map((item: CategoryItem) => (
          <div
            key={item.id}
            onClick={() => handleCategoryChange(item.name)}
            className={`flex flex-col p-5 border items-center rounded-xl transition-all cursor-pointer
              ${userCourseInput.category === item.name ? 'bg-purple-600 text-white' : 'hover:bg-blue-400'}`}
          >
            <h2 className='h-10 w-10 text-4xl'>{item.icon}</h2>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectCategory