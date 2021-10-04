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
        getSearchWeather(city)
        console.log(city)
    }
})
const weather ={}

weather.temperature ={
    unit: "celsius"
}

const KELVIN =273

const key= '8ea2e6b67fa9258a21713b8c7a16a2f7'

if("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition,showError)
} else {
    notificationElement.style.display ='block'
    notificationElement.innerHTML='<p> Browser does not support geolocation </p>'
}

function setPosition(position) {
    latitude =position.coords.latitude
    longitude =position.coords.longitude

    getWeather(latitude,longitude)
}
locationIcon.addEventListener("click" ,function(event){
    console.log('helloworld')
    getWeather(latitude,longitude)
})

function showError(error) {
    notificationElement.style.display= "block"
    notificationElement.innerHTML= '<p> ${error.message} </p>'
}
function getSearchWeather(city) {
    let api=

    fetch(api)
    .then{function (response) {
        let data= response.json ()
        return data
    })
}


