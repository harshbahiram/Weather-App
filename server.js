require('dotenv').config();
const express = require('express');
const app = express();

const apiKey = process.env.WEATHER_API_KEY;

app.use(express.static(__dirname));

app.get('/weather', async (req, res) => {
    const city = req.query.city?.trim();

    if (!city) {
        return res.status(400).json({ message: "City is required" });
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            return res.status(response.status).json({ message: "Error from weather API" });
        }

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error("Error fetching weather:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});