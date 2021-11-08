import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />

      <CategoryAdd setCategories={setCategories} />

      <div>
        {categories.map((category, index) => {
          return <GifGrid key={`${category}-${index}`} category={category} />;
        })}
      </div>
    </>
  );
};
