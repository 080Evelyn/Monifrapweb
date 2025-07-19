import Image from "next/image";
import Navbar from "./navbar";
import { ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const mockups = [
    {
      src: "/images/mockup-left.png",
      mx: "",
      badge: (
        <div className="absolute top-4 left-1/10 -translate-x-1/2 bg-white/30 backdrop-blur-xs p-2 rounded-sm border border-[#edeefc] text-xs font-medium flex flex-col items-center gap-2">
          <Image
            src="/images/hero-avatar.svg"
            alt="Trusted users"
            width={60}
            height={24}
            className="block w-full max-w-45 h-auto mx-auto mb-1"
          />
          <span>
            Trusted by 5,000+ users take full control of their Earnings
          </span>
        </div>
      ),
    },
    {
      src: "/images/mockup-center.svg",
      mx: "-mx-[8%]",
      badge: (
        <div className="absolute top-12 right-[23%] w-full translate-x-full bg-white/50 backdrop-blur p-2 rounded-sm text-primary text-xs font-medium flex items-center gap-2">
          <Zap className="size-5 fill-primary" />
          <span>Experience lightning-fast transactions, every time.</span>
        </div>
      ),
    },
    {
      src: "/images/mockup-right.png",
      mx: "",
      badge: (
        <div className="absolute top-12 right-1/2 w-full translate-x-full bg-primary/60 backdrop-blur p-2 rounded-sm text-white text-xs font-medium flex items-center gap-2">
          <ShieldCheck className="size-5" />
          <span>Enjoy full peace of mind with 100% security</span>
        </div>
      ),
    },
  ];

  const badges = [
    {
      src: "/icons/apple.svg",
      label: ["Download on the", "App Store"],
    },
    {
      src: "/icons/playstore.svg",
      label: ["Get it on", "Google Play"],
    },
  ];

  return (
    <section
      id="home"
      className="relative bg-background overflow-x-hidden pt-1"
    >
      {/* Center‑constrained wrapper */}
      <div className="container mx-auto px-4 lg:px-8 relative min-h-screen">
        {/* Left */}
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full md:rounded-l-[27px] custom-left-gradient" />
        <span className="absolute bottom-16 left-16 w-80 h-80 bg-[#153D8040] blur-3xl rounded-full" />

        {/* Center gradient under form */}
        <div className="absolute md:rounded-b-[27px] left-1/2 transform -translate-x-1/2 bottom-0 hidden md:block rounded-full blur-2xl md:w-1/3 z-10 h-2/3 bg-gradient-to-t from-background to-transparent " />

        {/* Right */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full md:rounded-r-[27px] custom-right-gradient" />
        <span className="absolute bottom-16 right-16 w-80 h-80 bg-[#0fa3014f] blur-3xl rounded-full" />

        {/* Navbar */}
        <Navbar />

        {/* Hero text & badges */}
        <div className="relative z-10 flex flex-col items-center text-center pt-6 px-2">
          <span className="text-[10px] font-medium text-primary border border-primary rounded-full px-2 py-1">
            Peak financial service
          </span>
          <h1
            className="mt-4 text-3xl md:text-5xl font-medium leading-tight max-w-3xl"
            style={{ fontFamily: "'Whyte Inktrap', serif" }}
          >
            Simplify Your Money. Your Money, Your Freedom.{" "}
            <span className="text-primary">One Smart Wallet.</span>
          </h1>
          <p className="mt-2 text-[13px] 2xl:text-sm max-w-2xl">
            Simplify how you save, spend, and plan – all from one intelligent
            platform built for everyday people.
          </p>

          <div className="mt-4 flex w-full max-w-md gap-4">
            {badges.map((b, i) => (
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

        {/* desktop mockups */}
        <div className="hidden md:flex items-end justify-center w-full mt-6 gap-8 relative z-10">
          {mockups.map((m, i) => (
            <div key={i} className={`relative w-1/4 flex-shrink-0 ${m.mx}`}>
              <Image
                src={m.src}
                alt=""
                width={500}
                height={800}
                className="w-full h-auto block"
              />
              {m.badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
