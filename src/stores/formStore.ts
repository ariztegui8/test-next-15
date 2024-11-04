// stores/formStore.ts
import { create } from 'zustand';

interface FormState {
  form: {
    nombre: string;
    apellido: string;
    email: string;
  };
  error: boolean;
  setForm: (field: string, value: string) => void;
  setError: (value: boolean) => void;
  resetForm: () => void;
}

const useFormStore = create<FormState>((set) => ({
  form: {
    nombre: '',
    apellido: '',
    email: '',
  },
  error: false,
  setForm: (field, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    })),
  setError: (value) => set({ error: value }),
  resetForm: () =>
    set({
      form: {
        nombre: '',
        apellido: '',
        email: '',
      },
      error: false,
    }),
}));

export default useFormStore;
