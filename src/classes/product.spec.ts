//OBS: Não é uma classe que precisa de teste, pq só tem um constructor, mas dá para testá-lo
import { Product } from './product';
//Criando um Factory function para evitar a repetição de classes sut
const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
}

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); //limpa os mocks apos cada teste

  it('Should have properties name and price', () => {
    //System Under Test
    const sut = createSut('Camiseta', 40.0);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(40.0);
  });

});
