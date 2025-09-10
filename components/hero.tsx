"use client";

import Image from "next/image";
import Navbar from "./navbar";
import { ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import ComingSoon from "./coming-soon";
import {
  AppleIcon,
  GroupAvatar,
  HeroCenter,
  HeroLeft,
  HeroRight,
  Playstore,
} from "@/public/assets";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [bgAnimated, setBgAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-background relative overflow-hidden pt-1">
      <div className="absolute inset-0 lg:mt-1">
        <div className="absolute md:rounded-l-[27px] left-0 bottom-0 w-full md:w-1/2 h-full custom-left-gradient" />
        <span className="absolute bottom-10 left-10 w-64 h-64 md:w-80 md:h-80 bg-[#153D8040] blur-3xl rounded-full" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute md:rounded-b-[27px] left-1/2 transform -translate-x-1/2 bottom-0 hidden md:block rounded-full blur-2xl md:w-1/3 z-15 h-2/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="absolute inset-0 max-md:hidden lg:mt-1">
        <div className="absolute md:rounded-r-[27px] right-0 bottom-0 w-1/2 h-full custom-right-gradient" />
        <span className="absolute bottom-10 right-10 w-64 h-64 md:w-80 md:h-80 bg-[#0fa3014f] blur-3xl rounded-full" />
      </div>

      <Navbar />

      {/* Content container */}
      <motion.div
        className="flex flex-col h-full px-3"
        variants={containerVariants}
        initial="hidden"
        animate={bgAnimated ? "visible" : "hidden"}
      >
        <motion.div
          className="flex flex-col max-md:gap-4 items-center mt-25 sm:mt-22 md:mt-8 flex-grow"
          variants={fadeUpVariants}
        >
          <motion.div
            className="flex flex-col items-center max-sm:gap-4 text-center w-full md:w-4/5 lg:max-w-2/3"
            variants={fadeUpVariants}
          >
            <span className="text-[10px] font-medium text-primary border border-primary rounded-full px-2 py-1">
              Peak financial service
            </span>
            <span
              className="text-2xl mt-2 w-full md:text-4xl lg:text-[40px] font-medium"
              style={{ fontFamily: "'Whyte Inktrap', serif" }}
            >
              Simplify Your Money. Your Money, Your Freedom.
              <span className="text-primary">One Smart Wallet.</span>
            </span>
            <p className="text-sm mt-2 max-w-md md:max-w-lg">
              Simplify how you save, spend, and plan – all from one intelligent
              platform built for everyday people.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-3 md:mt-8 flex flex-wrap w-full max-w-70 md:max-w-xs gap-4 z-30"
            variants={fadeUpVariants}
          >
            {[
              { src: AppleIcon, label: ["Download on the", "App Store"] },
              { src: Playstore, label: ["Get it on", "Google Play"] },
            ].map((b, i) => (
              <div
                key={i}
                className="flex-1 flex items-center gap-3 bg-foreground py-2 px-3 rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setOpen(true)}
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

        {/* Image mockups */}
        <motion.div
          className="relative z-20 w-full flex items-end justify-center mt-20 sm:mt-2"
          variants={containerVariants}
          initial="hidden"
          animate={bgAnimated ? "visible" : "hidden"}
        >
          {/* Left */}
          <motion.div
            className="relative w-full md:w-1/4 max-w-60 md:max-w-[300px]"
            variants={imageVariants}
          >
            <Image
              src={HeroLeft}
              alt="Left"
              width={500}
              height={800}
              className="w-full block"
              priority
            />
            <motion.div
              className="absolute w-30 md:w-40 left-10 md:left-0 -top-5 -translate-x-1/3 z-30 bg-white/30 backdrop-blur-xs p-2 rounded-sm text-wrap text-[0.5rem] md:text-[0.625rem] lg:text-xs font-medium flex flex-col border border-[#edeefc] justify-center items-center md:gap-2"
              variants={cardVariants}
            >
              <Image
                src={GroupAvatar}
                alt="Group Avatar"
                width={100}
                height={40}
                className="w-full max-w-24 md:max-w-37 lg:max-w-45"
              />
              <span className="text-start">
                Trusted by 5,000+ users take full control of their Earnings
              </span>
            </motion.div>
          </motion.div>

          {/* Center */}
          <motion.div
            className="relative w-full max-w-60 md:w-1/4 md:max-w-[300px] -mx-[20%] md:-mx-[8%] z-30"
            variants={imageVariants}
          >
            <Image
              src={HeroCenter}
              alt="Center"
              width={500}
              height={1000}
              className="w-full h-auto block"
              priority
            />
            <motion.div
              className="absolute max-lg:w-full right-[52%] md:right-[23%] top-1/10 md:top-1/5 translate-x-full z-30 bg-white/50 backdrop-blur p-2 rounded-sm text-primary text-[0.4rem] md:text-[0.625rem] lg:text-xs lg:text-nowrap font-medium flex items-center gap-2"
              variants={cardVariants}
            >
              <Zap className="size-3 md:size-5 fill-primary" />
              <span>Experience lightning-fast transactions, every time.</span>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="relative w-full md:w-1/4 max-w-60 md:max-w-[300px]"
            variants={imageVariants}
          >
            <Image
              src={HeroRight}
              alt="Right"
              width={500}
              height={800}
              className="w-full block"
              priority
            />
            <motion.div
              className="absolute right-[105%] md:right-[45%] max-lg:w-full top-1/4 translate-x-full z-30 bg-primary/60 backdrop-blur p-2 rounded-sm text-white text-[0.4rem] md:text-[0.625rem] lg:text-xs font-medium flex lg:text-nowrap items-center gap-2"
              variants={cardVariants}
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
