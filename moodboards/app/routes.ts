import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("create", "routes/create.tsx"),
  route("boards", "routes/boards.tsx"),
  route("board/:id", "routes/board.tsx"),
] satisfies RouteConfig;
