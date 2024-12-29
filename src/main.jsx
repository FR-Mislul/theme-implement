import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThemeProvider from './peges/themes/ThemeProvider.jsx'
import App from './App.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
