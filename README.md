Weather Application
Overview

This project is a weather application built with a NestJS backend and an Angular frontend. The backend fetches weather data and stores it in a MongoDB database, while the frontend allows users to search for weather information and view the results in a user-friendly interface.
Features

    Fetch weather data by city name
    Display weather data for a week
    Switch between different weather metrics (temperature, feels like, humidity, etc.)
    Responsive design with Bootstrap
    Persistent data storage with MongoDB

Technologies

    Backend: NestJS, Mongoose (MongoDB)
    Frontend: Angular, Bootstrap

Prerequisites

    Node.js (v12 or higher)
    npm (v6 or higher)
    Angular CLI
    MongoDB

Installation
Backend (NestJS)


Clone the repository:

  ```bash
   git clone <repository-url>
   cd <repository-directory>/nest-app
  ```

Install dependencies:

  ```bash

    npm install

  ```

Set up environment variables:
Create a .env file in the root of the backend folder and add the following:

  ```env

    MONGODB_URI=<your-mongodb-uri>
    OPENWEATHER_API_KEY=<your-openweather-api-key>
  ```
Run the backend server:

  ```bash

    npm run start
  ```
The backend server should now be running at http://localhost:3000.

Frontend (Angular)

Navigate to the frontend folder:

  ```bash

    cd <repository-folder>/angular-ui
  ```
Install dependencies:

  ```bash

    npm install
  ```
Run the frontend server:

  ```bash

    ng serve
  ```
The frontend server should now be running at http://localhost:4200.

Usage
Backend Endpoints

    POST /weather: Save weekly weather data
        Request body: GetWeatherByCityResponseListDto

Frontend

    Welcome Page:
        Enter a city name and click "Get Weather" to fetch weather data.
        If no data is returned, an error message will be displayed.

    Weather Dashboard:
        View weather data for the selected day of the week.
        Use the dropdown to select a different day.
        Use the tabs to switch between different weather metrics.
        Click "New Search" to return to the welcome page.

Project Structure
Backend (NestJS)

    src/
        app.module.ts: Main module
        weather/
            weather.controller.ts: Weather API controller
            weather.service.ts: Weather service
            schemas/
                get-weather-by-city-response.schema.ts: Weather response schema
                get-weather-by-city-response-list.schema.ts: Weather response list schema
            dto/
                get-weather-by-city-response.dto.ts: Weather response DTO
                get-weather-by-city-response-list.dto.ts: Weather response list DTO

Frontend (Angular)

    src/
        app/
            welcome-and-search/: Welcome and search component
            weather-data-dashboard/: Weather data dashboard component
        assets/: Static assets (e.g., images)

Notes

    Make sure MongoDB is running and accessible via the URI specified in the .env file.
    Replace <repository-url> and <repository-folder> with your repository's URL and folder name, respectively.

License

This project is licensed under the MIT License.
