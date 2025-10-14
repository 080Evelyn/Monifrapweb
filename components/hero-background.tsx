"use client";

const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 lg:mt-1">
        <div className="absolute md:rounded-l-[27px] left-0 bottom-0 w-full md:w-1/2 h-full custom-left-gradient will-change-transform" />
        <span className="absolute bottom-10 left-10 w-64 h-64 md:w-80 md:h-80 bg-[#153D8040] blur-2xl md:blur-3xl rounded-full will-change-filter" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute md:rounded-b-[27px] left-1/2 transform -translate-x-1/2 bottom-0 hidden md:block rounded-full blur-xl md:blur-2xl md:w-1/3 z-15 h-2/3 bg-gradient-to-t from-background to-transparent will-change-filter" />
      </div>

      <div className="absolute inset-0 max-md:hidden lg:mt-1">
        <div className="absolute md:rounded-r-[27px] right-0 bottom-0 w-1/2 h-full custom-right-gradient will-change-transform" />
        <span className="absolute bottom-10 right-10 w-64 h-64 md:w-80 md:h-80 bg-[#0fa3014f] blur-2xl md:blur-3xl rounded-full will-change-filter" />
      </div>
    </>
  );
};

export default HeroBackground;
