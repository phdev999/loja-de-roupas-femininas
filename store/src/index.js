import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import router from './routes';

import { register } from 'swiper/element/bundle';
register()

import { createBrowserRouter, RouterProvider } from "react-router-dom";
  
  import App from "./App";
  import ProductDetails from "./components/ProductDetails";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/productdetails",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);