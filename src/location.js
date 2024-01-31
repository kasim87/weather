export class Location {
    constructor() {
        this.latitude
        this.longitude
    }

    getLocation() {
        return new Promise((resolve, reject)=> {
            navigator.geolocation.getCurrentPosition((position) => {
                this.longitude = position.coords.longitude
                this.latitude = position.coords.latitude
                resolve()
            })
        })
    }
}