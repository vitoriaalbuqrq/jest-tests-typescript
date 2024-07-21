describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); //Checa se um valor é igual. Não funciona com objetos
    expect(number).toEqual(10); //Checa objetos iguais

    expect(number).not.toBeNull(); //valor não nulo
    expect(number).not.toBeFalsy(); //valor não falso

    expect(number).toBeGreaterThan(9); //Menor que
    expect(number).toBeGreaterThanOrEqual(10); //maior ou igual
    expect(number).toBeCloseTo(10, 1); //valores aproximados
  });
});

describe('Objects', () => {
  it('should test jest assertions', () => {
    const person = { name: 'Luiz', age: 26 };
    const anotherPerson = {...person};

    expect(person).toEqual(anotherPerson); //objetos iguais
    expect(person).toHaveProperty('age'); //Se existe essa propriedade dentro do objeto
    expect(person).toHaveProperty('age', 26); //Se existe e se tem esse valor
    expect(person.name).toBe('Luiz');
  });
});
