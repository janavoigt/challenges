import "./App.css";

export default function App() {
  return (
    <h1>
      <Sum valueA={3} valueB={2} />
    </h1>
  );
}

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
