import React, { FormEvent, Dispatch, SetStateAction, useState } from 'react';
import PropTypes from 'prop-types';
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface IProps {
  setCategories: Dispatcher<string[]>;
}

export const CategoryAdd = (props: IProps) => {
  const setCategories: Dispatcher<string[]> = props.setCategories;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCategories((item) => [...item, inputValue]);
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

CategoryAdd.propTypes = {
  setCategories: PropTypes.oneOf<Dispatcher<string[]>>([]).isRequired,
};
