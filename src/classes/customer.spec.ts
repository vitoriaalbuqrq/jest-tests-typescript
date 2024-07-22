//OBS: Essa classe não está bem estruturada, pois não da pra identificar qual a SUT
import {
  IndividualCustomer, 
  EnterpriseCustomer
} from './customer';

//Criando um Factory function para evitar a repetição de classes sut
const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks()); //limpa os mocks apos cada teste

describe('IndividualCustomer', () => {

  it('Should have firstname, lastname, cpf', () => {
    //System Under Test
    const sut = createIndividualCustomer('Maria', 'Silva', '111.111');
    expect(sut).toHaveProperty('firstName', 'Maria');
    expect(sut).toHaveProperty('lastName', 'Silva');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it("Should have methods to get name and idn", () => {
    const sub = createIndividualCustomer('Maria', 'Silva', '111.111')
    expect(sub.getName()).toBe("Maria Silva")
    expect(sub.getIDN()).toBe("111.111")
  })
});

describe('EnterpriseCustomer', () => {

  it('Should have name, cnpj', () => {
    //System Under Test
    const sut = createEnterpriseCustomer('Udemy', '222.222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222.222');
  });

  it("Should have methods to get name for enterprise customers", () => {
    const sub = createEnterpriseCustomer('Udemy', '222.222')
    expect(sub.getName()).toBe("Udemy")
    expect(sub.getIDN()).toBe("222.222")
  })
});
