const iconElement = document.querySelector (".weather-icon")
const locationIcon = document.querySelector (".location-icon")
const tempElement = document.querySelector (".temperature-value p")
const descElement = document.querySelector ("weather-icon")
const locationElement = document.querySelector (".location p")
const notificationElement = document.querySelector (".notification")

var input= document.getElementsById ("search")
let city = ""
let latitude = 0.0
let longitude = 0.0


input= addEventListener ("keyup" , function(event) {
    if (keyCode ==13 ){
        event.preventDefault();

        city=input.value
    }
    
})
