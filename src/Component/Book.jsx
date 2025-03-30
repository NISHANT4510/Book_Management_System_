export default function Book({ BookDetail }) {
    return (
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 p-5 m-4">
        {/* Title Section */}
        <h2 className="text-xl font-bold text-gray-800 text-center mb-3">
          {BookDetail.title}
        </h2>
  
        {/* Book Cover Image */}
        <div className="w-full h-60">
          <img
            src={BookDetail.coverpage}
            alt={BookDetail.title}
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
  
        {/* Book Details */}
        <div className="mt-4 space-y-2 text-gray-700">
          <p className="text-lg font-semibold">
            Author: <span className="font-normal">{BookDetail.author}</span>
          </p>
          <p className="text-sm">
            Published: <span className="font-medium">{BookDetail.publishdate}</span>
          </p>
          <p className="text-sm">
            Pages: <span className="font-medium">{BookDetail.pages}</span>
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {BookDetail.description}
          </p>
        </div>
      </div>
    );
  }
  