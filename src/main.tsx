import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'
import Home from './pages/Home/Home.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

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
    element: <Home/>
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </React.StrictMode>
)
