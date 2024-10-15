"use client";
import Button from "@/components/Button";
import StarBg from "@/assets/stars.png";
import GridLine from "@/assets/grid-lines.png";
import { RefObject, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if(!to.current) return
    const { top , left} = to.current.getBoundingClientRect();
  
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return ()=>{
      window.removeEventListener("mousemove", updateMousePosition);
    }
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const selctionRef = useRef<HTMLElement>(null);
  const motionDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: selctionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mouseX, mouseY] = useRelativeMousePosition(motionDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section className="py-20 md:py-24" ref={selctionRef}>
      <div className="container">
        <motion.div
          ref={motionDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: StarBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: "60",
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${StarBg.src})`,
          }}
        >
          {/* main background */}
          <div
            className=" absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${GridLine.src})`,
            }}
          ></div>

          {/* secondary background for hover */}
          <motion.div
            className=" absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${GridLine.src})`,
            }}
          ></motion.div>

          <div className=" relative">
            <h2 className="text-5xl tracking-tighter font-medium text-center md:text-6xl max-w-sm mx-auto">
              AI-Driven SEO for everyone.
            </h2>

            <p className="text-lg mt-5 text-center text-white/70 px-4 tracking-tight md:text-xl max-w-xs mx-auto">
              Achieve clear, impactful result without the complexity.
            </p>

            <div className="flex justify-center mt-8">
              <Button>Join Whitelist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
