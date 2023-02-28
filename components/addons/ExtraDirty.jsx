import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function BucketWash() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="w-full text-left focus:outline-none"
      >
        Extra Dirty Charge -{" "}
        <span className="font-metSemiBold">Calculated at Appointment</span>
        <AiOutlineInfoCircle
          className="ml-2 inline-block text-plansPrice"
          size="1.2em"
        />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="leading-wide text-xl font-bold tracking-wide text-gray-900"
                  >
                    Extra Dirty Charge
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-base text-gray-500">
                      This is not common but some homes have some sort of thing
                      that makes them extra dirty. We will let you know if this
                      is the case. Usually anything that doesn't come off with
                      what we do for your selected package is counted as extra
                      dirty.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="trans rounded-full border-2 border-plansNameBorder bg-btnBg py-2 px-5 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
