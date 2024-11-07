import { jsonCards } from '@/data/jsonCards'
import Image from 'next/image';
import React from 'react'

type BlogIdProps = {
    params: {
        id: string;
    };
}

const BlogId = async ({ params }: BlogIdProps) => {
    const { id } = await params;

    const blog = jsonCards.find((card) => card.id === Number(id));

    if (!blog) {
        return <div>Blog no encontrado</div>;
    }

    return (
        <div className='max-w-2xl mx-auto p-6'>
            <h1 className='text-2xl font-semibold mb-6'>{blog.title}</h1>
            <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className='object-cover w-full h-full rounded-lg'
            />
            <p className='text-gray-700 mt-4'>{blog.description}</p>
        </div>
    )
}

export default BlogId;
