"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import ProductImg from "@/assets/product-image.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
// import Image from "next/image";

const tabs = [
  {
    icon: "/lottie/guage.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    // backgroundSizeX: 135,
    backgroundSizeX: 150,
    height: 20, // Individual height
    width: 20, // Individual width
    gap: 10,
  },
  {
    icon: "/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    // backgroundSizeX: 150,
    backgroundSizeX: 135,
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
const FeatureTabs = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();

    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleHoverEvent = () => {
    if (dotLottieRef.current == null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };
  return (
    <>
      <div
        ref={tabRef}
        onMouseEnter={handleHoverEvent}
        onClick={props.onClick}
        className="border border-white/15 flex items-center p-2.5 rounded-xl gap-2.5 lg:flex-1 relative"
      >
        {props.selected && (
          <motion.div
            style={{
              maskImage,
            }}
            className=" absolute inset-0 border -m-px border-[#A369FF] rounded-xl"
          ></motion.div>
        )}

        <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
          <DotLottiePlayer
            autoplay
            ref={dotLottieRef}
            src={props.icon}
            className=""
            style={{
              height: props.height,
              width: props.width,
            }}
          />
        </div>
        <div className="font-medium">{props.title}</div>
        {props.isNew && (
          <div className="text-sm rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
            New
          </div>
        )}
      </div>
    </>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTabs = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );

    animate(
      backgroundPositionY,
      [backgroundPositionX.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  };

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
          {tabs.map((tab, TabIndex) => (
            <FeatureTabs
              key={tab.title}
              {...tab}
              selected={selectedTab === TabIndex}
              onClick={() => handleSelectTabs(TabIndex)}
            />
          ))}
        </div>
        <div className="border border-white/20 mt-3 rounded-xl p-2.5">
          <motion.div
            className=" aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${ProductImg.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
