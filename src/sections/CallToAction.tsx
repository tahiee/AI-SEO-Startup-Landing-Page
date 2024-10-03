import Button from "@/components/Button";
import StarBg from "@/assets/stars.png";
import GridLine from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${StarBg.src})`,
          }}
        >
          <div
            className=" absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${GridLine.src})`,
            }}
          ></div>
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
        </div>
      </div>
    </section>
  );
};
