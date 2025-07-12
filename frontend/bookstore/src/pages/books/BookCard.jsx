import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl.js";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4 transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Book Image */}
          <div className="w-full sm:w-1/3 h-72 border rounded-md overflow-hidden">
            <Link to={`/books/${book._id}`}>
              <img
                src={getImgUrl(book?.coverImage)}
                alt={book?.title}
                className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            </Link>
          </div>

          {/* Book Info */}
          <div className="flex flex-col justify-between w-full sm:w-2/3">
            <div>
              <Link to={`/books/${book._id}`}>
                <h3 className="text-xl font-semibold hover:text-blue-600 mb-2">
                  {book.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                {book?.description.length > 40
                  ? `${book.description.slice(0, 40)}...`
                  : book?.description}
              </p>
            </div>

            <div>
              <p className="font-medium text-lg text-black mb-3">
                ${book?.newPrice}{" "}
                <span className="line-through text-gray-500 text-sm ml-2">
                  ${book?.oldPrice}
                </span>
              </p>

              <button
                onClick={() => handleAddToCart(book)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <FiShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
