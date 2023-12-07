import { API_KEY } from "../utils/apiKey"

export const getNeows = async() => {
  const startDate = '2023-11-01'
  const endDate = '2023-11-07'
  const getNeows = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`)

  const jsonNeows = await getNeows.json()

  console.log(jsonNeows)


}