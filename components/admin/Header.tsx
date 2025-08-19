"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import AdminNotification from "./Notification";
import {
  AdminAvatar,
  AdminNotificationIcon,
  SearchFilther,
} from "@/public/assets";

const AdminHeader = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const isPending = false;
  const notifications = [""];

  return (
    <>
      <div className="bg-white flex items-center justify-between px-4 py-3">
        <div className="flex relative">
          <div className="p-2 absolute top-1/2 left-1 -translate-y-1/2 bg-secondary text-white rounded-full">
            <Search className="size-4" />
          </div>
          <input
            type="text"
            className="max-w-[50vw] lg:min-w-[37vw] h-10 !border-[0.64px] !border-secondary/10 !rounded-full !px-12 !bg-[#F0F0F0]"
          />
          <Image
            width={100}
            height={100}
            src={SearchFilther}
            alt="filter icon"
            className="h-5 absolute top-1/2 -right-4 -translate-y-1/2"
          />
        </div>

        <div className="flex items-center gap-3">
          <AdminNotification
            isPending={isPending}
            notifications={notifications}
            trigger={
              <div
                className="p-2 rounded-full cursor-pointer border-[0.84px] border-secondary/40"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <Image
                  width={100}
                  height={100}
                  src={AdminNotificationIcon}
                  alt="notification icon"
                  className="size-6"
                />
              </div>
            }
          />

          <Image
            width={100}
            height={100}
            src={AdminAvatar}
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <span className="font-semibold">Admin</span>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
