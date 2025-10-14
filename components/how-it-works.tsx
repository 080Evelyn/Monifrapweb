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
    animation: {
      initial: { y: 80, opacity: 0, scale: 1 },
      animate: { y: 0, opacity: 1, scale: 1 },
    }, // bottom to top
  },
  {
    id: 2,
    img: Step2,
    step: "Step 2",
    title: "Link Your Bank Account",
    desc: "Get started by choosing your bank and entering your account number.",
    animation: {
      initial: { scale: 0.7, opacity: 0, y: 0 },
      animate: { scale: 1, opacity: 1, y: 0 },
    }, // zoom in
  },
  {
    id: 3,
    img: Step3,
    step: "Step 3",
    title: "Start Seamless Transactions",
    desc: "Verify with a secure OTP, and you’re all set to start transacting.",
    animation: {
      initial: { y: -80, opacity: 0, scale: 1 },
      animate: { y: 0, opacity: 1, scale: 1 },
    }, // top to bottom
  },
];

const HowItWorks = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { margin: "-20% 0px -20% 0px" });

  return (
    <section className="flex flex-col gap-3 w-full px-15 md:px-22 lg:px-35 mt-5 overflow-hidden">
      {/* Header */}
      <div
        ref={headerRef}
        className="w-full flex flex-col items-center gap-2 text-center"
      >
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
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
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-[40px] text-center font-medium"
        >
          Seamless Banking in <span className="text-primary">3 Steps</span>
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-center text-[11px]"
        >
          No more switching between apps. Monifrap makes transactions smooth
          from start to finish.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 mt-6">
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
};

import type { StaticImageData } from "next/image";

type StepType = {
  id: number;
  img: StaticImageData;
  step: string;
  title: string;
  desc: string;
  animation: {
    initial: Record<string, number>;
    animate: Record<string, number>;
  };
};

function StepCard({ step }: { step: StepType }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, {
    margin: "-20% 0px -20% 0px",
  });

  return (
    <div
      ref={cardRef}
      className="flex flex-col gap-8 px-1.5 pt-1.5 pb-4.5 bg-primary/5 rounded-[16px]"
    >
      <motion.div
        initial={step.animation.initial}
        animate={cardInView ? step.animation.animate : {}}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
          duration: 0.8,
          delay: 0.2,
        }}
        className="flex flex-col items-start gap-2"
      >
        <Image
          src={step.img}
          alt={step.title}
          width={800}
          height={800}
          className="w-full h-auto"
        />
        <span className="inline-block mx-1 px-2 py-0.5 text-primary bg-primary/20 rounded-sm">
          {step.step}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={cardInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.6,
          duration: 0.6,
        }}
        className="flex flex-col gap-1 px-1"
      >
        <span className="font-medium">{step.title}</span>
        <p className="text-xs text-muted-foreground font-light">{step.desc}</p>
      </motion.div>
    </div>
  );
}

export default HowItWorks;
