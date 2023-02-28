const Breakpoints = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 rounded-tr-lg bg-black p-2 text-xl text-white">
      <div>
        <span className="block sm:hidden">I'm xs</span>
        <span className="hidden sm:block md:hidden">I'm sm</span>
        <span className="hidden md:block lg:hidden">I'm md</span>
        <span className="hidden lg:block xl:hidden">I'm lg</span>
        <span className="hidden xl:block 2xl:hidden">I'm xl</span>
        <span className="hidden 2xl:block 3xl:hidden">I'm 2xl</span>
        <span className="4xl:hidden hidden 3xl:block">I'm 3xl</span>
        <span className="4xl:block 5xl:hidden hidden">I'm 4xl</span>
        <span className="5xl:block hidden">I'm 5xl</span>
      </div>
    </div>
  );
};

export default Breakpoints;
