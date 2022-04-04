import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import React from 'react';

describe('Pruebas en <CounterApp/> ', () => {
  let wraper = shallow(<CounterApp />);

  beforeEach(() => {
    wraper = shallow(<CounterApp />);
  });

  test('debe mostrar <CounterApp/> correctamente', () => {
    expect(wraper).toMatchSnapshot();
  });

  test('debe mostrar <CounterApp/> correctamente', () => {
    const counter = 100;
    const wraper = shallow(<CounterApp value={counter} />);

    const textoh = wraper.find('h2').text().trim();

    expect(textoh).toBe(`${counter}`);
  });

  test('debe mostrar incrementar con el boton +1', () => {
    wraper.find('button').at(0).simulate('click');

    const textoh = wraper.find('h2').text().trim();

    expect(textoh).toBe(`${11}`);
  });

  test('debe mostrar incrementar con el boton -1', () => {
    wraper.find('button').at(2).simulate('click');

    const textoh = wraper.find('h2').text().trim();

    expect(textoh).toBe(`${9}`);
  });

  test('debe establecer el valor por defecto con el boton reset', () => {
    const wraper = shallow(<CounterApp value={105} />);

    wraper.find('button').at(0).simulate('click');
    wraper.find('button').at(0).simulate('click');

    wraper.find('button').at(1).simulate('click');

    const textoh = wraper.find('h2').text().trim();

    expect(textoh).toBe(`105`);
  });
});
