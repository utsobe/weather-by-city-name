const API_KEY = `4b0e740606a6e3d318b40d77b6383f62`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
};

const displayTemperature = temperature => {
    console.log(temperature);
}