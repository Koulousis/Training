const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
descElement.innerHTML = weather.description;
locationElement.innerHTML = `${weather.city}, ${weather.country}`;

const weather = {

    temperature : {
        value : 18,
        unit : "celcius"
    },
    description : "few clouds",
    iconId : "01d",
    city : "London",
    country: "GB"

}