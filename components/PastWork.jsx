import Script from "next/script";

const PastWork = () => {
  return (
    <div id="pastwork" className="pt-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto text-center font-metBold">
          <h3
            className="text-5xl tracking-wide"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Past Work
          </h3>
          <p
            className="pt-2 text-lg tracking-widest text-secondaryLight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Photos from our past cleanings.
          </p>
        </div>
      </div>

    </div>
  );
};

export default PastWork;
