import { Persistency } from './persistency';

//OBS: Esses testes não estao aplicando TDD, pois a Persistency ainda esta acoplado não seguindo todos os principios do SOLID
describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); //limpa os mocks apos cada teste

  it('Should return undefined', () => {
    //System Under Test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    //System Under Test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with: Pedido salvo com sucesso...', () => {
    //System Under Test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log')
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
