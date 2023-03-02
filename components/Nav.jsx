/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import logo from "../public/logo2.png";


export default function Nav() {
  return (
    <Popover className="relative z-20">
      {({ open }) => (
        <>
          <div id="home" className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex grid-cols-4 place-content-center items-center justify-between py-6 md:justify-evenly lg:grid">
              <div className="flex items-center justify-start">
                <Image src={logo} alt="logo" width={150} height={100} />
              </div>
              <div className="-my-2 md:hidden">
                <Popover.Button className="hover:text-primaryDark inline-flex items-center justify-center rounded-md p-2 text-primary focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <HiMenu className="h-6 w-6 fill-navIcon" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="col-span-2 hidden items-center justify-center space-x-10 text-lg tracking-wide text-secondary md:flex">
                <a
                  href="#home"
                  className="trans underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary"
                >
                  Home
                </a>
                <a
                  href="#pastwork"
                  className="trans underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary"
                >
                  Past Work
                </a>
                <a
                  href="#prices"
                  className="trans underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary"
                >
                  Prices
                </a>
                <a
                  href="#steps"
                  className="trans underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary"
                >
                  Steps
                </a>
                <a
                  href="#faq"
                  className="trans underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary"
                >
                  FAQs
                </a>
              </div>
              <div className="hidden items-center justify-end text-base md:flex">
                <div className="rounded-full border-2 border-btnBorder bg-btnBg px-6 py-2 font-metBold tracking-widest">
                  tcpressurewashingatx@gmail
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="">
                      {/* <img src="/logo.png" alt="Logo" className="h-14" /> */}
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="hover:text-primaryDark inline-flex items-center justify-center rounded-md p-2 text-primary focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <HiX className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <a
                        href="#home"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="trans ml-3 underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary">
                          Home
                        </span>
                      </a>
                      <a
                        href="#pastwork"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="trans ml-3 underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary">
                          Past Works
                        </span>
                      </a>
                      <a
                        href="#prices"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="trans ml-3 underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary">
                          Prices
                        </span>
                      </a>
                      <a
                        href="#steps"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="trans ml-3 underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary">
                          Steps
                        </span>
                      </a>
                      <a
                        href="#faq"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="trans ml-3 underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary">
                          FAQs
                        </span>
                      </a>
                      <a
                        href="mailto:questions@tcdetail.net"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="trans ml-3 font-metBold text-base underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary">
                          Email Us: tcpressurewashingatx@gmail.com
                        </span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
