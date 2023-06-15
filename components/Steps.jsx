const Steps = () => {
  return (
    <div id="steps" className="mx-auto max-w-6xl px-4 pt-32">
      <div className="mx-auto text-center font-metBold">
        <h5
          className="text-5xl tracking-wide"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          How it Works
        </h5>
        <p
          className="pt-2 text-lg tracking-widest text-secondaryLight"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Steps to make your house look like new:
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col items-center space-y-4 rounded-2xl bg-white p-5 py-10 text-black md:flex-row md:space-y-0 md:space-x-6"
        >
          <div className="font-metBold text-6xl md:text-8xl">1.</div>
          <div className="flex flex-col space-y-2">
            <p className="font-metBold text-3xl">
              <span className="text-plansPrice">-</span> Book Us
            </p>
            <p className="text-lg">
              Using the "Book Us!" button above or by emailing us at questions@tcwashing.net
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col items-center space-y-4 rounded-2xl bg-white p-5 py-10 text-black md:flex-row md:space-y-0 md:space-x-6"
        >
          <div className="font-metBold text-6xl md:text-8xl">2.</div>
          <div className="flex flex-col space-y-2">
            <p className="font-metBold text-3xl">
              <span className="text-plansPrice">-</span> We Respond
            </p>
            <p className="text-lg">
              We'll get back to you as soon as possible with a confirmation of your appointment to make sure everything goes according to plan.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col items-center space-y-4 rounded-2xl bg-white p-5 py-10 text-black md:flex-row md:space-y-0 md:space-x-6"
        >
          <div className="font-metBold text-6xl md:text-8xl">3.</div>
          <div className="flex flex-col space-y-2">
            <p className="font-metBold text-3xl">
              <span className="text-plansPrice">-</span> Get Ready For Your Appointment
            </p>
            <p className="text-lg">
              Please clear the area to be cleaned, unless you have selected an option for us to do so for you*. Make sure there 
              are no vehicles in the way. Please contact us with any special requests or necessary information.
            </p>
            <p>*if these options are not already selected, further cleaning charges may apply.</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col items-center space-y-4 rounded-2xl bg-white p-5 py-10 text-black md:flex-row md:space-y-0 md:space-x-6"
        >
          <div className="font-metBold text-6xl md:text-8xl">4.</div>
          <div className="flex flex-col space-y-2">
            <p className="font-metBold text-3xl">
              <span className="text-plansPrice">-</span> Appointment
            </p>
            <p className="text-lg">
              We'll come to your house at the time you selected, plug into your water, and perform the cleaning service you requested, 
              hassle free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
