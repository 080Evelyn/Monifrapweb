"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AdminLogo, logo } from "@/public/assets";
import {
  Aperture,
  Bell,
  ChartNoAxesCombined,
  LogOut,
  Menu,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideNavbar = () => {
  const pathname = usePathname();
  const handleLogout = () => {
    console.log("log out");
  };
  const [isOpen, setIsOpen] = useState(false);

  const sidebarContent = [
    {
      path: "/admin/dashboard",
      name: "Overview",
      icon: <ChartNoAxesCombined className="size-4.5" />,
    },
    {
      path: "/admin/transactions",
      name: "Transaction",
      icon: <Bell className="size-4.5" />,
    },
    {
      path: "/admin/accounts",
      name: "Linked Account",
      icon: <Aperture className="size-4.5" />,
    },
    {
      path: "/admin/users",
      name: "Users Management",
      icon: <UsersRound className="size-4.5" />,
    },
  ];

  const SidebarContent = ({ onClick }: { onClick?: () => void }) => (
    <div className="flex flex-col mt-5 gap-12">
      <div className="flex justify-center">
        <Link href="/admin/dashboard" onClick={onClick}>
          <div className="flex items-center">
            <Image
              width={100}
              height={100}
              src={AdminLogo}
              alt="logo"
              className="w-full h-11 object-contain"
            />
          </div>
        </Link>
      </div>

      <div className="flex gap-2 flex-col justify-center w-full">
        {sidebarContent.map((sidebarItem) => {
          const isActive = pathname === sidebarItem.path;

          return (
            <Link
              href={sidebarItem.path}
              key={sidebarItem.path}
              onClick={onClick}
            >
              <div
                className={`flex items-center gap-2 mx-3 px-1.5 py-2.5 rounded-[4px] transition-all duration-300 text-xs ${
                  isActive
                    ? "bg-white text-secondary"
                    : "text-white hover:bg-white hover:text-secondary"
                }`}
              >
                <div>{sidebarItem.icon}</div>
                <span>{sidebarItem.name}</span>
              </div>
            </Link>
          );
        })}

        <div
          className="flex gap-2 flex-col justify-center w-ful cursor-pointer"
          onClick={handleLogout}
        >
          <div className="flex items-center gap-2 mx-3 px-1.5 py-2.5 rounded-[4px] transition-all duration-300 text-xs text-white hover:bg-white hover:text-secondary">
            <LogOut className="size-4.5" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <aside className="bg-secondary hidden lg:block h-screen w-[var(--sidebar-width)]">
        <SidebarContent />
      </aside>

      {/* mobile view */}
      <div className="lg:hidden fixed top-0 h-12.5 backdrop-blur-lg shadow-sm w-full z-50">
        <div className="flex justify-between items-center h-full px-4">
          <Link href="/admin/dashboard">
            <div className="flex items-center">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="logo"
                className="w-full h-8.9 object-contain"
              />
            </div>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-secondary">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="lg:hidden bg-secondary h-screen w-[var(--sidebar-width)]"
            >
              <SheetTitle className="sr-only">Side navbar</SheetTitle>
              <SidebarContent onClick={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
