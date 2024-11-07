'use client'
import Image from 'next/image'
import React from 'react'
import { jsonCards } from '@/data/jsonCards'
import { useRouter } from 'next/navigation'


const CardBlog = () => {

    const router = useRouter()

    const handleCardClick = (id: number) => {
        router.push(`/blog/${id}`);
    };

    return (
        <div className='grid grid-cols-3 gap-6 px-6'>
            {jsonCards.map(card => (
                <div onClick={() => handleCardClick(card.id)} key={card.id} className='bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer'>
                    <div className='w-full h-[200px]'>
                        <Image className='object-cover w-full h-full' src={card.image} alt='blog1' />
                    </div>
                    <div className='p-6'>
                        <h1 className='text-xl font-semibold mb-3'>{card.title}</h1>
                        <p className='text-gray-500'>{card.description}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CardBlog