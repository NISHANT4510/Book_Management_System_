import Header from "./Component/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [allBooksData, setAllBooksData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchText, setSearchText] = useState("");                     

  useEffect(() => {
    fetchData(); //Intilialy render component then
  }, []);          

  async function fetchData() {
    try {
      const response = await fetch(
        "https://openlibrary.org/subjects/fiction.json?limit=50"
      );
      const data = await response.json();
console.log(data);

      const formattedBooks = data.works.map((book) => ({
        id: book.key.replace("/works/", ""),
        title: book.title,
        author: book.authors?.[0]?.name || "Unknown Author",
        coverpage: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
      }));

      setAllBooksData(formattedBooks); //It
      setFilteredBooks(formattedBooks); //initial it intialize with all book
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  function handleSearch() {
    const filtered = allBooksData.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered); //It work when user type ... then state update
  }

  return (
    <>
      <Header  //
        setFilteredBooks={setFilteredBooks}
        setSearchText={setSearchText}
        allBooksData={allBooksData}
        handleSearch={handleSearch}
      />
      <Outlet
        context={{
          filteredBooks,
          setFilteredBooks,  //now as a context we pass state or function
          searchText,
          setSearchText,
          handleSearch,
        }}
      />
    </>
  );
}

export default App;
