//Filter - How a manipulation of database
const { obterPessoas } = require('./service.js')

/*
  Destructuring
  const item = {
    nome: 'Marcos', 
    idade: 22
  }

  const { nome, nome } = item
  console.log(nome)
*/ 

async function main() {
  try {
    const { results } = await obterPessoas('a')

    const familiaLars = results.filter(function(item) {
      //por padrão precisa retornar um booleano
      //para informar se deve manter ou remover da lista
      // false => remove da lista 
      // true => mantém
      //encontrou é igual a posicaoNoArray, não encontrou igual a -1
      const result = item.name.toLowerCase().indexOf(`lars`) !== -1
      return result
    })
    //map reduzido
    const names = familiaLars.map((pessoa) => pessoa.name)
    console.log(names)

  } catch (error) {
    console.error("DEU RUIM", error)
  }
}
main()