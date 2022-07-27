
const tempVar = document.querySelector('#temp-variable')
const tempImage = document.querySelector('#image')
const tempDescription = document.querySelector('#description')
const uv = document.querySelector('#uv')
const wind = document.querySelector('#wind')
const humidity = document.querySelector('#humidity')
const tempAlike = document.querySelector('#feels-like')




function getWeather(location){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=f14192cf9da2cd1cb88ee683e524190f`, { mode: 'cors'})
  .then(function(response){
    return response.json()
})
  .then(function(response){
    tempImage.style.display = 'inline-block'
    let iconCode = response.weather[0].icon
    tempVar.textContent = ''
    tempVar.textContent = `${Math.round(response.main.temp)}°`
    tempImage.src = ''
    tempImage.src = `http://openweathermap.org/img/wn/${iconCode}.png`
    tempDescription.textContent = ''
    tempDescription.textContent = `${response.weather[0].description}`
    uv.textContent = ''
    uv.textContent = `${response.main.pressure}hPa`
    wind.textContent = ''
    wind.textContent = `${response.wind.speed}mp/h`
    humidity.textContent = ''
    humidity.textContent = `${response.main.humidity}%`
    tempAlike.textContent = ''
    tempAlike.textContent = `${Math.round(response.main.feels_like)}°`
})
}

export { getWeather }