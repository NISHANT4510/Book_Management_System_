import { Link, useOutletContext } from "react-router-dom";
import Book from "./Book";

export default function BookList() {
  const { filteredBooks, searchText, setSearchText, handleSearch } = useOutletContext();

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
      {filteredBooks.length > 0 ? (
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
