import { Messaging } from './messaging';

//Criando um Factory function para evitar a repetição de classes sut
const createSut = () => {
  return new Messaging();
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); //limpa os mocks apos cada teste

  it('Should return undefined', () => {
    //System Under Test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    //System Under Test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log')
    //função da classe Messaging
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with: "Mensagem enviada:" and msg', () => {
    //System Under Test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log')
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
