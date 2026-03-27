# 🌦️ Weather App

A simple, responsive web application to check real-time weather for any city using the OpenWeather API.

![Node.js CI](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Shows temperature (°C), humidity, and wind speed (km/h)
- 🎨 Dynamic UI and icons based on weather conditions
- ⚡ Fast, responsive design
- ⌨️ Keyboard-friendly (press Enter to search)
- Robust error handling for invalid input and API errors

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up your API key:**
   - Create a `.env` file in the project root:
     ```
     WEATHER_API_KEY=your_api_key_here
     ```
   - Get your API key from [OpenWeather](https://openweathermap.org/api).

4. **Start the server:**
   ```sh
   node server.js
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Usage Example

- Enter a city name and press Enter or click the search button.
- The app displays current temperature, humidity, wind speed, and weather icon.

## 📂 Project Structure

```
weather-app/
├── assets/           # Weather icons and images
├── index.html        # Main frontend
├── style.css         # Stylesheet
├── server.js         # Express backend
├── .env              # API key (not committed)
├── package.json      # Project metadata
└── ...
```

## 🤔 Need Help?

- [OpenWeather API Docs](https://openweathermap.org/api)
- [Express Documentation](https://expressjs.com/)
- For issues, open a [GitHub Issue](../../issues).

## 👥 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## 👨‍💻 Maintainer

- Harsh
