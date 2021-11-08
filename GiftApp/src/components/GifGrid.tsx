import React, { useEffect, useState } from 'react';
import { IGiftImage } from '../interfaces/gif.interface';
import { GridGifItem } from './GridGifItem';

interface IGifProps {
  category: string;
}

export const GifGrid = ({ category }: IGifProps) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&api_key=NTzkwVI55MDAK0AlZdzb2AVUmORkYf3z&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img: any) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

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
