import React, { useEffect, useState } from 'react';
import { IGiftImage } from '../interfaces/gif.interface';
import { GridGifItem } from './GridGifItem';
import { getGifs } from '../helpers/getGifs';

interface IGifProps {
  category: string;
}

export const GifGrid = ({ category }: IGifProps) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then(setImages);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((img: any) => {
          return <GridGifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
