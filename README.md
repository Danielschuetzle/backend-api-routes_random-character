Random Character Generator API 🎭

Welcome to the Random Character Generator API project! This project provides an API that generates random character information.
Table of Contents 📚

    Technologies
    Installation
    Usage

Technologies 💻

This project is built with:

    Next.js
    Chance
    SWR

Installation 📥

Follow these steps to install and run the project:

    Clone this repository to your local machine:

bash

git clone https://github.com/Danielschuetzle/backend-api-routes_random-character.git

    Navigate into the project directory:

bash

cd yourrepositoryname

    Install the dependencies:

bash

npm install

    Start the local development server:

bash

npm run dev

    Open your browser and navigate to http://localhost:3000 to view the application.

Usage 🚀

This application serves an API route /api/random-character that returns a JSON object containing random character information.

On the frontend, the home page makes a request to the /api/random-character API route and displays the returned random character information.

The JSON object returned by the API looks like this:

json

{
  "firstName": "John",
  "lastName": "Doe",
  "twitter": "@johndoe",
  "geohash": "u4pruydqqvj"
}
