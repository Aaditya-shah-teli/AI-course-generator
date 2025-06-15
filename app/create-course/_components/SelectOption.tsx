import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React, { useContext } from 'react'

const SelectOption = () => {
     const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
    
      // ✅ Strongly typed function for handling input changes
      const handleInputChange = (
        fieldName: 'topic' | 'description', // limit to known fields
        value: string
      ) => {
        setUserCourseInput(prev => ({
          ...prev,
          [fieldName]: value,
        }));
      };
    
    return (
        <div className="px-10 md:px-20 lg:px-44">
            <div className='grid grid-cols-2'>
                <div>
                    <label htmlFor="">Difficulty level</label>
                    <Select onValueChange={(value) => handleInputChange("level", value)} defaultValue={userCourseInput?.level}>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="beginner">beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="">Course Duration</label>
                    <Select onValueChange={(value) => handleInputChange("duration", value)} defaultValue={userCourseInput?.description}>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1hours">1 Hours</SelectItem>
                            <SelectItem value="2hours">2 Hours</SelectItem>
                            <SelectItem value="moreThan3Hours">More than 3 Hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="">Add Videos</label>
                    <Select onValueChange={(value) => handleInputChange("displayVideo", value)} defaultValue={userCourseInput?.displayVideo}>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="">Number of Chapters</label>
                    <Input type="number" placeholder="Enter the Number of Chapters you want to add" onChange={(e) => handleInputChange("noOfChapers", e.target.value)}/>
                </div> 
            </div>
        </div>
    )
}

export default SelectOption