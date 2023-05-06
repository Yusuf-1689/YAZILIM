<template>
  <div class="container">
    <h1>Nuxt Weather App</h1>
    <form @submit.prevent="getWeather">
      <label for="city">Enter city name:</label>
      <input type="text" id="city" v-model="city" required>
      <button type="submit">Get weather</button>
    </form>
    <div v-if="weather">
      <p>City: {{ weather.name }}</p>
      <p>Temperature: {{ Math.round(weather.main.temp) }} °C 🌡️</p>
      <p>Description: {{ weather.weather[0].description }}</p>
      <p v-if="weather.weather[0].main === 'Rain'">🌧️</p>
      <p v-else-if="weather.weather[0].main === 'Clear'">☀️</p>
      <p v-else-if="weather.weather[0].main === 'Mist'">🌫️</p>
      <p v-else-if="weather.weather[0].main === 'Wind'">💨</p>
      <p v-else-if="weather.weather[0].main === 'Clouds'">☁️</p>
      <p>Humidity: {{ weather.main.humidity }}%</p>
      <p>Wind: {{ Math.round(weather.wind.speed) }} km/h 🌬️</p>
      <p>Sunrise: 🌅{{ formatTime(weather.sys.sunrise) }}</p>
      <p>Sunset: {{ formatTime(weather.sys.sunset) }} 🌅</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      city: '',
      weather: null,
    };
  },
  methods: {
    async getWeather() {
      const apiKey = '044a67e42021dc36617ebd587eab43f9';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        this.weather = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    formatTime(timestamp) {
      return moment(timestamp * 1000).format('HH:mm');
    },
  },
};
</script>

<style>

.container {
  background-color: rgb(32, 149, 204);
  margin:0 auto;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  font-family: "Arial, sans-serif";
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #093666;
  letter-spacing: 2px;
}

</style>

