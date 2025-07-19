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

const NAV_LINKS = ["Home", "About", "Contact"];

const Navbar = () => {
  const underlineClass =
    "absolute left-0 bottom-[-2px] w-1/2 h-[3px] rounded-lg bg-primary transition-all duration-300";
  const hoverEffect = "opacity-0 group-hover:opacity-100";

  const NavLinks = ({ hover = true }: { hover?: boolean }) => (
    <>
      {NAV_LINKS.map((link, i) => (
        <div key={link} className="relative group cursor-pointer">
          {link}
          <span className={cn(underlineClass, i === 0 ? "" : hoverEffect)} />
        </div>
      ))}
    </>
  );

  const DownloadButton = () => (
    <div className="flex items-center gap-2 bg-primary text-xs font-medium text-white py-1.5 ps-2 pe-1 cursor-pointer rounded-full">
      <span>Download App</span>
      <div className="relative bg-white rounded-full p-1.5">
        <Image
          src="/icons/arrow-right.svg"
          alt="arrow-right"
          width={20}
          height={20}
          className="size-[20px]"
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center w-full relative z-10 p-6">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />

        <div className="flex gap-4 text-xs font-medium">
          <NavLinks />
        </div>

        <DownloadButton />
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden justify-between items-center w-full sticky top-0 z-10 p-6">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-30 cursor-pointer"
        />
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-1/2 h-1/3 rounded-lg mt-4 mr-4">
            <SheetHeader>
              <SheetTitle className="sr-only">Nav sidebar</SheetTitle>
            </SheetHeader>
            <div className="flex w-1/2 flex-col px-4 gap-4 text-xs font-medium">
              <NavLinks />
            </div>
            <div className="px-4 w-[165px] mt-2">
              <DownloadButton />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
