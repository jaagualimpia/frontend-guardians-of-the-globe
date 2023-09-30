import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginLayout } from './layouts/LoginLayout';
import { IndexLayout } from './layouts/IndexLayout';
import { SignupLayout } from './layouts/SignupLayout';
import { MatchesLayout } from './layouts/MatchesLayout';
import { HeroesLayout } from './layouts/HeroesLayout';

const router = createBrowserRouter([{
    path: '/',
    element: <IndexLayout/>,
  },
  {
    path: '/login',
    element: <LoginLayout/>
  },
  {
    path: '/signup',
    element: <SignupLayout/>,
  }, 
  {
    path: '/matches',
    element: <MatchesLayout/>,
  }, 
  {
    path: '/matches/:id',
    element: <div><p>Particular match</p></div>,
  }, 
  {
    path: '/heroes',
    element: <HeroesLayout/>,
  }, 
  {
    path: '/heroes/:id',
    element: <div><p>Particular hero</p></div>,
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
