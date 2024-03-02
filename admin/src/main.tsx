import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./screens/Login.tsx";
import DersYonetimi from "./screens/DersYonetimi.tsx";
import EgitmenYonetimi from "./screens/EgitmenYonetimi.tsx";
import TurnuvaYonetimi from "./screens/TurnuvaYonetimi.tsx";
import BlogYonetimi from "./screens/BlogYonetimi.tsx";
import VideoYonetimi from "./screens/VideoYonetimi.tsx";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./service/QueryClient.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "/dashboard/ders-yonetimi",
    element: <DersYonetimi />,
  },
  {
    path: "/dashboard/egitmen-yonetimi",
    element: <EgitmenYonetimi />,
  },
  {
    path: "/dashboard/turnuva-yonetimi",
    element: <TurnuvaYonetimi />,
  },
  {
    path: "/dashboard/blog-yonetimi",
    element: <BlogYonetimi />,
  },
  {
    path: "/dashboard/video-yonetimi",
    element: <VideoYonetimi />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
