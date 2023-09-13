import { getArea } from "./service.js"; 

async function main() {
  try {
    const { data } = await getArea('');
    const competitionsData = data.competitions; 
    const fullCompetitions = []

    for (let iterator of competitionsData) {
      fullCompetitions.push(iterator)
    }
    console.log("Competitions", fullCompetitions);
  } catch (error) {
    console.error("ERROR BRO :(", error)
  } 
}

main()

// Uma coleção iterável, como um array, string, mapa ou conjunto.