import BookList from "./Component/BookList";
import { Books } from "./assets/utils/mockdata";
import Header from "./Component/Header";
import './App.css'
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

function App() {


  const [filteredBooks, setFilter]=useState(Books);


 

  return (
  <>
   <Header/>
   <Outlet context={{ booksData: filteredBooks }} />

  
  {/* <About/> */}
  {/* <Contact/> */}
  </>
  )
}

export default App




