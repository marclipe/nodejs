import { getArea } from "./service.js";

async function main() {
  try {
    const { data } = await getArea(''); 
    const competitionsData = data.competitions
    const competitions = []
    for (let i = 0; i <= competitionsData.length; i++) {
      competitions.push(competitionsData[i]);
    } 
    console.log("Competitions ", competitions)
  } catch(error) {
    console.error("ERROR BRO :(", error)
  }
}

main()