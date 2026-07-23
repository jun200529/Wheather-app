// ==========================
// API CONFIG
// ==========================

const API_KEY = "TU_API_KEY";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// ==========================
// GET WEATHER
// ==========================

async function obtenerClima(ciudad){

    const url = `${BASE_URL}?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;

    console.log(url);

}

