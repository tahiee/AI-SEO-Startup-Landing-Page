"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import ProductImg from "@/assets/product-image.png";
// import Image from "next/image";

const tabs = [
  {
    icon: "/lottie/guage.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
    height: 20, // Individual height
    width: 20, // Individual width
    gap: 10,
  },
  {
    icon: "/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
    height: 50, // Individual height
    width: 50, // Individual width
  },
  {
    icon: "/lottie/star.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
    height: 20, // Individual height
    width: 20, // Individual width
    gap: 10,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:pt-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-white/70 text-center mt-5">
          From small startups to large enterprises, our AI-Driven tool has
          revolutionized the way business approch SEO.
        </p>
        <div className=" mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex items-center p-2.5 rounded-xl gap-2.5 lg:flex-1"
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer
                  src={tab.icon}
                  loop
                  autoplay
                  className=""
                  style={{
                    height: tab.height,
                    width: tab.width,
                  }}
                />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-sm rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                  New
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 mt-3 rounded-xl p-2.5">
          <div
            className=" aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${ProductImg.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
