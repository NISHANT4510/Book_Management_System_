import  React  from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import About from './Component/About.jsx';
import Contact from './Component/Contact.jsx';
import Error from './Component/Error.jsx';
import BookList from "./Component/BookList.jsx";
// import { Books } from './assets/utils/mockdata.js';
import BookDetails from './Component/BookDetails.jsx';
import Demo from './Component/Demo.jsx';



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
      {
        path:"/book/:id",
        element:<BookDetails/>,
      },
      {
        path:"/demo",
        element:<Demo/>,
      }
    ],
    errorElement: <Error/>,
  },
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
