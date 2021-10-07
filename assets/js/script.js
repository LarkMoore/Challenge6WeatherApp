const iconElement = document.querySelector (".weather-icon")
const locationIcon = document.querySelector (".location-icon")
const tempElement = document.querySelector (".temperature-value p")
const descElement = document.querySelector ("weather-icon")
const locationElement = document.querySelector (".location p")
const notificationElement = document.querySelector (".notification")
const searchBtn = document.querySelector("#search")

var input = document.getElementById("search-input");



searchBtn.addEventListener("click", function(){
    var city = input.value.trim();
    var url1 = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=8ea2e6b67fa9258a21713b8c7a16a2f7";
    fetch(url1)
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        return fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=8ea2e6b67fa9258a21713b8c7a16a2f7&units=imperial");
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        // code to show stuff on the page
        
      });
})
// input addEventListener.search
// input= addEventListener ("keyup" , function(event) {

//     if (keyCode ==13 ){
//         event.preventDefault();

//         city=input.value
//         getSearchWeather(city)
//         console.log(city)
//     }
// })
// const weather ={}

// weather.temperature ={
//     unit: "celsius"
// }

// const KELVIN =273

// const key= '8ea2e6b67fa9258a21713b8c7a16a2f7'

// if("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(setPosition,showError)
// } else {
//     notificationElement.style.display ='block'
//     notificationElement.innerHTML='<p> Browser does not support geolocation </p>'
// }

// function setPosition(position) {
//     latitude =position.coords.latitude
//     longitude =position.coords.longitude

//     getWeather(latitude,longitude)
// }
// locationIcon.addEventListener("click" ,function(event){
//     console.log('helloworld')
//     getWeather(latitude,longitude)
// })

// function showError(error) {
//     notificationElement.style.display= "block"
//     notificationElement.innerHTML= '<p> ${error.message} </p>'
// }
// function getSearchWeather(city) {
//     let api= 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key]'

//     fetch(api)
//     .then(function (response) {
//         let data= response.json ()
//         return data
//     })
//     .then(function( data) {
//         weather.temperature.value=Math.floor (data.main.temp -KELVIN)
//         weather.description=data.weather[0].description
//         weather.iconId= data.weather[0].icon
//         weather.city=data.name
//         weather.country= data.sys.country
//     })
//     .then(function() {
//         displayWeather ()
//     })
// }
// function getWeather(latitude,longitude) {
//     let api= 'http://api.openweathermap.org/data/2.5/weather?lat=${latitude}lon=${longitude}&appid=${key}'

//     fetch(api)
//     .then(function (response) {
//         let data= response.json ()
//         return data
//     })
//     .then(function( data) {
//         weather.temperature.value=Math.floor (data.main.temp -KELVIN)
//         weather.description=data.weather[0].description
//         weather.iconId= data.weather[0].icon
//         weather.city=data.name
//         weather.country= data.sys.country
//     })
//     .then(function() {
//         displayWeather ()
//     })
// }

// function displayWeather () {
    
//     iconElement.innerHTML=<img src=icons/${weather.iconId}.png />
//     tempElement.innerHTML=${weather.temperature.value} *<span>C<span>
//     descElement.innerHTML=weather.description
//     locationElement.innerHTML=${weather.city}, ${weather.country}
// }