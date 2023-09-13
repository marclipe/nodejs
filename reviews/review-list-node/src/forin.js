import { getArea } from "./service.js";

async function main() {
  try {
    const { data } = await getArea("");
    const competitionsData = data.competitions;
    const competitions = [];
    console.time('for in')
    for (let i in competitionsData) {
      competitions.push(competitionsData[i])
    }
    console.timeEnd('for in')
    console.log("Competitions", competitions)
  } catch (error) {
    console.error("ERROR BRO", error)
  }
}

main()

// Iterar sobre as propriedades enumeráveis de um objeto.