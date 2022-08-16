import axios from "axios";
import { APP_DICTIONARY, getKeyValue } from "./storage.service.js";

const getWeather = async (city) => {
  const token = await getKeyValue(APP_DICTIONARY.token);

  if (!token) {
    throw new Error(
      "Токен не передан, передайте токен с помощью -t [API_TOKEN]"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  return data;
};
export { getWeather };
