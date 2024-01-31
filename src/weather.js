const API_KEY = "defaa80eb6e43e947faa745459177730"

export class Weather {
    getWeatherDataByCoords(long, lat) {
        return new Promise ((resolve, reject) => {
            let urlByCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    
            fetch(urlByCoords).then((response)=> {
                return response.json()
            }).then((response)=> {
                resolve(response)
            })
        })
    }
    
    getWeatherDataByCityName(cityName) {
        return new Promise((resolve, reject) => {
            let urlByCityNames = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            fetch(urlByCityNames).then((resp)=> {
                return resp.json()
            }).then((resp)=> {
                resolve(resp)
            });
        })
     }
}