import loadable from "@loadable/component";
import { NextSeo } from "next-seo";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Head = loadable(() => import("next/head"));
const Shell = loadable(() => import("@/components/Shell"));
// const Breakpoints = loadable(() => import("@/components/Breakpoints"));
const DealBanner = loadable(() => import("@/components/DealBanner"));
const Nav = loadable(() => import("@/components/Nav"));
const Hero = loadable(() => import("@/components/Hero"));
const Carousel = loadable(() => import("@/components/Carousel"));
const PastWork = loadable(() => import("@/components/PastWork"));
const Testimonials = loadable(() => import("@/components/Testimonials"));
const Pricing = loadable(() => import("@/components/Pricing"));
const Steps = loadable(() => import("@/components/Steps"));
const Faq = loadable(() => import("@/components/Faq"));
// const Footer = loadable(() => import("@/components/Footer"));

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     // disable: "phone",
  //     duration: 700,
  //     // delay: 500,
  //     easing: "ease-out-cubic",
  //   });
  //   AOS.refresh();
  // });
  return (
    <div className="scroll-smooth bg-background text-white">
      <Shell>
        <div>
          <Head>
            {/* Use https://metatags.io for this */}
            <link rel="icon" href="./favicon.ico" />
            <meta
              name="keywords"
              content="TC Washing | Pressure and Soft Washing for residents of Austin Texas"
            />
            <title>
              TC Washing | Pressure and soft washing service for homeowners
              in Austin Texas
            </title>
            <meta name="theme-color" content="#D6D6D6" />
            <meta
              name="title"
              content="TC Washing | Pressure and Soft Washing for residents of Austin Texas"
            />
            <meta name="description" content="View the project here!" />

            <meta property="og:type" content="website" />
            <meta
              property="og:site_name"
              content="TC Washing | Pressure and Soft Washing for residents of Austin Texas"
            />
            <meta property="og:url" content="https://tcwashing.net/" />
            <meta
              property="og:title"
              content="TC Washing | Pressure and Soft Washing for residents of Austin Texas"
            />
            <meta property="og:description" content="View the project here!" />
            {/* Use something like https://og-image.wzulfikar.com/ for this */}
            <meta
              property="og:image"
              content="https://tcdetail.net/banner.jpg"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://tcwashing.net/" />
            <meta
              property="twitter:title"
              content="TC Washing | Pressure and Soft Washing for residents of Austin Texas"
            />
            <meta
              property="twitter:description"
              content="View the project here!"
            />
            {/* Use something like https://og-image.wzulfikar.com/ for this */}
            <meta
              property="twitter:image"
              content="https://tcdetail.net/img/banner.jpg"
            />
          </Head>
          <NextSeo
            title="TC Washing | Pressure and Soft Washing for residents of Austin Texas"
            description="Pressure and Soft Washing for residents of Austin Texas"
          />
          <div className="mb-16 w-full scroll-smooth font-metReg md:mb-24">
            {/* <Breakpoints /> */}
            <DealBanner />
            <Nav />
            <Hero />
            <PastWork />
            <Carousel />
            {/* <Testimonials /> */}
            <Pricing />
            <Steps />
            <Faq />
          </div>
          {/* <Footer /> */}
        </div>
      </Shell>
    </div>
  );
}

export default App;
