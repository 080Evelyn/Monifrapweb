"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { format } from "date-fns";
import { useScrollLock } from "@/hooks/ScrollLock";
import { Skeleton } from "@/components/ui/skeleton";
import { User2 } from "lucide-react";
import Image from "next/image";
import { AdminAvatar } from "@/public/assets";
import { useResponsivePopover } from "@/hooks/ViewportResize";

interface NotificationPopoverProps {
  trigger: React.ReactNode;
  isPending: boolean;
  notifications: string[];
}

const AdminNotification = ({
  trigger,
  notifications,
  isPending,
}: NotificationPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  useScrollLock(isOpen);
  useResponsivePopover(isOpen, setIsOpen);
  const messages = [
    {
      id: 1,
      image: AdminAvatar,
      name: "John Doe",
      message: "Hello, how are you?",
      date: "Jun 12th 2025 14:00:00",
    },
    {
      id: 2,
      image: AdminAvatar,
      title: "Gabriel purchased Airtime",
      date: "Jun 12th 2025 14:00:00",
    },
    {
      id: 3,
      name: "John Doe",
      message: "Hello, how are you? Did you see message 2 or you didnt",
      date: "Jun 12th 2025 14:00:00",
    },
    {
      id: 4,
      image: AdminAvatar,
      title: "Gabriel purchased Electricity",
      date: "Jun 12th 2025 14:00:00",
    },
  ];

  return (
    <div>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        {isOpen && (
          <div
            className="fixed inset-y-0 mt-27.5 lg:mt-16 right-0 w-full lg:w-[calc(100%-var(--sidebar-width))] bg-black/30 backdrop-blur-[2px] md:z-50 z-49"
            onClick={() => setIsOpen(false)}
          />
        )}

        <PopoverContent
          sideOffset={5}
          className="z-55 max-lg:h-[80vh] h-[85vh] md:pb-4 md:w-[340px] font-inter md:mr-4 lg:mt-2 p-0 border border-[#F1F1F1] rounded-lg bg-white"
          onOpenAutoFocus={(e: Event) => e.preventDefault()}
        >
          <div className="flex justify-between items-center py-2 px-4">
            <span className="text-sm font-semibold text-secondary">
              Notifications(22)
            </span>
            <button className="text-[10px] cursor-pointer font-light text-muted-foreground">
              Mark as read
            </button>
          </div>

          <div className="inline-flex mx-5 relative items-baseline gap-1 pb-1 text-sm font-semibold cursor-pointer underline-secondary">
            <span>All</span>
            <span className="bg-secondary/40 px-0.5 py-0.25 rounded-[3px] font-semibold text-[8px] ">
              22
            </span>
          </div>

          <ScrollArea className="h-[80vh] md:h-[65vh] lg:h-[75vh] px-3">
            <div className="flex flex-col gap-4.5 tracking-[-0.15px]">
              {isPending ? (
                <div className="flex flex-col gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
              ) : (
                <>
                  <div>
                    {messages.map((message) => (
                      <div
                        className="flex items-start gap-2 border-t-1 border-[#D9D9D9] py-2"
                        key={message.id}
                      >
                        {message.image ? (
                          <Image
                            width={100}
                            height={100}
                            src={message.image}
                            className="size-9 rounded-full"
                            alt="avatar"
                          />
                        ) : (
                          <div className="p-1 rounded-full bg-[#28003E]">
                            <User2 className="fill-[#B71FFF]/40 size-7" />
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-xs">
                            {message?.name || message?.title}
                          </span>
                          <span className="text-[10px] text-[#8C8C8C]">
                            {message.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {notifications.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center mt-6">
                      No notifications found.
                    </p>
                  )}
                </>
              )}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AdminNotification;
