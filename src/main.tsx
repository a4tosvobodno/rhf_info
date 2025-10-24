import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/layout.tsx';
import { Start } from './pages/start/start.tsx';
import { Validation } from './pages/validation/validation.tsx';
import { FormState } from './pages/FormState/formState.tsx';
import { Control } from './pages/ControlInformation/controlInformation.tsx';
import { Submit } from './pages/SubmissingForm/submissingFrom.tsx';
import { Async } from './pages/AsyncValidation/asyncValidation.tsx';


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
  },
  {
    path: "/control",
    element: <Layout><Control /></Layout>
  },
  {
    path: "/submit",
    element: <Layout><Submit /></Layout>
  },
  {
    path: "/async",
    element: <Layout><Async /></Layout>
  }

]);


ReactDOM.createRoot(document.getElementById('root')!).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
