import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moodboard" },
    { name: "description", content: "Welcome to the moodboard project by Helio Sales Jr" },
  ];
}

export default function Home() {
  return <h2 className="text-3xl">Bem-vindo ao MoodBoard Mágico ✨</h2>;
}

