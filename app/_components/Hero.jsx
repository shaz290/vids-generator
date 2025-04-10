import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

const Hero = () => {
    return (
        <div className='p-10 flex-col items-center justify-center mt-24
         md:px-20 lg:px-36 xl:px-48'>
            <h2 className='font-bold text-5xl text-center'>
                Small Clips Generator
            </h2>
            <p className='mt-4 text-2xl text-center text-gray-550'>
                🎬✨ Easily generate, ✂️ edit, and download small video clips 💾📲 with our intuitive generator.
            </p>
            <div className='mt-7 gap-8 items-center justify-center flex'>
                <Button size="lg" variant={"outline"}>Explore</Button>
                <Authentication>
                    <Button size="lg">Get Started</Button>
                </Authentication>
            </div>
        </div>
    )
}
export default Hero