import "./App.css";

export default function App() {
  return (
    <div>
      <Article />
    </div>
  );
}

export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Friends Forever</h2>
      <label htmlFor="(!)" id="(!)">
        Search here
      </label>
      <input type="text" id="(!)" />
      <a
        href="https://en.wikipedia.org/wiki/Phoebe_Buffay"
        className="article__link"
      >
        read here
      </a>
    </article>
  );
}
