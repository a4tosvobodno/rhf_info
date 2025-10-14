import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/layout.tsx';
import { Start } from './pages/start/start.tsx';
import { Validation } from './pages/validation/validation.tsx';
import { FormState } from './pages/FormState/formState.tsx';


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
    path: "/validation",
    element: <Layout><Validation /></Layout>
  },
  {
    path: "/form-state",
    element: <Layout><FormState /></Layout>
  }

]);


ReactDOM.createRoot(document.getElementById('root')!).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
