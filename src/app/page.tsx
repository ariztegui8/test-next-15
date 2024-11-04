'use client'
import useFormStore from '@/stores/formStore';
import React from 'react'

const Home = () => {

  const { form } = useFormStore();

  console.log(form);

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='text-2xl font-semibold mb-6'>Inicio</h1>
      {form &&
        <div>
          <p>Nombre: {form.nombre}</p>
          <p>Apellido: {form.apellido}</p>
          <p>Email: {form.email}</p>
        </div>
      }
    </div>
  )
}

export default Home