import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Standout = () => {
  const contents = [
    "Designed for African/local banking systems",
    "Works even when traditional banking apps fail",
    "No hidden fees or complex steps",
    "Built for speed, security, and simplicity",
    "Works across multiple banks and wallets",
  ];

  return (
    <section className="bg-primary md:mx-10 lg:mx-25 rounded-lg p-5 mt-10">
      <div className="w-full flex flex-col-reverse md:flex-row relative">
        <span className="absolute bottom-25 max-md:bottom-25 md:mt-10 lg:mt-0 left-1/2 transform -translate-x-1/2 text-[6rem] md:text-[150px] lg:text-[200px] font-bold text-white/15">
          MoniFrap
        </span>

        <div className="w-full md:w-[48%] z-20 flex items-end">
          <Image
            src="/images/monifrap-mobile.png"
            alt="standout"
            height={100}
            width={100}
            className="w-[80%] md:w-full xl:w-[80%] max-md:mx-auto -mb-5"
          />
        </div>
        <div className="flex w-full md:w-[52%] z-20 p-4 flex-col gap-3 text-white/90 items-start justify-center">
          <span className="py-1 px-2 border border-white/60 text-xs text-white/60 rounded-full">
            Key Features
          </span>
          <span className="text-3xl font-bold text-white">
            Here’s What Makes Monifrap Stand Out from the Rest
          </span>
          <p className="text-sm">
            Monifrap simplifies payments, supports local banks, and puts you in
            full control — all in one secure app
          </p>
          <div className="flex flex-col gap-2">
            {contents.map((content) => (
              <div key={Math.random()} className="flex items-center gap-3">
                <div className="p-1.5 bg-white text-primary rounded-full">
                  <ArrowRight className="size-5" />
                </div>
                <p className="text-sm">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standout;
