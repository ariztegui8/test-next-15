'use client';
import React from 'react';
import useFormStore from '@/stores/formStore';
import { useRouter } from 'next/navigation';

const Formulario: React.FC = () => {
  const { form, error, setForm, setError } = useFormStore();

  const { nombre, apellido, email } = form;

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.name, e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    setError(false);
    router.push('/');
    // resetForm();
   
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Formulario</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="border border-gray-200 p-2 rounded-lg w-full"
            onChange={handleChange}
            value={nombre}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Apellido</label>
          <input
            type="text"
            name="apellido"
            className="border border-gray-200 p-2 rounded-lg w-full"
            onChange={handleChange}
            value={apellido}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="border border-gray-200 p-2 rounded-lg w-full"
            onChange={handleChange}
            value={email}
          />
        </div>

        {error && <p className="text-red-500">Todos los campos son obligatorios</p>}
        <div className="text-right">
          <button
            disabled={error}
            type="submit"
            className={`bg-blue-600 rounded-lg px-8 py-2 text-white ${
              error ? 'bg-gray-600/15' : ''
            }`}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
