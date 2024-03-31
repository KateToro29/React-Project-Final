import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Provider } from 'react-redux';
import getUsers from "./api/getUsers";
import {store, defineInitialList} from './store'

import App from "./App.jsx";
import { Overview } from "./views/Overview/Overview.jsx";
import { Contacts } from "./views/Contacts/Contacts.jsx";
import { Favorites } from "./views/Favorites/Favorites.jsx";
import { NewContact } from "./views/NewContact/NewContact.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
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
]);


getUsers()
  .then((users) => store.dispatch(defineInitialList(users.data)))
  .catch((err) => console.log(err));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);