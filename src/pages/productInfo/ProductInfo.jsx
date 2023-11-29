import React from "react";

function ProductInfo() {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-md">
        <img
          alt="ecommerce"
          className="md:w-1/2 w-full object-cover object-center rounded-lg mb-6 md:mb-0"
          src="https://dummyimage.com/400x400"
        />
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-sm text-gray-500 tracking-widest">BRAND NAME</h2>
          <h1 className="text-gray-900 text-3xl font-medium mb-4">
            The Catcher in the Rye
          </h1>
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">4 Reviews</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="leading-relaxed border-b-2 pb-4">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
          </p>
          <div className="flex items-center gap-9 mt-4">
            <span className="text-2xl font-medium text-gray-900">$58.00</span>
            <button
              type="button"
              className="bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xl  p-2"
            >
              Add To Cart
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
