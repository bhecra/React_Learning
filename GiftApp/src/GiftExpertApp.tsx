import React, { useState, SetStateAction, Dispatch } from 'react';
import { CategoryAdd } from './components/CategoryAdd';

export const GiftExpertApp = () => {
  //   const categories = ['One Push', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState([
    'One Push',
    'Samurai X',
    'Dragon Ball',
  ]);

  //   const handleAdd = () => {
  //     // setCategories(['Goku', ...categories]);
  //     setCategories((item) => ['Goku', ...item]);
  //   };
  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />

      <CategoryAdd setCategories={setCategories} />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
