import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1339,
      name: "🍋 Limone",
      color: "yellow",
    },
    {
      id: 1340,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1341,
      name: "🍉 Watermelon",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruta, i) => (
        <Card key={i} id={fruta.id} name={fruta.name} color={fruta.color} />
      ))}
    </div>
  );
}
