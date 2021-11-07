import React, { FormEvent, Dispatch, SetStateAction, useState } from 'react';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export const CategoryAdd = (props: any) => {
  const setCategories: Dispatcher<string[]> = props.setCategories;
  const [inputValue, setInputValue] = useState('Hola mundo');

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCategories((item) => [...item, inputValue]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>{inputValue}</h2>
      <input type='text' value={inputValue} onChange={handleChange} />
    </form>
  );
};
