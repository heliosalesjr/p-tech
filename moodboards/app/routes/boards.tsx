import { useEffect, useState } from "react";
import { Link } from "react-router"; // Use "react-router" para web
import { supabase } from "../../lib/supabase";

type Board = {
  id: number;
  title: string;
};

export default function BoardsList() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBoards() {
      const { data, error } = await supabase.from("boards").select("id, title");
      if (!error && data) setBoards(data);
      setLoading(false);
    }
    fetchBoards();
  }, []);

  if (loading) return <p>Carregando boards...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Boards Criados</h2>
      <ul>
        {boards.map((board) => (
          <li key={board.id} className="mb-2">
            <Link
              to={`/board/${board.id}`}
              className="text-purple-600 hover:underline"
            >
              {board.title || "(Sem título)"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
