import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Login/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'register',
    element: <Register/>
  },
  {
    path: 'home',
    element: <App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
