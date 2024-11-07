import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='flex justify-between items-center p-6 bg-gray-50'>
                <div>
                    <h1 className='text-2xl font-semibold'>Logo</h1>
                </div>
                <div>
                    <ul className='flex gap-6'>
                        <Link href="/">Inicio</Link>
                        <Link href="/contacto">Contacto</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/post">Post</Link>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar