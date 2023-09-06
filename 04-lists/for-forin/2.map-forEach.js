const service = require('./service')

async function main() {
  try {
    //a is just have sure that returned a list
    const results = await service.obterPessoas("a");
    // const names = []
    //For Each name it add in my list
    // results.results.forEach(function(item) {
    //   names.push(item.name)
    // });
    //======// In Map I used just one variable //======//
    const names = results.results.map(function(pessoa) {
      return pessoa.name;
    });
    //With Arrow Function
    // const names = results.results.map(pessoa => pessoa.name)

    console.log("name ", names);
  } catch(error) {
    console.error('DEU RUIM BRO')
  }
}

main()