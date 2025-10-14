import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/layout.tsx';
import { Start } from './pages/start/start.tsx';
import { Two } from './pages/validation/validation.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/start",
    element: <Layout><Start /></Layout>
  },
  {
    path: "/two",
    element: <Layout><Two /></Layout>
  }

]);


ReactDOM.createRoot(document.getElementById('root')!).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
