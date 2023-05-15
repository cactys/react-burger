import { useState, ChangeEvent } from 'react';
import { IUseForm } from '../services/interfaces';

const useForm = (inputValue: IUseForm) => {
  const [values, setValues] = useState(inputValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
};

export { useForm };
