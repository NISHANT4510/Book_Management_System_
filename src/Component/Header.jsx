import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

function Header() {


    return (
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo / Title */}
          <h1 className="text-2xl font-bold">📚 Book Management</h1>
  
          {/* Navigation Links */}
          <ul className="flex space-x-6">

          <Link to="/">
             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</li>
             </Link>

            {/* <li className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</li> */}

            <a href="/about">
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">About</li>

            </a>

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