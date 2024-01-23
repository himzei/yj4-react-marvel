import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./routes/MainPage";
import { QueryClient, QueryClientProvider } from "react-query";
import NotFound from "./routes/NotFound";
import Test from "./routes/Test";
import Comics from "./routes/Comics";
import Characters from "./routes/Characters";
import CharacterDetail from "./routes/CharacterDetail";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "characters",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Characters />,
          },
          {
            path: ":id",
            element: <CharacterDetail />,
          },
        ],
      },
      {
        path: "comics",
        element: <Comics />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
