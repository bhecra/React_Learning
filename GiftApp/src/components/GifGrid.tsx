import React, { useEffect, useState } from 'react';
import { GridGifItem } from './GridGifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

interface IGifProps {
  category: string;
}

export const GifGrid = ({ category }: IGifProps) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && 'Cargando...'}
      <div className='card-grid'>
        {images.map((img: any) => {
          return <GridGifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
