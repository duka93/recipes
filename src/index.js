import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,createHashRouter
} from "react-router-dom";
import Recipe from './components/Recipe';
import "./styles.css";



const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "selected-recipe",
    element: <Recipe/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);


