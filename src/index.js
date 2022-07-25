import { getWeather } from "./modules/utils";
import './styles.scss'


const form = document.querySelector('#form')
const textBox = document.querySelector('#city')

form.addEventListener('submit', function(e){
    //prevent page from reloading
    e.preventDefault()
    const location = textBox.value
    getWeather(location)
})
