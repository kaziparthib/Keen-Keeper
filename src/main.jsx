import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './Pages/HomePage/HomePage';
import Main from './Main/Main';
import Timeline from './Pages/Timeline/Timeline';
import Stats from './Pages/Stats/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        index:true,
        element:<HomePage></HomePage>
      },
      {
        path:'/timeline',
        element:<Timeline></Timeline>
      },
      {
       path:'/stats',
       element:<Stats></Stats>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
