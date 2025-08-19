"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  MutedLogo,
  Twitter,
} from "@/public/assets";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "twitter",
      icon: Twitter,
      label: "Twitter",
    },
    {
      name: "facebook",
      icon: Facebook,
      label: "Facebook",
    },
    {
      name: "instagram",
      icon: Instagram,
      label: "Instagram",
    },
    {
      name: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <section className="bg-[#191818] px-5 md:px-14 lg:px-20 py-15">
      <div className="grid grid-cols-5 md:grid-cols-5 gap-2">
        <div className="col-span-2 md:col-span-3">
          <Image
            src={MutedLogo}
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
              <span>Ago Palace Way, Lagos</span>
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
            {socialMediaLinks.map((social) => (
              <div
                key={social.name}
                className="p-2 border rounded-full border-white/15"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="size-6.5"
                />
              </div>
            ))}
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
