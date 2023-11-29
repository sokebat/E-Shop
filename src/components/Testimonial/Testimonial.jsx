import React from "react";

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font mb-10">
      <div className="container px-5 py-10 mx-auto">
        <h1 className="text-center text-3xl font-bold text-black mb-4">
          Testimonials
        </h1>
        <p className="text-center text-xl text-gray-700 mb-10">
          What our <span className="text-pink-500">customers</span> are saying
        </p>
        <div className="flex flex-wrap justify-center -m-4">
          <div className="max-w-sm p-4 mx-2 mb-8 bg-white rounded-lg shadow-md">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-4 object-cover object-center mx-auto rounded-full border-2 border-gray-200 bg-gray-100"
              src="https://ecommerce-sk.vercel.app/img/kamal.png"
            />
            <p className="text-gray-700 text-center">
              "Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk."
            </p>
            <div className="mt-4">
              <h2 className="text-gray-900 font-medium text-lg">
                Kamal Nayan Upadhyay
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
          {/* Repeat the above structure for each testimonial */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
