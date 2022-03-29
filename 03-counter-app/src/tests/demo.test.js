describe('Pruebas en el archivo demo.test.js', () => {
  test('should be true', () => {
    const isActive = true;
    if (!isActive) {
      throw new Error('should be false');
    }
  });
  test('should be equal strings', () => {
    // 1. inicialización
    const message = 'hello world';
    // 2. estimulo
    const message2 = 'hello world';
    // 2. Observar coportamiento
    expect(message).toEqual(message2);
  });
});
