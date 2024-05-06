import "./App.css";

export default function App() {
  return (
    <h1>
      <Greeting name={"Jana"} />
    </h1>
  );
}

function Greeting({ name }) {
  return <h1>"Hello, {name}!"</h1>;
}
