/*
 0 Obter um usuário
 1 Obter o número de telefone de um usuário a partir de seu Id 
 2 Obter o endereço do usuário pelo Id
*/

/*Press F5 in VS Code*/

//Impor the intern module of node.js
const util = require('util') //The purpose is convert callback for Promise
const obterEnderecoAsync = util.promisify(obterEndereco) //don't work some libs

function obterUsuario() {
  //Problem? => reject(ERRO)
  //Success => RESOLVE 
  return new Promise(function resolvePromise(resolve, reject){
    setTimeout(function () {
      // return reject(new Error('DEU RUIM DE VERDADE!'))
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "11996775",
        ddd: 11,
      });
    }, 2000); 
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0,
    });
  }, 2000);
}

const usuarioPromise = obterUsuario()
// For Success => .then
// For Errors => .catch 
//Pipe - sequential linking = usuario -> telefone -> telefone
usuarioPromise
  .then(function (usuario) {
    //Phone has a user id in param, usuario or name could to be wherever
    return obterTelefone(usuario.id) //I resolved this Promise for then pass for next Promise
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id,
          },
          //pass the phone forward
          telefone: result,
        };
      });
  })
  .then(function(resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    // I resolved this Promise for then pass for next Promise
    return endereco
      .then(function resolverEndereco(result){
        return {
          usuario: resultado.usuario, //come resultado.usuario.id!
          telefone: resultado.telefone, //come resultado!
          endereco: result,
        };
      })
  })
  .then(function(resultado) {
    console.log(
      `Nome: ${resultado.usuario.nome}
       Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
       Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
      `
    );
  })
  // .then(function(resultado) {
  //   console.log('resultado', resultado)
  // })
  .catch(function (error) {
    console.error('DEU RUIM', error)
  })

// obterUsuario(function resolverUsuario(error, usuario) {
//   //null || "" || 0 === false
//   if (error) {
//     console.error("DEU RUIM em USUÁRIO", error);
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       //bkp
//       console.error("DEU RUIM em TELEFONE", error);
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//       if (error2) {
//         console.error("DEU RUIM em ENDEREÇO", error);
//         return;
//       }

//       console.log(`
//         Nome: ${usuario.nome}
//         Endereço: ${endereco.rua},  ${endereco.rua}
//         Telefone: (${telefone.ddd})${telefone.numero}
//     `);
//     });
//   });
// });

