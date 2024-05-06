import "./App.css";

export default function App() {
  function handleClick() {
    console.log("meow");
  }
  return (
    <h1>
      <Button
        style={{ color: "red", backgroundColor: "gray" }}
        type={"disabled"}
        text={"Click me!"}
        onclick={handleClick}
      />
    </h1>
  );
}

function Button({ style, disabled, text, onclick }) {
  return (
    <button onClick={onclick} type={disabled} style={style}>
      {text}
    </button>
  );
}
