import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipe from './Pages/Recipe';
import "./styles.css";



const router = createBrowserRouter([
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
    <RouterProvider router={router}/>
);


