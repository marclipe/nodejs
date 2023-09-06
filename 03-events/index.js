const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

//Ele agora tem um observador
meuEmissor.on(nomeEvento, function(click) {
  console.log('Um usuario clicou', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')

// let count = 0
// setInterval(function() {
//   meuEmissor.emit(nomeEvento, "no ok" + (count++));
// }, 1000)

//Eu ouço o evento
const stdin = process.openStdin()
function main() {
  return new Promise(function(resolve, reject){
      stdin.addListener('data', function(value) {
      // console.log(`Você digitou: ${value.toString().trim()}`)
      return resolve(value)
    })
  })
}
main().then(function(resultado) {
  console.log('Resultado', resultado.toString())
})

//Promise => executar uma única vez