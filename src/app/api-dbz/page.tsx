import Image from 'next/image';
import React from 'react'

type ApiDbzProps = {
    id: number;
    name: string;
    description: string;
    image: 'string';
};

async function fetchApiDbz() {
    const response = await fetch('https://dragonball-api.com/api/characters');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}

const ApiDragonBall = async () => {

    const apidbz = await fetchApiDbz();
    console.log('apidbz', apidbz);


    return (
        <div className='p-6'>
            <h1>Api Dragon Ball</h1>
            <div className='grid grid-cols-5 gap-6'>
                {apidbz?.items?.map((api: ApiDbzProps) => (
                    <div className='bg-gray-50 rounded-lg shadow-md p-6 w-full' key={api.id}>
                        <div className='w-[100px] h-[200px] overflow-hidden mx-auto'>
                            <Image priority src={api.image} width={100} height={200} className=' object-cover' alt='dragonball' />
                        </div>
                        <h2 className='text-lg font-medium mb-2'>{api.name}</h2>
                        <p className='text-sm '>{api.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ApiDragonBall