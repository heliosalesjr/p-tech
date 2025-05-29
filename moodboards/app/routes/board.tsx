import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../../lib/supabase"; // ajuste o caminho se necessário

type MoodItem = {
  id: number;
  type: "text" | "image" | "color";
  value: string;
};

type Board = {
  id: string;
  title: string;
  items: MoodItem[];
};

export default function BoardView() {
  const { id } = useParams<{ id: string }>();
  const [board, setBoard] = useState<Board | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBoard = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("boards")
        .select("id, title, items")
        .eq("id", id)
        .single();

      if (error) {
        setError("Erro ao buscar o board: " + error.message);
        setBoard(null);
      } else {
        setBoard(data);
      }
      setLoading(false);
    };

    fetchBoard();
  }, [id]);

  if (loading) return <p>Carregando board...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!board) return <p>Board não encontrado</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{board.title}</h2>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {board.items.map((item) => (
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
