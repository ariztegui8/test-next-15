'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type ApiDbzProps = {
    id: number;
    name: string;
    affiliation: string;
    image: string;
    race: string;
    ki: string;
    maxKi: string;
};

async function fetchApiDbz(page: number) {
    const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=15`);
    if (!response.ok) {
        throw new Error('Failed to fetch characters');
    }
    return response.json();
}

const ApiDragonBall = () => {
    const [apidbz, setApidbz] = useState<{ items: ApiDbzProps[] } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(apidbz);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchApiDbz(currentPage);
                setApidbz(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [currentPage]);

    return (
        <div className='p-6'>
            <h1>Api Dragon Ball</h1>
            <div className='grid grid-cols-5 gap-6'>
                {apidbz?.items?.map((api: ApiDbzProps) => (
                    <div className='bg-gray-50 rounded-lg shadow-md p-6 w-full' key={api.id}>
                        <div className='w-[100px] h-[200px] overflow-hidden mx-auto'>
                            <Image priority src={api.image} width={100} height={200} className='object-cover' alt={api.name} />
                        </div>
                        <h2 className='text-lg font-medium mb-2'>{api.name}</h2>
                        <p className='text-sm '>Afiliacion: {api.affiliation}</p>
                        <p className='text-sm '>Raza: {api.race}</p>
                        <p className='text-sm '>Ki: {api.ki}</p>
                        <p className='text-sm '>Max Ki: {api.maxKi}</p>
                    </div>
                ))}
            </div>

            <div className='flex justify-center space-x-4 mt-4'>
                <button
                    className='px-4 py-2 bg-blue-500 text-white rounded-md'
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>Página {currentPage}</span>
                <button
                    className='px-4 py-2 bg-blue-500 text-white rounded-md'
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default ApiDragonBall;
