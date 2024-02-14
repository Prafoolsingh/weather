const appid = "3553cdd449be32645c4b1a01043a83e9";

// Select the search input element
const searchBox = document.querySelector(".search input");

// Select the search button element
const searchBtn = document.querySelector(".search button");

//
const weatherIcon = document.querySelector(".weather-icon")

// Define a function to fetch weather data
const checkWeather = async () => {

    // Make a fetch request to the OpenWeatherMap API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${appid}&units=metric`);

    // if city name is invalid
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }

    // if we get ci
    else {
        // Parse the JSON response
        const data = await response.json();
        console.log(data); 


        // Update the weather information on the webpage
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";


        // updating the weather image according to the weather

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "./images/clouds.png"
        }

        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "./images/clear.png"
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "./images/rain.png"
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "./images/drizzle.png"
        }
        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "./images/mist.png"
        }
    }


};

// Add a click event listener to the search button
searchBtn.addEventListener("click", () => {
    checkWeather();
});
