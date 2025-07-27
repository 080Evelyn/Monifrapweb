"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const blocks = [
  {
    id: 1,
    icon: "/images/rating-avatar.svg",
    text: "Thousands join us for a reason. Join us and discover the benefits.",
    number: "99k+",
  },
  {
    id: 2,
    icon: "/icons/star.svg",
    text: "Positive ratings by users around the world that use Monifrap.",
    number: "4.9",
  },
  {
    id: 3,
    text: "Thousands join us for a reason. Join us and discover the benefits.",
    number: "99k+",
  },
];

export default function Rating() {
  return (
    <section className="w-full px-2 py-10 lg:py-10">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between gap-8">
        {blocks.map((block, index) => (
          <div
            key={block.id}
            className="flex flex-1 items-center gap-8 min-w-0"
          >
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                {block.icon && (
                  <div className="flex-shrink-0">
                    <Image
                      src={block.icon}
                      alt="icon"
                      width={36}
                      height={36}
                      className="w-full"
                      priority={index < 2}
                    />
                  </div>
                )}
                <div
                  className="font-medium text-2xl"
                  style={{ fontFamily: "'Satoshi Variable', sans-serif" }}
                >
                  {block.number}
                </div>
              </div>
              <p className="text-muted-foreground text-wrap">{block.text}</p>{" "}
            </div>

            {/* Divider */}
            {index < blocks.length - 1 && (
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {blocks.map((block) => (
            <SwiperSlide key={block.id}>
              <div className="flex flex-col px-4 mb-6">
                <div className="flex items-center gap-3">
                  {block.icon ? (
                    <Image
                      src={block?.icon}
                      alt="icon"
                      width={36}
                      height={36}
                      className="w-auto h-auto"
                    />
                  ) : null}
                  <div
                    className="font-medium text-2xl"
                    style={{ fontFamily: "'Satoshi Variable', sans-serif" }}
                  >
                    {block.number}
                  </div>
                </div>
                <p className="text-muted-foreground">{block.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
