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
import { VillainsLayout } from './layouts/VillainsLayout';
import { SponsorsLayout } from './layouts/SponsorsLayout';
import { DetailPersonComponent } from './components/detailComponents/DetailPersonComponent/DetailPersonComponent';
import { DetailPersonLayout } from './layouts/detailLayouts/DetailPersonLayout';

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
    element: <DetailPersonLayout isVillain={false}/>,
  }, 
  {
    path: '/villains',
    element: <VillainsLayout/>,
  },
  {
    path: '/villains/:id',
    element: <DetailPersonLayout isVillain={true}/>,
  },
  {
    path: '/sponsors',
    element: <SponsorsLayout/>,
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
