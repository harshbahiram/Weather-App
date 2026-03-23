require('dotenv').config();
const express = require('express');
const app = express();

const apiKey = process.env.WEATHER_API_KEY;



app.use(express.static(__dirname));

// very simple route
app.get('/weather', async (req, res) => {
    const city = req.query.city?.trim();

    if (!city) {
            return res.status(400).json({ message: "City is required" });
        }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
            return res.status(404).json({ message: data.message });
        }

    res.json({
        name: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        weather: data.weather[0].main
    }); 
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});