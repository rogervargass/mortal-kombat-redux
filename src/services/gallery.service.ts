import axios from "axios";

const API_URL = "https://api.rawg.io/api/games";
const API_KEY = "f41a693f62804575964a122779c0e983";

const params = {
  key: API_KEY,
};

const MK2_ID = 29426;

export async function getGameScreenshots() {
  const response = await axios.get(`${API_URL}/${MK2_ID}/screenshots`, {
    params,
  });
  return response.data;
}
