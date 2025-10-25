"use client";

import { Feature1, Feature2, Feature3, Feature4 } from "@/public/";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

const Features = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-18% 0px -18% 0px", once: true });
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { stiffness: 120, damping: 16 } },
  };

  function FeatureCard({
    children,
    delay,
    reduceMotion,
  }: {
    children: ReactNode;
    delay: number;
    reduceMotion: boolean;
  }) {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { amount: 0.5 });
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={cardInView || reduceMotion ? { opacity: 1, y: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 16,
          duration: 0.7,
          delay,
        }}
        className="p-4"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <section
      id="features"
      ref={ref}
      className="md:mx-10 lg:mx-25 rounded-lg p-5 pt-20 text-center overflow-visible"
    >
      <motion.div
        initial={reduceMotion ? "visible" : "hidden"}
        animate={inView || reduceMotion ? "visible" : "hidden"}
        variants={container}
        className="flex flex-col items-center justify-center gap-4"
      >
        <motion.div
          variants={item}
          className="text-[10px] font-medium text-primary border border-primary rounded-full px-2 py-1"
        >
          Features
        </motion.div>
        <motion.span
          variants={item}
          className="text-3xl md:text-[40px] font-medium md:px-5"
        >
          Explore the Features That Make Monifrap the Smartest Way to Bank
        </motion.span>
      </motion.div>

      <motion.div
        initial={reduceMotion ? "visible" : "hidden"}
        animate={inView || reduceMotion ? "visible" : "hidden"}
        variants={container}
        className="grid gap-6 mt-4"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col text-start p-1 feature-border-gradient">
            <Image
              src={Feature1}
              alt="feature"
              width={800}
              height={800}
              className="w-full"
            />
            <FeatureCard delay={0.18} reduceMotion={!!reduceMotion}>
              <h3 className="text-[1.25rem] font-medium text-[#191f53]/85">
                Instant Transfers
              </h3>
              <p className="text-xs text-[#101e72]/60">
                Send and receive money instantly between linked accounts. No
                delays, just fast and reliable real-time transfers
              </p>
            </FeatureCard>
          </div>
          <div className="flex flex-col text-start p-1 feature-border-gradient">
            <Image
              src={Feature2}
              alt="feature"
              width={300}
              height={300}
              className="w-full h-full"
            />
            <FeatureCard delay={0.28} reduceMotion={!!reduceMotion}>
              <h3 className="text-[1.25rem] font-medium text-[#191f53]/85">
                Secure Bank Integration
              </h3>
              <p className="text-xs text-[#101e72]/60">
                Your data is protected with bank-level encryption and security.
                Log in with biometrics for safe, seamless access anytime.
              </p>
            </FeatureCard>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-9">
          <div className="flex flex-col md:col-span-5 text-start p-1 feature-border-gradient">
            <Image
              src={Feature3}
              alt="feature"
              width={800}
              height={800}
              className="w-full"
            />
            <FeatureCard delay={0.38} reduceMotion={!!reduceMotion}>
              <h3 className="text-[1.25rem] font-medium text-[#191f53]/85">
                Connect Multiple Banks
              </h3>
              <p className="text-xs text-[#101e72]/60">
                Easily connect your local bank account in just a few taps. Fast,
                secure, and designed for seamless integration.
              </p>
            </FeatureCard>
          </div>
          <div className="flex flex-col md:col-span-4 text-start p-1 feature-border-gradient">
            <Image
              src={Feature4}
              alt="feature"
              width={800}
              height={800}
              className="w-full"
            />
            <FeatureCard delay={0.48} reduceMotion={!!reduceMotion}>
              <h3 className="text-[1.25rem] font-medium text-[#191f53]/85">
                Get Streamline Accountability
              </h3>
              <p className="text-xs text-[#101e72]/60">
                View all your linked bank accounts in one place.Track every
                transaction with real-time notifications and a unified history.
              </p>
            </FeatureCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
