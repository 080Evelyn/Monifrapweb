"use client";

import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-[#191818] px-5 md:px-14 lg:px-20 py-15">
      <div className="grid grid-cols-5 md:grid-cols-5 gap-2">
        <div className="col-span-2 md:col-span-3">
          <Image
            src="/icons/white-logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-full max-w-[33vw] md:max-w-[18.75rem]"
          />
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col gap-2 md:gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex  text-white items-center gap-4">
              <div className="p-2 border rounded-full border-white/15">
                <MapPin size={20} className="size-5" />
              </div>
              <span>Ajar, Lagos</span>
            </div>
            <div className="flex text-white items-center gap-4">
              <div className="p-2 border rounded-full border-white/15">
                <Phone size={20} className="size-5" />
              </div>
              <span>+234 9012340567</span>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-2 md:gap-4 items-center">
            <span className="text-white hidden md:block">Social Media</span>
            <div className="p-1 md:p-2 border rounded-full border-white/15">
              <Image
                src="/icons/twitter.svg"
                alt="twitter"
                width={20}
                height={20}
                className="size-6.5"
              />
            </div>
            <div className="p-2 border rounded-full border-white/15">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
                className="size-6.5"
              />
            </div>
            <div className="p-2 border rounded-full border-white/15">
              <Image
                src="/icons/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
                className="size-6.5"
              />
            </div>
            <div className="p-2 border rounded-full border-white/15">
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={20}
                height={20}
                className="size-6.5"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-white/15 my-5" />
      <div className="flex flex-wrap gap-5 items-center text-white max-md:justify-center">
        <Link href="#home">Home</Link>
        <Link href="#features">Features</Link>
        <Link href="#faqs">FAQs</Link>
        <Link href="#contact">Contact Us</Link>
      </div>
    </section>
  );
};

export default Footer;
