import { getArea } from "./service.js";

const compt = getArea('')
compt
  .then(function(result) {
    const competitions = Object.values(result.data)
    
    competitions.map((competition) => {
      return competition[1]
    })
    console.log(competitions)
  })
  .catch(function(error) {
    console.error('ERROR BRO', error)
  })