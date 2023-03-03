import { BsFillMegaphoneFill } from "react-icons/bs";

const DealBanner = () => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          {/* <div className="flex w-0 flex-1 items-center justify-center">
            <span className="hidden rounded-lg bg-[#41a8b6] p-3 md:flex">
              <BsFillMegaphoneFill
                className="h-8 w-8 text-background"
                aria-hidden="true"
              />
            </span>
            <p className="truncate text-2xl font-metMedi text-background md:ml-5">
              <span className="md:hidden">
                <span className="font-metBold">"NEWYEAR"</span> For $20 Off
              </span>
              <span className="hidden md:inline">
                <span className="font-metBold">$20</span> Off Your Detail When
                You Use Code <span className="font-metBold">"NEWYEAR"</span>
              </span>
            </p>
          </div> */}
          <div className="flex w-0 flex-1 items-center justify-center">
            <span className="hidden rounded-lg bg-[#41a8b6] p-3 md:flex">
              <BsFillMegaphoneFill
                className="h-8 w-8 text-background"
                aria-hidden="true"
              />
            </span>
            <p className="truncate text-2xl font-metMedi text-background md:ml-5">
              <span className="md:hidden">
                <span className="font-metBold text-white">Website in Development</span>
              </span>
              <span className="hidden md:inline">
                <span className="font-metBold text-white">Website Still in Development</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealBanner;
