/*
 0 Obter um usuário
 1 Obter o número de telefone de um usuário a partir de seu Id 
 2 Obter o endereço do usuário pelo Id
*/

/*Press F5 in VS Code*/

//Após 1 segundo ele chama o callback para terminar a execução
//Chamo o usuário e uma função é passada como parâmetro
function obterUsuario(callback) {
  setTimeout(function() { //bkp
    return callback(null, {
      id: 1, 
      nome: 'Aladdin', 
      dataNascimento: new Date()
    })
  }, 1000)
}
//callback always is the last param 
function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '11996775',
      ddd: 11
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos', 
      numero: 0
    })
  }, 2000)
}

//callback first success, after error  
function resolverUsuario(erro, usuario) {
  console.log('usuario', usuario) //bkp
}

obterUsuario(function resolverUsuario(error, usuario) {
  //null || "" || 0 === false
  if(error) {
    console.error('DEU RUIM em USUÁRIO', error)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if(error1) { //bkp
      console.error("DEU RUIM em TELEFONE", error);
      return;
    }
     obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
       if (error2) {
         console.error("DEU RUIM em ENDEREÇO", error);
         return;
       }

       console.log(`
        Nome: ${usuario.nome}
        Endereço: ${endereco.rua},  ${endereco.rua}
        Telefone: (${telefone.ddd})${telefone.numero}
    `);
     });
  })
})