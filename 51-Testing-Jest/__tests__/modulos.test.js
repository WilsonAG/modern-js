import { suma } from '../js/otrasFunciones.js';

describe('Suma 2 numeros enteros', () => {
  test('10 y 20 debe dar 30', () => {
    expect(suma(10, 20)).toBe(30);
  });
});
