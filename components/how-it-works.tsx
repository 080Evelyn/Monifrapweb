import { Step1, Step2, Step3 } from "@/public/assets";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="flex flex-col gap-3 w-full px-15 md:px-22 lg:px-35 mt-5">
      <div className="w-full flex flex-col items-center gap-2 text-center">
        <span className="text-[10px] text-center font-medium text-primary border border-primary rounded-full px-2 py-1">
          How it works
        </span>

        <span className="text-3xl md:text-[40px] text-center font-medium">
          Seamless Banking in <span className="text-primary">3 Steps</span>
        </span>
        <p className="text-muted-foreground text-center text-[11px]">
          No more switching between apps. Monifrap makes transactions smooth
          from start to finish.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-8 px-1.5 pt-1.5 pb-4.5 bg-primary/5 rounded-[16px]">
          <div className="flex flex-col items-start gap-2">
            <Image
              src={Step1}
              alt="Create an account"
              width={100}
              height={100}
              className="w-full"
            />
            <span className="inline-block mx-1 px-2 py-0.5 text-primary bg-primary/20 rounded-sm">
              Step 1
            </span>
          </div>

          <div className="flex flex-col gap-1 px-1">
            <span className="font-medium">Create an Account</span>
            <p className="text-xs text-muted-foreground font-light">
              Start by providing basic information such as full name, phone
              number, and email.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-1.5 pt-1.5 pb-4.5 bg-primary/5 rounded-[16px]">
          <div className="flex flex-col items-start gap-2">
            <Image
              src={Step2}
              alt="Create an account"
              width={100}
              height={100}
              className="w-full"
            />
            <span className="inline-block mx-1 px-2 py-0.5 text-primary bg-primary/20 rounded-sm">
              Step 2
            </span>
          </div>

          <div className="flex flex-col gap-1 px-1">
            <span className="font-medium">Link Your Bank Account</span>
            <p className="text-xs text-muted-foreground font-light">
              Get started by entering your Choose your bank, enter your account
              number.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-1.5 pt-1.5 pb-4.5 bg-primary/5 rounded-[16px]">
          <div className="flex flex-col items-start gap-2">
            <Image
              src={Step3}
              alt="Create an account"
              width={100}
              height={100}
              className="w-full"
            />
            <span className="inline-block mx-1 px-2 py-0.5 text-primary bg-primary/20 rounded-sm">
              Step 3
            </span>
          </div>

          <div className="flex flex-col gap-1 px-1">
            <span className="font-medium">Start Seamless Transactions</span>
            <p className="text-xs text-muted-foreground font-light">
              verify with a secure OTP, and you&apos;re all set to start
              transacting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
