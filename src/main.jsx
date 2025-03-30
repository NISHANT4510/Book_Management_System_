import  React  from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from './Component/About.jsx';
import Contact from './Component/Contact.jsx';
import Error from './Component/Error.jsx';
import BookList from "./Component/BookList.jsx";
import { Books } from './assets/utils/mockdata.js';



//Create Routing Configuration
const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <BookList/>,
      },
      {
        path :"/about",
        element : <About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,  
      },
    ],
    errorElement: <Error/>,
  },
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
