"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { HiBugAnt } from 'react-icons/hi2'

const Navigation = () => {
    const pathname = usePathname()

    const links = [
        { name: 'Dashboard', href: '/' },
        { name: 'Issues', href: '/issues' }
    ]

    return (
        <nav className='flex items-center justify-between container m-auto border-b border-gray-200 mb-5'>
            <Link href="/"><HiBugAnt /></Link>

            <ul className='flex'>
                { links.map( link => 
                    <li key={link.href}>
                        <Link 
                            className={`p-4 ${pathname === link.href ? 'text-zinc-900' : 'text-zinc-500'}  hover:text-zinc-800 inline-block transition-colors`} 
                            href={link.href}>{link.name}
                        </Link>
                    </li> 
                ) }
            </ul>
        </nav>
    )
}

export default Navigation