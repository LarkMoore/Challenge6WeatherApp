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
        console.log (response.status)
        if (response.status !== 200) {
          // display not found code
          alert("error")
          return;
        }
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
