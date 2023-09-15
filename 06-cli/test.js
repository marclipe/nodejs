const {
  deepEqual, 
  ok
} = require('assert')

const database = require('./database.js') //pego database completo

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash', 
  poder: 'Speed', 
  id: 1
}

describe('Suite de manipulação de Herois', () => {
  it('deve pesquisar um héroi usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id)
    deepEqual(resultado, expected);
  })

  // it("deve cadastrar um heroi, usando arquivos", async () => {
  //   const expected = DEFAULT_ITEM_CADASTRAR //nosso esperado
  //   //
  //   ok(null, expected)
  // });
})