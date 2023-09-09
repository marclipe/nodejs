const assert = require('assert');
const { obterPessoas } = require('./service.js')

//instalamos o pacote nock, para simular requisições
 const nock = require('nock')

//suite
describe('Star Wars Tests', function() {
  this.beforeAll(() => {
    //response of Star Wars
    const response = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: "R2-D2",
          height: "96",
          mass: "32",
          hair_color: "n/a",
          skin_color: "white, blue",
          eye_color: "red",
          birth_year: "33BBY",
          gender: "n/a",
          homeworld: "https://swapi.dev/api/planets/8/",
          vehicles: [],
          starships: [],
          created: "2014-12-10T15:11:50.376000Z",
          edited: "2014-12-20T21:17:50.311000Z",
          url: "https://swapi.dev/api/people/3/",
        },
      ],
    };

    nock("https://swapi.dev/api/people")
      .get("/?search=r2-d2&format=json")
      .reply(200, response); //how it will reply
  })

  //inside of describe sub suits
  it('deve buscar o r2d2 com o formato correto', async () => {
    const expected = [{ nome: 'R2-D2', peso: '96' }]; //create the expected
    const nomeBase = `r2-d2`;
    //param for our service
    const resultado = await obterPessoas(nomeBase) //build assignature
    assert.deepEqual(resultado, expected)
  })
})