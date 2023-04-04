import React from "react";
import loadable from "@loadable/component";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsFillMegaphoneFill } from "react-icons/bs";
const Roof = loadable(() => import("@/components/offerings/Roof"));
const SoftWashHouse = loadable(() => import("@/components/offerings/FullHouseWash"));
const Driveway = loadable(() => import("@/components/offerings/Driveway"));
const Windows = loadable(() => import("@/components/offerings/Windows"))
const ConcreteSealer = loadable(() => import("@/components/offerings/ConcreteSealer"))
const Patio = loadable(() => import("@/components/offerings/Patio"))
const Pergola = loadable(() => import("@/components/offerings/Pergola"))
const Other = loadable(() => import("@/components/offerings/Other"))

const ExtraDirty = loadable(() => import("@/components/addons/ExtraDirty"));
const Oversize = loadable(() => import("@/components/addons/Oversize"));

const Pricing = () => {
  return (
    <div id="prices" className="mx-auto max-w-7xl px-4 pt-32">
      <div>
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="text-center font-metBold text-5xl tracking-wide lg:text-left">
            Pricing
          </h4>
        </div>
        <div
          className="mt-10 grid grid-cols-1 gap-0 rounded-2xl bg-white p-5 text-black lg:grid-cols-3 lg:gap-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >

          <div
            className="flex h-full flex-col space-y-5 bg-transparent py-8 px-2 md:px-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-full rounded-full py-4 px-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg underline decoration-plansNameBorder decoration-4 underline-offset-8">
              One Story
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-metMedi text-xl uppercase tracking-widest text-disabledBtnTxt">
                PRICE*
              </div>
              <div className="flex flex-col items-baseline space-x-2 text-btnBg md:flex-row">
                <div className="font-metMedi text-3xl">300</div>
                <p className="text-base">(Includes Driveway and Path)</p>
              </div>
              <p>
                This is our standard package for one story homes, it includes a soft wash of your house and driveway/path front-side pressure 
                washing. See below for more details. Find the price of addons a little further below.
              </p>
              <div className="flex items-center space-x-2 text-lg">
                <AiOutlineFieldTime className="text-plansPrice" size="1.5em" />
                <p className="pt-1">~3-6 Hours</p>
              </div>
            </div>
            <div className="flex-1">
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <SoftWashHouse />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <Driveway />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                A careful and professional job with quick and honest customer service.
                </li>
              </ol>
            </div>
            <div>
              <div className="text-center font-metBold text-2xl">
                Book Now:
              </div>
              {/* <div className="grid gap-1.5 pt-2">
                <a
                  href="/returning-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Book
                </a>
              </div> */}
                <div className="grid gap-1.5 pt-2">
                <a
                  href="mailto:questions@tcwashing.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Email Us!
                </a>
                <p className="text-center">questions@tcwashing.net</p>
              </div>
            </div>
          </div>

          <div
            className="flex h-full flex-col space-y-5 bg-transparent py-8 px-2 md:px-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-full rounded-full py-4 px-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg underline decoration-plansNameBorder decoration-4 underline-offset-8">
              Two Story
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-metMedi text-xl uppercase tracking-widest text-disabledBtnTxt">
                PRICE*
              </div>
              <div className="flex flex-col items-baseline space-x-2 text-btnBg md:flex-row">
                <div className="font-metMedi text-3xl">450</div>
                <p className="text-base">(Includes Driveway and Path)</p>
              </div>
              <p>
                This is our standard package for two story homes, it includes a soft wash of your house and driveway/path front-side pressure 
                washing. See below for more details. Find the price of addons a little further below.
              </p>
              <div className="flex items-center space-x-2 text-lg">
                <AiOutlineFieldTime className="text-plansPrice" size="1.5em" />
                <p className="pt-1">~3-8 Hours</p>
              </div>
            </div>
            <div className="flex-1">
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <SoftWashHouse />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <Driveway />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                A careful and professional job with quick and honest customer service.
                </li>
              </ol>
            </div>
            <div>
              <div className="text-center font-metBold text-2xl">
                Book Now:
              </div>
              {/* <div className="grid gap-1.5 pt-2">
                <a
                  href="/returning-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Book
                </a>
              </div> */}
                <div className="grid gap-1.5 pt-2">
                <a
                  href="mailto:questions@tcwashing.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Email Us!
                </a>
                <p className="text-center">questions@tcwashing.net</p>
              </div>
            </div>
          </div>
          
          <div
            className="flex h-full flex-col space-y-5 bg-transparent py-8 px-2 md:px-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-full rounded-full py-4 px-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg underline decoration-plansNameBorder decoration-4 underline-offset-8">
              Driveway Only
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-metMedi text-xl uppercase tracking-widest text-disabledBtnTxt">
                PRICE*
              </div>
              <div className="flex flex-col items-baseline space-x-2 text-btnBg md:flex-row">
                <div className="font-metMedi text-3xl">125</div>
                <p className="text-base">(+50 pathway)</p>
                <p className="text-base">(+50-??? oversize)</p>
              </div>
              <p>
                This is our standard driveway-only package. Prices for driveway cleaning can vary greatly depending on the size, dirtyness, slope,
                and condition. Most 2-4 car driveways will remain at the standard price.
              </p>
              <div className="flex items-center space-x-2 text-lg">
                <AiOutlineFieldTime className="text-plansPrice" size="1.5em" />
                <p className="pt-1">~1-3 Hours</p>
              </div>
            </div>
            <div className="flex-1">
              <ol className="plansdivstIcon divst-inside text-bas space-y-3 text-left font-metMedi">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Driveway />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  A careful and professional job with quick and honest customer service.
                </li>
              </ol>
            </div>
            <div>
              <div className="text-center font-metBold text-2xl">
                Book Now:
              </div>
              {/* <div className="grid gap-1.5 pt-2">
                <a
                  href="/returning-mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Book
                </a>
              </div> */}
                <div className="grid gap-1.5 pt-2">
                <a
                  // href="mailto:questions@tcwashing.net"
                  href="https://calendly.com/tcwashing/driveway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Book Us!
                </a>
                <p className="text-center">questions@tcwashing.net</p>
              </div>
            </div>
          </div>
          {/* <div className="mx-2 rounded-2xl bg-aqua md:mx-6 lg:col-span-3">
            <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <span className="hidden rounded-lg bg-[#41a8b6] p-3 md:block">
                  <BsFillMegaphoneFill
                    className="h-8 w-8 text-background"
                    aria-hidden="true"
                  />
                </span>
                <p className="text-center text-2xl font-medium text-background md:ml-5 md:text-left">
                  <span className="inline font-metMedi">
                    <span className="font-metBold">$20</span> Off Your Detail
                    When You Use Code{" "}
                    <span className="font-metBold">"NEWYEAR"</span>
                  </span>
                </p>
              </div>
            </div>
          </div> */}
          
          <div
            className="flex h-full flex-col space-y-5 bg-transparent py-8 px-2 md:px-6 lg:col-span-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-base w-full">*Extra fees may apply, all extra fees will be calculated before the appointment. Learn more below.</p>
            <div className="w-full rounded-full border-plansNameBorder py-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg md:border-2 md:px-4">
              available Add-ons
            </div>
            <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-8">
            <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Oversize />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Roof />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Windows />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <Patio />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Pergola />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <Other />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <ConcreteSealer />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <ExtraDirty />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Pricing;
