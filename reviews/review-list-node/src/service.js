import axios from "axios";
const URL = `https://api.football-data.org/v4/competitions`;

const API_TOKEN = "65201f7e1ca54940b029ea3e62d71301";

export async function getArea(id) {
  const url = `${URL}/${id}`
  const config = {
    headers: {
      "X-Auth-Token": API_TOKEN
    }
  }
  const response = await axios.get(url, config)
  return response
}

// getArea('');
  // getArea('')
  //   .then(function(result) {
  //     console.log('Result', result.data)
  //   })
  //   .catch(function(error) {
  //     console.error("ERROR BRO", error)
  //   })



