import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/layout";
import Home from "@/pages";
import CreateArticle from "@/pages/create";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            { path: "/", element: <Home /> },
            { path: "/create", element: <CreateArticle /> },
          ],
        },
      ])}
    />
  </React.StrictMode>
);
