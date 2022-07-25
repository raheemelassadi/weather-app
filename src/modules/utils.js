
const mainInfo = document.querySelector('.main-info')

function getWeather(location){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=f14192cf9da2cd1cb88ee683e524190f`, { mode: 'cors'})
  .then(function(response){
    return response.json()
})
  .then(function(response){
    const textContainer = document.createElement('h1')
    textContainer.textContent = `${response.name} has a temperateure of ${response.main.temp} and ${response.weather[0].description}
    here is some more info: wind speed:${response.wind.speed}, humidity:${response.main.humidity}, pressure:${response.main.pressure}`
    mainInfo.appendChild(textContainer)
})
}

export { getWeather }