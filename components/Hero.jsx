//import IntroVid from "../public/img/intro.mp4";

const Hero = () => {
  return (
    <div className="md:pt-20">
      <div className="mx-auto grid max-w-7xl gap-20 px-4 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col space-y-12 text-center lg:text-left">
          <div data-aos="fade-up" data-aos-delay="100">
            {/* <div className="trans inline-flex items-center justify-between sm:space-x-2 rounded-full border-2 border-btnBorder bg-btnBg py-2 px-3 font-metBold uppercase tracking-widest md:px-6">
              <div className="hidden sm:block">AVAILABILITY</div>
              <div className="hidden text-2xl text-btnBorder sm:block">I</div>
              <div className="font-metMedi">Weekends Only</div>
            </div> */}
          </div>
          <div className="space-y-6">
            <h1
              className="font-metBold text-4xl tracking-widest md:text-6xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              TC WASHING
            </h1>
            <h2
              className="mx-auto max-w-lg text-xl tracking-wide text-secondary md:text-2xl lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Pressure and Soft Washing Service for residents of Austin Texas
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <a
              href="#faq"
              className="trans rounded-full border-2 border-white bg-white py-4 px-6 font-metBold uppercase tracking-widest text-black hover:bg-black hover:text-white"
            >
              View the FAQs
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="flex items-center justify-center">
            <video
              src="{IntroVid}"
              alt="Intro video to TC Detail"
              playsInline
              autoPlay
              loop
              muted
              className="trans mx-auto my-auto overflow-hidden rounded-lg shadow focus:outline-none"
              width="1920"
              height="1080"
            ></video>
            {/* <Image
              src={porsche}
              draggable="false"
              width={1922}
              height={1446}
              alt="Detailed Truck"
              className="w-full rounded-xl"
              priority
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
