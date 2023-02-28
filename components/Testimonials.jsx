import Script from "next/script";

const PastWork = () => {
  return (
    <div id="pastwork" className="pt-28">
      <div className="hidden lg:block">
        <div
          className="senja-frame-embed mx-auto max-w-6xl"
          data-id="4b32fc67-4f88-4084-b06b-6c2aac9dcc7c"
        ></div>
        <Script
          defer
          type="text/javascript"
          src="https://widget.senja.io/embed/frame.js"
        ></Script>
      </div>
      <div className="block lg:hidden">
        <div
          className="senja-frame-embed"
          data-id="b5f14050-002f-414b-831b-25ed796e6c04"
        ></div>
        <Script
          defer
          type="text/javascript"
          src="https://widget.senja.io/embed/frame.js"
        ></Script>
      </div>
    </div>
  );
};

export default PastWork;
