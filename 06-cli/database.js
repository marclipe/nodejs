const {
  readFile
} = require('fs')

const {
  promisify
} = require('util')

//Para trabalhar com Promises
const readFileAsync = promisify(readFile)

//Outra forma de obter os dados do JSON, poderia se outro formato que iria funcionar
// const dadosJson = require('./herois.json')

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json' 
  }
  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf-8");
    return JSON.parse(arquivo.toString())
  }
  escreverArquivo() {

  }
  async listar(id) {
    const dados = await this.obterDadosArquivo()
    //O id foi passado? se foi item.id, se não passou nada é igual a true 
    const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
    return dadosFiltrados
  }
}

module.exports = new Database()