//Filter - How a manipulation of database
const { obterPessoas } = require("./service.js");

//==// FOR IN //==//
Array.prototype.meuFilter = function(callback) {
  const lista = []
  for(index in this) {
    const item = this[index]
    const result = callback(item, index, this) //The filter use three params
    //0, "", null, undefined === false
    if(!result) continue; //se for falso ele continua o fluxo 
    lista.push(item)
  }
  return lista;
}

async function main() {
  try {
    const { results } = await obterPessoas("a");

    // const familiaLars = results.filter(function (item) {
    //   const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
    //   return result;
    // });
    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`index ${index}`, lista.length)
      return item.name.toLowerCase().indexOf(`lars`) !== -1;
    });
    const names = familiaLars.map((pessoa) => pessoa.name);
    console.log(names);
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}
main();
