/*Tentar inteirar esses items e printar apenas os nomes*/
const service = require('./service');

async function main() {
  try {
    const result = await service.obterPessoas("a");
    const names = []; //To store this list of people in a variable
    //length - 1, if quantity of this array is less than zero, it enters the loop
    console.time("for");
    //======// FOR //======//
    // for (let i = 0; i <= result.results.length - 1; i++) {
    //   const pessoa = result.results[i]; //Position 0
    //   names.push(pessoa.name); //Add in the list
    // }
    //======// FOR IN //======//
    // for (let i in result.results) {
    //   const pessoa = result.results[i];
    //   names.push(pessoa.name);
    // }
    //======// FOR OF //======// 
    //All in one line
    for(pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd("for");

    console.log(`names`, names);
  } catch(error) {
    console.error(`error interno`, error)
  }
}

main()