import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl tracking-tight text-center font-medium md:text-6xl">
          Beyond Expectation.
        </h2>
        <p className="text-white/70 mt-5 text-center tracking-tight text-lg md:text-xl max-w-sm mx-auto">
          Our revolutionary AI SEO has been transformed our Clients strategies.
        </p>
        <div className="overflow-hidden mt-5 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-5">
            {testimonials.map((test) => (
              <div
                key={test.name}
                className="border border-white/15 p-5 rounded-xl mt-5 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs flex-none md:p-10 md:max-w-md"
              >
                <div className="text-lg tracking-tight md:text-1xl">
                  {test.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className=" relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,255)] after:mix-blend-soft-light before:absolute before:border before:border-white/30 before:inset-0 before:rounded-lg before:z-10">
                    <Image
                      src={test.avatarImg}
                      alt={test.name}
                      className="h-11 w-11 rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <div>{test.name}</div>
                    <div className="text-white/50 text-sm">{test.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
