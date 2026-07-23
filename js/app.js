// ==========================
// DOM
// ==========================

const cityInput = document.querySelector("#city");

const searchButton = document.querySelector("#searchButton");

const cityName = document.querySelector("#cityName");

const weatherIcon = document.querySelector("#weatherIcon");

const temperature = document.querySelector("#temperature");

const description = document.querySelector("#description");

const humidity = document.querySelector("#humidity");

const wind = document.querySelector("#wind");

const feelsLike = document.querySelector("#feelsLike");

const visibility = document.querySelector("#visibility");

const forecastContainer = document.querySelector("#forecastContainer");

const favoritesContainer = document.querySelector("#favoritesContainer");

const themeButton = document.querySelector("#themeButton");

// ==========================
// VARIABLES
// ==========================

let currentCity = "Medellín";

let currentTheme = "dark";

// ==========================
// EVENTS
// ==========================

searchButton.addEventListener("click", buscarCiudad);

cityInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        buscarCiudad();

    }

});

function buscarCiudad(){

    const ciudad = cityInput.value.trim();

    if(ciudad === ""){

        return;

    }

    obtenerClima(ciudad);

}