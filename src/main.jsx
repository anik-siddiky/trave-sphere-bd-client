import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Router from './Routes/Router.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
        <ToastContainer position="top-center" autoClose={3000} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
