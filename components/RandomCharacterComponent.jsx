import useSWR from "swr";

// Define a fetcher function which is used to fetch the data from a URL. This function is required by the useSWR hook.
// It uses the built-in fetch function to make a HTTP request and then parses the response to JSON.
async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

// Define a React component that fetches and displays a random character
export default function RandomCharacterComponent() {
  // Use the useSWR hook to fetch data from our API. This hook will automatically re-fetch data under certain conditions,
  // like when the user re-focuses the browser window, the network reconnects, or after a certain period of time has passed.
  const { data, error } = useSWR("/api/random-character", fetcher);

  // If there's an error fetching the data, display an error message
  if (error) return <div>Failed to load character</div>
  
  // While the data is loading, display a loading message
  if (!data) return <div>Loading...</div>

  // Once the data has loaded, display the character's information
  return (
    <div>
      <h1>{data.firstName} {data.lastName}</h1>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </div>
  );
}
