const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const fetch = require("node-fetch");

const create = async (userdata) => {
  const { name, email, password, location } = userdata;

  try {
    console.log("Request Data:", { name, email, password, location });
    const weatherData = await getWeatherDataFromAPI(location);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await new User({
      name,
      email,
      password: hashedPassword,
      location,
      weatherData: [{...weatherData, createdAt: new Date()}],
    }).save();

    return user
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWeatherDataFromAPI = async (location) => {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const weatherData = await response.json();

    const temperature = weatherData.main.temp;
    const weatherCondition = weatherData.weather[0].main;

    return { temperature, weatherCondition };
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw new Error("Unable to fetch weather data");
  }
};

module.exports = {
  create,
  getWeatherDataFromAPI,
};
