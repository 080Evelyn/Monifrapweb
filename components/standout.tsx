"use client";

import { MonifrapMobile } from "@/public/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const Standout = () => {
  const contents = [
    "Designed for African/local banking systems",
    "Works even when traditional banking apps fail",
    "No hidden fees or complex steps",
    "Built for speed, security, and simplicity",
    "Works across multiple banks and wallets",
  ];

  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-10% 0px -35% 0px" });
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { stiffness: 120, damping: 14 },
    },
  };

  return (
    <section
      ref={ref}
      className="bg-primary md:mx-10 lg:mx-25 rounded-lg p-5 mt-10 overflow-visible"
    >
      <div className="w-full flex flex-col-reverse md:flex-row relative items-center">
        <span className="absolute bottom-25 max-md:bottom-25 md:mt-10 lg:mt-0 left-1/2 transform -translate-x-1/2 text-[6rem] md:text-[150px] lg:text-[200px] font-bold text-white/15 pointer-events-none select-none">
          MoniFrap
        </span>

        {/* Text Column */}
        <motion.div
          className="flex w-full md:w-[52%] z-20 p-4 flex-col gap-3 text-white/90 items-start justify-center"
          initial={reduceMotion ? "visible" : "hidden"}
          animate={inView || reduceMotion ? "visible" : "hidden"}
          variants={container}
        >
          <motion.span
            variants={item}
            className="py-1 px-2 border border-white/60 text-xs text-white/60 rounded-full"
          >
            Key Features
          </motion.span>

          <motion.span
            variants={item}
            className="text-3xl font-bold text-white"
          >
            Here’s What Makes Monifrap Stand Out from the Rest
          </motion.span>

          <motion.p variants={item} className="text-sm max-w-xl">
            Monifrap simplifies payments, supports local banks, and puts you in
            full control — all in one secure app
          </motion.p>

          <motion.div
            className="flex flex-col gap-2 w-full"
            variants={container}
          >
            {contents.map((content) => (
              <motion.div
                key={content}
                variants={item}
                className="flex items-center gap-3 w-full"
                style={{
                  transformOrigin: "left center",
                }}
              >
                <div className="p-1.5 bg-white text-primary rounded-full flex items-center justify-center">
                  <ArrowRight className="size-5" />
                </div>
                <p className="text-sm">{content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="w-full md:w-[48%] z-20 flex items-end justify-center md:justify-end"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView || reduceMotion ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4,
          }}
        >
          <Image
            src={MonifrapMobile}
            alt="standout"
            height={1000}
            width={1000}
            className="w-[80%] md:w-full xl:w-[80%] max-md:mx-auto -mb-5"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Standout;
