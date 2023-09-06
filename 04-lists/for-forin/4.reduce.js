const { obterPessoas } = require('./service')

/*
  Trazer o peso dessas pessoas e somar e verificar quanto é o peso dessas pessoas
*/

Array.prototype.meuReduce = function(callback, valorInicial) {
  //Se ele não passou nada eu pego o this na posição inicial
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
  for(let index = 0; index <= this.length - 1; index ++) {
    valorFinal = callback(valorFinal, this[index], this) //valor final + o meu item nessa posição e o this que é lista completa
  }
  return valorFinal;
}

async function main() {
  try {
    const { results } = await obterPessoas("a");
    const pesos = results.map((item) => parseInt(item.height));
    console.log("pesos", pesos);
    //[20.2, 30.3, 40.5] = 0
    // const total = pesos.reduce((anterior, proximo) => {
    //   return anterior + proximo
    // }, 0) //Sempre importante deixar um valor para caso que não tenha no valor anterior
    /*Pegar um resultado de uma lista e reduzir em um Array só*/
    const minhaLista = [
      ["Marc", "Lipe"],
      ["JS", "TS"],
    ];
    const total = minhaLista
      .meuReduce((anterior, proximo) => {
        return anterior.concat(proximo);
      }, []) // Se estiver vazia por padrão é uma lista, o tipo anterior define o que utilizamos 
      .join(", "); //To separate for comma
    console.log("total: ", total);
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()