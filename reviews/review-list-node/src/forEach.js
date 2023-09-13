import { getArea } from "./service.js";

async function main() {
  try {
    const { data } = await getArea('')
    const competitions = []
    data.competitions.forEach(function(competition) {
      return competitions.push(competition)
    })
    console.log('Competitions', competitions)
  } catch(error) {
    console.error("DEU RUIM", error)
  }
}

main()