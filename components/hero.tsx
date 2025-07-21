import Image from "next/image";
import Navbar from "./navbar";
import { ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-background relative overflow-x-hidden pt-1"
    >
      <div className="absolute inset-0 lg:mt-1">
        <div className="absolute md:rounded-l-[27px] left-0 bottom-0 w-full md:w-1/2 h-full custom-left-gradient" />
        <span className="absolute bottom-15 left-18 w-80 h-80 bg-[#153D8040] blur-3xl rounded-full" />
      </div>
      <div className="absolute inset-0">
        <div className="absolute md:rounded-b-[27px] left-1/2 transform -translate-x-1/2 bottom-0 hidden md:block rounded-full blur-2xl md:w-1/3 z-15 h-2/3 bg-gradient-to-t from-background to-transparent " />
      </div>

      <div className="absolute inset-0 max-md:hidden lg:mt-1">
        <div className="absolute md:rounded-r-[27px] right-0 bottom-0 w-1/2 h-full custom-right-gradient" />
        <span className="absolute bottom-15 right-18 w-80 h-80 bg-[#0fa3014f] blur-3xl rounded-full" />
      </div>

      <Navbar />

      <div className="flex flex-col max-md:gap-4 items-center mt-20 md:mt-4">
        <div className="flex flex-col items-center max-md:gap-2 text-center w-4/5 md:max-w-2/3">
          <span className="text-[10px] font-medium text-primary border border-primary rounded-full px-2 py-1">
            Peak financial service
          </span>
          <span
            className="text-3xl mt-2 w-full md:text-[40px] font-medium"
            style={{ fontFamily: "'Whyte Inktrap', serif" }}
          >
            Simplify Your Money. Your Money, Your Freedom.
            <span className="text-primary">One Smart Wallet.</span>
          </span>
          <p className="text-sm mt-2">
            Simplify how you save, spend, and plan – all from one intelligent
            platform built for everyday people.
          </p>
        </div>

        <div className="mt-8 flex w-full max-w-xs md:max-w-md gap-4 z-30">
          {[
            {
              src: "/icons/apple.svg",
              label: ["Download on the", "App Store"],
            },
            {
              src: "/icons/playstore.svg",
              label: ["Get it on", "Google Play"],
            },
          ].map((b, i) => (
            <div
              key={i}
              className="flex-1 flex items-center gap-3 bg-foreground py-2 px-3 rounded-md cursor-pointer"
            >
              <Image src={b.src} alt="" width={24} height={24} />
              <div className="flex flex-col text-white">
                <span className="text-[8px]">{b.label[0]}</span>
                <span className="text-sm">{b.label[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden absolute z-20 bottom-0 w-full md:flex items-end justify-center">
        {/* Left */}
        <div className="relative w-1/4">
          <Image
            src="/images/mockup-left.png"
            alt="Left"
            width={500}
            height={800}
            className="w-full h-auto block"
          />
          <div className="absolute w-50 left-0 -top-5 -translate-x-1/2 z-30 bg-white/30 backdrop-blur-xs p-2 rounded-sm text-wrap text-xs font-medium flex flex-col border border-[#edeefc] justify-center items-center gap-2">
            <Image
              src="/images/hero-avatar.svg"
              alt="Group Avatar"
              width={100}
              height={40}
              className="w-full max-w-45 h-auto"
            />
            <span className="text-start">
              Trusted by 5,000+ users take full control of their Earnings
            </span>
          </div>
        </div>

        {/* Center */}
        <div className="relative w-1/4 -mx-[8%] z-30">
          <Image
            src="/images/mockup-center.svg"
            alt="Center"
            width={500}
            height={1000}
            className="w-full h-auto block"
          />
          <div className="absolute right-[23%] top-1/5 translate-x-full z-30 bg-white/50 backdrop-blur p-2 rounded-sm text-primary text-xs text-nowrap font-medium flex items-center gap-2">
            <Zap className="size-5 fill-primary" />
            <span>Experience lightning-fast transactions, every time.</span>
          </div>
        </div>

        {/* Right */}
        <div className="relative w-1/4">
          <Image
            src="/images/mockup-right.png"
            alt="Right"
            width={500}
            height={800}
            className="w-full h-auto block"
          />
          <div className="absolute right-[45%] top-1/4 translate-x-full z-30 bg-primary/60 backdrop-blur p-2 rounded-sm text-white text-xs font-medium flex text-nowrap items-center gap-2">
            <ShieldCheck className="size-5" />
            <span>Enjoy full peace of mind with 100% security</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
