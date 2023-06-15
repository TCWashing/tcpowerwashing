import React from "react";
import loadable from "@loadable/component";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsFillMegaphoneFill } from "react-icons/bs";
import Multiplier from '../components/apps/Multiplier';
const Roof = loadable(() => import("@/components/offerings/Roof"));
const SoftWashHouse = loadable(() => import("@/components/offerings/FullHouseWash"));
const Driveway = loadable(() => import("@/components/offerings/Driveway"));
const Pathway = loadable(() => import("@/components/offerings/Pathway"));
const Windows = loadable(() => import("@/components/offerings/Windows"))
const ConcreteSealer = loadable(() => import("@/components/offerings/ConcreteSealer"))
const Patio = loadable(() => import("@/components/offerings/Patio"))
const Pergola = loadable(() => import("@/components/offerings/Pergola"))
const Other = loadable(() => import("@/components/offerings/Other"))
const SpecialOther = loadable(() => import("@/components/offerings/SpecialOther"))

const ExtraDirty = loadable(() => import("@/components/addons/ExtraDirty"));
const Oversize = loadable(() => import("@/components/addons/Oversize"));
const Fences = loadable(() => import("@/components/addons/Fences"));
const SecondStory = loadable(() => import("@/components/addons/SecondStory"));
const WindowsAddon = loadable(() => import("@/components/addons/Windows"));
const EverythingStandard = loadable(() => import("@/components/addons/EverythingStandard"));
const Sweep = loadable(() => import("@/components/addons/Sweep"));
const CleaningSolution = loadable(() => import("@/components/addons/CleaningSolution"));


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
          className="mt-10  gap-0 rounded-2xl bg-white p-5 text-black"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Multiplier />
            <div className="w-full">
              <div className="text-center font-metBold text-2xl">
                Book Now:
                <p className="text-center font-metBold text-lg uppercase md:hidden">we price match!*</p>
              </div>
                <div className="flex justify-center py-3 grid gap-1.5 pt-2">
                <a
                  href="https://calendly.com/tcwashing/tcwashing-power-washing-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-50 rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Book Us!
                </a>
                <p className="text-center">questions@tcwashing.net</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
          <div
            className="flex h-full flex-col space-y-5 bg-transparent py-8 px-2 md:px-6 lg:col-span-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* <p className="text-base w-full">*Extra fees may apply, all extra fees will be calculated before the appointment. Learn more below.</p> */}
            <div className="w-full rounded-full border-plansNameBorder py-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg md:border-2 md:px-4">
              available Add-ons
              {/* <p className="text-xl">Only Want Add Ons?</p>
                <a
                  // href="mailto:questions@tcwashing.net"
                  href="https://calendly.com/tcwashing/extras?month=2023-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Click Here!
                </a> */}
            </div>
            <div className="grid w-full grid-cols-1 gap-3">
            <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Fences />
                </li>
              </ol>
            <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Windows />
                </li>
              </ol>
              {/* <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Roof />
                </li>
              </ol> */}
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
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <ConcreteSealer />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <Other />
                </li>
              </ol>
              {/* <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <ExtraDirty />
                </li>
              </ol> */}
            </div>
            <div className="w-full rounded-full border-plansNameBorder py-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg md:border-2 md:px-4">
              We Price Match!
            </div>
            <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base px-10 text-center">
              We're so confident in our work and our prices that if anyone offers you a better deal, we'll match it or better. Just contact us
              at questions@tcwashing.net and we'll get back to you as soon as possible.*
            </ol>
          </div>
          </div>
        </div>
          
          {/* <div
            className="flex h-full flex-col space-y-5 bg-transparent py-8 px-2 md:px-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-full rounded-full py-4 px-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg underline decoration-plansNameBorder decoration-4 underline-offset-8">
              Standard
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-metMedi text-xl uppercase tracking-widest text-disabledBtnTxt">
                PRICE*
              </div>
              <div className="flex flex-col items-baseline space-x-2 text-btnBg md:flex-row">
                <div className="font-metMedi text-3xl">$0.17
                /sqft</div>
                <p className="text-base">(Save money by getting more cleaned! $0.17 per sqft for all surfaces!)</p>
              </div>
              <p>
                This is our Standard package, it includes both house and driveway/path cleaning. We recommend this package to most customers.
              </p>
              <div className="flex items-center space-x-2 text-lg">
                <AiOutlineFieldTime className="text-plansPrice" size="1.5em" />
                <p className="pt-1">~3 Hours</p>
              </div>
            </div>
            <div className="flex-1">
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <Driveway />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <SoftWashHouse />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <Pathway />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <Sweep />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <CleaningSolution />
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
                <div className="grid gap-1.5 pt-2">
                <a
                  href="https://calendly.com/tcwashing/complete?month=2023-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Book Us!
                </a>
                <p className="text-center">questions@tcwashing.net</p>
              </div>
            </div>
          </div> */}

          {/* <div
            className="flex h-full flex-col space-y-5 bg-transparent py-8 px-2 md:px-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-full rounded-full py-4 px-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg underline decoration-plansNameBorder decoration-4 underline-offset-8">
              House Only
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-metMedi text-xl uppercase tracking-widest text-disabledBtnTxt">
                PRICE*
              </div>
              <div className="flex flex-col items-baseline space-x-2 text-btnBg md:flex-row">
                <div className="font-metMedi text-3xl">$0.18
                /sqft</div>
                <p className="text-base">(National Avg. $0.25-$0.50)</p>
              </div>
              <p>
                This is our house-only cleaning package, it includes a soft wash of your house. We recommend this package for clients who don't need their driveway or pathway cleaned.
              </p>
              <div className="flex items-center space-x-2 text-lg">
                <AiOutlineFieldTime className="text-plansPrice" size="1.5em" />
                <p className="pt-1">~2 Hours</p>
              </div>
            </div>
            <div className="flex-1">
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <SoftWashHouse />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <Sweep />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <CleaningSolution />
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
                <div className="grid gap-1.5 pt-2">
                <a
                  href="https://calendly.com/tcwashing/house?month=2023-05" //mailto:questions@tcwashing.net
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Book Us!
                </a>
                <p className="text-center">questions@tcwashing.net</p>
              </div>
            </div>
          </div> */}
          
          {/* <div
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
                <div className="font-metMedi text-3xl">$0.20
                /sqft</div>
                <p className="text-base">(National Avg. $0.28/sqft, Ex: 800sqft = $160, Includes pathway)</p>
              </div>
              <p>
                This is our driveway-only package. It includes the cleaning of both your driveway, and connecting path. We recommend this package
                if your house has been cleaned recently but you are dissatisfied with the state of your driveway.
              </p>
              <div className="flex items-center space-x-2 text-lg">
                <AiOutlineFieldTime className="text-plansPrice" size="1.5em" />
                <p className="pt-1">~1 Hour</p>
              </div>
            </div>
            <div className="flex-1">
              <ol className="plansdivstIcon divst-inside text-bas space-y-3 text-left font-metMedi">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Driveway />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <Pathway />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <Sweep />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <CleaningSolution />
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
                <div className="grid gap-1.5 pt-2">
                <a
                  // href="mailto:questions@tcwashing.net"
                  href="https://calendly.com/tcwashing/driveway?month=2023-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trans w-full rounded-full border-2 border-plansNameBorder bg-btnBg py-4 px-6 text-center font-metBold text-base uppercase tracking-widest text-white hover:bg-plansNameBorder hover:text-btnBg"
                >
                  Book Us!
                </a>
                <p className="text-center">questions@tcwashing.net</p>
              </div>
            </div>
          </div> */}
          <div className="mx-2 rounded-2xl bg-aqua md:mx-6 lg:col-span-3">
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
                    <span className="font-metBold">$20</span> Off Your Washing
                    When You Use Code{" "}
                    <span className="font-metBold">"JUN23"</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className="hidden md:block text-xs pt-3">
            *Price Matching is ultimately at our discretion, we want to give you a quality service at
            the best price possible
          </p>
          <div className="md:hidden">
            <div
              className="flex h-full flex-col space-y-5 bg-transparent py-8 px-2 md:px-6 lg:col-span-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
            {/* <p className="text-base w-full">*Extra fees may apply, all extra fees will be calculated before the appointment. Learn more below.</p> */}
            <div className="w-full rounded-full border-plansNameBorder py-4 text-center font-metBold text-2xl uppercase tracking-widest text-btnBg md:border-2 md:px-4">
              available Add-ons
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 lg:grid-rows-3">
            <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <Fences />
                </li>
              </ol>
            <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Windows />
                </li>
              </ol>
              {/* <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Roof />
                </li>
              </ol> */}
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
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <ConcreteSealer />
                </li>
              </ol>
              <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <Other />
                </li>
              </ol>
              {/* <ol className="plansdivstIcon divst-inside space-y-3 font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <ExtraDirty />
                </li>
              </ol> */}
            </div>
          </div>
          </div>
          <p className="md:hidden text-xs">
            *Price Matching is ultimately at our discretion, we want to give you a quality service at
            the best price possible
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Pricing;
