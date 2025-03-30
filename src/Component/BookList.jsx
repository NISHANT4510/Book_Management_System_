// import Book from "./Book";

// export default function BookList({ booksData }) {
  
//   return (
//     <div className="container mx-auto p-5">
//       <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Book Collection</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {booksData.map((data, index) => (
//           <Book key={data.id} BookDetail={data} />
          
//         ))}
        
//       </div>
//     </div>
//   );
// }

// import { useOutletContext } from "react-router-dom";

// export default function BookList() {
//   const context = useOutletContext(); 
  
//   console.log("Outlet Context:", context); // Check if it contains booksData

//   const booksData = context?.booksData || []; // Fallback in case it's undefined

//   return (
//     <div className="container mx-auto p-5">
//       <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
//         Book Collection
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {booksData.length > 0 ? (
//           booksData.map((data) => <Book key={data.id} BookDetail={data} />)
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No books found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }


// import { Link } from "react-router-dom";

// import { useOutletContext } from "react-router-dom";
// // import Book from "./Book";
// import { useEffect } from "react";

// export default function BookList() {
//   const { booksData } = useOutletContext(); // Get booksData from context

//   console.log("BookList Rendered with:", booksData);

// //called afte component load
// useEffect(()=>{
//   fetchData();
// }, []);

// async function fetchData(){
//   const response = await fetch("https://openlibrary.org/subjects/fiction.json?limit=50");
//   const data = await response.json();
//   console.log("result",data)
// }

//   return (
//     <div className="container mx-auto p-5">
//       <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Book Collection</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {booksData.length > 0 ? (
//           booksData.map((data) => 
//           (
//             <Link key={data.id} to={`/book/${data.id}`}>
//               <Book BookDetail={data} />
//             </Link>))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">No books found.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Book from "./Book"; // Ensure Book component is imported

export default function BookList() {
  const [allBooksData, setAllBooksData] = useState([]); // Store full fetched data
  const [filteredBooks, setFilteredBooks] = useState([]); // Store searched books
  const [searchText, setSearchText] = useState(""); // Search state
  const [loading, setLoading] = useState(true); // Track loading

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("https://openlibrary.org/subjects/fiction.json?limit=50");
      const data = await response.json();
      
      // Format API response
      const formattedBooks = data.works.map((book) => ({
        id: book.key.replace("/works/", ""),
        title: book.title,
        author: book.authors?.[0]?.name || "Unknown Author",
        coverpage: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
      }));

      setAllBooksData(formattedBooks);
      setFilteredBooks(formattedBooks); // Initially, show all books
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  }

  // Handle search filtering
  function handleSearch() {
    const filtered = allBooksData.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filtered);
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Book Collection</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search books..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Book List */}
      {loading ? (
        <p className="text-center text-gray-500">Loading books...</p>
      ) : filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((data) => (
            <Link key={data.id} to={`/book/${data.id}`}>
              <Book BookDetail={data} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No books found.</p>
      )}
    </div>
  );
}