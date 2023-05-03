const input = document.querySelector('#weather-input')
const content = document.querySelector('#content')
// const baseUrl = 
// 'https://api.openweathermap.org/data/2.5/weather?q=Shomanay&units=metric&APPID=a045a1a5356155dc5712ab1318762afa'

function fetchWeather(city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a045a1a5356155dc5712ab1318762afa`
        )
        .then((res) => res.json())
        .then(data =>  {
            content.innerHTML = ''
            content.innerHTML = `
            <h2>${data.name}</h2>
            <h3>${Date().split(' ') [0]}/${Date().split(' ') [1]}</h3>
            <h1>${Math.floor(data.main.temp)}°C</h1>
            <i>${data.weather[0].main}</i>
            `
            console.log(data)
        })
        .catch(err => {
            alert('City not foun!')
            content.innerHTML = `<h4>City ${input.value} not found!</h1>`
        })
}

input.addEventListener('change', e => {
    fetchWeather(e.target.value)
})

fetchWeather('Nukus')