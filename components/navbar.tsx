"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ComingSoon from "./coming-soon";
import { ArrowRight, logo } from "@/public/assets";

const NAV_LINKS = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#features" },
  { label: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hash, setHash] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {NAV_LINKS.map((link) => {
        const isActive = (hash || "#home") === link.path;

        return (
          <div key={link.label} className="relative group cursor-pointer">
            <Link
              href={link.path}
              onClick={() => {
                setOpen(false);
                setHash(link.path);
              }}
            >
              {link.label}
              <span
                className={cn(
                  "hidden absolute left-0 bottom-[-2px] h-[3px] rounded-lg bg-primary transition-all duration-300 md:block",
                  isActive ? "w-1/2 opacity-100" : "w-0 group-hover:w-1/2"
                )}
              />
            </Link>
          </div>
        );
      })}
    </>
  );

  const DownloadButton = () => (
    <div className="inline-block">
      <div
        className="flex whitespace-break-spaces items-center gap-2 bg-primary text-xs font-medium text-white py-1.5 ps-2 pe-1 cursor-pointer rounded-full"
        onClick={() => setDialogOpen(true)}
      >
        <span>Download App</span>
        <div className="relative bg-white rounded-full p-1.5">
          <Image
            src={ArrowRight}
            alt="arrow-right"
            width={20}
            height={20}
            className="size-[20px]"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div id="home">
      {/* Desktop */}
      <div
        className={cn(
          "hidden lg:flex justify-between items-center w-full z-50 p-6 transition-colors duration-300",
          isScrolled
            ? "fixed w-full -mx-4 top-0 backdrop-blur-md shadow-sm px-10 py-2"
            : "relative"
        )}
      >
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="w-25 cursor-pointer"
        />

        <div className="flex gap-4 text-xs font-medium">
          <NavLinks />
        </div>

        <DownloadButton />
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "flex lg:hidden justify-between items-center fixed top-0  backdrop-blur-md md:-mx-2 py-2 px-6 md:px-8 w-full z-50 transition-colors duration-300",
          isScrolled ? "shadow-sm mt-0" : "shadow-none pt-6"
        )}
      >
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="w-30 cursor-pointer"
        />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className="size-8" />
          </SheetTrigger>
          <SheetContent className="w-1/2 h-55 sm:h-[35dvh] rounded-lg mt-4 mr-4">
            <SheetHeader>
              <SheetTitle className="sr-only">Nav sidebar</SheetTitle>
            </SheetHeader>
            <div className="flex w-1/2 flex-col px-4 gap-4 text-xs font-medium">
              <NavLinks />
            </div>
            <div className="px-4 mt-4">
              <DownloadButton />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <ComingSoon open={dialogOpen} setOpen={setDialogOpen} />
    </div>
  );
};

export default Navbar;
