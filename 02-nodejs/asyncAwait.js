//Impor the intern module of node.js
const util = require("util"); //The purpose is convert callback for Promise
const obterEnderecoAsync = util.promisify(obterEndereco); //don't work some libs

function obterUsuario() {
  //Problem? => reject(ERRO)
  //Success => RESOLVE
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('DEU RUIM DE VERDADE!'))
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "11996775",
        ddd: 11,
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0,
    });
  }, 2000);
}

//1º passo adicionar a palavra async na função => automaticamente ela retornará um Promise
main(); //Chamamos o métodos
async function main() {
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEnderecoAsync(usuario.id);

    //Como o telefone não depende do endereço então uso Promise.all
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])
    const endereco = resultado[1]; 
    const telefone = resultado[0]
    console.log(`
      Nome: ${usuario.nome},
      Telefone (${telefone.ddd}) ${telefone.telefone}
      Endereço ${endereco.rua}, ${endereco.numero}
    `)
    console.timeEnd("medida-promise");
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}