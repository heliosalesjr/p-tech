import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moodboard" },
    { name: "description", content: "Welcome to the moodboard project by Helio Sales Jr" },
  ];
}

export default function Home() {
  return <Welcome />;
}
