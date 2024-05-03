import "./App.css";

export default function App() {
  return (
    <div>
      <HelloWorldArticle />
    </div>
  );
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>

      <p>Lets go React</p>
    </article>
  );
}
