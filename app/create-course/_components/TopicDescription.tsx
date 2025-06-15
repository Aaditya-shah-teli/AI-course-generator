import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useContext, ChangeEvent } from 'react';

const TopicDescription = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (
    fieldName: 'topic' | 'description',
    value: string
  ) => {
    setUserCourseInput(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div>
      {/* topic input */}
      <div className='mx-20 lg:mx-44 mt-5'>
        <label htmlFor='input' className='capitalize'>
          Write the topic in which you want to generate the course (e.g. Python, Yoga, etc.)
        </label>
        <Input
          id='input'
          placeholder='Topic'
          value={userCourseInput.topic}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('topic', e.target.value)}
        />
      </div>

      {/* description textarea */}
      <div className='mx-20 lg:mx-44 mt-5'>
        <label htmlFor='textarea'>
          Tell us more about your course, what you want to include in your course
        </label>
        <Textarea
          id='textarea'
          placeholder='About Your Course'
          value={userCourseInput.description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('description', e.target.value)}
        />
      </div>
    </div>
  );
};

export default TopicDescription;