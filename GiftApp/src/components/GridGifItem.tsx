import { IGiftImage } from '../interfaces/gif.interface';

export const GridGifItem = ({ title, url, id }: IGiftImage) => {
  return (
    <div className='card' key={id}>
      <h2>{title}</h2>
      <img src={url} alt='' />
    </div>
  );
};
