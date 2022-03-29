import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
  test('getHeroeByIdAsync debe de retornar un Héroe async', () => {
    const id = 1;
    //Hacer el try catch para validar ls casos posibles
    getHeroeByIdAsync(id).then((heroe) => {
      try {
        expect(heroe).toBe(heroes[0]);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  test('debe de obtener un error si el héroe por id no existe', () => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe');
    });
  });
});
