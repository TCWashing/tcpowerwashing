import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  return (
    <div id="faq" className="mx-auto max-w-6xl px-4 pt-32">
      <div>
        <div data-aos="fade-up" data-aos-delay="100">
          <h6 className="text-center font-metBold text-4xl lg:text-left">
            Frequently Asked Questions
          </h6>
        </div>
        <div className="border-gradient-b-faq mx-auto mt-10 w-full space-y-5 bg-transparent">
          <Disclosure
            defaultOpen="true"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl border-2 border-iconBg bg-transparent p-8">
                <Disclosure.Button
                  className={`{ open ? "rounded-t-2xl text-white" : "" } flex w-full
                    items-center
                      justify-between space-x-4 bg-transparent bg-opacity-100 text-left
                      font-metBold text-xl
                  focus:outline-none`}
                >
                  <span>Who are you?</span>
                  <FaChevronDown
                    className={`{
                      open
                        ? "trans fill-white" : "fill-faqIconDisabled"
                        } h-5
                    w-5 min-w-[1.25rem] max-w-[1.25rem] rotate-180 transform `}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-5 text-base text-faqTxt md:text-lg">
                    <span>
                    "We are a group of high school seniors running a pressure and soft washing 
                    business hoping to gain valuable business experience and skills. 
                    We founded on the principles of hard work, efficiency, and customer 
                    satisfaction."
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl border-2 border-iconBg bg-transparent p-8">
                <Disclosure.Button
                  className={`{ open ? "rounded-t-2xl text-white" : "" } flex w-full
                    items-center
                      justify-between space-x-4 bg-transparent bg-opacity-100 text-left
                      font-metBold text-xl
                  focus:outline-none`}
                >
                  <span>How do I contact you?</span>
                  <FaChevronDown
                    className={`{
                      open
                        ? "trans fill-white" : "fill-faqIconDisabled"
                        } h-5
                    w-5 min-w-[1.25rem] max-w-[1.25rem] rotate-180 transform`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-5 text-base text-faqTxt md:text-lg">
                    <span>
                      "You can contact us at tcpressurewashingatx@gmail
                      at any time, or by text at (512) 621-8246."
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl border-2 border-iconBg bg-transparent p-8">
                <Disclosure.Button
                  className={`{ open ? "rounded-t-2xl text-white" : "" } flex w-full
                    items-center
                      justify-between space-x-4 bg-transparent bg-opacity-100 text-left
                      font-metBold text-xl
                  focus:outline-none`}
                >
                  <span>What's the difference between pressure washing and soft washing? Which do you do?</span>
                  <FaChevronDown
                    className={`{
                      open
                        ? "trans fill-white" : "fill-faqIconDisabled"
                        } h-5
                    w-5 min-w-[1.25rem] max-w-[1.25rem] rotate-180 transform`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-5 text-base text-faqTxt md:text-lg">
                    <span>
                      "Pressure washing uses higher pressure water to break away at grime, soft washing uses special chemicals
                      to break away at grime. Both solutions have their benefits, we primarily soft wash houses, and pressure wash driveways. 
                      Soft washing is safer for the exterior and paint on houses, while pressure washing is faster and cheaper for durable concrete
                      surfaces."
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl border-2 border-iconBg bg-transparent p-8">
                <Disclosure.Button
                  className={`{ open ? "rounded-t-2xl text-white" : "" } flex w-full
                    items-center
                      justify-between space-x-4 bg-transparent bg-opacity-100 text-left
                      font-metBold text-xl
                  focus:outline-none`}
                >
                  <span>
                    Are the chemicals you use dangerous?
                  </span>
                  <FaChevronDown
                    className={`{
                      open
                        ? "trans fill-white" : "fill-faqIconDisabled"
                        } h-5
                    w-5 min-w-[1.25rem] max-w-[1.25rem] rotate-180 transform`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-5 text-base text-faqTxt md:text-lg">
                    <span>
                      "We use the most environmentally friendly chemicals capable of doing the job. 
                      None of our chemicals will cause harm to your house, lawn, or plants. We use  
                      bleach sparingly to kill all the any mold and germs. We care about the environment, 
                      and opt for eco-friendly chemicals when possible."
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl border-2 border-iconBg bg-transparent p-8">
                <Disclosure.Button
                  className={`{ open ? "rounded-t-2xl text-white" : "" } flex w-full
                    items-center
                      justify-between space-x-4 bg-transparent bg-opacity-100 text-left
                      font-metBold text-xl
                  focus:outline-none`}
                >
                  <span>How do you take payments?</span>
                  <FaChevronDown
                    className={`{
                      open
                        ? "trans fill-white" : "fill-faqIconDisabled"
                        } h-5
                    w-5 min-w-[1.25rem] max-w-[1.25rem] rotate-180 transform `}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-5 text-base text-faqTxt md:text-lg">
                    <span>
                      "We only take payments via credit/debit card online with
                      Stripe. You will recive an email or text with a link to
                      pay for your service."
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>

          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl border-2 border-iconBg bg-transparent p-8">
                <Disclosure.Button
                  className={`{ open ? "rounded-t-2xl text-white" : "" } flex w-full
                    items-center
                      justify-between space-x-4 bg-transparent bg-opacity-100 text-left
                      font-metBold text-xl
                  focus:outline-none`}
                >
                  <span>Will you do just driveways, patios, and/or pergolas?</span>
                  <FaChevronDown
                    className={`{
                      open
                        ? "trans fill-white" : "fill-faqIconDisabled"
                        } h-5
                    w-5  min-w-[1.25rem] max-w-[1.25rem] rotate-180 transform`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-5 text-base text-faqTxt md:text-lg">
                    <span>
                      "Yes! If you have a question about anything that isn't specifically listed above, feel free to
                      contact us at tcpressurewashingatx@gmail. We can create an estimate for any of your pressure/soft 
                      washing related needs."
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          {/* <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl border-2 border-iconBg bg-transparent p-8">
                <Disclosure.Button
                  className={`{ open ? "rounded-t-2xl text-white" : "" } flex w-full
                    items-center
                      justify-between space-x-4 bg-transparent bg-opacity-100 text-left
                      font-metBold text-xl
                  focus:outline-none`}
                >
                  <span>What types of products do you use?</span>
                  <FaChevronDown
                    className={`{
                      open
                        ? "trans fill-white" : "fill-faqIconDisabled"
                        } h-5
                    w-5 min-w-[1.25rem] max-w-[1.25rem] rotate-180 transform`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-5 text-base text-faqTxt md:text-lg">
                    <span>
                      We use over 40 types of products specific for each part of
                      your vehicle to assure a fresh look and feel of every
                      surface. These are all professional grade products that we
                      have researched and tested to ensure the best results.
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure> */}
        </div>
      </div>
      <div className="mx-auto mt-7 text-center">
        <a
          href="https://www.tcdetail.net/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Faq;
