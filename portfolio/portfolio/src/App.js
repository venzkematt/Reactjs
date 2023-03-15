import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StartPage } from "./pages/startPage";
import { Portfolio } from "./pages/portfolio";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
