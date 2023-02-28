const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-32">
      <div className="mx-auto flex max-w-xs flex-col items-center justify-between gap-10 md:max-w-none md:flex-row md:items-start md:gap-0">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center justify-between md:justify-start">
            <a href="#" className="">
              <img src="/img/NavLogo.png" alt="Logo" className="" />
            </a>
            <p className="pl-6 font-metBold text-xl uppercase tracking-widest">
              THE TC Detail
            </p>
          </div>
          <div className="hidden flex-col space-y-3 font-metMedi md:flex">
            <p className="text-secondaryLight">
              Copyright 2022 The TC Detail, All Rights Reserved.
            </p>
            {/* <div className="flex flex-col space-y-1.5">
              <a
                href="https://twitter.com/lucasdsgns"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <p>Designed by</p>
                <img
                  src="/img/RiseVisuals.png"
                  alt="Rise Visuals"
                  className="w-24"
                  draggable="false"
                />
              </a>
              <a
                href="https://hildy.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex space-x-3"
              >
                <p>
                  Developed by{" "}
                  <span className="trans font-metBold tracking-wider underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary">
                    iHildy
                  </span>
                </p>
              </a>
            </div> */}
          </div>
        </div>
        <div className="flex items-start justify-end space-x-20">
          <div>
            <p className="font-metBold text-xl">Navigation</p>
            <div className="flex flex-col space-y-3 pt-5 text-lg tracking-wide text-secondary">
              <a
                href="#pastwork"
                className="trans underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary"
              >
                Sneak Peek
              </a>
              <a
                href="#prices"
                className="trans underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="trans underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary"
              >
                FAQs
              </a>
            </div>
          </div>
          <div>
            <p className="font-metBold text-xl">Socials</p>
            <div className="flex space-x-3 pt-5">
              <a
                href="https://twitter.com/TheLoop_NFT"
                target="_blank"
                rel="noopener noreferrer"
                className="trans rounded-full bg-iconBg fill-iconFg p-4 hover:bg-white hover:fill-black"
              >
                <svg
                  className="h-6 fill-inherit"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.643 4.93702C22.808 5.30702 21.911 5.55702 20.968 5.67002C21.941 5.08781 22.6689 4.17148 23.016 3.09202C22.1018 3.63501 21.1013 4.01721 20.058 4.22202C19.3564 3.47288 18.4271 2.97634 17.4143 2.80949C16.4016 2.64264 15.3621 2.81481 14.4572 3.29927C13.5524 3.78373 12.8328 4.55338 12.4102 5.48872C11.9875 6.42406 11.8855 7.47277 12.12 8.47202C10.2677 8.37901 8.45562 7.89756 6.80142 7.05892C5.14722 6.22028 3.68784 5.04318 2.518 3.60402C2.118 4.29402 1.888 5.09402 1.888 5.94602C1.88755 6.71301 2.07643 7.46826 2.43788 8.14475C2.79932 8.82124 3.32216 9.39805 3.96 9.82402C3.22027 9.80048 2.49687 9.6006 1.85 9.24102V9.30101C1.84992 10.3768 2.22203 11.4194 2.90318 12.252C3.58433 13.0846 4.53257 13.6559 5.587 13.869C4.90078 14.0547 4.18133 14.0821 3.483 13.949C3.78049 14.8746 4.35999 15.684 5.14036 16.2639C5.92074 16.8438 6.86291 17.1652 7.835 17.183C6.18483 18.4784 4.14688 19.1811 2.049 19.178C1.67738 19.1781 1.30607 19.1564 0.936996 19.113C3.06647 20.4822 5.54534 21.2088 8.077 21.206C16.647 21.206 21.332 14.108 21.332 7.95202C21.332 7.75202 21.327 7.55002 21.318 7.35002C22.2293 6.69099 23.0159 5.87491 23.641 4.94002L23.643 4.93702V4.93702Z" />
                </svg>
              </a>
              <a
                href="https://discord.com/invite/theloopnft"
                target="_blank"
                rel="noopener noreferrer"
                className="trans rounded-full bg-iconBg fill-iconFg p-4 hover:bg-white hover:fill-black"
              >
                <svg
                  className="h-6 fill-inherit"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.7352 4.86433C18.2737 4.1848 16.7275 3.70197 15.1376 3.42859C14.9395 3.78439 14.7081 4.26294 14.5486 4.64366C12.8343 4.38751 11.1358 4.38751 9.45307 4.64366C9.29359 4.26303 9.05698 3.78439 8.8571 3.42859C7.26558 3.70209 5.71809 4.18616 4.25589 4.86788C1.34621 9.23722 0.557416 13.4979 0.951768 17.6983C2.88166 19.1304 4.75192 20.0004 6.59066 20.5697C7.04763 19.9452 7.45159 19.2841 7.79836 18.5931C7.13816 18.3434 6.50172 18.0356 5.89658 17.6734C6.05583 17.5561 6.21133 17.4339 6.36284 17.3069C10.0297 19.0112 14.014 19.0112 17.6371 17.3069C17.7893 17.433 17.9448 17.5552 18.1033 17.6734C17.4972 18.0365 16.8596 18.3449 16.1981 18.595C16.5468 19.2887 16.95 19.9505 17.4058 20.5714C19.2462 20.0022 21.1182 19.1322 23.0481 17.6983C23.5109 12.829 22.2577 8.60737 19.7352 4.86425V4.86433ZM8.29796 15.1152C7.19716 15.1152 6.29442 14.0939 6.29442 12.8504C6.29442 11.6069 7.17792 10.584 8.29796 10.584C9.41807 10.584 10.3207 11.6051 10.3015 12.8504C10.3032 14.0939 9.41807 15.1152 8.29796 15.1152ZM15.7019 15.1152C14.6012 15.1152 13.6985 14.0939 13.6985 12.8504C13.6985 11.6069 14.5819 10.584 15.7019 10.584C16.8221 10.584 17.7247 11.6051 17.7055 12.8504C17.7055 14.0939 16.8221 15.1152 15.7019 15.1152V15.1152Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 font-metMedi md:hidden">
          <p className="text-secondaryLight">
            Copyright 2022 The TC Detail, All Rights Reserved.
          </p>
          {/* <div className="flex flex-col space-y-1.5">
            <a
              href="https://twitter.com/lucasdsgns"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <p>Designed by</p>
              <img
                src="/img/RiseVisuals.png"
                alt="Rise Visuals"
                className="w-24"
                draggable="false"
              />
            </a>
            <a
              href="https://hildy.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-3"
            >
              <p>
                Developed by{" "}
                <span className="trans font-metBold tracking-wider underline decoration-transparent decoration-2 underline-offset-8 hover:text-primary hover:decoration-primary">
                  iHildy
                </span>
              </p>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
