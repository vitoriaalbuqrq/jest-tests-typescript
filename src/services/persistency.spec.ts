import { Persistency } from './persistency';

describe('Persistency', () => {
  it('Should return undefined', () => {
    //System Under Test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    //System Under Test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log')
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
