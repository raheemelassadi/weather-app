
const tempVar = document.querySelector('#temp-variable')
const tempDescription = document.querySelector('#description')


function getWeather(location){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=f14192cf9da2cd1cb88ee683e524190f`, { mode: 'cors'})
  .then(function(response){
    return response.json()
})
  .then(function(response){
    const iconCode = response.weather[0].icon
    tempVar.textContent = ''
    tempVar.textContent = `${Math.round(response.main.temp)}°`
    tempDescription.src = ''
    tempDescription.src = `http://openweathermap.org/img/wn/${iconCode}.png`
})
}

export { getWeather }