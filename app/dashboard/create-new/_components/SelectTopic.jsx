"use client"

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';


const SelectTopic = ({ onUserSelect }) => {

    const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Motivational', 'Bed Time Story', 'Historical Facts'];

    const [selectedOption, setSelectedOption] = useState([]);

    return (
        <div>
            <h2 className='font-bold text-2xl text-primary'>Content</h2>
            <p className='text-gray-500'>What is the topic of your video</p>
            <Select onValueChange={(value) => {

                value != 'Custom Prompt' && onUserSelect('topic', value)
            }}>
                <SelectTrigger className="w-full mt-2 text-lg p-6">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((item, index) => (

                        <SelectItem key={index} value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {selectedOption == 'Custom Prompt' &&
                <Textarea className='mt-3 '
                    onChange={(e) => onUserSelect('topic', e.target.value)}
                    placeholder='Write prompt on which you want to genrate video' />
            }

        </div>
    )
}

export default SelectTopic