
import { Link } from "react-router-dom";

function Header({ setFilteredBooks, setSearchText, allBooksData}) {
  function resetSearch() {
    setSearchText("");
    setFilteredBooks(allBooksData);
  }

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">📚 Book Management</h1>

        <ul className="flex space-x-6">
          <Link to="/" onClick={resetSearch}>
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">About</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Contact</li>
          </Link>
          <Link to="/demo">
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Demo</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
