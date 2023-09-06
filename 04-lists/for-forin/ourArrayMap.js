const service = require("./service");

//Map a reduced for
Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];
  //this.length - size of list
  for (let indice = 0; indice <= this.length - 1; indice++) {
    const resultado = callback(this[indice], indice) //My this is a list, it catch the item in that position
    novoArrayMapeado.push(resultado)
  }

  return novoArrayMapeado;
}

async function main() {
  try {
    //a is just have sure that returned a list
    const results = await service.obterPessoas("a");

    const names = results.results.meuMap(function(pessoa, indice) {
      return `[${indice}]${pessoa.name}`
    })

    console.log("name ", names);
  } catch (error) {
    console.error("DEU RUIM BRO");
  }
}

main();
