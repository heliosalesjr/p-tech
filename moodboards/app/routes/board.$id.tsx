import { useParams } from "react-router";

export default function ViewBoard() {
  const { id } = useParams();
  return <h2>Moodboard ID: {id}</h2>;
}
