import { useState } from "react";

type MoodItem = {
  id: number;
  type: "text" | "image" | "color";
  value: string;
};

export default function CreateBoard() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<MoodItem[]>([]);
  const [input, setInput] = useState("");
  const [type, setType] = useState<"text" | "image" | "color">("text");

  const addItem = () => {
    if (input.trim() === "") return;

    const newItem: MoodItem = {
      id: Date.now(),
      type,
      value: input,
    };

    setItems((prev) => [...prev, newItem]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Criar novo moodboard ✨</h2>

      {/* Título do Moodboard */}
      <input
        type="text"
        placeholder="Nome do moodboard"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 rounded text-black"
      />

      {/* Escolher tipo de item */}
      <div className="flex gap-4 mb-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value as MoodItem["type"])}
          className="p-2 rounded text-black"
        >
          <option value="text">Texto</option>
          <option value="image">Imagem (URL)</option>
          <option value="color">Cor (hex ou nome)</option>
        </select>

        <input
          type="text"
          placeholder={`Digite o ${type}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded text-black"
        />

        <button
          onClick={addItem}
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-800"
        >
          Adicionar
        </button>
      </div>

      {/* Mostrar os itens adicionados */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded border p-2 flex items-center justify-center text-center h-32 bg-white/10"
          >
            {item.type === "text" && <span>{item.value}</span>}
            {item.type === "image" && (
              <img
                src={item.value}
                alt="Mood"
                className="max-h-full max-w-full object-contain"
              />
            )}
            {item.type === "color" && (
              <div
                className="w-full h-full rounded"
                style={{ backgroundColor: item.value }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
