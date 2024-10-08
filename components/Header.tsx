import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.svg'
import Link from 'next/link' // Import the Link component from Next.js

function Header({ className }: { className?: string }) {
    return (
        <header className='mb-16 flex h-16 w-screen items-center justify-center pt-16'>
            <div className='items-center flex justify-center md:ml-10 md:w-1/5'>
                <Link href="/" legacyBehavior>
                    <a className='relative opacity-75 transition duration-300 hover:opacity-100'> {/* Add the 'a' tag */}
                        <div className='flex items-center'>
                            <Image src={logo} alt='logo' className='w-12' />
                            <h1 className='ml-2 font-bold text-lg'>MeharFlix.</h1>
                        </div>
                    </a>
                </Link>
            </div>

            <nav className='hidden flex-1 items-center justify-center space-x-10 md:ml-16 md:flex'>
                <p>Made with <span role='img' aria-label='heart emoji'>❤️</span> by <a target="_blank" className='text-blue-500 hover:underline' href='https://github.com/Saadkarimsa2'>Developer Saad</a></p>
            </nav>
        </header>
    )
}

export default Header
