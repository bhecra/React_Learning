import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
  // test('debe de mostrarr el mensaje "Hola, soy Goku"', () => {
  //   const saludo = 'Hola, Soy Goku';
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo + '!')).toBeInTheDocument();
  // });
  test('debe de mostrar <PrimeraApp /> ', () => {
    const saludo = 'Hola, Soy Goku';
    const wraper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wraper).toMatchSnapshot();
  });

  test('debe de mostrar subtitulo', () => {
    const saludo = 'Hola, Soy Goku';
    const subtitulo = 'Soy un subtitulo';
    const wraper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wraper.find('p').text();

    expect(textoParrafo).toBe(subtitulo);
  });
});
