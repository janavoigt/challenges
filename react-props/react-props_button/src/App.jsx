import "./App.css";

export default function App() {
  return (
    <h1>
      <Button
        style={{ color: "red", backgroundColor: "gray" }}
        type={"disabled"}
        text={"Click me!"}
      />
    </h1>
  );
}

function Button({ style, disabled, text }) {
  return (
    <button type={disabled} style={style}>
      {text}
    </button>
  );
}
