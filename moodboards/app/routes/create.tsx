import { useState } from "react";

export default function CreateBoard() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <h2 className="text-2xl mb-4">Criar novo moodboard</h2>
      <input
        type="text"
        placeholder="Dê um título ao seu board"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 rounded text-black"
      />
    </div>
  );
}
