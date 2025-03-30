import BookList from "./Component/BookList";
import { Books } from "./assets/utils/mockdata";
import Header from "./Component/Header";
import './App.css'
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {

  const [searchText,setSearch] =useState("");
  const [filteredBooks, setFilter]=useState(Books);


function handleSearch(){
  console.log(searchText);

  const filterBooks = Books.filter((Book)=>Book.title.toLowerCase().includes(searchText.toLowerCase()));

  console.log(filteredBooks);
  
 
  setFilter(filterBooks);
}



  return (
  <>
<div className="flex flex-col items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-md mx-auto">
  <h2 className="text-lg font-semibold text-gray-700">Search Box</h2>
  <div className="flex w-full">
    <input onChange={(e)=>setSearch(e.target.value)}
      className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
      type="text" 
      placeholder="Search here..." 
    />
    <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition duration-300">
      Search
    </button>
  </div>
</div>
   <Header/>
   

   <Outlet context={{ booksData: filteredBooks }} />

  
  {/* <About/> */}
  {/* <Contact/> */}
  </>
  )
}

export default App



