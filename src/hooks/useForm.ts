import { useState, ChangeEvent } from 'react';

const useForm = (inputValue: {
  name?: string;
  email?: string;
  password?: string;
}) => {
  const [values, setValues] = useState(inputValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
};

export { useForm };
