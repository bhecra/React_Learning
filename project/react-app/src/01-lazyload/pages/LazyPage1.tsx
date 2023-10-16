import React from 'react'
import { useLocation } from 'react-router-dom';


export const LazyPage1 = () => {

  const location = useLocation();

  console.log(location);
  return (

    <div>LazyPage 1</div>
  )
}

export default LazyPage1
