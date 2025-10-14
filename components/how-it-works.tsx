"use client";

import { Step1, Step2, Step3 } from "@/public/assets";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const steps = [
  {
    id: 1,
    img: Step1,
    step: "Step 1",
    title: "Create an Account",
    desc: "Start by providing basic information such as full name, phone number, and email.",
  },
  {
    id: 2,
    img: Step2,
    step: "Step 2",
    title: "Link Your Bank Account",
    desc: "Get started by choosing your bank and entering your account number.",
  },
  {
    id: 3,
    img: Step3,
    step: "Step 3",
    title: "Start Seamless Transactions",
    desc: "Verify with a secure OTP, and you’re all set to start transacting.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-30% 0px" }); // triggers when 30vh in view

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-3 w-full px-15 md:px-22 lg:px-35 mt-5 overflow-hidden"
    >
      {/* Section Header */}
      <div className="w-full flex flex-col items-center gap-2 text-center">
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
            duration: 0.5,
          }}
          className="text-[10px] text-center font-medium text-primary border border-primary rounded-full px-2 py-1"
        >
          How it works
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-[40px] text-center font-medium"
        >
          Seamless Banking in <span className="text-primary">3 Steps</span>
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-center text-[11px]"
        >
          No more switching between apps. Monifrap makes transactions smooth
          from start to finish.
        </motion.p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 mt-6">
        {steps.map((step, i) => {
          // control animation style for each card
          const variants = [
            { initial: { y: 80, opacity: 0 }, animate: { y: 0, opacity: 1 } }, // bottom to up
            {
              initial: { scale: 0.7, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
            }, // zoom in
            { initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1 } }, // top to down
          ][i];

          return (
            <div
              key={step.id}
              className="flex flex-col gap-8 px-1.5 pt-1.5 pb-4.5 bg-primary/5 rounded-[16px]"
            >
              <motion.div
                initial={variants.initial}
                animate={isInView ? variants.animate : {}}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  duration: 0.8,
                  delay: 0.8 + i * 0.2, // starts after header finishes
                }}
                className="flex flex-col items-start gap-2"
              >
                <Image
                  src={step.img}
                  alt={step.title}
                  width={800}
                  height={800}
                  className="w-full"
                />
                <span className="inline-block mx-1 px-2 py-0.5 text-primary bg-primary/20 rounded-sm">
                  {step.step}
                </span>
              </motion.div>

              {/* Text fade after image */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 1.2 + i * 0.2,
                  duration: 0.6,
                }}
                className="flex flex-col gap-1 px-1"
              >
                <span className="font-medium">{step.title}</span>
                <p className="text-xs text-muted-foreground font-light">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
