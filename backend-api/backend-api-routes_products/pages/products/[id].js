import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      <li key={data.id}>
        <h2>{data.name}</h2>
        <p>Category: {data.category}</p>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.currency}
          {data.price}
        </p>
      </li>
    </ul>
  );
}
