"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { users } from "@/constants";

const Testimonials = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const rolesRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
  const rolesInView = useInView(rolesRef, { once: true, margin: "-100px" });

  return (
    <section className="border-y py-20 px-5 md:px-12 lg:px-20 border-primary">
      <div className="flex w-full flex-col lg:flex-row items-start lg:items-center">
        {/* LEFT SIDE */}
        <motion.div
          ref={leftRef}
          initial={{ x: -100, opacity: 0 }}
          animate={leftInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 items-start w-full lg:w-[52%]"
        >
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
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          ref={rightRef}
          initial={{ x: 100, opacity: 0 }}
          animate={rightInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-4 w-full lg:w-[48%] px-0 lg:px-10 mt-8 lg:mt-0"
        >
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
        </motion.div>
      </div>

      {/* USER LIST */}
      <motion.div
        ref={rolesRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={rolesInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="w-full flex overflow-x-auto flex-nowrap gap-6 mt-10 md:grid md:grid-cols-4 md:overflow-visible"
      >
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
      </motion.div>
    </section>
  );
};

export default Testimonials;
