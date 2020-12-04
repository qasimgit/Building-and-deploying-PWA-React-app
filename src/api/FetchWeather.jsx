import axios from "axios";

const API_KEY = "a57c8ae7a32e9b701352f943b32e77ac";
const URL = "https://api.openweathermap.org/data/2.5/weather";
// const URL = `https://api.openweathermap.org/data/2.5/weather=?id=524901&appid=${API_KEY}`;

export const FetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
