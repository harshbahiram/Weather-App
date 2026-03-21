require('dotenv').config();
const express = require('express');

const app = express();
const apiKey = process.env.WEATHER_API_KEY;

// very simple route
app.get('/weather', async (req, res) => {
    const city = req.query.city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    res.send(data); 
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});