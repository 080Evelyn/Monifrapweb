"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  MutedLogo,
  Twitter,
} from "@/public/assets";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "twitter",
      icon: Twitter,
      label: "Twitter",
      url: "https://www.x.com/monifrap",
    },
    {
      name: "facebook",
      icon: Facebook,
      label: "Facebook",
      url: "#",
    },
    {
      name: "instagram",
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/monifrap",
    },
    {
      name: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      url: "#",
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
              <Link href="tel:+2349033113048">+234 9033113048</Link>
            </div>
            <div className="flex text-white items-center gap-4">
              <div className="p-2 border rounded-full border-white/15">
                <Mail size={20} className="size-5" />
              </div>
              <Link href="mailto:support@monifrap.com.ng">
                support@monifrap.com.ng
              </Link>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-2 md:gap-4 items-center">
            {socialMediaLinks.map((social) => (
              <Link key={social.name} href={social.url} target="_blank">
                <div
                  className="p-2 border rounded-full border-white/15 cursor-pointer hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-white/15 my-5" />
      <div className="flex flex-wrap gap-5 items-center text-muted max-md:justify-center">
        {[
          { name: "Home", path: "#home" },
          { name: "Features", path: "#features" },
          { name: "FAQs", path: "#faqs" },
          { name: "Contact Us", path: "#contact" },
        ].map((link) => (
          <Link key={link.path} href={link.path} className="hover:text-primary">
            {link.name}
          </Link>
        ))}
      </div>
      <hr className="border-background/15 my-5" />
      <div className="flex flex-col flex-wrap gap-2 text-sm text-muted items-center max-md:justify-center">
        <span>
          &copy; {new Date().getFullYear()} Monifrap. All rights reserved.
        </span>
        <span className=" text-muted-foreground">
          Powered by LYNOG TECH NIG
        </span>
      </div>
    </section>
  );
};

export default Footer;
