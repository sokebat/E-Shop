import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full  py-2 rounded-lg text-white font-bold bg-green-600"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="flex items-center justify-center h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-md mx-auto bg-white rounded-xl p-4 text-left">
                <section>
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-full rounded-lg">
                      <div className="p-6 space-y-4">
                        <form className="space-y-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Enter Full Name
                            </label>
                            <input
                              type="name"
                              name="name"
                              id="name"
                              className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="address"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Enter Full Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="pincode"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Enter Pincode
                            </label>
                            <input
                              type="text"
                              name="pincode"
                              id="pincode"
                              className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="mobileNumber"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Enter Mobile Number
                            </label>
                            <input
                              type="text"
                              name="mobileNumber"
                              id="mobileNumber"
                              className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                              required
                            />
                          </div>
                        </form>
                        <button
                          onClick={closeModal}
                          type="button"
                          className="w-full text-white  bg-green-600 hover:bg-violet-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
