import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import router from './routers/router.jsx'
import { BrowserRouter, RouterProvider } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
