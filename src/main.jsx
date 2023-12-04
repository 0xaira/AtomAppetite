import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Help from './Components/Help';
import Offers from './Components/Offers';
import ErrorPage from './Components/ErrorPage';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import RestaurantMenu from './Components/RestaurantMenu'
import './App.css'
import './index.css'

const App=()=> {
  return (
    <>
    <body className="px-20">

      <Header/>
      <Outlet/>
      <Footer/>

      </body>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/offers',
        element: <Offers />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={appRouter}>
    
  </RouterProvider>
);
