# 🎭 Random Character Generator API 

Welcome to the Random Character Generator API project! 🎉 This project provides an API that generates random character information.

## 📚 Table of Contents 

1. [Technologies 💻](#technologies)
2. [Installation 🔧](#installation)
3. [Usage 🚀](#usage)

## 💻 Technologies 

This project is built with:

- [Next.js](https://nextjs.org/)
- [Chance](https://chancejs.com/)
- [SWR](https://swr.vercel.app/)

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
