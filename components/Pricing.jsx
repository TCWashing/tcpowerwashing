import React from "react";
import loadable from "@loadable/component";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsFillMegaphoneFill } from "react-icons/bs";
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
const SecondStory = loadable(() => import("@/components/addons/SecondStory"));
const ConcreteSealerAddon = loadable(() => import("@/components/addons/ConcreteSealer"));
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
              Premium
            </div>
            <div className="flex flex-col space-y-2">
              <div className="font-metMedi text-xl uppercase tracking-widest text-disabledBtnTxt">
                PRICE*
              </div>
              <div className="flex flex-col items-baseline space-x-2 text-btnBg md:flex-row">
                <div className="font-metMedi text-3xl">607</div>
                <p className="text-base">(Includes Extras Listed Below)</p>
              </div>
              <p>
                This is our Premium package, it includes everything in the standard package plus add-ons at a discount. We recommend this package to anyone
                who plans to select a lot of add-ons.
              </p>
              <div className="flex items-center space-x-2 text-lg">
                <AiOutlineFieldTime className="text-plansPrice" size="1.5em" />
                <p className="pt-1">~5 Hours</p>
              </div>
            </div>
            <div className="flex-1">
              <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
              <li className="border-divstIcon border-b-2 pb-3">
                  <EverythingStandard />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <WindowsAddon />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <ConcreteSealerAddon />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <SecondStory />
                </li>
                <li className="border-divstIcon border-b-2 pb-3">
                  <SpecialOther />
                </li>
                {/* <li className="border-divstIcon border-b-2 pb-3">
                A careful and professional job with quick and honest customer service.
                </li> */}
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
                  href="https://calendly.com/tcwashing/premium"
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

          <div
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
                <div className="font-metMedi text-3xl">397</div>
                <p className="text-base">(+50 second story)</p>
              </div>
              <p>
                This is our standard package, it includes a soft wash of your house and driveway/path front-side pressure 
                washing. We recommend this package for clients who won't be adding a lot of Add-Ons.
              </p>
              <div className="flex items-center space-x-2 text-lg">
                <AiOutlineFieldTime className="text-plansPrice" size="1.5em" />
                <p className="pt-1">~3 Hours</p>
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
                  href="https://calendly.com/tcwashing/house" //mailto:questions@tcwashing.net
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
                <div className="font-metMedi text-3xl">163</div>
                <p className="text-base">(includes pathway)</p>
              </div>
              <p>
                This is our driveway-only package. It includes the cleaning of both your driveway, and connecting path. We recommend this package
                if your house has been cleaned recently but you are dissatisfied with your driveway.
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
                    <span className="font-metBold">"APR23"</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          
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
              {/* <ol className="plansdivstIcon divst-inside space-y-3 text-left font-metMedi text-base">
                <li className="border-divstIcon border-b-2 pb-3">
                  <Roof />
                </li>
              </ol> */}
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
