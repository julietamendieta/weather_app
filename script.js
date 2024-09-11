let api_key = "98cfd5ae0b0d58caa993e209038cffd2"
let urlBase = "https://api.openweathermap.org/data/2.5/weather"

let difKelvinCelsius = 273.15


document.getElementById("searchButton").addEventListener('click', () => {
    const city = document.getElementById('cityInput').value
    if(city){
        fetchDatosClima(city)
    }
})

function fetchDatosClima(city){
    fetch(`${urlBase}?q=${city}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    const divDatosClima = document.getElementById('weatherData')
    divDatosClima.innerHTML=""

    const cityName = response.name
    const temperature = response.main.temp
    const description = response.weather[0].description
    const country = response.sys.country
    const humidity = response.main.humidity

    const title = document.createElement('h2')
    title.textContent = `${cityName}, ${country}`

    const temp = document.createElement('p')
    temp.textContent = `The temperature is ${Math.floor(temperature-difKelvinCelsius)}°C`

    const desc = document.createElement('p')
    desc.textContent = `${description}`

    const hum = document.createElement('p')
    hum.textContent = `The humidity is ${humidity}%`

    divDatosClima.appendChild(title)
    divDatosClima.appendChild(temp)
    divDatosClima.appendChild(desc)
    divDatosClima.appendChild(hum)
}