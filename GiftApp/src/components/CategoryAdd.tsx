import React, { FormEvent, Dispatch, SetStateAction, useState } from 'react';
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface IProps {
  setCategories: Dispatcher<string[]>;
}

export const CategoryAdd = ({ setCategories }: IProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCategories((item) => [inputValue, ...item]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{inputValue}</h2>
      <input type='text' value={inputValue} onChange={handleChange} />
    </form>
  );
};
