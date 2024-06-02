import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ListProducts() {
  const { data, isLoading } = useSWR(`/api/products`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>
            Price: {product.currency}
            {product.price}
          </p>
        </li>
      ))}
    </ul>
  );
}
