import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value); // []

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter( (c) => c + 1 );
  };

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  const data = {
    text: 'Hola',
    icon: 'ya',
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <bhecra-button data={data} title='hola'></bhecra-button>
      <my-component></my-component>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
