import { useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (newProduct) => {
    dispatch(addToCart(newProduct));
  };

  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = () => {
    setIsFilled(!isFilled);
  };

  const { name, imageUrl, price } = product;
  return (
    <div className="flex justify-center">
      <div className="relative max-w-sm min-w-[360px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
        {/* Card */}
        <div className=" overflow-x-hidden rounded-2xl relative  hover:opacity-75">
          <img
            src={imageUrl}
            alt={`${name}`}
            className="rounded-2xl w-350 h-350 object-cover"
          />
          <Link to={"/cart"}>
            <button
              onClick={() => {
                handleAddToCart(product);
              }}
              className="absolute right-2 top-2 bg-white hover:bg-yellow-300 rounded-full p-2 cursor-pointer group"
            >
              <svg
                className="h-6 w-6 group-hover:opacity-50  opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
        {/* Description */}
        <div className="mt-4 pl-2 mb-2 flex justify-between ">
          <div>
            <p className="text-lg font-semibold text-gray-900 mb-0">{name}</p>
            <p className="text-base text-gray-800 mt-0">${price}</p>
          </div>
          <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
            <svg
              onClick={handleHeartClick}
              className={`h-7 w-7 group-hover:opacity-70 ${
                isFilled ? "fill-red-600 stroke-red-600" : "text-gray-500"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
