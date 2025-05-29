import { useState } from "react";
import { supabase } from "../../lib/supabase"; // ajuste o caminho se necessário

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
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

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

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const saveBoard = async () => {
    if (!title.trim()) {
      setError("Dê um nome ao seu board!");
      return;
    }

    setIsSaving(true);
    setError("");

    const { data, error } = await supabase.from("boards").insert([
      {
        title,
        items,
      },
    ]);

    if (error) {
      console.error(error);
      setError("Erro ao salvar o board.");
    } else {
      alert("Board salvo com sucesso!");
      setTitle("");
      setItems([]);
    }

    setIsSaving(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Criar novo moodboard ✨</h2>

      <input
        type="text"
        placeholder="Nome do moodboard"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 rounded text-black"
      />

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

      {error && <p className="text-red-400 mb-4">{error}</p>}

      <div className="grid grid-cols-3 gap-4 mt-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded border p-2 flex flex-col items-center justify-center text-center h-32 bg-white/10 relative"
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
            <button
              onClick={() => removeItem(item.id)}
              className="absolute top-1 right-1 text-xs bg-red-500 px-2 rounded text-white"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={saveBoard}
        disabled={isSaving}
        className="mt-6 bg-green-600 px-6 py-2 rounded hover:bg-green-800"
      >
        {isSaving ? "Salvando..." : "Salvar Board"}
      </button>
    </div>
  );
}
