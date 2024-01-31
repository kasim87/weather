export class Display {
    showSingleCityInfo(weatherData, element) {
        if (weatherData.cod == 404 ) {
            element.innerHTML = "<p>Error</p>"
        } else {
        element.innerHTML = `<div class="city_info">
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <h1>05:30</h1>
        <h3>30 of Novembur</h3>
        <p>Thursday</p>
    </div>
    <div class="city_wheather">
        <img src=${this._getImageSrc(weatherData.main.temp - 273.15)} alt="">
        <h1>${Math.floor(weatherData.main.temp - 273.15)} <span>℃</span></h1>
        <p></p>
    </div>`
    }
  }

  _getImageSrc(temp) {
    if (temp < 10) {
        return "./images/snow.png"
    } else {
        return "./images/sunny.png"
    }
  }

  showPopularCityInfo(weatherData, element) {
    element.innerHTML += `<div class="popular_city">
    <div class="circle">
        <img src="./images/city_icon1.png" alt="">
    </div>
    <div class="popular_city_info">
        <h2>${weatherData.name}</h2>
        <p>${weatherData.weather[0].main}</p>
        <h1>${Math.floor(weatherData.main.temp - 273.15)} <span>℃</span></h1>
    </div>
</div>`
}
}