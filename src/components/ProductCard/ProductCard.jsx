import React from "react";

const ProductCard = () => {
  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="cursor-pointer">
          {/* <img
            className="w-full h-64 object-cover"
            src={imageUrl}
            alt="product"
          /> */}
        </div>
        <div className="p-4">
          <h1 className="text-lg font-medium text-gray-900 mb-2">title</h1>
          <p className="text-gray-700 mb-2">price</p>
          <button
            type="button"
            className="bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
