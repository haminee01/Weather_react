import OpenWeather from "openweathermap-ts";

const openWeather = new OpenWeather({
  apiKey: "b9df7be796fe991b41507149da1759be",
});

openWeather.setUnits("metric");

export default openWeather;
