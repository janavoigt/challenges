import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import { uid } from "uid";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, { id: uid(), ...newTag }]);
  }

  function handleDeleteTag(tagToDelete) {
    setTags(tags.filter((tag) => tag.id != tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} />
    </main>
  );
}
