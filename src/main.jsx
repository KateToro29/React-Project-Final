import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import { Overview } from "./views/Overview/Overview.jsx";
import { Contacts } from "./views/Contacts/Contacts.jsx";
import { Favorites } from "./views/Favorites/Favorites.jsx";
import { NewContact } from "./views/NewContact/NewContact.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/newContact",
    element: <NewContact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
