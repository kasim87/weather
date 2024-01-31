import "./styles/styles.scss"
import image1 from "./images/city_icon1.png"
import image2 from "./images/city_icon2.png"
import image3 from "./images/city_icon3.png"
import image4 from "./images/city_icon4.png"
import image5 from "./images/snow.png"
import image6 from "./images/sunny.png"
import image7 from "./images/your_city_bg.png"
import { Location } from "./location"
import { Weather } from "./weather"
import { Display } from "./display"

const popular_cities_row = document.getElementById("popular_cities_row")
const find_cities_block = document.getElementById('find_cities_block')
const user_cities_block = document.getElementById('user_cities_block')
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const location = new Location()
const weather = new Weather()
const display = new Display()

btn.addEventListener('click', ()=> {
    weather.getWeatherDataByCityName(input.value).then((weatherData) => {
        display.showSingleCityInfo(weatherData, find_cities_block)
    })
})

location.getLocation().then(()=> {
   return weather.getWeatherDataByCoords(location.longitude, location.latitude)
}).then((weatherData) => {
    display.showSingleCityInfo(weatherData, user_cities_block)
})

setInterval(async () => {
    popular_cities_row.innerHTML = ''
    await weather.getWeatherDataByCityName('mekka').then((weatherData) => {
        display.showPopularCityInfo(weatherData, popular_cities_row)
    })
    await weather.getWeatherDataByCityName('astana').then((weatherData) => {
        display.showPopularCityInfo(weatherData, popular_cities_row)
    })
    await weather.getWeatherDataByCityName('shalkar').then((weatherData) => {
        display.showPopularCityInfo(weatherData, popular_cities_row)
    })
    await weather.getWeatherDataByCityName('new york').then((weatherData) => {
        display.showPopularCityInfo(weatherData, popular_cities_row)
    })
    weather.getWeatherDataByCityName('florida').then((weatherData) => {
        display.showPopularCityInfo(weatherData, popular_cities_row)
    })
}, 3600000)


// city_info.innerHTML = `<h2>${resp.name}, ${resp.sys.country}</h2> <h1>${resp.weather[0].main}</h1> <h3>${Math.floor(resp.main.temp - 273.15)}</h3> <p>Thursday</p>`