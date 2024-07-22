//OBS: Essa classe não está bem estruturada, pois não da pra identificar qual a SUT
import {
  Discount,
  NoDiscount,
  FiftyPercentDiscount,
  TenPercentDiscount,
} from './discount';

//Criando um Factory function para evitar a repetição de classes sut
const createSut = (className: new () => Discount): Discount => {
  return new className();
};

//OBS: Esses testes não estao aplicando TDD, pois a Persistency ainda esta acoplado não seguindo todos os principios do SOLID
describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); //limpa os mocks apos cada teste

  it('Should have no discount', () => {
    //System Under Test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Should apply 50% discount on price', () => {
    //System Under Test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });
  it('Should apply 10% discount on price', () => {
    //System Under Test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
