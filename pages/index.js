import useSWR from 'swr';

// Define a fetcher function that will be used to fetch data from our API
async function fetcher(url) {
  // Use the fetch API to make a GET request to the specified URL
  const response = await fetch(url);
  // Parse the response as JSON and return the result
  return response.json();
}

// Define the default export for this module, which is a React component
export default function Home() {
  // Use the useSWR hook to fetch data from our API
  // This will re-fetch data whenever the component is re-rendered
  // and automatically handle loading and error states
  const { data, error } = useSWR('/api/random-character', fetcher);

  // If there was an error fetching the data, display an error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If the data is still loading, display a loading message
  if (!data) {
    return <div>Loading...</div>;
  }

  // Once the data has loaded, display the character's information
  return (
    <div>
      <h1>{data.firstName} {data.lastName}</h1>
      <p>Twitter: @{data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </div>
  );
}
