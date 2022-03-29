import { getSaludo } from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Pruebas sobre 02-template-string', () => {
  test('getSaludo debe retornar Hola Christian', () => {
    const nombre = 'Christian';

    const saludo = getSaludo(nombre);

    expect(saludo).toEqual(`Hola ${nombre}`);
  });
  test('getSaludo debe retornar Hola Carlos si no hay argumento en el nombre', () => {
    const saludo = getSaludo();

    expect(saludo).toEqual(`Hola Carlos`);
  });
});
