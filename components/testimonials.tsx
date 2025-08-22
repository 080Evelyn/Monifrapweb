"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Testimonial1,
  Testimonial2,
  Testimonial3,
  Testimonial4,
} from "@/public/assets";

const users = [
  {
    id: 1,
    name: "Destiny Emmanuel",
    role: "Travel Enthusiast",
    avatar: Testimonial1,
    testimonial:
      "Monifrap made managing my money across two different banks so easy. I get real-time notifications, and I've never missed a payment since. It feels like all my banking is finally in one place.",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Freelance Designer",
    avatar: Testimonial2,
    testimonial:
      "Monifrap gives me peace of mind. I can track every transaction and manage my business payments without stress. It’s a game changer.",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Small Business Owner",
    avatar: Testimonial3,
    testimonial:
      "Switching to Monifrap saved me so much time. I love how everything is in one place and super easy to use.",
  },
  {
    id: 4,
    name: "Aisha Bello",
    role: "Student",
    avatar: Testimonial4,
    testimonial:
      "Managing my student budget is so much easier with Monifrap. The app keeps me in control without any hassle.",
  },
];

const Testimonials = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <section className="border-y py-20 px-5 md:px-12 lg:px-20 border-primary">
      <div className="flex w-full flex-col lg:flex-row items-start lg:items-center">
        <div className="flex flex-col gap-4 items-start w-full lg:w-[52%]">
          <div className="text-[10px] inline-block font-medium text-primary border border-primary rounded-full px-2 py-1">
            Testimonials
          </div>
          <span className="text-3xl w-full md:w-3/5 md:text-[40px] font-medium">
            What our happy Users say
          </span>
          <p className="text-muted-foreground text-sm">
            Hear from real users who trust Monifrap every day. From secure
            payments to simple banking, their experiences say it all.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[48%] px-0 lg:px-10 mt-8 lg:mt-0">
          <div className="flex items-center gap-2">
            <Image
              src={selectedUser.avatar}
              alt={selectedUser.name}
              width={100}
              height={100}
              className="size-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-medium">{selectedUser.name}</span>
              <span className="text-muted-foreground text-sm">
                {selectedUser.role}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {selectedUser.testimonial}
          </p>
        </div>
      </div>

      {/* User list */}
      <div className="w-full flex overflow-x-auto flex-nowrap gap-6 mt-10 md:grid md:grid-cols-4 md:overflow-visible">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`flex items-center gap-2 pb-1 flex-shrink-0 w-[70%] md:w-auto border-b ${
              selectedUser.id === user.id
                ? "border-primary"
                : "border-transparent hover:border-primary"
            } transition-colors`}
          >
            <Image
              src={user.avatar}
              alt={user.name}
              width={100}
              height={100}
              className="size-10 rounded-full"
            />
            <div className="flex flex-col text-left">
              <span className="font-medium">{user.name}</span>
              <span className="text-muted-foreground text-sm">{user.role}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
