"use client"
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function SideNav() {

    const MenuOption = [{
        id: 1,
        name: 'Dashboard',
        path: '/dashboard',
        icon: PanelsTopLeft
    },
    {
        id: 2,
        name: 'Create New',
        path: '/dashboard/create-new',
        icon: FileVideo
    },
    {
        id: 3,
        name: 'Upgrade',
        path: '/upgrade',
        icon: ShieldPlus
    },
    {
        id: 1,
        name: 'Account',
        path: '/account',
        icon: CircleUser
    }];

    const path = usePathname();
    return (
        <div className="w-64 h-screen p-5 shadow-[4px_0_12px_rgba(251,207,232,0.6)]">
            <div className='grid gap-3'>
                {MenuOption.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <div className={`flex items-center gap-3 cursor-pointer hover:text-blue-500 p-3 rounded-md cursor-pointer ${path == item.path
                            && 'bg-primary text-white'
                            }`} >
                            <item.icon />
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav