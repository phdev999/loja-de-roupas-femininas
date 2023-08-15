import React from "react"
import { createBrowserRouter } from "react-router-dom";
  
  import App  from "../App";
  import ProductDetails from "../components/ProductDetails";
  
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

  export default router