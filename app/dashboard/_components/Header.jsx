import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='p-3 px-5 flex items-center justify-between shadow-[0_4px_12px_rgba(251,207,232,0.6)]'>
            <div className='flex gap-3 items-center'>
                <Image src={'/logo.svg'} width={110} height={100} alt='logo' />
            </div>
            <div className='flex gap-3 items-center'>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Dashboard</Button>
                <UserButton />
            </div>
        </div>
    )
}

export default Header