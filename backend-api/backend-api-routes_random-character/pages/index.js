import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function HomePage() {
  const { data, error } = useSWR(
    `http://localhost:3000/api/random-character`,
    fetcher
  );

  if (!data) {
    return;
  }

  if (error) return <div>Failed to Load your request</div>;

  console.log(data);

  return (
    <>
      <h2>
        Hello, I am {data.firstName} {data.lastName}
      </h2>

      <p>Age: {data.age}</p>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </>
  );
}
