import Chance from "chance";
import { NextApiRequest, NextApiResponse } from "next";

// Instantiate a new Chance object
const chance = new Chance();

// Export a default handler function for this API route
// This function is executed when a request is made to this API route
export default function handler(req = NextApiRequest, res = NextApiResponse) {
  // Create a character object with random values
  // We're using various methods of the Chance object to generate these values
  const character = {
    firstName: chance.first(), // Generate a random first name
    lastName: chance.last(), // Generate a random last name
    twitter: chance.twitter(), // Generate a random Twitter handle
    geohash: chance.geohash(), // Generate a random geohash
  };

  // Respond to the request with a 200 status code (indicating success)
  // and the character object as JSON
  res.status(200).json(character);
}
