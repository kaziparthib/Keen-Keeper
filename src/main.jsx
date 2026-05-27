import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './Pages/HomePage/HomePage';
import Main from './Main/Main';
import Timeline from './Pages/Timeline/Timeline';
import Stats from './Pages/Stats/Stats';
import FriendDetails from './Pages/FriendDetails/FriendDetails';
import TimelineContextProvider from './Context/TimelineProvider';
import { ToastContainer } from 'react-toastify';

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
      },{
        path:'/friendDetails/:fId',
        loader:()=> fetch('/data.json'),
        element:<FriendDetails></FriendDetails>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContextProvider>
          <RouterProvider router={router} />
          <ToastContainer></ToastContainer>
    </TimelineContextProvider>
    
  </StrictMode>,
)
