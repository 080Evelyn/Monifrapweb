"use client";

import Image from "next/image";
import { ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import {
  motion,
  Variants,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import ComingSoon from "./coming-soon";
import {
  AppleIcon,
  GroupAvatar,
  HeroCenter,
  HeroLeft,
  HeroRight,
  Playstore,
} from "@/public/assets";
import HeroBackground from "./hero-background";

const topVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: customDelay,
    },
  }),
};

const imagesVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: customDelay,
    },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.35, 0.56, 0.55, 1] },
  },
};

const Hero = () => {
  const [open, setOpen] = useState(false);

  // animation controls for top block and images block
  const topControls = useAnimation();
  const imagesControls = useAnimation();
  const cardControls = useAnimation();

  // respect reduced motion preferences
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // if reduced motion, just show instantly
    if (reduceMotion) {
      topControls.set("visible");
      imagesControls.set("visible");
      cardControls.set("visible");
      return;
    }

    // sequence: top -> small delay -> images -> card (card has its own delay)
    (async () => {
      // animate top; custom value passed if needed (0 delay)
      await topControls.start("visible");

      // small intentional pause to create the sequencing you wanted (150-350ms feels good)
      await new Promise((res) => setTimeout(res, 250));

      // animate images
      await imagesControls.start("visible");

      // animate card slightly after images for nicer pop
      cardControls.start("visible");
    })();
  }, [topControls, imagesControls, cardControls, reduceMotion]);

  return (
    <section className="relative overflow-hidden pt-12.5 md:pt-25">
      <HeroBackground />

      {/* Top content (title, subtitle, CTAs) */}
      <motion.div
        className="flex flex-col h-full px-3"
        initial="hidden"
        animate={topControls}
      >
        <motion.div
          className="flex flex-col max-md:gap-4 items-center mt-25 sm:mt-22 md:mt-8 flex-grow"
          variants={topVariants}
          custom={0}
        >
          <motion.div
            className="flex flex-col items-center max-sm:gap-4 text-center w-full md:w-4/5 lg:max-w-2/3"
            variants={topVariants}
            custom={0.02}
          >
            <span className="text-[10px] font-medium text-primary border border-primary rounded-full px-2 py-1">
              Peak financial service
            </span>
            <h1 className="text-2xl mt-4 w-full md:text-4xl lg:text-[40px] font-medium">
              Simplify Your Money. Your Money, Your Freedom.
              <span className="text-primary"> One Smart Wallet.</span>
            </h1>
            <p className="text-sm mt-2 max-w-md md:max-w-lg">
              Simplify how you save, spend, and plan – all from one intelligent
              platform built for everyday people.
            </p>
          </motion.div>

          <motion.div
            className="mt-3 md:mt-8 flex flex-wrap w-full max-w-70 md:max-w-xs gap-4 z-30"
            variants={topVariants}
            custom={0.08}
          >
            {[
              { src: AppleIcon, label: ["Download on the", "App Store"] },
              { src: Playstore, label: ["Get it on", "Google Play"] },
            ].map((b, i) => (
              <div
                key={i}
                className="flex-1 flex items-center gap-3 bg-foreground py-2 px-3 rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setOpen(true)}
                role="button"
                tabIndex={0}
              >
                <Image src={b.src} alt="" width={24} height={24} />
                <div className="flex flex-col text-white">
                  <span className="text-[8px]">{b.label[0]}</span>
                  <span className="text-xs md:text-sm">{b.label[1]}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image mockups: animated after top content finishes */}
        <motion.div
          className="relative z-20 w-full flex items-end justify-center mt-20 sm:mt-10"
          initial="hidden"
          animate={imagesControls}
        >
          {/* Left */}
          <motion.div
            className="relative w-full md:w-1/4 max-w-60 md:max-w-[300px]"
            variants={imagesVariants}
          >
            <Image src={HeroLeft} alt="Left" width={500} height={800} />
            <motion.div
              className="absolute w-30 md:w-40 left-10 md:left-0 -top-5 -translate-x-1/3 z-30 bg-white/30 backdrop-blur-xs p-2 rounded-sm text-wrap text-[0.5rem] md:text-[0.625rem] lg:text-xs font-medium flex flex-col border border-[#edeefc] justify-center items-center md:gap-2"
              variants={cardVariants}
              initial="hidden"
              animate={cardControls}
            >
              <Image
                src={GroupAvatar}
                alt="Group Avatar"
                width={100}
                height={40}
              />
              <span className="text-start">
                Trusted by 5,000+ users take full control of their Earnings
              </span>
            </motion.div>
          </motion.div>

          {/* Center */}
          <motion.div
            className="relative w-full max-w-60 md:w-1/4 md:max-w-[300px] -mx-[20%] md:-mx-[8%] z-30"
            variants={imagesVariants}
          >
            <Image
              src={HeroCenter}
              alt="Center"
              width={500}
              height={800}
              className="w-full h-auto block"
              priority
            />
            <motion.div
              className="absolute max-lg:w-full right-[52%] md:right-[23%] top-1/10 md:top-1/5 translate-x-full z-30 bg-white/50 backdrop-blur p-2 rounded-sm text-primary text-[0.4rem] md:text-[0.625rem] lg:text-xs lg:text-nowrap font-medium flex items-center gap-2"
              variants={cardVariants}
              initial="hidden"
              animate={cardControls}
            >
              <Zap className="size-3 md:size-5 fill-primary" />
              <span>Experience lightning-fast transactions, every time.</span>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="relative w-full md:w-1/4 max-w-60 md:max-w-[300px]"
            variants={imagesVariants}
          >
            <Image src={HeroRight} alt="Right" width={500} height={800} />
            <motion.div
              className="absolute right-[105%] md:right-[45%] max-lg:w-full top-1/4 translate-x-full z-30 bg-primary/60 backdrop-blur p-2 rounded-sm text-white text-[0.4rem] md:text-[0.625rem] lg:text-xs font-medium flex lg:text-nowrap items-center gap-2"
              variants={cardVariants}
              initial="hidden"
              animate={cardControls}
            >
              <ShieldCheck className="size-3 md:size-5" />
              <span>Enjoy full peace of mind with 100% security</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <ComingSoon open={open} setOpen={setOpen} />
    </section>
  );
};

export default Hero;
