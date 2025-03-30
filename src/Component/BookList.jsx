import Book from "./Book";

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

import { useOutletContext } from "react-router-dom";

export default function BookList() {
  const context = useOutletContext(); 
  console.log("Outlet Context:", context); // Check if it contains booksData

  const booksData = context?.booksData || []; // Fallback in case it's undefined

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Book Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksData.length > 0 ? (
          booksData.map((data) => <Book key={data.id} BookDetail={data} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
}


